import * as THREE from 'three';
import { B, BLOCKS, DIM_OVERWORLD } from '../constants.js';

const GRAVITY = -24;
const MOB_HALF = 0.35;

function mobColor(seedNum) {
  return new THREE.Color().setHSL((seedNum % 360) / 360, 0.5, 0.5);
}

// Boxy pig built from primitives
function buildPig() {
  const group = new THREE.Group();
  const pink = new THREE.MeshLambertMaterial({ color: 0xe89aa4 });
  const dark = new THREE.MeshLambertMaterial({ color: 0xc97a86 });
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);

  const body = box(0.9, 0.55, 0.6, pink);
  body.position.y = 0.65;
  const head = box(0.45, 0.45, 0.45, pink);
  head.position.set(0, 0.8, -0.6);
  const snout = box(0.2, 0.14, 0.08, dark);
  snout.position.set(0, -0.04, -0.25);
  head.add(snout);
  const eye = box(0.06, 0.06, 0.02, new THREE.MeshLambertMaterial({ color: 0x201518 }));
  eye.position.set(-0.12, 0.08, -0.23);
  const eye2 = eye.clone();
  eye2.position.x = 0.12;
  head.add(eye, eye2);

  const legs = [];
  for (const [x, z] of [[-0.28, -0.18], [0.28, -0.18], [-0.28, 0.18], [0.28, 0.18]]) {
    const leg = box(0.16, 0.4, 0.16, dark);
    leg.position.set(x, 0.2, z);
    legs.push(leg);
    group.add(leg);
  }
  group.add(body, head);
  return { group, legs, head };
}

// Green humanoid with arms stretched forward
function buildZombie() {
  const group = new THREE.Group();
  const skin = new THREE.MeshLambertMaterial({ color: 0x53a04e });
  const shirt = new THREE.MeshLambertMaterial({ color: 0x2e6653 });
  const pants = new THREE.MeshLambertMaterial({ color: 0x33415e });
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);

  const head = box(0.48, 0.48, 0.48, skin);
  head.position.y = 1.74;
  const body = box(0.52, 0.72, 0.28, shirt);
  body.position.y = 1.14;
  const armL = box(0.2, 0.7, 0.2, skin);
  const armR = armL.clone();
  // arms forward, zombie style
  for (const [arm, x] of [[armL, -0.38], [armR, 0.38]]) {
    arm.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.7);
    arm.position.set(x, 1.42, -0.32);
  }
  const legL = box(0.22, 0.78, 0.22, pants);
  const legR = legL.clone();
  legL.position.set(-0.13, 0.39, 0);
  legR.position.set(0.13, 0.39, 0);

  const eye = box(0.08, 0.08, 0.02, new THREE.MeshLambertMaterial({ color: '#1a1a1a' }));
  eye.position.set(-0.1, 0.05, -0.25);
  const eye2 = eye.clone();
  eye2.position.x = 0.1;
  head.add(eye, eye2);

  group.add(head, body, armL, armR, legL, legR);
  return { group, legs: [legL, legR], head, armL, armR };
}

let nextMobId = 1;

export class Mob {
  constructor(kind, scene, x, y, z, seedNum) {
    this.id = nextMobId++;
    this.kind = kind; // 'pig' | 'zombie'
    this.scene = scene;
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.kb = new THREE.Vector3(); // knockback impulse, decays each frame
    this.yaw = Math.random() * Math.PI * 2;
    this.onGround = false;
    this.hp = kind === 'zombie' ? 6 : 3;
    this.hurtTimer = 0;
    this.attackCooldown = 0;
    this.fleeTimer = 0;
    this.stateTimer = 1 + Math.random() * 3;
    this.walking = false;
    this.walkPhase = 0;
    this.dead = false;
    this.removeMe = false;

    const parts = kind === 'zombie' ? buildZombie() : buildPig();
    this.model = parts;
    this.group = parts.group;
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    this.height = kind === 'zombie' ? 1.9 : 1.0;
    this.radius = MOB_HALF;
    this.speed = kind === 'zombie' ? 2.7 : 1.3;
    scene.add(this.group);
  }

  aabb() {
    const r = this.radius;
    const h = this.height;
    return new THREE.Box3(
      new THREE.Vector3(this.pos.x - r, this.pos.y, this.pos.z - r),
      new THREE.Vector3(this.pos.x + r, this.pos.y + h, this.pos.z + r)
    );
  }

  center() {
    return new THREE.Vector3(this.pos.x, this.pos.y + this.height * 0.6, this.pos.z);
  }

  solidAt(world, x, y, z) {
    return BLOCKS[world.getBlock(Math.floor(x), Math.floor(y), Math.floor(z))].solid;
  }

  collides(world, px, py, pz) {
    const r = this.radius;
    for (const dx of [-r, r]) {
      for (const dz of [-r, r]) {
        for (let dy = 0; dy <= this.height; dy += 0.8) {
          const y = Math.min(dy, this.height - 0.05);
          if (this.solidAt(world, px + dx, py + y, pz + dz)) return true;
        }
      }
    }
    return false;
  }

  hurt(dmg, fromDir) {
    if (this.hurtTimer > 0.15) return false; // brief invulnerability window
    this.hp -= dmg;
    this.hurtTimer = 0.4;
    if (this.kind === 'pig') this.fleeTimer = 3.5;
    if (fromDir) {
      // separate knockback channel: AI sets vel.x/z every frame and would
      // otherwise instantly overwrite the impulse
      this.kb.x = fromDir.x * 6;
      this.kb.z = fromDir.z * 6;
      this.vel.y = 4.5;
    }
    if (this.hp <= 0) this.removeMe = true;
    return true;
  }

  update(dt, world, player, hooks) {
    if (this.removeMe) return;
    this.hurtTimer = Math.max(0, this.hurtTimer - dt);
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.fleeTimer = Math.max(0, this.fleeTimer - dt);

    // ---- decide movement ----
    let moveX = 0, moveZ = 0, wantWalk = false;
    const toPlayer = new THREE.Vector3(
      player.pos.x - this.pos.x, 0, player.pos.z - this.pos.z
    );
    const distToPlayer = toPlayer.length();

    if (this.kind === 'zombie' && distToPlayer < 18 && !player.dead) {
      // chase
      if (distToPlayer > 1e-4) {
        toPlayer.normalize();
        moveX = toPlayer.x; moveZ = toPlayer.z;
        wantWalk = true;
        this.yaw = Math.atan2(-moveX, -moveZ);
      }
      if (distToPlayer < 1.35 && this.attackCooldown <= 0) {
        this.attackCooldown = 1.1;
        hooks?.onAttackPlayer?.(2, toPlayer.clone().normalize());
      }
    } else if (this.fleeTimer > 0) {
      // run away from the player
      toPlayer.normalize();
      moveX = -toPlayer.x; moveZ = -toPlayer.z;
      wantWalk = true;
      this.yaw = Math.atan2(-moveX, -moveZ);
    } else {
      // wander: alternate idle and random walks
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) {
        this.walking = !this.walking;
        this.stateTimer = this.walking ? 1.5 + Math.random() * 3 : 1 + Math.random() * 4;
        if (this.walking) this.yaw = Math.random() * Math.PI * 2;
      }
      if (this.walking) {
        moveX = -Math.sin(this.yaw);
        moveZ = -Math.cos(this.yaw);
        wantWalk = true;
      }
    }

    const speed = this.speed * (this.fleeTimer > 0 ? 1.9 : 1);
    this.vel.x = moveX * speed + this.kb.x;
    this.vel.z = moveZ * speed + this.kb.z;
    this.kb.x *= Math.max(0, 1 - dt * 6);
    this.kb.z *= Math.max(0, 1 - dt * 6);

    // gravity & swimming
    const inWater = world.getBlock(
      Math.floor(this.pos.x), Math.floor(this.pos.y + 0.3), Math.floor(this.pos.z)
    ) === B.WATER;
    if (inWater) {
      this.vel.y += 14 * dt; // float up
      this.vel.y = Math.min(this.vel.y, 2.2);
    } else {
      this.vel.y += GRAVITY * dt;
      this.vel.y = Math.max(this.vel.y, -40);
    }

    // ---- move with collision, hop up single blocks ----
    const tryMove = (axis, amount) => {
      if (amount === 0) return false;
      const p = this.pos.clone();
      p[axis] += amount;
      if (!this.collides(world, p.x, p.y, p.z)) {
        this.pos[axis] = p[axis];
        return true;
      }
      return false;
    };

    const movedX = tryMove('x', this.vel.x * dt);
    const movedZ = tryMove('z', this.vel.z * dt);
    const blocked = wantWalk && (!movedX || !movedZ);
    this.onGround = false;
    if (this.vel.y <= 0) {
      if (!tryMove('y', this.vel.y * dt)) {
        this.onGround = true;
        this.vel.y = 0;
      }
    } else if (!tryMove('y', this.vel.y * dt)) {
      this.vel.y = 0;
    }
    if (blocked && this.onGround) this.vel.y = 7.6; // hop up a block

    // safety: fell out of the world
    if (this.pos.y < -12) this.removeMe = true;

    // ---- animate ----
    this.walkPhase += (wantWalk ? dt * 8 : 0);
    const swing = wantWalk ? Math.sin(this.walkPhase) * 0.6 : 0;
    if (this.model.legs.length === 4) {
      const [a, b, c, d] = this.model.legs;
      a.rotation.x = swing; d.rotation.x = swing;
      b.rotation.x = -swing; c.rotation.x = -swing;
    } else {
      const [a, b] = this.model.legs;
      a.rotation.x = swing;
      b.rotation.x = -swing;
    }
    if (this.model.armL) this.model.armL.rotation.y = Math.sin(this.walkPhase * 0.7) * 0.12;

    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    // red flash while hurt
    const flash = this.hurtTimer > 0.2;
    this.group.traverse((o) => {
      if (o.isMesh) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        for (const m of mats) {
          if (m.emissive) m.emissive.setHex(flash ? 0x881111 : 0x000000);
        }
      }
    });
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      o.geometry?.dispose();
      o.material?.dispose();
    });
  }
}

// Ray vs mob AABBs; returns the closest hit.
export function raycastMobs(mobs, origin, dir, maxDist) {
  let best = null;
  const ray = new THREE.Ray(origin.clone(), dir.clone().normalize());
  const point = new THREE.Vector3();
  for (const mob of mobs.values()) {
    if (mob.removeMe) continue;
    const box = mob.aabb();
    const hit = ray.intersectBox(box, point);
    if (!hit) continue;
    const dist = origin.distanceTo(point);
    if (dist <= maxDist && (!best || dist < best.dist)) {
      best = { mob, dist, point: point.clone() };
    }
  }
  return best;
}

const isNightSpawnHour = (sky) => sky.isNight;

export class MobManager {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.mobs = new Map(); // id -> Mob
    this.spawnTimer = 2;
    this.onPigNearby = null;
    this.onZombieNearby = null;
  }

  clear() {
    for (const m of this.mobs.values()) m.dispose();
    this.mobs.clear();
  }

  count(kind) {
    let n = 0;
    for (const m of this.mobs.values()) if (m.kind === kind) n++;
    return n;
  }

  spawn(kind, x, y, z) {
    const mob = new Mob(kind, this.scene, x, y, z);
    this.mobs.set(mob.id, mob);
    return mob;
  }

  // surface y at column using the generator (may differ where edited)
  surfaceY(gen, x, z) {
    const h = gen.height(x, z);
    return h + 1;
  }

  trySpawns(player, sky, dim) {
    if (dim !== DIM_OVERWORLD) return;
    const world = this.world;

    // pigs by day (and night, they're around), few and nearby
    if (this.count('pig') < 8 && Math.random() < 0.4) {
      const ang = Math.random() * Math.PI * 2;
      const d = 18 + Math.random() * 22;
      const x = Math.round(player.pos.x + Math.cos(ang) * d);
      const z = Math.round(player.pos.z + Math.sin(ang) * d);
      const gen = world.generatorFor(DIM_OVERWORLD);
      const y = this.surfaceY(gen, x, z);
      if (world.getBlock(x, y - 1, z) === B.GRASS &&
          world.getBlock(x, y, z) === B.AIR && world.getBlock(x, y + 1, z) === B.AIR) {
        this.spawn('pig', x + 0.5, y, z + 0.5);
      }
    }

    // zombies only at night
    if (isNightSpawnHour(sky) && this.count('zombie') < 6 && Math.random() < 0.5) {
      const ang = Math.random() * Math.PI * 2;
      const d = 20 + Math.random() * 20;
      const x = Math.round(player.pos.x + Math.cos(ang) * d);
      const z = Math.round(player.pos.z + Math.sin(ang) * d);
      const gen = world.generatorFor(DIM_OVERWORLD);
      const y = this.surfaceY(gen, x, z);
      if (world.getBlock(x, y - 1, z) !== B.AIR &&
          world.getBlock(x, y, z) === B.AIR && world.getBlock(x, y + 1, z) === B.AIR) {
        this.spawn('zombie', x + 0.5, y, z + 0.5);
      }
    }
  }

  update(dt, player, sky, dim, hooks) {
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 2.5;
      this.trySpawns(player, sky, dim);
    }

    for (const [id, mob] of [...this.mobs]) {
      // zombies can't survive the day
      if (mob.kind === 'zombie' && dim === 0 && sky && !sky.isNight && !mob.removeMe) {
        mob.removeMe = true;
        hooks?.onMobDeath?.(mob);
      }
      mob.update(dt, this.world, player, hooks);
      const dist = mob.pos.distanceTo(player.pos);
      if (mob.removeMe || dist > 90) {
        if (mob.removeMe) hooks?.onMobDeath?.(mob);
        mob.dispose();
        this.mobs.delete(id);
        continue;
      }
      // idle chatter
      if (dist < 22 && Math.random() < dt * 0.08) {
        if (mob.kind === 'pig') hooks?.onPigSound?.(mob);
        else hooks?.onZombieSound?.(mob);
      }
    }
  }
}
