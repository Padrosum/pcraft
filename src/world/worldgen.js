import { createNoise2D } from 'simplex-noise';
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

export function makeGenerator(seed) {
  const n1 = createNoise2D(mulberry32(seed));
  const n2 = createNoise2D(mulberry32(seed + 1337));
  const n3 = createNoise2D(mulberry32(seed + 9999));

  function height(x, z) {
    let h =
      26 +
      n1(x / 110, z / 110) * 16 +
      n2(x / 34, z / 34) * 6 +
      n3(x / 9, z / 9) * 1.6;
    return Math.max(2, Math.min(HEIGHT - 12, Math.floor(h)));
  }

  function treeAt(x, z) {
    return hash2(seed, x, z) < 0.009;
  }

  function treeHeight(x, z) {
    return 4 + ((hash2(seed + 77, x, z) * 3) | 0);
  }

  return { seed, height, treeAt, treeHeight };
}

const idx = (x, y, z) => (x * CHUNK + z) * HEIGHT + y;

export function generateChunkData(gen, cx, cz) {
  const data = new Uint8Array(CHUNK * CHUNK * HEIGHT);
  const x0 = cx * CHUNK;
  const z0 = cz * CHUNK;

  // terrain
  for (let lx = 0; lx < CHUNK; lx++) {
    for (let lz = 0; lz < CHUNK; lz++) {
      const h = gen.height(x0 + lx, z0 + lz);
      const beach = h <= SEA_LEVEL + 1;
      for (let y = 0; y <= h; y++) {
        let id;
        if (y === 0) id = B.BEDROCK;
        else if (y < h - 3) id = B.STONE;
        else if (y < h) id = beach ? B.SAND : B.DIRT;
        else id = beach ? B.SAND : B.GRASS;
        data[idx(lx, y, lz)] = id;
      }
      for (let y = h + 1; y <= SEA_LEVEL; y++) {
        data[idx(lx, y, lz)] = B.WATER;
      }
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
      if (!gen.treeAt(wx, wz)) continue;
      const h = gen.height(wx, wz);
      if (h <= SEA_LEVEL + 1 || h + 7 >= HEIGHT) continue;
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
      if (h > SEA_LEVEL + 1) return [x + 0.5, h + 2.5, z + 0.5];
    }
  }
  return [0.5, HEIGHT - 10, 0.5];
}
