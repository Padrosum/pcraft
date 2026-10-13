import * as THREE from 'three';
import { B, BLOCKS, DIM_OVERWORLD } from '../constants.js';

const GRAVITY = -24;
const MOB_HALF = 0.35;

// ---- modeller (hepsi kutulardan, kodla) ----
function mat(color, opts = {}) {
  return new THREE.MeshLambertMaterial({ color, ...opts });
}
function box(w, h, d, m) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
}
function eyes(head, color = 0x201518, z = -0.24, size = 0.06, dx = 0.1) {
  const eye = box(size, size, 0.02, mat(color));
  eye.position.set(-dx, 0.06, z);
  const eye2 = eye.clone();
  eye2.position.x = dx;
  head.add(eye, eye2);
}

function buildPig() {
  const group = new THREE.Group();
  const pink = mat(0xe89aa4);
  const dark = mat(0xc97a86);
  const body = box(0.9, 0.55, 0.6, pink);
  body.position.y = 0.65;
  const head = box(0.45, 0.45, 0.45, pink);
  head.position.set(0, 0.8, -0.6);
  const snout = box(0.2, 0.14, 0.08, dark);
  snout.position.set(0, -0.04, -0.25);
  head.add(snout);
  eyes(head);
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

function buildSheep() {
  const group = new THREE.Group();
  const wool = mat(0xf0f0f0);
  const skin = mat(0xd8c8b8);
  const body = box(0.85, 0.65, 0.65, wool);
  body.position.y = 0.75;
  const head = box(0.4, 0.4, 0.4, skin);
  head.position.set(0, 0.95, -0.55);
  const fleece = box(0.48, 0.44, 0.2, wool);
  fleece.position.set(0, 0.05, 0.12);
  head.add(fleece);
  eyes(head);
  const legs = [];
  for (const [x, z] of [[-0.25, -0.18], [0.25, -0.18], [-0.25, 0.18], [0.25, 0.18]]) {
    const leg = box(0.15, 0.42, 0.15, skin);
    leg.position.set(x, 0.21, z);
    legs.push(leg);
    group.add(leg);
  }
  group.add(body, head);
  return { group, legs, head };
}

function buildCow() {
  const group = new THREE.Group();
  const brown = mat(0x6b4a33);
  const white = mat(0xe8e0d8);
  const body = box(0.95, 0.65, 0.7, brown);
  body.position.y = 0.8;
  const patch = box(0.5, 0.3, 0.05, white);
  patch.position.set(0.1, 0.02, 0.36);
  body.add(patch);
  const head = box(0.45, 0.45, 0.42, brown);
  head.position.set(0, 1.0, -0.65);
  const muzzle = box(0.3, 0.2, 0.06, white);
  muzzle.position.set(0, -0.12, -0.22);
  head.add(muzzle);
  const horn = box(0.08, 0.08, 0.08, mat(0xe8e0d8));
  horn.position.set(-0.24, 0.24, 0);
  const horn2 = horn.clone();
  horn2.position.x = 0.24;
  head.add(horn, horn2);
  eyes(head);
  const legs = [];
  for (const [x, z] of [[-0.3, -0.2], [0.3, -0.2], [-0.3, 0.2], [0.3, 0.2]]) {
    const leg = box(0.17, 0.48, 0.17, white);
    leg.position.set(x, 0.24, z);
    legs.push(leg);
    group.add(leg);
  }
  group.add(body, head);
  return { group, legs, head };
}

function buildChicken() {
  const group = new THREE.Group();
  const white = mat(0xf4f4f4);
  const yellow = mat(0xe8b830);
  const red = mat(0xd43a2f);
  const body = box(0.45, 0.45, 0.55, white);
  body.position.y = 0.5;
  const head = box(0.3, 0.35, 0.3, white);
  head.position.set(0, 0.85, -0.3);
  const beak = box(0.12, 0.08, 0.1, yellow);
  beak.position.set(0, -0.04, -0.19);
  head.add(beak);
  const comb = box(0.08, 0.12, 0.14, red);
  comb.position.set(0, 0.22, -0.02);
  head.add(comb);
  eyes(head, 0x201518, -0.16, 0.05, 0.08);
  const legL = box(0.07, 0.3, 0.07, yellow);
  const legR = legL.clone();
  legL.position.set(-0.11, 0.15, 0);
  legR.position.set(0.11, 0.15, 0);
  group.add(body, head, legL, legR);
  return { group, legs: [legL, legR], head };
}

function buildZombie() {
  const group = new THREE.Group();
  const skin = mat(0x53a04e);
  const shirt = mat(0x2e6653);
  const pants = mat(0x33415e);
  const head = box(0.48, 0.48, 0.48, skin);
  head.position.y = 1.74;
  const body = box(0.52, 0.72, 0.28, shirt);
  body.position.y = 1.14;
  const armL = box(0.2, 0.2, 0.7, skin);
  const armR = armL.clone();
  armL.position.set(-0.38, 1.42, -0.32);
  armR.position.set(0.38, 1.42, -0.32);
  const legL = box(0.22, 0.78, 0.22, pants);
  const legR = legL.clone();
  legL.position.set(-0.13, 0.39, 0);
  legR.position.set(0.13, 0.39, 0);
  eyes(head, 0x1a1a1a);
  group.add(head, body, armL, armR, legL, legR);
  return { group, legs: [legL, legR], head, armL, armR };
}

function buildPiglin() {
  const group = new THREE.Group();
  const pink = mat(0xe08898);
  const gold = mat(0xc8a030);
  const head = box(0.48, 0.48, 0.48, pink);
  head.position.y = 1.74;
  const snout = box(0.22, 0.16, 0.08, mat(0xc06878));
  snout.position.set(0, -0.06, -0.25);
  head.add(snout);
  const ear = box(0.1, 0.14, 0.04, pink);
  ear.position.set(-0.28, 0.18, 0);
  const ear2 = ear.clone();
  ear2.position.x = 0.28;
  head.add(ear, ear2);
  eyes(head);
  const body = box(0.52, 0.72, 0.3, gold);
  body.position.y = 1.14;
  const armL = box(0.2, 0.2, 0.66, pink);
  const armR = armL.clone();
  armL.position.set(-0.38, 1.42, -0.3);
  armR.position.set(0.38, 1.42, -0.3);
  const legL = box(0.22, 0.78, 0.22, pink);
  const legR = legL.clone();
  legL.position.set(-0.13, 0.39, 0);
  legR.position.set(0.13, 0.39, 0);
  group.add(head, body, armL, armR, legL, legR);
  return { group, legs: [legL, legR], head, armL, armR };
}

function buildHellhound() {
  const group = new THREE.Group();
  const black = mat(0x2a1a1a);
  const red = mat(0xff3020, { emissive: 0x881010 });
  const body = box(0.8, 0.45, 0.45, black);
  body.position.y = 0.6;
  const head = box(0.4, 0.35, 0.4, black);
  head.position.set(0, 0.75, -0.55);
  const snout = box(0.2, 0.14, 0.14, mat(0x1a1010));
  snout.position.set(0, -0.08, -0.25);
  head.add(snout);
  eyes(head, 0xff4030, -0.21, 0.07, 0.1);
  const tail = box(0.08, 0.08, 0.35, black);
  tail.position.set(0, 0.72, 0.5);
  tail.rotation.x = 0.5;
  const legs = [];
  for (const [x, z] of [[-0.22, -0.15], [0.22, -0.15], [-0.22, 0.15], [0.22, 0.15]]) {
    const leg = box(0.12, 0.4, 0.12, black);
    leg.position.set(x, 0.2, z);
    legs.push(leg);
    group.add(leg);
  }
  group.add(body, head, tail);
  return { group, legs, head };
}

function buildMagma() {
  const group = new THREE.Group();
  const outer = mat(0x8a2810, { emissive: 0x401005 });
  const cube = box(0.85, 0.85, 0.85, outer);
  cube.position.y = 0.42;
  const core = box(0.5, 0.5, 0.5, mat(0xff8a20, { emissive: 0xc85010 }));
  cube.add(core);
  group.add(cube);
  return { group, legs: [], head: cube, cube };
}

function buildBlaze() {
  const group = new THREE.Group();
  const gold = mat(0xe8b020, { emissive: 0x805810 });
  const head = box(0.4, 0.4, 0.4, gold);
  head.position.y = 1.3;
  eyes(head, 0x802010, -0.21, 0.07, 0.09);
  const rods = [];
  for (let i = 0; i < 6; i++) {
    const rod = box(0.14, 0.6, 0.14, mat(0xc88810, { emissive: 0x603808 }));
    const a = (i / 6) * Math.PI * 2;
    rod.position.set(Math.cos(a) * 0.42, 0.75, Math.sin(a) * 0.42);
    rods.push(rod);
    group.add(rod);
  }
  group.add(head);
  return { group, legs: [], head, rods };
}

function buildWraith() {
  const group = new THREE.Group();
  const ghost = mat(0x8a7ab8, { transparent: true, opacity: 0.55, emissive: 0x302050 });
  const head = box(0.45, 0.45, 0.45, ghost);
  head.position.y = 1.6;
  eyes(head, 0xe0d8ff, -0.23, 0.08, 0.09);
  const body = box(0.5, 0.9, 0.3, ghost);
  body.position.y = 0.95;
  const tail = box(0.34, 0.6, 0.24, ghost);
  tail.position.y = 0.25;
  const armL = box(0.16, 0.6, 0.16, ghost);
  const armR = armL.clone();
  armL.position.set(-0.36, 1.0, -0.15);
  armR.position.set(0.36, 1.0, -0.15);
  armL.rotation.x = -0.8;
  armR.rotation.x = -0.8;
  group.add(head, body, tail, armL, armR);
  return { group, legs: [], head, armL, armR };
}

const BUILDERS = {
  pig: buildPig, sheep: buildSheep, cow: buildCow, chicken: buildChicken,
  zombie: buildZombie, piglin: buildPiglin, hellhound: buildHellhound,
  magma: buildMagma, blaze: buildBlaze, wraith: buildWraith,
};

// ---- tür özellikleri ----
export const SPECIES = {
  // ana dünya
  pig: { hp: 3, height: 1.0, speed: 1.3, hostile: 'passive' },
  sheep: { hp: 3, height: 1.1, speed: 1.2, hostile: 'passive' },
  cow: { hp: 4, height: 1.25, speed: 1.1, hostile: 'passive' },
  chicken: { hp: 2, height: 0.7, speed: 1.1, hostile: 'passive' },
  zombie: { hp: 6, height: 1.9, speed: 2.7, hostile: 'night', damage: 2 },
  // cehennem
  piglin: { hp: 8, height: 1.9, speed: 2.4, hostile: 'neutral', damage: 3 },
  hellhound: { hp: 6, height: 0.9, speed: 3.6, hostile: 'hostile', damage: 2 },
  magma: { hp: 8, height: 0.85, speed: 0, hostile: 'hostile', damage: 3, hopper: true },
  blaze: { hp: 8, height: 1.6, speed: 1.4, hostile: 'hostile', damage: 3, floater: true },
  wraith: { hp: 6, height: 1.9, speed: 1.1, hostile: 'hostile', damage: 2, ghost: true },
};

let nextMobId = 1;

export class Mob {
  constructor(kind, scene, x, y, z) {
    const spec = SPECIES[kind];
    this.id = nextMobId++;
    this.kind = kind;
    this.spec = spec;
    this.scene = scene;
    this.pos = new THREE.Vector3(x, y, z);
    this.vel = new THREE.Vector3();
    this.kb = new THREE.Vector3(); // geri tepme, her karede sönümlenir
    this.yaw = Math.random() * Math.PI * 2;
    this.onGround = false;
    this.hp = spec.hp;
    this.hurtTimer = 0;
    this.attackCooldown = 0;
    this.fleeTimer = 0;
    this.angry = spec.hostile === 'hostile' || spec.hostile === 'night';
    this.stateTimer = 1 + Math.random() * 3;
    this.walking = false;
    this.walkPhase = 0;
    this.dead = false;
    this.removeMe = false;
    this.floatPhase = Math.random() * Math.PI * 2;

    this.model = BUILDERS[kind]();
    this.group = this.model.group;
    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    this.height = spec.height;
    this.radius = kind === 'chicken' ? 0.22 : kind === 'magma' ? 0.42 : MOB_HALF;
    scene.add(this.group);
  }

  aabb() {
    const r = this.radius;
    return new THREE.Box3(
      new THREE.Vector3(this.pos.x - r, this.pos.y, this.pos.z - r),
      new THREE.Vector3(this.pos.x + r, this.pos.y + this.height, this.pos.z + r)
    );
  }

  center() {
    return new THREE.Vector3(this.pos.x, this.pos.y + this.height * 0.6, this.pos.z);
  }

  solidAt(world, x, y, z) {
    if (this.spec.ghost) return false; // hayalet duvarlardan geçer
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
    if (this.hurtTimer > 0.15) return false;
    this.hp -= dmg;
    this.hurtTimer = 0.4;
    if (this.spec.hostile === 'passive') this.fleeTimer = 3.5;
    if (this.spec.hostile === 'neutral') this.angry = true; // piglin kızarır
    if (fromDir) {
      this.kb.x = fromDir.x * 6;
      this.kb.z = fromDir.z * 6;
      this.vel.y = 4.5;
    }
    if (this.hp <= 0) {
      this.removeMe = true;
      this.dropLoot = true; // oyuncu öldürdü: ganimet düşer
    }
    return true;
  }

  update(dt, world, player, hooks) {
    if (this.removeMe) return;
    this.hurtTimer = Math.max(0, this.hurtTimer - dt);
    this.attackCooldown = Math.max(0, this.attackCooldown - dt);
    this.fleeTimer = Math.max(0, this.fleeTimer - dt);
    this.floatPhase += dt;

    // ---- hareket kararı ----
    let moveX = 0, moveZ = 0, wantWalk = false;
    const toPlayer = new THREE.Vector3(player.pos.x - this.pos.x, 0, player.pos.z - this.pos.z);
    const distToPlayer = toPlayer.length();
    const aggro = this.angry &&
      (this.spec.hostile !== 'night' || hooks.isNight?.()) &&
      distToPlayer < 18 && !player.dead;

    if (aggro && distToPlayer > 1e-4) {
      toPlayer.normalize();
      moveX = toPlayer.x;
      moveZ = toPlayer.z;
      wantWalk = this.spec.speed > 0;
      this.yaw = Math.atan2(-moveX, -moveZ);
      if (distToPlayer < 1.5 && this.attackCooldown <= 0) {
        this.attackCooldown = 1.1;
        hooks?.onAttackPlayer?.(this.spec.damage ?? 2, toPlayer.clone().normalize(), this.kind);
      }
    } else if (this.fleeTimer > 0) {
      if (distToPlayer > 1e-4) {
        toPlayer.normalize();
        moveX = -toPlayer.x;
        moveZ = -toPlayer.z;
        wantWalk = true;
        this.yaw = Math.atan2(-moveX, -moveZ);
      }
    } else if (!this.spec.floater && !this.spec.ghost) {
      // dolaş: bekleme ve rastgele yürüyüş
      this.stateTimer -= dt;
      if (this.stateTimer <= 0) {
        this.walking = !this.walking;
        this.stateTimer = this.walking ? 1.5 + Math.random() * 3 : 1 + Math.random() * 4;
        if (this.walking) this.yaw = Math.random() * Math.PI * 2;
      }
      if (this.walking && this.spec.speed > 0) {
        moveX = -Math.sin(this.yaw);
        moveZ = -Math.cos(this.yaw);
        wantWalk = true;
      }
    }

    const speed = this.spec.speed * (this.fleeTimer > 0 ? 1.9 : 1);
    this.vel.x = moveX * speed + this.kb.x;
    this.vel.z = moveZ * speed + this.kb.z;
    this.kb.x *= Math.max(0, 1 - dt * 6);
    this.kb.z *= Math.max(0, 1 - dt * 6);

    // ---- dikey hareket: tür bazlı ----
    const inWater = world.getBlock(
      Math.floor(this.pos.x), Math.floor(this.pos.y + 0.3), Math.floor(this.pos.z)
    ) === B.WATER;
    const inLava = world.getBlock(
      Math.floor(this.pos.x), Math.floor(this.pos.y + 0.3), Math.floor(this.pos.z)
    ) === B.LAVA;

    if (this.spec.floater) {
      // alev: havada süzülür, hafif dalgalanır
      const hover = Math.sin(this.floatPhase * 1.8) * 0.9;
      const targetY = player.pos.y + 1.2 + hover;
      this.vel.y = THREE.MathUtils.clamp((targetY - this.pos.y) * 1.2, -3, 3);
      // lav hasarı yok (bağışık), suda söner
      if (inWater) this.removeMe = true;
    } else if (this.spec.ghost) {
      // hayalet: oyuncuya doğru süzülür, yerçekimi yok
      const targetY = player.pos.y + 1.0;
      this.vel.y = THREE.MathUtils.clamp((targetY - this.pos.y) * 0.8, -1.5, 1.5);
      if (inLava) this.removeMe = true;
    } else if (this.spec.hopper) {
      // magma küpü: zıplayarak ilerler
      if (this.onGround) {
        this.vel.x = this.vel.z = 0;
        this.stateTimer -= dt;
        if (aggro ? this.stateTimer <= 0 : this.stateTimer <= -1.5) {
          const dir = aggro ? toPlayer.clone().normalize() : new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
          this.vel.x = dir.x * 3.2;
          this.vel.z = dir.z * 3.2;
          this.vel.y = 7.2;
          this.stateTimer = 1.2 + Math.random() * 0.8;
        }
      }
      if (inLava) {
        this.vel.y = Math.max(this.vel.y, 2.5); // lavda yüzer
      } else {
        this.vel.y += GRAVITY * dt;
        this.vel.y = Math.max(this.vel.y, -40);
      }
    } else {
      if (inLava) {
        this.vel.y = Math.max(this.vel.y, 2.2); // cehennem mobları lavda yüzer
        if (['pig', 'sheep', 'cow', 'chicken', 'zombie'].includes(this.kind)) {
          this.hurtTimer <= 0 && this.hurt(1, null); // ana dünya mobları lavda yanar
        }
      } else if (inWater) {
        this.vel.y += 14 * dt;
        this.vel.y = Math.min(this.vel.y, 2.2);
      } else {
        this.vel.y += GRAVITY * dt;
        this.vel.y = Math.max(this.vel.y, this.kind === 'chicken' ? -2.2 : -40); // tavuk yavaş düşer
      }
    }

    // ---- çarpışmalı hareket ----
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
    if (blocked && this.onGround) this.vel.y = 7.6; // tek blok tırman
    if (this.pos.y < -12) this.removeMe = true;

    // ---- animasyon ----
    if (wantWalk) this.walkPhase += dt * 8;
    const swing = wantWalk ? Math.sin(this.walkPhase) * 0.6 : 0;
    const { legs, armL, rods, cube } = this.model;
    if (legs.length === 4) {
      legs[0].rotation.x = swing;
      legs[3].rotation.x = swing;
      legs[1].rotation.x = -swing;
      legs[2].rotation.x = -swing;
    } else {
      for (const [i, leg] of legs.entries()) leg.rotation.x = i % 2 ? -swing : swing;
    }
    if (armL) armL.rotation.y = Math.sin(this.walkPhase * 0.7) * 0.12;
    if (rods) for (const [i, rod] of rods.entries()) rod.rotation.y = this.floatPhase * 2 + i;
    if (cube) {
      const squash = this.onGround ? 1 : 1.15;
      cube.scale.set(2 - squash, squash, 2 - squash);
    }
    if (this.model.head && this.spec.floater) this.model.head.rotation.y += dt;

    this.group.position.copy(this.pos);
    this.group.rotation.y = this.yaw;
    // hasar flaşı: baz emissive'i sakla, flaş bitince geri yükle
    const flash = this.hurtTimer > 0.2;
    this.group.traverse((o) => {
      if (!o.isMesh || !o.material.emissive) return;
      if (o.userData.baseEmissive === undefined) {
        o.userData.baseEmissive = o.material.emissive.getHex();
      }
      o.material.emissive.setHex(flash ? 0x881111 : o.userData.baseEmissive);
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

// ışın vs mob AABB'leri; en yakın vuruşu döndürür
export function raycastMobs(mobs, origin, dir, maxDist) {
  let best = null;
  const ray = new THREE.Ray(origin.clone(), dir.clone().normalize());
  const point = new THREE.Vector3();
  for (const mob of mobs.values()) {
    if (mob.removeMe) continue;
    const hit = ray.intersectBox(mob.aabb(), point);
    if (!hit) continue;
    const dist = origin.distanceTo(point);
    if (dist <= maxDist && (!best || dist < best.dist)) {
      best = { mob, dist, point: point.clone() };
    }
  }
  return best;
}

export class MobManager {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.mobs = new Map();
    this.spawnTimer = 2;
    this.enabled = true;
    this.onMobDeath = null;
    this.onMobSound = null;
    this.onAttackPlayer = null;
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
    if (!SPECIES[kind]) return null;
    const mob = new Mob(kind, this.scene, x, y, z);
    this.mobs.set(mob.id, mob);
    return mob;
  }

  killAll() {
    for (const m of this.mobs.values()) {
      m.removeMe = true;
      m.dispose();
    }
    this.mobs.clear();
  }

  // zemin yüksekliği (üreticiden; düzenlenmiş arazide farklı olabilir)
  surfaceY(gen, x, z) {
    return gen.height(x, z) + 1;
  }

  // boş hava cebi bul (cehennem için)
  findPocket(gen, x, z, min = 16, max = 46) {
    for (let y = min; y < max; y++) {
      if (gen.solidAt(x, y, z) || gen.solidAt(x, y + 1, z)) continue;
      if (gen.solidAt(x, y - 1, z)) return y;
    }
    return null;
  }

  trySpawns(player, sky, dim, gens) {
    const night = hooks_isNight(sky);
    if (dim === DIM_OVERWORLD) {
      // pasifler: gündüz, çimen üstünde
      if (this.mobs.size < 14 && Math.random() < 0.5) {
        const kind = ['pig', 'sheep', 'cow', 'chicken'][(Math.random() * 4) | 0];
        const cap = 3 + (Math.random() < 0.5 ? 1 : 0);
        if (this.count(kind) < cap) {
          const { x, y, z } = this._randomSurface(player, 18, 40);
          const gen = gens.overworld;
          const gy = this.surfaceY(gen, x, z);
          if (world_isSolid(this.world.getBlock(x, gy - 1, z)) &&
              this.world.getBlock(x, gy, z) === B.AIR &&
              this.world.getBlock(x, gy + 1, z) === B.AIR) {
            this.spawn(kind, x + 0.5, gy, z + 0.5);
          }
        }
      }
      // zombiler: gece
      if (night && this.count('zombie') < 6 && Math.random() < 0.5) {
        const { x, y, z } = this._randomSurface(player, 20, 40);
        const gen = gens.overworld;
        const gy = this.surfaceY(gen, x, z);
        if (this.world.getBlock(x, gy, z) === B.AIR && this.world.getBlock(x, gy + 1, z) === B.AIR) {
          this.spawn('zombie', x + 0.5, gy, z + 0.5);
        }
      }
    } else {
      // cehennem: her türden birkaç tane
      const plan = [
        ['piglin', 6, 0.4], ['hellhound', 4, 0.3], ['magma', 4, 0.25],
        ['blaze', 3, 0.2], ['wraith', 3, 0.2],
      ];
      for (const [kind, cap, chance] of plan) {
        if (this.count(kind) >= cap || Math.random() > chance) continue;
        const ang = Math.random() * Math.PI * 2;
        const d = 14 + Math.random() * 18;
        const x = Math.round(player.pos.x + Math.cos(ang) * d);
        const z = Math.round(player.pos.z + Math.sin(ang) * d);
        const gen = gens.nether;
        const pocket = this.findPocket(gen, x, z);
        if (pocket === null) continue;
        const y = pocket + (SPECIES[kind].floater || SPECIES[kind].ghost ? 2 : 0);
        if (SPECIES[kind].floater || SPECIES[kind].ghost) {
          // uçanlar için 3 yükseklikte hava yeterli
          this.spawn(kind, x + 0.5, y, z + 0.5);
        } else if (gen.solidAt(x, pocket - 1, z)) {
          this.spawn(kind, x + 0.5, pocket, z + 0.5);
        }
      }
    }
  }

  _randomSurface(player, minD, maxD) {
    const ang = Math.random() * Math.PI * 2;
    const d = minD + Math.random() * (maxD - minD);
    return {
      x: Math.round(player.pos.x + Math.cos(ang) * d),
      z: Math.round(player.pos.z + Math.sin(ang) * d),
    };
  }

  update(dt, player, sky, dim, gens, hooks = {}) {
    if (!this.enabled) return;
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 2.5;
      this.trySpawns(player, sky, dim, gens);
    }

    for (const [id, mob] of [...this.mobs]) {
      // zombiler gündüz yok olur
      if (mob.kind === 'zombie' && dim === DIM_OVERWORLD && !hooks_isNight(sky) && !mob.removeMe) {
        mob.removeMe = true;
        hooks.onMobDeath?.(mob);
      }
      mob.update(dt, this.world, player, {
        onAttackPlayer: hooks.onAttackPlayer,
        isNight: () => hooks_isNight(sky),
      });
      const dist = mob.pos.distanceTo(player.pos);
      if (mob.removeMe || dist > 90) {
        if (mob.removeMe) hooks.onMobDeath?.(mob);
        mob.dispose();
        this.mobs.delete(id);
        continue;
      }
      // yerel sesler
      if (dist < 22 && Math.random() < dt * 0.06) {
        hooks.onMobSound?.(mob.kind);
      }
    }
  }
}

function hooks_isNight(sky) {
  return sky ? !!sky.isNight : false;
}

function world_isSolid(id) {
  return !!BLOCKS[id].solid;
}
