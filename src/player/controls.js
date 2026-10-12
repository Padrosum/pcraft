import * as THREE from 'three';
import { B, BLOCKS, HEIGHT } from '../constants.js';

const HALF = 0.3; // half-width of player AABB
const PLAYER_HEIGHT = 1.8;
const EYE = 1.62;
const SNEAK_EYE = 1.38;
const WALK_SPEED = 4.3;
const SPRINT_SPEED = 6.1;
const SNEAK_SPEED = 1.7;
const SWIM_SPEED = 2.6;
const FLY_SPEED = 9.5;
const FLY_VERTICAL = 6.5;
const GRAVITY = -24;
const WATER_GRAVITY = -5;
const JUMP_VEL = 8.2;
const MAX_SINK = -3.2;
const DOUBLE_TAP_MS = 300;

export class PlayerController {
  constructor(camera, world) {
    this.camera = camera;
    this.world = world;
    this.pos = new THREE.Vector3(0.5, HEIGHT - 8, 0.5); // feet position
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.onGround = false;
    this.inWater = false;
    this.flying = false;
    this.sprinting = false;
    this.sneaking = false;
    this.keys = new Set();
    this.enabled = false;
    this.onJump = null;
    this.onSplash = null;
    this.onStep = null; // (groundBlockId) on each footstep
    this.onSwim = null;
    this.onLand = null;
    this.onFly = null; // (flying) when flight toggles
    this._wasInWater = false;
    this._wasOnGround = false;
    this._fallSpeed = 0;
    this._strideDist = 0;
    this._eye = EYE;
    this._lastSpace = -Infinity;

    document.addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      if (e.code === 'Space') e.preventDefault(); // no page scrolling
      if (!e.repeat) {
        if (e.code === 'Space') {
          // double-tap space toggles flight, creative style
          const now = performance.now();
          if (this._lastSpace > 0 && now - this._lastSpace < DOUBLE_TAP_MS) {
            this.setFlying(!this.flying);
            this._lastSpace = -Infinity;
          } else {
            this._lastSpace = now;
          }
        } else if (e.code === 'KeyF') {
          this.setFlying(!this.flying);
        }
      }
      this.keys.add(e.code);
    });
    document.addEventListener('keyup', (e) => this.keys.delete(e.code));
    // don't keep running when the window loses focus mid-keypress
    window.addEventListener('blur', () => this.keys.clear());
    document.addEventListener('mousemove', (e) => {
      if (!this.enabled || document.pointerLockElement === null) return;
      this.yaw -= e.movementX * 0.0024;
      this.pitch -= e.movementY * 0.0024;
      this.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, this.pitch));
    });
  }

  setPosition(x, y, z) {
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
  }

  setFlying(on) {
    if (this.flying === on) return;
    this.flying = on;
    this.vel.y = 0;
    this.onFly?.(on);
  }

  blockSolidAt(x, y, z) {
    const id = this.world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z));
    return BLOCKS[id].solid;
  }

  collides(px, py, pz) {
    for (const dx of [-HALF, HALF]) {
      for (const dz of [-HALF, HALF]) {
        for (let dy = 0; dy <= PLAYER_HEIGHT; dy += 0.9) {
          const y = Math.min(dy, PLAYER_HEIGHT - 0.001);
          if (this.blockSolidAt(px + dx, py + y, pz + dz)) return true;
        }
      }
    }
    return false;
  }

  // any solid block under the player AABB at (px, pz)?
  supportsAt(px, pz) {
    const y = Math.floor(this.pos.y - 0.05);
    for (const dx of [-HALF, HALF]) {
      for (const dz of [-HALF, HALF]) {
        const id = this.world.getBlock(Math.floor(px + dx), y, Math.floor(pz + dz));
        if (BLOCKS[id].solid) return true;
      }
    }
    return false;
  }

  bodyInWater() {
    return this.world.getBlock(
      Math.floor(this.pos.x), Math.floor(this.pos.y + 0.6), Math.floor(this.pos.z)
    ) === B.WATER;
  }

  groundBlock() {
    return this.world.getBlock(
      Math.floor(this.pos.x), Math.floor(this.pos.y - 0.5), Math.floor(this.pos.z)
    );
  }

  headInWater() {
    return this.world.getBlock(
      Math.floor(this.pos.x), Math.floor(this.pos.y + this._eye), Math.floor(this.pos.z)
    ) === B.WATER;
  }

  update(dt) {
    this.inWater = this.bodyInWater();
    if (this.inWater && !this._wasInWater) this.onSplash?.(this.vel.y);
    this._wasInWater = this.inWater;

    // input direction in world space
    let fwd = 0, strafe = 0;
    if (this.enabled) {
      if (this.keys.has('KeyW')) fwd += 1;
      if (this.keys.has('KeyS')) fwd -= 1;
      if (this.keys.has('KeyD')) strafe += 1;
      if (this.keys.has('KeyA')) strafe -= 1;
    }
    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    let dx = (-sin * fwd + cos * strafe);
    let dz = (-cos * fwd - sin * strafe);
    const len = Math.hypot(dx, dz);
    if (len > 0) { dx /= len; dz /= len; }
    const moving = len > 0;

    const shift = this.enabled && (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'));
    const ctrl = this.enabled && (this.keys.has('ControlLeft') || this.keys.has('ControlRight'));
    this.sneaking = ctrl && !this.flying;
    this.sprinting = shift && moving && !this.inWater && !this.flying && !this.sneaking;

    const speed = this.flying ? FLY_SPEED
      : this.inWater ? SWIM_SPEED
      : this.sneaking ? SNEAK_SPEED
      : this.sprinting ? SPRINT_SPEED
      : WALK_SPEED;
    this.vel.x = dx * speed;
    this.vel.z = dz * speed;

    if (this.flying) {
      // Space up, Shift down; no gravity
      let vy = 0;
      if (this.enabled && this.keys.has('Space')) vy += 1;
      if (shift) vy -= 1;
      this.vel.y = vy * FLY_VERTICAL;
    } else if (this.inWater) {
      this.vel.y += WATER_GRAVITY * dt;
      if (this.vel.y < MAX_SINK) this.vel.y = MAX_SINK;
      if (this.enabled && this.keys.has('Space')) this.vel.y = 3.2;
    } else {
      this.vel.y += GRAVITY * dt;
      if (this.enabled && this.keys.has('Space') && this.onGround) {
        this.vel.y = JUMP_VEL;
        this.onGround = false;
        this.onJump?.();
      }
    }

    // axis-separated movement with voxel collision
    const move = (axis, amount) => {
      if (amount === 0) return;
      const p = this.pos.clone();
      p[axis] += amount;
      if ((axis === 'x' || axis === 'z') && this.sneaking && this._wasOnGround &&
          !this.supportsAt(p.x, p.z)) {
        return; // sneaking keeps you from walking off a ledge
      }
      if (!this.collides(p.x, p.y, p.z)) {
        this.pos[axis] = p[axis];
      } else {
        if (axis === 'y') {
          if (amount < 0) this.onGround = true;
          this.vel.y = 0;
        }
      }
    };

    // substep to avoid tunnelling at low fps
    const steps = Math.max(1, Math.ceil((Math.abs(this.vel.y) * dt) / 0.5));
    this.onGround = false;
    this._fallSpeed = this.vel.y;
    const beforeX = this.pos.x;
    const beforeZ = this.pos.z;
    for (let i = 0; i < steps; i++) {
      const sdt = dt / steps;
      move('x', this.vel.x * sdt);
      move('z', this.vel.z * sdt);
      move('y', this.vel.y * sdt);
    }

    // stride tracking for footstep / swim-stroke sounds
    const moved = Math.hypot(this.pos.x - beforeX, this.pos.z - beforeZ);
    if (this.inWater) {
      this._strideDist += moved;
      if (this._strideDist > 1.8) {
        this._strideDist = 0;
        this.onSwim?.();
      }
    } else if (this.onGround) {
      if (!this._wasOnGround && this._fallSpeed < -8) this.onLand?.();
      this._strideDist += moved;
      if (this._strideDist > 2.1) {
        this._strideDist = 0;
        this.onStep?.(this.groundBlock());
      }
    } else {
      this._strideDist = 0.9; // first step lands quickly after touchdown
    }
    this._wasOnGround = this.onGround;

    // safety: fell out of the world
    if (this.pos.y < -10) this.pos.y = HEIGHT;

    // smooth eye height (sneaking) and sprint fov kick
    const targetEye = this.sneaking ? SNEAK_EYE : EYE;
    this._eye += (targetEye - this._eye) * Math.min(1, dt * 14);
    this.camera.position.set(this.pos.x, this.pos.y + this._eye, this.pos.z);
    this.camera.rotation.set(0, 0, 0);
    this.camera.rotateY(this.yaw);
    this.camera.rotateX(this.pitch);

    const targetFov = this.sprinting ? 80 : 75;
    if (Math.abs(this.camera.fov - targetFov) > 0.01) {
      this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 10);
      this.camera.updateProjectionMatrix();
    }
  }

  lookDir() {
    const v = new THREE.Vector3(0, 0, -1);
    v.applyQuaternion(this.camera.quaternion);
    return v;
  }

  // AABB of the player, used to block placing blocks inside yourself
  intersectsBlock(bx, by, bz) {
    return (
      bx + 1 > this.pos.x - HALF && bx < this.pos.x + HALF &&
      bz + 1 > this.pos.z - HALF && bz < this.pos.z + HALF &&
      by + 1 > this.pos.y && by < this.pos.y + PLAYER_HEIGHT
    );
  }
}
