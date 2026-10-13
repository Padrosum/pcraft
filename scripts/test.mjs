// Tarayıcısız regresyon testleri: dünya üretimi, düzenleme deposu,
// mesher tutarlılığı ve oyuncu fiziği. `npm test` ile çalışır.
import * as THREE from 'three';
import { CHUNK, HEIGHT, SEA_LEVEL, B, BLOCKS } from '../src/constants.js';
import { Chunk } from '../src/world/chunk.js';
import { makeGenerator, generateChunkData, findSpawn, MOUNTAIN_LEVEL } from '../src/world/worldgen.js';
import { meshChunk } from '../src/world/mesher.js';

let failures = 0;
const check = (label, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${extra ? ' — ' + extra : ''}`);
  if (!ok) failures++;
};
const section = (name) => console.log(`\n== ${name} ==`);

const fakeScene = { add() {}, remove() {} };
const fakeAtlas = { texture: null, tileUV: (i) => [i / 16, 0, (i + 1) / 16, 1] };

// ---------- dünya üretimi ----------
section('dünya üretimi');
{
  const gen = makeGenerator(12345);

  const biomes = {};
  for (let x = -200; x < 200; x += 4) {
    for (let z = -200; z < 200; z += 4) {
      const h = gen.height(x, z);
      const b = gen.biomeAt(x, z, h);
      biomes[b] = (biomes[b] || 0) + 1;
    }
  }
  for (const b of ['beach', 'desert', 'snow', 'forest', 'plains']) {
    check(`biyom üretiliyor: ${b}`, (biomes[b] || 0) > 0, JSON.stringify(biomes));
  }

  // mağaralar: yeraltının makul bir kısmı Boşluk olmalı
  let underground = 0, air = 0, ore = 0, water = 0, leaves = 0;
  for (let i = 0; i < 16; i++) {
    const cx = (i % 4) - 2;
    const cz = ((i / 4) | 0) - 2;
    const data = generateChunkData(gen, cx, cz);
    for (let lx = 0; lx < CHUNK; lx++) {
      for (let lz = 0; lz < CHUNK; lz++) {
        const h = gen.height(cx * CHUNK + lx, cz * CHUNK + lz);
        for (let y = 2; y <= Math.max(2, h - 4); y++) {
          underground++;
          if (data[(lx * CHUNK + lz) * HEIGHT + y] === B.AIR) air++;
        }
      }
    }
    for (const id of data) {
      if (id === B.COAL_ORE || id === B.IRON_ORE) ore++;
      if (id === B.WATER) water++;
      if (id === B.LEAVES) leaves++;
    }
  }
  const caveRatio = air / underground;
  check('mağara oranı %5-35 arasında', caveRatio > 0.05 && caveRatio < 0.35, `%${(caveRatio * 100).toFixed(1)}`);
  check('cevher üretiliyor', ore > 0, `${ore} blok`);
  check('su üretiliyor', water > 0, `${water} blok`);
  check('ağaç üretiliyor', leaves > 0, `${leaves} blok`);

  // spawn: 300 seed boyunca ağaç/kaktüs içine değil, karaya
  const spawnBiomes = new Set();
  let spawnOk = true;
  for (let seed = 1; seed <= 300; seed++) {
    const g = makeGenerator(seed);
    const [x, y, z] = findSpawn(g);
    const xi = Math.floor(x);
    const zi = Math.floor(z);
    const h = g.height(xi, zi);
    const col = h > SEA_LEVEL + 1 && h < MOUNTAIN_LEVEL &&
      !g.treeAt(xi, zi, h) && !g.cactusAt(xi, zi, h);
    if (!col) spawnOk = false;
    spawnBiomes.add(g.biomeAt(xi, zi, h));
  }
  check('spawn her zaman kuru ve ağaçsız', spawnOk);
  check('spawn biyomları çeşitli (>=3)', spawnBiomes.size >= 3, [...spawnBiomes].join(','));

  const t0 = performance.now();
  for (let i = 0; i < 50; i++) generateChunkData(gen, i % 10, (i / 10) | 0);
  const ms = (performance.now() - t0) / 50;
  check('üretim hızı < 5 ms/chunk', ms < 5, `${ms.toFixed(2)} ms`);
}

// ---------- düzenleme deposu ----------
section('düzenleme deposu');
{
  const { World } = await import('../src/world/world.js');
  const world = new World(fakeScene, fakeAtlas);
  world.setSeed(3);
  check('yeni dünya düzenlemesiz', world.edits.size === 0);

  world.setBlock(5, 40, 5, B.BRICK, true);
  check('blok yazıldı', world.getBlock(5, 40, 5) === B.BRICK);
  world.chunks.delete('0,0');
  check('düzenleme chunk yeniden yüklenince duruyor', world.getBlock(5, 40, 5) === B.BRICK);

  world.setBlock(20, 45, 5, B.COBBLE, true); // henüz yüklenmemiş chunk
  world.chunks.delete('1,0');
  check('uzak chunk düzenlemesi duruyor', world.getBlock(20, 45, 5) === B.COBBLE);

  const saved = world.editsArray();
  const world2 = new World(fakeScene, fakeAtlas);
  world2.setSeed(3);
  world2.applyEdits(saved);
  check('kayıt/yükleme turu: tuğla', world2.getBlock(5, 40, 5) === B.BRICK);
  check('kayıt/yükleme turu: kırıktaş', world2.getBlock(20, 45, 5) === B.COBBLE);

  world.setSeed(99);
  check('seed değişince düzenlemeler sıfırlanıyor', world.edits.size === 0 && world.dimEditsByChunk.get(0)?.size === 0);

  const before = world.getBlock(5, 40, 5);
  check('aynı blok tekrar yazılmıyor', world.setBlock(5, 40, 5, before, true) === false && world.edits.size === 0);
}

// ---------- boyutlar ----------
section('boyutlar (ana dünya / cehennem)');
{
  const { World } = await import('../src/world/world.js');
  const {
    makeNetherGenerator, generateNetherData, findNetherArrival, findOverworldArrival, LAVA_LEVEL,
  } = await import('../src/world/worldgen.js');
  const { DIM_OVERWORLD, DIM_NETHER } = await import('../src/constants.js');

  const world = new World(fakeScene, fakeAtlas);
  world.setSeed(3);
  check('başlangıç boyutu ana dünya', world.dim === DIM_OVERWORLD);

  // her boyutta ayrı düzenleme
  world.setBlock(5, 40, 5, B.BRICK, true); // ana dünyada
  world.setDimension(DIM_NETHER);
  check('boyut değişince chunklar temizlendi', world.chunks.size === 0 && world.meshes.size === 0);
  check('ana dünyadaki düzenleme cehenneme sızmıyor', world.getBlock(5, 40, 5) !== B.BRICK);
  world.setBlock(5, 40, 5, B.GLOWSTONE, true); // cehenneme ayrı düzenleme
  world.setDimension(DIM_OVERWORLD);
  check('geri dönünce ana dünya düzenlemesi yerinde', world.getBlock(5, 40, 5) === B.BRICK);
  world.setDimension(DIM_NETHER);
  check('cehennem düzenlemesi yerinde', world.getBlock(5, 40, 5) === B.GLOWSTONE);
  check('boyut bazlı düzenleme listeleri ayrı',
    world.editsArray(DIM_OVERWORLD).length === 1 && world.editsArray(DIM_NETHER).length === 1);

  // recordEdit: başka boyuta kayıt aktif boyutun chunk'ını bozmamalı
  world.recordEdit(DIM_OVERWORLD, 5, 40, 5, B.STONE);
  check('recordEdit diğer boyuta yazdı, aktif boyut dokunulmadı', world.getBlock(5, 40, 5) === B.GLOWSTONE);
  world.setDimension(DIM_OVERWORLD);
  check('recordEdit ana dünyada uygulandı', world.getBlock(5, 40, 5) === B.STONE);

  // cehennem üretimi
  const ngen = makeNetherGenerator(3);
  const data = generateNetherData(ngen, 0, 0);
  let nether = {}, bedrockTop = 0, bedrockBottom = 0;
  for (const id of data) nether[id] = (nether[id] || 0) + 1;
  const H = HEIGHT;
  for (let i = 0; i < CHUNK * CHUNK; i++) {
    if (data[i * H + 0] === B.BEDROCK) bedrockBottom++;
    if (data[i * H + (H - 1)] === B.BEDROCK) bedrockTop++;
  }
  check('cehennem: netherrack üretiliyor', (nether[B.NETHERRACK] || 0) > 1000, `${nether[B.NETHERRACK]}`);
  check('cehennem: lav denizi var', (nether[B.LAVA] || 0) > 200, `${nether[B.LAVA]}`);
  check('cehennem: glowstone var', (nether[B.GLOWSTONE] || 0) > 0, `${nether[B.GLOWSTONE]}`);
  check('cehennem: taban ve tavan bedrock', bedrockBottom === CHUNK * CHUNK && bedrockTop === CHUNK * CHUNK);
  check('cehennem: açık mağara boşlukları var', (nether[B.AIR] || 0) > 1000, `${nether[B.AIR]}`);

  // varış noktaları
  const [nx, ny, nz] = findNetherArrival(ngen, 8, 8);
  check('cehennem varışı lav denizinin üstünde', ny > LAVA_LEVEL + 2, `y=${ny}`);
  check('cehennem varışı sağlam zeminde', ngen.solidAt(Math.floor(nx), Math.floor(ny) - 1, Math.floor(nz)));
  check('cehennem varışı havada', !ngen.solidAt(Math.floor(nx), Math.floor(ny), Math.floor(nz)));

  const ogen = makeGenerator(3);
  const [ox, oy, oz] = findOverworldArrival(ogen, 100, 100);
  const oh = ogen.height(Math.floor(ox), Math.floor(oz));
  check('ana dünya varışı karada', oy > SEA_LEVEL + 1 && oh < 40, `y=${oy}`);

  // hız
  const t0 = performance.now();
  for (let i = 0; i < 30; i++) generateNetherData(ngen, i % 8, (i / 8) | 0);
  const ms = (performance.now() - t0) / 30;
  check('cehennem üretimi < 12 ms/chunk', ms < 12, `${ms.toFixed(2)} ms`);
}


// ---------- mesher ----------
section('mesher');
{
  // mesher artık dünya genelinde getBlock çağırmamalı; sadece chunk verisi okur
  class FakeWorld {
    constructor(seed) {
      this.gen = makeGenerator(seed);
      this.chunks = new Map();
    }
    getChunk(cx, cz) {
      const k = `${cx},${cz}`;
      let c = this.chunks.get(k);
      if (!c) {
        c = new Chunk(cx, cz, generateChunkData(this.gen, cx, cz));
        this.chunks.set(k, c);
      }
      return c;
    }
    getBlock() {
      throw new Error('mesher getBlock çağırmamalı');
    }
  }

  // su ve yaprak içeren bir seed bul (tüm bucketlar denenir)
  let seed = null;
  for (let s = 1; s < 200 && seed === null; s++) {
    const w = new FakeWorld(s);
    const c = w.getChunk(0, 0);
    let water = 0, leaves = 0;
    for (const id of c.data) {
      if (id === B.WATER) water++;
      if (id === B.LEAVES) leaves++;
    }
    if (water > 20 && leaves > 10) seed = s;
  }
  check('test için uygun seed bulundu', seed !== null, `seed ${seed}`);

  let meshed = 0, bad = 0, faces = 0;
  for (const [cx, cz] of [[0, 0], [1, 0], [0, 1], [-2, 3], [4, -4]]) {
    const geos = meshChunk(new FakeWorld(seed), cx, cz, fakeAtlas.tileUV);
    meshed++;
    for (const part of ['opaque', 'cutout', 'water']) {
      const g = geos[part];
      if (!g) continue;
      const pos = g.getAttribute('position');
      const idx = g.getIndex();
      faces += idx.count / 6;
      if (pos.count === 0 || idx.count % 6 !== 0) bad++;
      for (const v of pos.array) {
        if (!Number.isFinite(v)) { bad++; break; }
      }
      let max = 0;
      for (const i of idx.array) max = Math.max(max, i);
      if (max >= pos.count) bad++;
    }
  }
  check('5 chunk hatasız mesh edildi', meshed === 5 && bad === 0, `faces=${faces}`);
  check('mesh üretimi boş değil', faces > 1000, `faces=${faces}`);
}

// ---------- oyuncu fiziği ----------
section('oyuncu fiziği');
{
  const listeners = { document: {}, window: {} };
  const stub = (store) => ({
    addEventListener: (type, fn) => { (store[type] ||= []).push(fn); },
    removeEventListener: () => {},
    pointerLockElement: null,
  });
  globalThis.document = stub(listeners.document);
  globalThis.window = { addEventListener: stub(listeners.window).addEventListener };

  const { PlayerController } = await import('../src/player/controls.js');
  const fire = (target, type, ev) => {
    for (const fn of listeners[target][type] || []) fn({ preventDefault() {}, ...ev });
  };

  // düz zemin (y<=10), x>=4'te çukur
  const world = { getBlock: (x, y) => (y <= 10 && !(x >= 4 && x < 8) ? B.STONE : B.AIR) };
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100);
  const p = new PlayerController(camera, world);
  p.enabled = true;
  p.setPosition(0.5, 12, 0.5);
  const step = (n, dt = 1 / 60) => { for (let i = 0; i < n; i++) p.update(dt); };

  step(60);
  check('zemine düşüp duruyor', p.onGround && Math.abs(p.pos.y - 11) < 0.01, `y=${p.pos.y.toFixed(2)}`);

  p.setPosition(0.5, 12, 0.5);
  step(30);
  fire('document', 'keydown', { code: 'KeyW' });
  let z0 = p.pos.z;
  step(60);
  const walk = Math.abs(p.pos.z - z0);
  fire('document', 'keydown', { code: 'ShiftLeft' });
  z0 = p.pos.z;
  step(60);
  const sprint = Math.abs(p.pos.z - z0);
  fire('document', 'keyup', { code: 'ShiftLeft' });
  fire('document', 'keydown', { code: 'ControlLeft' });
  z0 = p.pos.z;
  step(60);
  const sneak = Math.abs(p.pos.z - z0);
  fire('document', 'keyup', { code: 'ControlLeft' });
  fire('document', 'keyup', { code: 'KeyW' });
  check('yürüme hızı ~4.3/s', Math.abs(walk - 4.3) < 0.5, walk.toFixed(2));
  check('koşma yürümeden hızlı', sprint > walk + 1, sprint.toFixed(2));
  check('çömelme yürümeden yavaş', sneak < walk - 1, sneak.toFixed(2));

  // çukura doğru yürüyünce düşer, çömelince durur
  p.yaw = -Math.PI / 2; // ileri = +x
  p.setPosition(2.5, 12, 0.5);
  p.vel.set(0, 0, 0);
  step(10);
  fire('document', 'keydown', { code: 'KeyW' });
  step(90);
  check('çukura doğru yürüyünce düşüyor', p.pos.y < 10.5, `y=${p.pos.y.toFixed(2)}`);

  p.setPosition(2.5, 12, 0.5);
  p.vel.set(0, 0, 0);
  step(10);
  fire('document', 'keydown', { code: 'ControlLeft' });
  step(150);
  fire('document', 'keyup', { code: 'ControlLeft' });
  fire('document', 'keyup', { code: 'KeyW' });
  check('çömelerek kenarda duruyor', p.pos.y > 10.5, `y=${p.pos.y.toFixed(2)} x=${p.pos.x.toFixed(2)}`);

  // uçuş
  p.setPosition(0.5, 20, 0.5);
  p.setFlying(true);
  step(30);
  check('uçuşta asılı kalıyor', Math.abs(p.pos.y - 20) < 0.01, `y=${p.pos.y.toFixed(2)}`);
  fire('document', 'keydown', { code: 'Space' });
  step(30);
  fire('document', 'keyup', { code: 'Space' });
  check('uçuşta Space yükseltiyor', p.pos.y > 22, `y=${p.pos.y.toFixed(2)}`);

  const flyEvents = [];
  p.onFly = (on) => flyEvents.push(on);
  fire('document', 'keydown', { code: 'KeyF' });
  check('F uçuşu kapatıyor', p.flying === false && flyEvents.at(-1) === false);
  p._lastSpace = 0;
  fire('document', 'keydown', { code: 'Space' });
  fire('document', 'keydown', { code: 'Space' });
  check('çift Boşluk uçuşu açıyor', p.flying === true && flyEvents.at(-1) === true);

  // zıplama
  fire('document', 'keyup', { code: 'Space' });
  p.setFlying(false);
  p.setPosition(0.5, 12, 0.5);
  p.vel.set(0, 0, 0);
  step(30);
  fire('document', 'keydown', { code: 'Space' });
  p.update(1 / 60);
  const jumpVel = p.vel.y;
  fire('document', 'keyup', { code: 'Space' });
  step(60);
  check('zıplama yukarı itiyor', jumpVel > 5, `vy=${jumpVel.toFixed(1)}`);
  check('zıplama sonrası yere iniyor', p.onGround && Math.abs(p.pos.y - 11) < 0.01, `y=${p.pos.y.toFixed(2)}`);
}

// ---------- moblar ----------
section('moblar');
{
  const { Mob, MobManager, raycastMobs } = await import('../src/render/mobs.js');
  const fakeScene2 = { add() {}, remove() {} };
  const flatWorld = { getBlock: (x, y) => (y <= 10 ? B.STONE : B.AIR) };
  const mplayer = { pos: new THREE.Vector3(50, 11, 50), dead: false };
  let attacks = 0;
  const mhooks = {
    onAttackPlayer: () => attacks++,
    onMobDeath: () => {},
    onPigSound: () => {},
    onZombieSound: () => {},
  };
  const mstep = (mob, n, dt = 1 / 60) => {
    for (let i = 0; i < n; i++) mob.update(dt, flatWorld, mplayer, mhooks);
  };

  const pig = new Mob('pig', fakeScene2, 0.5, 14, 0.5, 1);
  mstep(pig, 90);
  check('domuz zemine oturur', Math.abs(pig.pos.y - 11) < 0.05, `y=${pig.pos.y.toFixed(2)}`);
  check('domuz 3 canla başlar', pig.hp === 3);

  mplayer.pos.set(-3, 11, 2.5);
  const before = pig.pos.clone();
  pig.hurt(1, new THREE.Vector3(1, 0, 0));
  mstep(pig, 60);
  check('domuz vurulunca oyuncudan uzaklaşır', pig.pos.x > before.x + 1, `dx=${(pig.pos.x - before.x).toFixed(2)}`);

  pig.hurt(1, new THREE.Vector3(1, 0, 0));
  mstep(pig, 30);
  pig.hurt(1, new THREE.Vector3(1, 0, 0));
  check('3 vuruşta ölür', pig.removeMe, `hp=${pig.hp}`);

  const zombie = new Mob('zombie', fakeScene2, 8.5, 14, 0.5, 2);
  mplayer.pos.set(2.5, 11, 2.5);
  mstep(zombie, 240);
  check('zombi oyuncuya yaklaşır', zombie.pos.distanceTo(mplayer.pos) < 4,
    `dist=${zombie.pos.distanceTo(mplayer.pos).toFixed(2)}`);
  check('zombi saldırır', attacks > 0, `${attacks} saldırı`);

  const zBefore = zombie.pos.clone();
  zombie.hurt(2, new THREE.Vector3(0, 0, -1));
  mstep(zombie, 10);
  check('zombi geri teper', zombie.pos.z < zBefore.z - 0.1, `dz=${(zombie.pos.z - zBefore.z).toFixed(2)}`);

  const mgr = new MobManager(fakeScene2, flatWorld);
  const m1 = mgr.spawn('pig', 0.5, 11, 0.5);
  mgr.spawn('zombie', 3.5, 11, 0.5);
  const origin = new THREE.Vector3(-2.5, 12, 0.5);
  const dir = new THREE.Vector3(1, -0.15, 0);
  const hit = raycastMobs(mgr.mobs, origin, dir, 10);
  check('vuruş ışını mobu bulur', hit && hit.mob === m1);
  check('yukarı bakan ışın mob bulamaz', raycastMobs(mgr.mobs, origin, new THREE.Vector3(0, 1, 0), 10) === null);

  mplayer.pos.set(1000, 11, 1000);
  mgr.update(0.016, mplayer, { isNight: false }, 0, mhooks);
  check('uzaktaki moblar temizlenir', mgr.mobs.size === 0);

  // tek blok duvara tırmanma ve sonsuz tırmanmanın olmaması
  const stepWorld = {
    getBlock: (x, y, z) => {
      if (y <= 10) return B.STONE;
      if (x >= 4 && x < 8 && y === 11 && z >= -1 && z <= 1) return B.STONE;
      return B.AIR;
    },
  };
  const z2 = new Mob('zombie', fakeScene2, 0.5, 14, 0.5, 3);
  mplayer.pos.set(10, 11, 0.5);
  for (let i = 0; i < 600; i++) z2.update(1 / 60, stepWorld, mplayer, mhooks);
  check('zombi tek blok duvara tırmanır', z2.pos.x > 8, `x=${z2.pos.x.toFixed(2)}`);
  check('sonsuz tırmanma yok', z2.pos.y < 14, `y=${z2.pos.y.toFixed(2)}`);
}

console.log(failures === 0 ? '\nTÜMÜ GEÇTİ' : `\n${failures} TEST BAŞARISIZ`);
process.exit(failures === 0 ? 0 : 1);
