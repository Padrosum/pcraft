import { createNoise2D, createNoise3D } from 'simplex-noise';
import { CHUNK, HEIGHT, SEA_LEVEL, B } from '../constants.js';

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Deterministic per-column hash in [0,1)
function hash2(seed, x, z) {
  let h = seed ^ Math.imul(x, 374761393) ^ Math.imul(z, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// Deterministic 3D hash in [0,1), used for ore scattering
function hash3(seed, x, y, z) {
  let h = seed ^ Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1440662683);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h = Math.imul(h ^ (h >>> 16), 3582441857);
  return ((h ^ (h >>> 15)) >>> 0) / 4294967296;
}

// Above this height terrain turns to bare rock (and snow on the peaks)
export const MOUNTAIN_LEVEL = 40;

// |noise| above this carves a cave pocket
const CAVE_THRESHOLD = 0.62;

export function makeGenerator(seed) {
  const n1 = createNoise2D(mulberry32(seed));
  const n2 = createNoise2D(mulberry32(seed + 1337));
  const n3 = createNoise2D(mulberry32(seed + 9999));
  const nTemp = createNoise2D(mulberry32(seed + 5555));
  const nHum = createNoise2D(mulberry32(seed + 7777));
  const nCave = createNoise3D(mulberry32(seed + 4242));

  function height(x, z) {
    const h =
      26 +
      n1(x / 110, z / 110) * 16 +
      n2(x / 34, z / 34) * 6 +
      n3(x / 9, z / 9) * 1.6;
    return Math.max(2, Math.min(HEIGHT - 12, Math.floor(h)));
  }

  // 'beach' | 'mountain' | 'desert' | 'snow' | 'forest' | 'plains'
  function biomeAt(x, z, h = height(x, z)) {
    if (h <= SEA_LEVEL + 1) return 'beach';
    if (h >= MOUNTAIN_LEVEL) return 'mountain';
    // Sample climate away from the noise lattice origin, where simplex
    // noise is ~0 for every seed (which would make near-spawn biomes
    // always temperate). The offsets are fixed, so worlds stay deterministic.
    const temp = nTemp(x / 340 + 31.7, z / 340 + 11.3);
    if (temp > 0.5) return 'desert';
    if (temp < -0.5) return 'snow';
    return nHum(x / 260 - 17.2, z / 260 + 43.9) > 0.02 ? 'forest' : 'plains';
  }

  const TREE_DENSITY = { forest: 0.032, plains: 0.006, snow: 0.02 };

  function treeAt(x, z, h = height(x, z)) {
    const density = TREE_DENSITY[biomeAt(x, z, h)];
    return !!density && hash2(seed, x, z) < density;
  }

  function treeHeight(x, z) {
    return 4 + ((hash2(seed + 77, x, z) * 3) | 0);
  }

  function cactusAt(x, z, h = height(x, z)) {
    return biomeAt(x, z, h) === 'desert' && hash2(seed + 5, x, z) < 0.005;
  }

  function cactusHeight(x, z) {
    return 2 + ((hash2(seed + 91, x, z) * 2) | 0);
  }

  // underground air pockets and caverns
  function cave(x, y, z) {
    const c = nCave(x / 28, y / 20, z / 28);
    return c > CAVE_THRESHOLD || c < -CAVE_THRESHOLD;
  }

  function oreAt(x, y, z) {
    const r = hash3(seed + 21, x, y, z);
    if (y < 30 && r < 0.004) return B.IRON_ORE;
    if (r < 0.013) return B.COAL_ORE;
    if (r < 0.018) return B.GRAVEL;
    return B.AIR;
  }

  return {
    seed, height, biomeAt, treeAt, treeHeight, cactusAt, cactusHeight, cave, oreAt,
  };
}

const idx = (x, y, z) => (x * CHUNK + z) * HEIGHT + y;

export function generateChunkData(gen, cx, cz) {
  const data = new Uint8Array(CHUNK * CHUNK * HEIGHT);
  const x0 = cx * CHUNK;
  const z0 = cz * CHUNK;

  // terrain, biomes, caves, ores and water — column by column
  for (let lx = 0; lx < CHUNK; lx++) {
    for (let lz = 0; lz < CHUNK; lz++) {
      const wx = x0 + lx;
      const wz = z0 + lz;
      const h = gen.height(wx, wz);
      const biome = gen.biomeAt(wx, wz, h);

      let surface, filler;
      if (biome === 'beach') {
        surface = B.SAND; filler = B.SAND;
      } else if (biome === 'desert') {
        surface = B.SAND; filler = B.SANDSTONE;
      } else if (biome === 'mountain') {
        surface = h >= MOUNTAIN_LEVEL + 4 ? B.SNOW : B.STONE;
        filler = B.STONE;
      } else if (biome === 'snow') {
        surface = B.SNOW; filler = B.DIRT;
      } else {
        surface = B.GRASS; filler = B.DIRT;
      }

      for (let y = 0; y <= h; y++) {
        let id;
        if (y === 0) id = B.BEDROCK;
        else if (y < h - 3) id = B.STONE;
        else if (y < h) id = filler;
        else id = surface;
        data[idx(lx, y, lz)] = id;
      }

      // caves: keep a crust on low columns so lakes and beaches don't drain
      const caveTop = h > SEA_LEVEL + 2 ? h - 1 : h - 3;
      for (let y = 2; y <= caveTop; y++) {
        if (gen.cave(wx, y, wz)) data[idx(lx, y, lz)] = B.AIR;
      }

      // çiçekler: ova ve ormanda çimen üstüne
      if ((biome === 'plains' || biome === 'forest') && h < MOUNTAIN_LEVEL) {
        const surf = idx(lx, h, lz);
        if (data[surf] === B.GRASS && h + 1 < HEIGHT) {
          const r = hash2(gen.seed + 303, wx, wz);
          if (r < 0.006) data[idx(lx, h + 1, lz)] = r < 0.003 ? B.FLOWER_RED : B.FLOWER_YELLOW;
        }
      }

      // ores only replace intact stone
      for (let y = 3; y < h - 3; y++) {
        const i = idx(lx, y, lz);
        if (data[i] !== B.STONE) continue;
        const ore = gen.oreAt(wx, y, wz);
        if (ore !== B.AIR) data[i] = ore;
      }

      for (let y = h + 1; y <= SEA_LEVEL; y++) data[idx(lx, y, lz)] = B.WATER;
    }
  }

  // cacti (deserts only, and only on an intact sand surface)
  for (let lx = 0; lx < CHUNK; lx++) {
    for (let lz = 0; lz < CHUNK; lz++) {
      const wx = x0 + lx;
      const wz = z0 + lz;
      const h = gen.height(wx, wz);
      if (!gen.cactusAt(wx, wz, h)) continue;
      if (h + 4 >= HEIGHT) continue;
      if (data[idx(lx, h, lz)] !== B.SAND) continue;
      const ch = gen.cactusHeight(wx, wz);
      for (let dy = 1; dy <= ch; dy++) data[idx(lx, h + dy, lz)] = B.CACTUS;
    }
  }

  // trees — scan a margin so canopies from neighbour columns reach into this chunk
  const M = 3;
  const put = (wx, wy, wz, id, overwrite) => {
    const lx = wx - x0;
    const lz = wz - z0;
    if (lx < 0 || lx >= CHUNK || lz < 0 || lz >= CHUNK || wy < 0 || wy >= HEIGHT) return;
    const i = idx(lx, wy, lz);
    if (overwrite || data[i] === B.AIR) data[i] = id;
  };

  for (let wx = x0 - M; wx < x0 + CHUNK + M; wx++) {
    for (let wz = z0 - M; wz < z0 + CHUNK + M; wz++) {
      const h = gen.height(wx, wz);
      if (!gen.treeAt(wx, wz, h)) continue;
      if (h <= SEA_LEVEL + 1 || h >= MOUNTAIN_LEVEL || h + 7 >= HEIGHT) continue;
      const th = gen.treeHeight(wx, wz);
      for (let dy = 1; dy <= th; dy++) put(wx, h + dy, wz, B.LOG, true);
      for (let dy = th - 2; dy <= th + 1; dy++) {
        const r = dy >= th ? 1 : 2;
        for (let dx = -r; dx <= r; dx++) {
          for (let dz = -r; dz <= r; dz++) {
            if (dx === 0 && dz === 0 && dy <= th) continue;
            if (Math.abs(dx) === r && Math.abs(dz) === r && r === 2) continue;
            put(wx + dx, h + dy, wz + dz, B.LEAVES, false);
          }
        }
      }
    }
  }

  return data;
}

// Find a dry spawn column near origin. Starts the search at a random
// angle so players joining the same world don't stack on one spot.
export function findSpawn(gen) {
  const a0 = Math.random() * Math.PI * 2;
  for (let radius = 2; radius < 64; radius += 4) {
    for (let a = 0; a < 8; a++) {
      const ang = a0 + (a / 8) * Math.PI * 2;
      const x = Math.round(Math.cos(ang) * radius);
      const z = Math.round(Math.sin(ang) * radius);
      const h = gen.height(x, z);
      // dry, not on a bare rock peak, and not inside a tree or cactus
      if (h > SEA_LEVEL + 1 && h < MOUNTAIN_LEVEL &&
          !gen.treeAt(x, z, h) && !gen.cactusAt(x, z, h)) {
        return [x + 0.5, h + 2.5, z + 0.5];
      }
    }
  }
  return [0.5, HEIGHT - 10, 0.5];
}

// ---------- Cehennem (nether) ----------

export const LAVA_LEVEL = 14;

export function makeNetherGenerator(seed) {
  const nA = createNoise3D(mulberry32(seed + 101));
  const nB = createNoise3D(mulberry32(seed + 202));

  // Solid where density clears a threshold that loosens toward the ceiling
  // and floor: the middle stays open as big caverns.
  function solidAt(x, y, z) {
    if (y <= 1 || y >= HEIGHT - 2) return true;
    const mid = HEIGHT * 0.45;
    const bias = Math.min(1, Math.abs(y - mid) / mid);
    const density =
      nA(x / 44, y / 26, z / 44) * 0.72 +
      nB(x / 13, y / 9, z / 13) * 0.32;
    return density > 0.52 - bias * 0.42;
  }

  // scattered ceiling lights
  function glowAt(x, y, z) {
    let h = seed ^ Math.imul(x, 2654435761) ^ Math.imul(y, 40503) ^ Math.imul(z, 2246822519);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296 < 0.045;
  }

  return { seed, solidAt, glowAt, lavaLevel: LAVA_LEVEL };
}

export function generateNetherData(gen, cx, cz) {
  const data = new Uint8Array(CHUNK * CHUNK * HEIGHT);
  const x0 = cx * CHUNK;
  const z0 = cz * CHUNK;

  for (let lx = 0; lx < CHUNK; lx++) {
    for (let lz = 0; lz < CHUNK; lz++) {
      const wx = x0 + lx;
      const wz = z0 + lz;
      for (let y = 0; y < HEIGHT; y++) {
        let id;
        if (y === 0 || y === HEIGHT - 1) id = B.BEDROCK;
        else if (gen.solidAt(wx, y, wz)) id = B.NETHERRACK;
        else if (y <= gen.lavaLevel) id = B.LAVA;
        else id = B.AIR;
        data[idx(lx, y, lz)] = id;
      }
      // glowstone clusters hang from netherrack ceilings
      for (let y = LAVA_LEVEL + 3; y < HEIGHT - 3; y++) {
        const i = idx(lx, y, lz);
        if (data[i] !== B.AIR) continue;
        if (data[idx(lx, y + 1, lz)] !== B.NETHERRACK) continue;
        if (gen.glowAt(wx, y, wz)) data[i] = B.GLOWSTONE;
      }
    }
  }
  return data;
}

// Safe arrival spot in the nether near (x, z): a 2-high air pocket standing
// on solid ground above the lava sea.
export function findNetherArrival(gen, x, z) {
  for (let r = 0; r <= 14; r += 2) {
    for (let a = 0; a < 10; a++) {
      const ang = (a / 10) * Math.PI * 2;
      const px = Math.round(x + Math.cos(ang) * r);
      const pz = Math.round(z + Math.sin(ang) * r);
      for (let y = LAVA_LEVEL + 4; y < HEIGHT - 6; y++) {
        if (gen.solidAt(px, y, pz)) continue;
        if (gen.solidAt(px, y + 1, pz)) continue;
        if (!gen.solidAt(px, y - 1, pz)) continue;
        if (y - 2 <= gen.lavaLevel) continue;
        return [px + 0.5, y, pz + 0.5];
      }
    }
  }
  return [x + 0.5, LAVA_LEVEL + 6, z + 0.5];
}

// Surface arrival in the overworld near (x, z) — used when returning.
export function findOverworldArrival(gen, x, z) {
  for (let r = 0; r <= 24; r += 3) {
    for (let a = 0; a < 10; a++) {
      const ang = (a / 10) * Math.PI * 2;
      const px = Math.round(x + Math.cos(ang) * r);
      const pz = Math.round(z + Math.sin(ang) * r);
      const h = gen.height(px, pz);
      if (h > SEA_LEVEL + 1 && h < MOUNTAIN_LEVEL) return [px + 0.5, h + 2.5, pz + 0.5];
    }
  }
  return findSpawn(gen);
}
