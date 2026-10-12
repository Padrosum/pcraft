import * as THREE from 'three';
import { B, BLOCKS } from './constants.js';
import { createAtlas, createCrackTextures, tileAverageColor } from './render/textures.js';
import { Particles } from './render/particles.js';
import { Sky } from './render/sky.js';
import { World } from './world/world.js';
import { findSpawn } from './world/worldgen.js';
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
player.onJump = () => Sfx.jump();
player.onSplash = (fallSpeed) => (fallSpeed < -4 ? Sfx.splash() : Sfx.swim());
player.onStep = (groundId) => Sfx.step(BLOCKS[groundId]?.sound);
player.onSwim = () => Sfx.swim();
player.onLand = () => Sfx.land();

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
  return { seed: world.seed, edits: world.editsArray(), time: sky.time };
}

function setupWorld(seed, edits, time) {
  window.__pcraftSeed = seed;
  world.setSeed(seed);
  if (edits?.length) world.applyEdits(edits);
  if (typeof time === 'number') sky.time = time;
  const spawn = findSpawn(world.gen);
  player.setPosition(...spawn);
  world.update(spawn[0], spawn[2], 12); // first batch of chunks right away
}

function initWorld(seed, edits, time, source) {
  if (worldReady) return;
  worldReady = true;
  worldSource = source;
  clearInterval(stateTimeout);
  setupWorld(seed, edits, time);
  menu.hide();
  hud.show();
  started = true;
  lockPointer();
}

// World state from a peer. Normally this arrives before the join timeout,
// but on slow signaling it can come after we already fell back to a fresh
// world — in that case adopt the room's real world instead of ignoring it.
function onWorldState(data) {
  if (!worldReady) {
    initWorld(data.seed, data.edits, data.time, 'net');
    return;
  }
  if (data.seed !== world.seed) {
    if (worldSource === 'fresh') {
      setupWorld(data.seed, data.edits, data.time);
      worldSource = 'net';
      hud.toast('Odanın dünyasına geçildi');
    }
    return;
  }
  // same seed (e.g. we restored from a local save): merge newer edits
  if (data.edits?.length) world.applyEdits(data.edits);
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
      onPos: (peerId, d) => ensureRemote(peerId).setTarget(d.p, d.yaw, d.pitch),
      onBlock: ([x, y, z, id]) => {
        // record=true so we can serve the full edit log to future joiners
        world.setBlock(x, y, z, id, true);
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
    if (save) initWorld(save.seed, save.edits, save.time, 'save');
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
  net?.sendBlock([x, y, z, id]);
  storeSoon();
}

// debug/test handle
window.__pcraft = {
  getBlock: (x, y, z) => world.getBlock(x, y, z),
  setBlock: applyEdit,
  player,
};

let mouseHeld = false;
let mining = null; // { x, y, z, progress } while holding left click on a block

document.addEventListener('mousedown', (e) => {
  if (!started || !document.pointerLockElement) return;

  if (e.button === 0) {
    mouseHeld = true; // breaking progresses in the animation loop
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
  if (target !== B.AIR && target !== B.WATER) return;
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
  if (!started) return;
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
  if (!started) return;
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
  if (started && !inventory.open) {
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
  storeSave(roomId, { seed: world.seed, edits: world.editsArray(), time: sky.time });
}
setInterval(storeNow, 15000);
window.addEventListener('beforeunload', storeNow);

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

  if (worldReady) {
    player.enabled = !!document.pointerLockElement && !inventory.open;
    player.update(dt);
    world.update(player.pos.x, player.pos.z, 2);
    const underwater = player.headInWater();
    sky.update(started ? dt : 0, player.pos, camera, underwater);
    hud.setUnderwater(underwater);
    particles.update(dt);

    for (const r of remotes.values()) r.update(dt);

    // block highlight + hold-to-mine with crack progress
    const hit = document.pointerLockElement
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
      net.sendPos({ p: [player.pos.x, player.pos.y, player.pos.z], yaw: player.yaw, pitch: player.pitch });
    }

    hud.setCoords(player.pos, fps, player.flying);
  }

  renderer.render(scene, camera);
}

animate();
