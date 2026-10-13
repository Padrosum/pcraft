import * as THREE from 'three';
import { B, BLOCKS, DIM_OVERWORLD, DIM_NETHER } from './constants.js';
import { createAtlas, createCrackTextures, tileAverageColor } from './render/textures.js';
import { Particles } from './render/particles.js';
import { Sky } from './render/sky.js';
import { World } from './world/world.js';
import {
  findSpawn, findNetherArrival, findOverworldArrival,
} from './world/worldgen.js';
import { PlayerController } from './player/controls.js';
import { raycastVoxel } from './player/raycast.js';
import { Sfx } from './audio/sounds.js';
import { Hud } from './ui/hud.js';
import { Inventory } from './ui/inventory.js';
import { Menu } from './ui/menu.js';
import {
  getRoomFromHash, newRoomId, setRoomHash, roomLink, loadSave, storeSave,
} from './net/room.js';
import { connect } from './net/sync.js';
import { RemotePlayer } from './net/remotePlayer.js';
import { MobManager, raycastMobs } from './render/mobs.js';

// ---------- three.js setup ----------
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 800);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const atlas = createAtlas();
const world = new World(scene, atlas);
const sky = new Sky(scene);
const player = new PlayerController(camera, world);
const mobs = new MobManager(scene, world);
player.onJump = () => Sfx.jump();
player.onSplash = (fallSpeed) => (fallSpeed < -4 ? Sfx.splash() : Sfx.swim());
player.onStep = (groundId) => Sfx.step(BLOCKS[groundId]?.sound);
player.onSwim = () => Sfx.swim();
player.onLand = (fallSpeed) => {
  Sfx.land();
  if (fallSpeed < -13 && !player.flying) {
    damage(Math.round((-fallSpeed - 13) * 0.7), 'yüksekten düştün');
  }
};

// block target highlight
const highlight = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.002, 1.002, 1.002)),
  new THREE.LineBasicMaterial({ color: 0x111111 })
);
highlight.visible = false;
scene.add(highlight);

// mining progress overlay (cracks appear as you hold left click)
const crackTextures = createCrackTextures();
const crackMaterial = new THREE.MeshBasicMaterial({
  transparent: true,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -1,
  polygonOffsetUnits: -1,
});
const crackMesh = new THREE.Mesh(new THREE.BoxGeometry(1.004, 1.004, 1.004), crackMaterial);
crackMesh.visible = false;
scene.add(crackMesh);

const particles = new Particles(scene);

// ---------- ui ----------
const hud = new Hud(atlas.canvas);
const inventory = new Inventory(atlas.canvas, hud);
const pauseEl = document.getElementById('pause');

player.onFly = (flying) => hud.toast(
  flying ? 'Uçuş açıldı — Space yukarı, Shift aşağı' : 'Uçuş kapandı'
);

// requestPointerLock returns a promise in modern browsers and rejects when
// the document isn't allowed to lock (iframes, automation). Swallow it and
// surface the error to the player instead of an unhandled rejection.
function lockPointer() {
  const r = renderer.domElement.requestPointerLock?.();
  if (r && typeof r.catch === 'function') r.catch(() => {});
}

let roomId = getRoomFromHash();
const isJoiner = !!roomId;
const menu = new Menu(roomId);

// ---------- state ----------
let myName = '';
let net = null;
let worldReady = false;
let worldSource = null; // 'net' | 'save' | 'fresh'
let started = false;
let stateTimeout = null;
const remotes = new Map(); // peerId -> RemotePlayer
const peerNames = new Map();

// ---------- health / death ----------
const MAX_HP = 20;
let hp = MAX_HP;
let dead = false;
let lastDamageAt = -Infinity;
let regenTimer = 0;
let drownTimer = 0; // seconds underwater with head submerged
let lavaTick = 0;
let respawnPoint = null; // [x, y, z] in the overworld

const deathEl = document.getElementById('death');
const deathReasonEl = document.getElementById('death-reason');

function damage(n, reason = '') {
  if (dead || n <= 0) return;
  hp = Math.max(0, hp - n);
  lastDamageAt = performance.now();
  hud.setHealth(hp);
  hud.flashDamage();
  Sfx.hurt();
  if (hp <= 0) die(reason);
}

function die(reason) {
  dead = true;
  player.dead = true;
  player.enabled = false;
  document.exitPointerLock?.();
  deathReasonEl.textContent = reason ? `Sebep: ${reason}` : '';
  deathEl.hidden = false;
  pauseEl.hidden = true;
  Sfx.mobDie();
}

function respawn() {
  dead = false;
  player.dead = false;
  hp = MAX_HP;
  hud.setHealth(hp);
  deathEl.hidden = true;
  if (world.dim !== DIM_OVERWORLD) switchDimension(DIM_OVERWORLD, true);
  const spawn = respawnPoint || findSpawn(world.generatorFor(DIM_OVERWORLD));
  player.setPosition(...spawn);
  player.setFlying(false);
  drownTimer = 0;
  lavaTick = 0;
  mobs.clear();
  lockPointer();
}

document.getElementById('respawn-btn').addEventListener('click', respawn);

function updatePlayerCount() {
  hud.setPlayerCount(remotes.size + 1);
}

function ensureRemote(peerId) {
  let r = remotes.get(peerId);
  if (!r) {
    r = new RemotePlayer(scene, peerId, peerNames.get(peerId));
    remotes.set(peerId, r);
    updatePlayerCount();
  }
  return r;
}

function worldState() {
  if (!worldReady) return null;
  const dims = {};
  for (const dim of [DIM_OVERWORLD, DIM_NETHER]) {
    const arr = world.editsArray(dim);
    if (arr.length) dims[dim] = arr;
  }
  return { seed: world.seed, dims, time: sky.time };
}

function setupWorld(seed, dimsOrEdits, time, startDim = DIM_OVERWORLD) {
  window.__pcraftSeed = seed;
  world.setSeed(seed);
  world.setDimension(startDim);
  // new format: {0: [...], 8: [...]} — legacy: flat array for the overworld
  if (Array.isArray(dimsOrEdits)) {
    world.applyEditsTo(dimsOrEdits, DIM_OVERWORLD);
  } else if (dimsOrEdits) {
    for (const [dim, arr] of Object.entries(dimsOrEdits)) {
      world.applyEditsTo(arr, Number(dim));
    }
  }
  if (typeof time === 'number') sky.time = time;
  world.setDimension(DIM_OVERWORLD); // players always start in the overworld
  const spawn = findSpawn(world.generatorFor(DIM_OVERWORLD));
  respawnPoint = spawn;
  player.setPosition(...spawn);
  world.update(spawn[0], spawn[2], 12); // first batch of chunks right away
}

function initWorld(seed, dimsOrEdits, time, source) {
  if (worldReady) return;
  worldReady = true;
  worldSource = source;
  clearInterval(stateTimeout);
  setupWorld(seed, dimsOrEdits, time);
  menu.hide();
  hud.show();
  hud.setHealth(hp);
  started = true;
  lockPointer();
}

// World state from a peer. Normally this arrives before the join timeout,
// but on slow signaling it can come after we already fell back to a fresh
// world — in that case adopt the room's real world instead of ignoring it.
function onWorldState(data) {
  const payload = Array.isArray(data.edits) ? data.edits : data.dims;
  if (!worldReady) {
    initWorld(data.seed, payload, data.time);
    return;
  }
  if (data.seed !== world.seed) {
    if (worldSource === 'fresh') {
      setupWorld(data.seed, payload, data.time);
      worldSource = 'net';
      hud.toast('Odanın dünyasına geçildi');
    }
    return;
  }
  // same seed (e.g. we restored from a local save): merge newer edits
  if (Array.isArray(payload)) {
    world.applyEditsTo(payload, DIM_OVERWORLD);
  } else if (payload) {
    for (const [dim, arr] of Object.entries(payload)) {
      world.applyEditsTo(arr, Number(dim));
    }
  }
}

function startGame(name) {
  myName = name;
  Sfx.unlock();

  if (!roomId) roomId = newRoomId();
  setRoomHash(roomId);

  try {
    net = connect(roomId, {
      myName: () => myName,
      worldState,
      onHello: (peerId, { name: peerName }) => {
        const isNew = !peerNames.has(peerId);
        peerNames.set(peerId, peerName);
        ensureRemote(peerId).setName(peerName);
        if (isNew) {
          hud.toast(`${peerName} katıldı`);
          Sfx.join();
        }
      },
      onState: onWorldState,
      onPos: (peerId, d) => {
        const r = ensureRemote(peerId);
        r.setTarget(d.p, d.yaw, d.pitch);
        r.setDim(d.dim ?? DIM_OVERWORLD, world.dim);
      },
      onBlock: ([dim, x, y, z, id]) => {
        // record so we can serve the full edit log to future joiners
        world.recordEdit(dim ?? DIM_OVERWORLD, x, y, z, id);
      },
      onPeerLeave: (peerId) => {
        remotes.get(peerId)?.dispose();
        remotes.delete(peerId);
        const name = peerNames.get(peerId);
        peerNames.delete(peerId);
        if (name) {
          hud.toast(`${name} ayrıldı`);
          Sfx.leave();
        }
        updatePlayerCount();
      },
    });
  } catch (e) {
    console.error(e);
    net = null; // play solo rather than not at all
  }

  const fallbackWorld = () => {
    const save = loadSave(roomId);
    if (save) initWorld(save.seed, save.dims ?? save.edits, save.time, 'save');
    else initWorld((Math.random() * 0xffffffff) | 0, [], 0.08, 'fresh');
  };

  if (!isJoiner || !net) {
    fallbackWorld();
    if (!net) hud.toast('Çok oyunculu bağlantı kurulamadı — tek başına oynuyorsun', 6000);
  } else {
    // wait for a peer to send world state; fall back to local save or fresh seed
    let waited = 0;
    menu.setStatus('Dünyaya bağlanılıyor…');
    stateTimeout = setInterval(() => {
      waited += 1;
      if (waited >= 12) {
        clearInterval(stateTimeout);
        fallbackWorld();
        hud.toast('Henüz kimseye bağlanılamadı — bağlantı arka planda sürüyor', 6000);
      } else {
        menu.setStatus(`Dünyaya bağlanılıyor… ${waited}s (oda: ${roomId})`);
      }
    }, 1000);
  }
}

menu.onStart(startGame);

// ---------- block interaction ----------
function applyEdit(x, y, z, id) {
  world.setBlock(x, y, z, id, true);
  net?.sendBlock([world.dim, x, y, z, id]);
  storeSoon();
}

// debug/test handle
window.__pcraft = {
  getBlock: (x, y, z) => world.getBlock(x, y, z),
  setBlock: applyEdit,
  player,
  world,
  mobs,
  damage: (n) => damage(n, 'test'),
  switchDimension: (d) => switchDimension(d),
};

let mouseHeld = false;
let mining = null; // { x, y, z, progress } while holding left click on a block
let attackCooldown = 0;

function punchMob() {
  if (attackCooldown > 0) return false;
  const hit = raycastMobs(mobs.mobs, camera.position, player.lookDir(), 4);
  if (!hit) return false;
  const blockHit = raycastVoxel(world, camera.position, player.lookDir(), hit.dist);
  if (blockHit) return false; // a wall is in front of the mob
  attackCooldown = 0.25;
  const dir = player.lookDir();
  dir.y = 0;
  dir.normalize();
  if (hit.mob.hurt(2, dir)) Sfx.mobHit();
  return true;
}

document.addEventListener('mousedown', (e) => {
  if (!started || !document.pointerLockElement || dead) return;

  if (e.button === 0) {
    if (!punchMob()) {
      mouseHeld = true; // breaking progresses in the animation loop
    }
    return;
  }
  if (e.button !== 2) return;

  const hit = raycastVoxel(world, camera.position, player.lookDir(), 6);
  if (!hit) return;
  const x = hit.x + hit.nx;
  const y = hit.y + hit.ny;
  const z = hit.z + hit.nz;
  const target = world.getBlock(x, y, z);
  const id = hud.currentBlock();
  if (!BLOCKS[id]?.place) return;
  if (target !== B.AIR && target !== B.WATER && target !== B.LAVA) return;
  if (player.intersectsBlock(x, y, z)) return;
  applyEdit(x, y, z, id);
  Sfx.place();
});

document.addEventListener('mouseup', (e) => {
  if (e.button !== 0) return;
  mouseHeld = false;
  mining = null;
  crackMesh.visible = false;
});

window.addEventListener('blur', () => {
  mouseHeld = false;
  mining = null;
  crackMesh.visible = false;
});
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  if (!started || dead) return;
  if (e.code === 'KeyE') {
    inventory.toggle();
    if (!inventory.open) lockPointer();
  }
});

// ---------- pause / pointer lock ----------
renderer.domElement.addEventListener('click', () => {
  if (started && !inventory.open && !document.pointerLockElement) {
    lockPointer();
  }
});

document.addEventListener('pointerlockchange', () => {
  if (!started || dead) return;
  const locked = !!document.pointerLockElement;
  if (!locked && !inventory.open) {
    pauseEl.hidden = false;
  } else {
    pauseEl.hidden = true;
  }
});

document.addEventListener('pointerlockerror', () => {
  // the browser refused to lock the pointer (embedded frame, permissions):
  // show the pause panel so the player can retry or leave
  if (started && !inventory.open && !dead) {
    pauseEl.hidden = false;
    hud.toast('Fare imleci kilitlenemedi — sayfayı doğrudan açıp tekrar dene', 6000);
  }
});

document.getElementById('resume-btn').addEventListener('click', () => {
  pauseEl.hidden = true;
  lockPointer();
});

async function copyLink() {
  try {
    await navigator.clipboard.writeText(roomLink(roomId));
    hud.toast('Link kopyalandı — arkadaşına gönder!');
  } catch {
    hud.toast(roomLink(roomId), 6000);
  }
}
document.getElementById('copy-link').addEventListener('click', copyLink);
document.getElementById('copy-link-2').addEventListener('click', copyLink);

// ---------- persistence ----------
let storeTimer = null;
function storeSoon() {
  clearTimeout(storeTimer);
  storeTimer = setTimeout(storeNow, 1500);
}
function storeNow() {
  if (!worldReady || !roomId) return;
  const dims = {};
  for (const dim of [DIM_OVERWORLD, DIM_NETHER]) {
    const arr = world.editsArray(dim);
    if (arr.length) dims[dim] = arr;
  }
  storeSave(roomId, { seed: world.seed, dims, time: sky.time });
}
setInterval(storeNow, 15000);
window.addEventListener('beforeunload', storeNow);

// ---------- dimensions / portals ----------
function buildPortalAt(dim, x, y, z) {
  // obsidian platform so the player lands safely next to the portal
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      world.recordEdit(dim, x + dx, y - 1, z + dz, B.OBSIDIAN);
    }
  }
  // frame: two obsidian columns + top, interior is 1x2 portal blocks
  const put = (bx, by, bz, id) => world.recordEdit(dim, bx, by, bz, id);
  for (const dx of [-1, 1]) {
    for (let dy = 0; dy <= 2; dy++) put(x + dx, y + dy, z, B.OBSIDIAN);
  }
  put(x, y + 2, z, B.OBSIDIAN); // top of the frame
  put(x, y, z, B.PORTAL);
  put(x, y + 1, z, B.PORTAL);
  // clear a small standing area in front of and behind the portal
  for (const dz of [-1, 1]) {
    for (let dy = 0; dy <= 2; dy++) put(x, y + dy, z + dz, B.AIR);
  }
}

function switchDimension(targetDim, silent = false) {
  if (world.dim === targetDim) return;
  const from = [player.pos.x, player.pos.z];
  world.setDimension(targetDim);
  mobs.clear(); // mobs are overworld-only; don't simulate them in the nether

  let arrival;
  if (targetDim === DIM_NETHER) {
    const gen = world.generatorFor(DIM_NETHER);
    arrival = findNetherArrival(gen, Math.round(from[0]), Math.round(from[1]));
  } else {
    const gen = world.generatorFor(DIM_OVERWORLD);
    arrival = findOverworldArrival(gen, Math.round(from[0]), Math.round(from[1]));
  }
  buildPortalAt(targetDim, Math.floor(arrival[0]), Math.round(arrival[1]), Math.floor(arrival[2]));
  // stand inside the portal column we just built
  player.setPosition(arrival[0], arrival[1], arrival[2]);
  player.kb.set(0, 0, 0);
  portalLatch = true; // must step out before teleporting again
  world.update(arrival[0], arrival[2], 12);
  // hide remote players that stayed behind in the other dimension
  for (const r of remotes.values()) r.setDim(r.dim ?? DIM_OVERWORLD, targetDim);
  storeSoon();
  if (!silent) {
    Sfx.portal();
    hud.toast(targetDim === DIM_NETHER
      ? '🔥 Cehennem’e geçtin — geri dönmek için portalı kullan'
      : '🌅 Ana dünyaya döndün', 4500);
  }
}

// teleport when the player's body overlaps a portal block; latch until they
// step out so arriving inside a portal doesn't bounce them straight back
let portalLatch = false;
function checkPortal() {
  const px = Math.floor(player.pos.x);
  const py = Math.floor(player.pos.y + 0.5);
  const pz = Math.floor(player.pos.z);
  const touching = world.getBlock(px, py, pz) === B.PORTAL ||
    world.getBlock(px, py + 1, pz) === B.PORTAL;
  if (!touching) {
    portalLatch = false;
    return;
  }
  if (portalLatch || dead) return;
  portalLatch = true;
  switchDimension(world.dim === DIM_OVERWORLD ? DIM_NETHER : DIM_OVERWORLD);
}

// ---------- mob hooks ----------
function mobHooks() {
  return {
    onAttackPlayer: (dmg, dir) => {
      if (dead) return;
      damage(dmg, 'zombi tarafından yenildi');
      player.applyKnockback(dir.x * 7, 3.5, dir.z * 7);
    },
    onMobDeath: (mob) => {
      Sfx.mobDie();
      particles.burst(mob.pos.x, mob.pos.y + mob.height / 2, mob.pos.z,
        new THREE.Color(mob.kind === 'zombie' ? '#53a04e' : '#e89aa4'), 14);
    },
    onPigSound: () => Sfx.pig(),
    onZombieSound: () => Sfx.zombie(),
  };
}
const clock = new THREE.Clock();
let posTimer = 0;
let fpsCount = 0;
let fpsTime = 0;
let fps = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  fpsCount++;
  fpsTime += dt;
  if (fpsTime >= 0.5) {
    fps = Math.round(fpsCount / fpsTime);
    fpsCount = 0;
    fpsTime = 0;
  }

  attackCooldown = Math.max(0, attackCooldown - dt);

  if (worldReady) {
    player.enabled = !!document.pointerLockElement && !inventory.open && !dead;
    player.update(dt);
    world.update(player.pos.x, player.pos.z, 2);

    const underwater = player.headInWater();
    const inLava = player.bodyInLiquid(B.LAVA);
    sky.update(started ? dt : 0, player.pos, camera, underwater && !inLava, world.dim);
    if (inLava) {
      hud.setInLava(true);
      lavaTick += dt;
      if (lavaTick >= 0.5) {
        lavaTick = 0;
        damage(2, 'lavda yandın');
      }
    } else {
      hud.setInLava(false);
      hud.setUnderwater(underwater);
      lavaTick = Math.min(lavaTick + dt, 0.3);
    }

    // drowning: after 10s underwater you start taking damage
    if (underwater && !dead) {
      const prev = drownTimer;
      drownTimer += dt;
      if (drownTimer > 10 && Math.floor(drownTimer) !== Math.floor(prev)) {
        damage(2, 'boğuldun');
      }
    } else {
      drownTimer = 0;
    }

    // slow health regeneration when out of danger
    if (!dead && hp < MAX_HP && performance.now() - lastDamageAt > 8000) {
      regenTimer += dt;
      if (regenTimer >= 1.5) {
        regenTimer = 0;
        hp = Math.min(MAX_HP, hp + 1);
        hud.setHealth(hp);
      }
    } else {
      regenTimer = 0;
    }

    particles.update(dt);

    if (!dead) {
      mobs.update(dt, player, sky, world.dim, mobHooks());
      checkPortal();
    }

    for (const r of remotes.values()) r.update(dt);

    // block highlight + hold-to-mine with crack progress
    const hit = document.pointerLockElement && !dead
      ? raycastVoxel(world, camera.position, player.lookDir(), 6)
      : null;
    if (hit) {
      highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
      highlight.visible = true;
    } else {
      highlight.visible = false;
    }

    const target = mouseHeld && hit && !BLOCKS[hit.id].unbreakable ? hit : null;
    if (!target) {
      mining = null;
      crackMesh.visible = false;
    } else {
      if (!mining || mining.x !== target.x || mining.y !== target.y || mining.z !== target.z) {
        mining = { x: target.x, y: target.y, z: target.z, progress: 0 };
      }
      const def = BLOCKS[target.id];
      mining.progress += dt / (def.hardness ?? 0.5);
      const stage = Math.min(crackTextures.length - 1, Math.floor(mining.progress * crackTextures.length));
      if (crackMaterial.map !== crackTextures[stage]) {
        crackMaterial.map = crackTextures[stage];
        crackMaterial.needsUpdate = true;
      }
      crackMesh.position.set(mining.x + 0.5, mining.y + 0.5, mining.z + 0.5);
      crackMesh.visible = true;
      if (mining.progress >= 1) {
        applyEdit(mining.x, mining.y, mining.z, B.AIR);
        Sfx.dig(def.sound);
        particles.burst(
          mining.x + 0.5, mining.y + 0.5, mining.z + 0.5,
          tileAverageColor(atlas.canvas, def.tiles[1])
        );
        mining = null;
        crackMesh.visible = false;
      }
    }

    posTimer += dt;
    if (net && posTimer >= 0.1) {
      posTimer = 0;
      net.sendPos({
        p: [player.pos.x, player.pos.y, player.pos.z],
        yaw: player.yaw, pitch: player.pitch, dim: world.dim,
      });
    }

    hud.setCoords(player.pos, fps, player.flying);
  }

  renderer.render(scene, camera);
}

animate();
