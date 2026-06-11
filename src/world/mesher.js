import * as THREE from 'three';
import { CHUNK, HEIGHT, B, BLOCKS } from '../constants.js';

// Face corner tables: uv v=1 is the top of the tile (flipY=true convention).
// Triangles are (0,1,2),(2,1,3), CCW seen from outside.
const FACES = [
  { // -x
    dir: [-1, 0, 0], shade: 0.8, sideTex: true,
    corners: [
      { pos: [0, 1, 0], uv: [0, 1] },
      { pos: [0, 0, 0], uv: [0, 0] },
      { pos: [0, 1, 1], uv: [1, 1] },
      { pos: [0, 0, 1], uv: [1, 0] },
    ],
  },
  { // +x
    dir: [1, 0, 0], shade: 0.8, sideTex: true,
    corners: [
      { pos: [1, 1, 1], uv: [0, 1] },
      { pos: [1, 0, 1], uv: [0, 0] },
      { pos: [1, 1, 0], uv: [1, 1] },
      { pos: [1, 0, 0], uv: [1, 0] },
    ],
  },
  { // -y
    dir: [0, -1, 0], shade: 0.5, texSlot: 2,
    corners: [
      { pos: [1, 0, 1], uv: [1, 0] },
      { pos: [0, 0, 1], uv: [0, 0] },
      { pos: [1, 0, 0], uv: [1, 1] },
      { pos: [0, 0, 0], uv: [0, 1] },
    ],
  },
  { // +y
    dir: [0, 1, 0], shade: 1.0, texSlot: 0,
    corners: [
      { pos: [0, 1, 1], uv: [1, 1] },
      { pos: [1, 1, 1], uv: [0, 1] },
      { pos: [0, 1, 0], uv: [1, 0] },
      { pos: [1, 1, 0], uv: [0, 0] },
    ],
  },
  { // -z
    dir: [0, 0, -1], shade: 0.65, sideTex: true,
    corners: [
      { pos: [1, 0, 0], uv: [0, 0] },
      { pos: [0, 0, 0], uv: [1, 0] },
      { pos: [1, 1, 0], uv: [0, 1] },
      { pos: [0, 1, 0], uv: [1, 1] },
    ],
  },
  { // +z
    dir: [0, 0, 1], shade: 0.65, sideTex: true,
    corners: [
      { pos: [0, 0, 1], uv: [0, 0] },
      { pos: [1, 0, 1], uv: [1, 0] },
      { pos: [0, 1, 1], uv: [0, 1] },
      { pos: [1, 1, 1], uv: [1, 1] },
    ],
  },
];

const WATER_TOP = 14 / 16;

function makeBucket() {
  return { positions: [], normals: [], uvs: [], colors: [], indices: [] };
}

function bucketToGeometry(b) {
  if (b.indices.length === 0) return null;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(b.positions, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(b.normals, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uvs, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(b.colors, 3));
  g.setIndex(b.indices);
  return g;
}

// Builds {opaque, cutout, water} geometries for one chunk (local coords;
// caller positions the meshes at cx*CHUNK, 0, cz*CHUNK).
export function meshChunk(world, cx, cz, tileUV) {
  const buckets = { opaque: makeBucket(), cutout: makeBucket(), water: makeBucket() };
  const x0 = cx * CHUNK;
  const z0 = cz * CHUNK;
  const chunk = world.getChunk(cx, cz);

  for (let lx = 0; lx < CHUNK; lx++) {
    for (let lz = 0; lz < CHUNK; lz++) {
      for (let y = 0; y < HEIGHT; y++) {
        const id = chunk.get(lx, y, lz);
        if (id === B.AIR) continue;
        const def = BLOCKS[id];
        const bucket = buckets[def.group];
        const isWater = id === B.WATER;

        for (const face of FACES) {
          const nx = x0 + lx + face.dir[0];
          const ny = y + face.dir[1];
          const nz = z0 + lz + face.dir[2];
          let n;
          if (ny < 0) n = B.BEDROCK;
          else if (ny >= HEIGHT) n = B.AIR;
          else n = world.getBlock(nx, ny, nz);

          const nDef = BLOCKS[n];
          if (nDef.opaque) continue;
          if (n === id) continue; // cull faces between identical transparent blocks
          if (isWater && face.dir[1] === 0 && n !== B.AIR && BLOCKS[n].liquid) continue;

          const slot = face.texSlot ?? 1;
          const tile = def.tiles[face.sideTex ? 1 : slot];
          const [u0, v0, u1, v1] = tileUV(tile);
          const base = bucket.positions.length / 3;
          const surfaceDrop = isWater && face.dir[1] !== -1 && world.getBlock(x0 + lx, y + 1, z0 + lz) !== B.WATER;

          for (const c of face.corners) {
            let cy = c.pos[1];
            if (surfaceDrop && cy === 1) cy = WATER_TOP;
            bucket.positions.push(lx + c.pos[0], y + cy, lz + c.pos[2]);
            bucket.normals.push(...face.dir);
            bucket.uvs.push(u0 + c.uv[0] * (u1 - u0), v0 + c.uv[1] * (v1 - v0));
            bucket.colors.push(face.shade, face.shade, face.shade);
          }
          bucket.indices.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
        }
      }
    }
  }

  return {
    opaque: bucketToGeometry(buckets.opaque),
    cutout: bucketToGeometry(buckets.cutout),
    water: bucketToGeometry(buckets.water),
  };
}
