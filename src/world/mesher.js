import * as THREE from 'three';
import { CHUNK, HEIGHT, B, BLOCKS } from '../constants.js';
import { blockIndex } from './chunk.js';

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
  const buckets = { opaque: makeBucket(), cutout: makeBucket(), water: makeBucket(), emissive: makeBucket() };
  const chunk = world.getChunk(cx, cz);
  const data = chunk.data;

  // Neighbour lookups used to go through world.getBlock per face (floor,
  // bounds and two Map lookups each). Grab the 4 side chunks once and read
  // their raw arrays directly; offsets here are never diagonal, so at most
  // one coordinate can wrap.
  const nWest = world.getChunk(cx - 1, cz);
  const nEast = world.getChunk(cx + 1, cz);
  const nNorth = world.getChunk(cx, cz - 1);
  const nSouth = world.getChunk(cx, cz + 1);

  function blockAt(lx, y, lz) {
    if (y < 0) return B.BEDROCK;
    if (y >= HEIGHT) return B.AIR;
    if (lx < 0) return nWest.data[blockIndex(CHUNK - 1, y, lz)];
    if (lx >= CHUNK) return nEast.data[blockIndex(0, y, lz)];
    if (lz < 0) return nNorth.data[blockIndex(lx, y, CHUNK - 1)];
    if (lz >= CHUNK) return nSouth.data[blockIndex(lx, y, 0)];
    return data[blockIndex(lx, y, lz)];
  }

  for (let lx = 0; lx < CHUNK; lx++) {
    for (let lz = 0; lz < CHUNK; lz++) {
      // Only walk up to the highest non-air block of this column.
      let top = HEIGHT - 1;
      while (top > 0 && data[blockIndex(lx, top, lz)] === B.AIR) top--;

      for (let y = 0; y <= top; y++) {
        const id = data[blockIndex(lx, y, lz)];
        if (id === B.AIR) continue;
        const def = BLOCKS[id];
        const bucket = buckets[def.group];

        // cross blocks (flowers, torches): two diagonal quads, both sides
        // visible via the DoubleSide cutout/emissive material
        if (def.cross) {
          const tile = def.tiles[1];
          const [u0, v0, u1, v1] = tileUV(tile);
          const base = bucket.positions.length / 3;
          const shade = 1.0;
          const quads = [
            [[0.15, 0, 0.15], [0.85, 0, 0.85]], // diagonal 1
            [[0.85, 0, 0.15], [0.15, 0, 0.85]], // diagonal 2
          ];
          for (const [a, b] of quads) {
            const qb = bucket.positions.length / 3;
            bucket.positions.push(
              lx + a[0], y, lz + a[2],
              lx + b[0], y, lz + b[2],
              lx + a[0], y + 1, lz + a[2],
              lx + b[0], y + 1, lz + b[2]
            );
            for (let i = 0; i < 4; i++) {
              bucket.normals.push(0, 1, 0);
              bucket.colors.push(shade, shade, shade);
            }
            bucket.uvs.push(u0, v0, u1, v0, u0, v1, u1, v1);
            bucket.indices.push(qb, qb + 1, qb + 2, qb + 2, qb + 1, qb + 3);
          }
          continue;
        }

        const isLiquid = !!def.liquid;

        for (const face of FACES) {
          const nlx = lx + face.dir[0];
          const nly = y + face.dir[1];
          const nlz = lz + face.dir[2];
          const n = blockAt(nlx, nly, nlz);

          const nDef = BLOCKS[n];
          if (nDef.opaque) continue;
          if (n === id) continue; // cull faces between identical transparent blocks
          if (isLiquid && nDef.liquid) continue; // no faces between different liquids

          const slot = face.texSlot ?? 1;
          const tile = def.tiles[face.sideTex ? 1 : slot];
          const [u0, v0, u1, v1] = tileUV(tile);
          const base = bucket.positions.length / 3;
          const surfaceDrop = isLiquid && face.dir[1] !== -1 && blockAt(lx, y + 1, lz) !== id;

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
    emissive: bucketToGeometry(buckets.emissive),
  };
}
