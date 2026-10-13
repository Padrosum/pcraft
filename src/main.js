import * as THREE from 'three';
import { B, BLOCKS, TOOL_CLASS, DIM_OVERWORLD, DIM_NETHER } from './constants.js';
import { config } from './config.js';
import { createAtlas, createCrackTextures, tileAverageColor, itemIconCanvas } from './render/textures.js';
import { Particles } from './render/particles.js';
import { Sky } from './render/sky.js';
import { World } from './world/world.js';
import {
  findSpawn, findNetherArrival, findOverworldArrival,
} from './world/worldgen.js';
import { ITEMS, BLOCK_DROPS, MOB_DROPS, TIER_SPEED } from './world/items.js';
import { PlayerController } from './player/controls.js';
import { raycastVoxel } from './player/raycast.js';
import { Sfx } from './audio/sounds.js';
import { Hud } from './ui/hud.js';
import { Inventory } from './ui/inventory.js';
import { Menu } from './ui/menu.js';
import { SettingsMenu } from './ui/panels.js';
import { GroundItems } from './render/groundItems.js';
import {
  getRoomFromHash, newRoomId, setRoomHash, roomLink, loadSave, storeSave,
} from './net/room.js';
import { connect } from './net/sync.js';
import { RemotePlayer } from './net/remotePlayer.js';
import { MobManager, raycastMobs } from './render/mobs.js';

const MOB_NAMES = {
  pig: 'Domuz', sheep: 'Koyun', cow: 'İnek', chicken: 'Tavuk', zombie: 'Zombi',
  piglin: 'Piglin', hellhound: 'Cehennem Köpeği', magma: 'Magma Küpü',
  blaze: 'Alev', wraith: 'Hayalet',
};

// ---------- three.js setup ----------
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(config.fov, window.innerWidth / window.innerHeight, 0.1, 800);

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
const groundItems = new GroundItems(scene, atlas.canvas);
groundItems.iconProvider = (id) => {
  const def = ITEMS[id];
  if (def?.block !== undefined) return null; // blok itemleri küp olarak çizilir
  return itemIconCanvas(id, 32);
};

player.onJump = () => { Sfx.jump(); addExhaustion(0.2); };
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
const inventory = new Inventory(atlas.canvas);
const pauseEl = document.getElementById('pause');
inventory.onChange = () => refreshHotbar();
refreshHotbar();

player.onFly = (flying) => hud.toast(
  flying ? 'Uçuş açıldı — Space yukarı, Shift aşağı' : 'Uçuş kapandı'
);

function refreshHotbar() {
  hud.setHotbar(inventory.slots.slice(0, 9), inventory.selected);
}

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

const isCreative = () => config.gamemode === 'creative';
const invulnerable = () => config.god || isCreative();

// ---------- health / hunger / death ----------
const MAX_HP = 20;
const MAX_HUNGER = 20;
let hp = MAX_HP;
let hunger = MAX_HUNGER;
let exhaustion = 0;
let starveTimer = 0;
let regenTimer = 0;
let dead = false;
let lastDamageAt = -Infinity;
let breath = 10; // saniye cinsinden kalan nefes
let lavaTick = 0;
let respawnPoint = null; // [x, y, z] in the overworld

const deathEl = document.getElementById('death');
const deathReasonEl = document.getElementById('death-reason');

function damage(n, reason = '') {
  if (dead || n <= 0 || invulnerable()) return;
  hp = Math.max(0, hp - n);
  lastDamageAt = performance.now();
  addExhaustion(0.1);
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
  hunger = MAX_HUNGER;
  exhaustion = 0;
  breath = 10;
  hud.setHealth(hp);
  hud.setHunger(hunger);
  deathEl.hidden = true;
  if (world.dim !== DIM_OVERWORLD) switchDimension(DIM_OVERWORLD, true);
  const spawn = respawnPoint || findSpawn(world.generatorFor(DIM_OVERWORLD));
  player.setPosition(...spawn);
  player.setFlying(false);
  mobs.clear();
  groundItems.clear();
  lockPointer();
}
document.getElementById('respawn-btn').addEventListener('click', respawn);

function addExhaustion(n) {
  if (!config.hunger || isCreative()) return;
  exhaustion += n;
  while (exhaustion >= 4) {
    exhaustion -= 4;
    hunger = Math.max(0, hunger - 1);
    hud.setHunger(hunger);
  }
}

function eat(stack) {
  const food = ITEMS[stack.id]?.food;
  if (!food || hunger >= MAX_HUNGER) return false;
  hunger = Math.min(MAX_HUNGER, hunger + food);
  hp = Math.min(MAX_HP, hp + (food >= 4 ? 2 : 1));
  hud.setHunger(hunger);
  hud.setHealth(hp);
  if (!isCreative()) inventory.consumeSelected(1);
  Sfx.eat();
  return true;
}

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
  if (Array.isArray(dimsOrEdits)) {
    world.applyEditsTo(dimsOrEdits, DIM_OVERWORLD);
  } else if (dimsOrEdits) {
    for (const [dim, arr] of Object.entries(dimsOrEdits)) {
      world.applyEditsTo(arr, Number(dim));
    }
  }
  if (typeof time === 'number') sky.time = time;
  world.setDimension(DIM_OVERWORLD);
  const spawn = findSpawn(world.generatorFor(DIM_OVERWORLD));
  respawnPoint = spawn;
  player.setPosition(...spawn);
  world.update(spawn[0], spawn[2], 12);
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
  hud.setHunger(hunger);
  applySetting('*');
  started = true;
  lockPointer();
}

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
        const isNew = !peerNames.has(peerName);
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
    net = null;
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

function breakSeconds(blockId) {
  const def = BLOCKS[blockId];
  const base = def.hardness ?? 0.5;
  if (isCreative()) return 0;
  const held = inventory.selectedStack();
  const tool = held ? ITEMS[held.id] : null;
  const cls = TOOL_CLASS[blockId];
  let mul = 1;
  if (tool?.tool && cls && tool.tool === cls) mul = TIER_SPEED[tool.tier] ?? 1;
  if (tool?.tool === 'sword') mul = 1.5; // kılıç keser gibi
  return base / mul;
}

function onBlockBroken(x, y, z, id) {
  const def = BLOCKS[id];
  Sfx.dig(def.sound);
  if (config.particles) {
    particles.burst(x + 0.5, y + 0.5, z + 0.5, tileAverageColor(atlas.canvas, def.tiles[1]));
  }
  if (!isCreative()) {
    const drop = BLOCK_DROPS[id];
    if (drop) groundItems.spawn(drop.id, drop.count, x, y, z);
    addExhaustion(0.05);
  }
}

const SWORD_DAMAGE_BY_TIER = { 1: 4, 2: 5, 3: 6 };

function punchMob() {
  if (attackCooldown > 0) return false;
  const hit = raycastMobs(mobs.mobs, camera.position, player.lookDir(), 4);
  if (!hit) return false;
  const blockHit = raycastVoxel(world, camera.position, player.lookDir(), hit.dist);
  if (blockHit) return false;
  attackCooldown = 0.25;
  const dir = player.lookDir();
  dir.y = 0;
  dir.normalize();
  const held = inventory.selectedStack();
  const tool = held ? ITEMS[held.id] : null;
  const dmg = tool?.tool === 'sword' ? (SWORD_DAMAGE_BY_TIER[tool.tier] ?? 2) : 1;
  if (hit.mob.hurt(dmg, dir)) {
    Sfx.mobHit();
    addExhaustion(0.1);
  }
  return true;
}

let mouseHeld = false;
let mining = null;
let attackCooldown = 0;

document.addEventListener('mousedown', (e) => {
  if (!started || !document.pointerLockElement || dead) return;
  if (e.button === 0) {
    if (!punchMob()) mouseHeld = true;
    return;
  }
  if (e.button !== 2) return;

  // sağ tık: ye veya blok koy
  const held = inventory.selectedStack();
  if (!held) return;
  if (ITEMS[held.id]?.food && eat(held)) return;

  const def = ITEMS[held.id];
  if (def?.block === undefined) return;
  const hit = raycastVoxel(world, camera.position, player.lookDir(), 6);
  if (!hit) return;
  const x = hit.x + hit.nx;
  const y = hit.y + hit.ny;
  const z = hit.z + hit.nz;
  const target = world.getBlock(x, y, z);
  if (target !== B.AIR && target !== B.WATER && target !== B.LAVA) return;
  if (player.intersectsBlock(x, y, z)) return;
  const blockDef = BLOCKS[def.block];
  if (blockDef.needsGround && !BLOCKS[world.getBlock(x, y - 1, z)].solid) return;
  applyEdit(x, y, z, def.block);
  Sfx.place();
  if (!isCreative()) inventory.consumeSelected(1);
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

function selectHotbar(i) {
  inventory.selected = i;
  refreshHotbar();
  const s = inventory.selectedStack();
  if (s) hud.flashItemName(s.id);
}
document.addEventListener('keydown', (e) => {
  if (!started || dead) return;
  if (e.code === 'KeyE') {
    inventory.toggle();
    if (!inventory.open) lockPointer();
    return;
  }
  if (e.code.startsWith('Digit')) {
    const n = Number(e.code.slice(5));
    if (n >= 1 && n <= 9) selectHotbar(n - 1);
  }
});
window.addEventListener('wheel', (e) => {
  if (document.pointerLockElement) {
    const n = 9;
    selectHotbar((inventory.selected + (e.deltaY > 0 ? 1 : -1) + n) % n);
  }
});

// ---------- pause / pointer lock ----------
renderer.domElement.addEventListener('click', () => {
  if (started && !inventory.open && !document.pointerLockElement && !dead) {
    lockPointer();
  }
});
document.addEventListener('pointerlockchange', () => {
  if (!started || dead) return;
  const locked = !!document.pointerLockElement;
  if (!locked && !inventory.open) pauseEl.hidden = false;
  else pauseEl.hidden = true;
});
document.addEventListener('pointerlockerror', () => {
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

// ---------- ayarlar & geliştirici menüsü ----------
function applySetting(key) {
  if (key === '*' || key === 'fov') {
    camera.fov = config.fov;
    camera.updateProjectionMatrix();
  }
  if (key === '*' || key === 'mobs') {
    mobs.enabled = config.mobs;
    if (!config.mobs) mobs.clear();
  }
  if (key === '*' || key === 'showCoords') hud.toggleCoords(config.showCoords);
  if (key === '*' || key === 'hunger') {
    document.getElementById('hunger').style.display = config.hunger ? 'flex' : 'none';
    if (config.hunger) hud.setHunger(hunger);
  }
  if (key === '*' || key === 'gamemode') {
    if (isCreative()) {
      player.setFlying(true);
      hud.toast('Yaratıcı mod: hasar yok, bloklar sınırsız');
    } else {
      player.setFlying(false);
    }
  }
}

const gens = () => ({
  overworld: world.generatorFor(DIM_OVERWORLD),
  nether: world.generatorFor(DIM_NETHER),
});

const settings = new SettingsMenu({
  onSetting: applySetting,
  setTime: (t) => { sky.time = t; },
  teleport: (x, y, z) => {
    player.setPosition(x, y, z);
    player.setFlying(true);
    world.update(x, z, 20);
  },
  toggleDim: () => switchDimension(world.dim === DIM_OVERWORLD ? DIM_NETHER : DIM_OVERWORLD),
  give: (id, count) => inventory.add(id, count),
  spawnMob: (kind) => {
    const m = mobs.spawn(kind, player.pos.x + 2, player.pos.y + 2, player.pos.z + 2);
    if (m) hud.toast(`${MOB_NAMES[kind] ?? kind} çağrıldı`);
  },
  killMobs: () => mobs.killAll(),
  clearInv: () => inventory.clear(),
  newWorld: () => devNewWorld(),
});
document.getElementById('settings-btn').addEventListener('click', () => {
  pauseEl.hidden = true;
  settings.show();
});
document.getElementById('settings-close').addEventListener('click', () => {
  settings.hide();
  pauseEl.hidden = false;
});

function devNewWorld() {
  const seed = (Math.random() * 0xffffffff) | 0;
  world.setSeed(seed);
  world.setDimension(DIM_OVERWORLD);
  const spawn = findSpawn(world.generatorFor(DIM_OVERWORLD));
  respawnPoint = spawn;
  player.setPosition(...spawn);
  mobs.clear();
  groundItems.clear();
  world.update(spawn[0], spawn[2], 12);
  storeSoon();
  hud.toast('Yeni dünya oluşturuldu (seed: ' + seed + ')');
}

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
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      world.recordEdit(dim, x + dx, y - 1, z + dz, B.OBSIDIAN);
    }
  }
  const put = (bx, by, bz, id) => world.recordEdit(dim, bx, by, bz, id);
  for (const dx of [-1, 1]) {
    for (let dy = 0; dy <= 2; dy++) put(x + dx, y + dy, z, B.OBSIDIAN);
  }
  put(x, y + 2, z, B.OBSIDIAN);
  put(x, y, z, B.PORTAL);
  put(x, y + 1, z, B.PORTAL);
  for (const dz of [-1, 1]) {
    for (let dy = 0; dy <= 2; dy++) put(x, y + dy, z + dz, B.AIR);
  }
}

function switchDimension(targetDim, silent = false) {
  if (world.dim === targetDim) return;
  const from = [player.pos.x, player.pos.z];
  world.setDimension(targetDim);
  mobs.clear();
  groundItems.clear();

  const gen = world.generatorFor(targetDim);
  const arrival = targetDim === DIM_NETHER
    ? findNetherArrival(gen, Math.round(from[0]), Math.round(from[1]))
    : findOverworldArrival(gen, Math.round(from[0]), Math.round(from[1]));
  buildPortalAt(targetDim, Math.floor(arrival[0]), Math.round(arrival[1]), Math.floor(arrival[2]));
  player.setPosition(arrival[0], arrival[1], arrival[2]);
  player.kb.set(0, 0, 0);
  portalLatch = true;
  world.update(arrival[0], arrival[2], 12);
  for (const r of remotes.values()) r.setDim(r.dim ?? DIM_OVERWORLD, targetDim);
  storeSoon();
  if (!silent) {
    Sfx.portal();
    hud.toast(targetDim === DIM_NETHER
      ? '🔥 Cehennem’e geçtin — geri dönmek için portalı kullan'
      : '🌅 Ana dünyaya döndün', 4500);
  }
}

let portalLatch = false;
function checkPortal() {
  const px = Math.floor(player.pos.x);
  const py = Math.floor(player.pos.y + 0.5);
  const pz = Math.floor(player.pos.z);
  const touching = world.getBlock(px, py, pz) === B.PORTAL ||
    world.getBlock(px, py + 1, pz) === B.PORTAL;
  if (!touching) { portalLatch = false; return; }
  if (portalLatch || dead) return;
  portalLatch = true;
  switchDimension(world.dim === DIM_OVERWORLD ? DIM_NETHER : DIM_OVERWORLD);
}

// ---------- mob hooks ----------
function mobHooks() {
  return {
    onAttackPlayer: (dmg, dir, kind) => {
      if (dead) return;
      damage(dmg, `${MOB_NAMES[kind] ?? 'Yaratık'} seni öldürdü`);
      player.applyKnockback(dir.x * 7, 3.5, dir.z * 7);
    },
    onMobDeath: (mob) => {
      Sfx.mobDie();
      if (config.particles) {
        particles.burst(mob.pos.x, mob.pos.y + mob.height / 2, mob.pos.z, new THREE.Color('#c04040'), 12);
      }
      // ganimet
      if (mob.dropLoot) {
        for (const drop of MOB_DROPS[mob.kind] ?? []) {
          if (Math.random() > drop.chance) continue;
          const n = drop.min + Math.floor(Math.random() * (drop.max - drop.min + 1));
          if (n > 0) groundItems.spawn(drop.id, n, mob.pos.x, mob.pos.y + 0.4, mob.pos.z);
        }
      }
    },
    onMobSound: (kind) => Sfx.mobSound(kind),
  };
}

// ---------- debug/test handle ----------
window.__pcraft = {
  getBlock: (x, y, z) => world.getBlock(x, y, z),
  setBlock: applyEdit,
  player,
  world,
  mobs,
  inventory,
  config,
  damage: (n) => damage(n, 'test'),
  switchDimension: (d) => switchDimension(d),
};

// ---------- main loop ----------
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
    if (player.sprinting) addExhaustion(dt * 0.12);
    world.update(player.pos.x, player.pos.z, 2);

    const underwater = player.headInWater();
    const inLava = player.bodyInLiquid(B.LAVA);
    sky.update(started ? dt : 0, player.pos, camera, underwater && !inLava, world.dim);
    if (inLava) {
      hud.setInLava(true);
      lavaTick += dt;
      if (lavaTick >= 0.5) { lavaTick = 0; damage(2, 'lavda yandın'); }
    } else {
      hud.setInLava(false);
      hud.setUnderwater(underwater);
      lavaTick = Math.min(lavaTick + dt, 0.3);
    }

    // nefes: 10 sn su altında kalınca hasar
    if (underwater && !dead && !isCreative()) {
      const prev = breath;
      breath = Math.max(0, breath - dt);
      hud.setAir(breath);
      if (breath <= 0 && Math.floor(prev) !== 0) damage(2, 'boğuldun');
    } else {
      breath = Math.min(10, breath + dt * 4);
      hud.setAir(10);
    }

    // açlık: dolu ve hasarlıysa iyileş, boşsa açlıktan öl
    if (config.hunger && !dead && !isCreative()) {
      if (hunger >= 18 && hp < MAX_HP) {
        regenTimer += dt;
        if (regenTimer >= 4) {
          regenTimer = 0;
          hp = Math.min(MAX_HP, hp + 1);
          hud.setHealth(hp);
          addExhaustion(1);
        }
      } else if (hunger <= 0) {
        starveTimer += dt;
        if (starveTimer >= 4) { starveTimer = 0; damage(1, 'açlıktan öldün'); }
      } else {
        regenTimer = 0;
        starveTimer = 0;
      }
    }

    if (config.particles) particles.update(dt);
    groundItems.update(dt, world, player, (id, count) => inventory.add(id, count));

    if (!dead && config.mobs) mobs.update(dt, player, sky, world.dim, gens(), mobHooks());
    if (!dead) checkPortal();

    for (const r of remotes.values()) r.update(dt);

    // hedef bloğu + kırma ilerlemesi
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
      const secs = breakSeconds(target.id);
      mining.progress += secs <= 0 ? 999 : dt / secs;
      const stage = Math.min(crackTextures.length - 1, Math.floor(mining.progress * crackTextures.length));
      if (crackMaterial.map !== crackTextures[stage]) {
        crackMaterial.map = crackTextures[stage];
        crackMaterial.needsUpdate = true;
      }
      crackMesh.position.set(mining.x + 0.5, mining.y + 0.5, mining.z + 0.5);
      crackMesh.visible = true;
      if (mining.progress >= 1) {
        const bx = mining.x, by = mining.y, bz = mining.z, bid = target.id;
        applyEdit(bx, by, bz, B.AIR);
        onBlockBroken(bx, by, bz, bid);
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
