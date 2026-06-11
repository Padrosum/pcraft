import { B, BLOCKS } from '../constants.js';

// Amanatides & Woo voxel traversal. Returns the first solid block hit
// plus the face normal, or null.
export function raycastVoxel(world, origin, dir, maxDist = 6) {
  let x = Math.floor(origin.x);
  let y = Math.floor(origin.y);
  let z = Math.floor(origin.z);

  const stepX = Math.sign(dir.x);
  const stepY = Math.sign(dir.y);
  const stepZ = Math.sign(dir.z);

  const tDeltaX = stepX !== 0 ? Math.abs(1 / dir.x) : Infinity;
  const tDeltaY = stepY !== 0 ? Math.abs(1 / dir.y) : Infinity;
  const tDeltaZ = stepZ !== 0 ? Math.abs(1 / dir.z) : Infinity;

  const frac = (v) => v - Math.floor(v);
  let tMaxX = stepX > 0 ? tDeltaX * (1 - frac(origin.x)) : tDeltaX * frac(origin.x);
  let tMaxY = stepY > 0 ? tDeltaY * (1 - frac(origin.y)) : tDeltaY * frac(origin.y);
  let tMaxZ = stepZ > 0 ? tDeltaZ * (1 - frac(origin.z)) : tDeltaZ * frac(origin.z);
  if (stepX === 0) tMaxX = Infinity;
  if (stepY === 0) tMaxY = Infinity;
  if (stepZ === 0) tMaxZ = Infinity;

  let nx = 0, ny = 0, nz = 0;
  let t = 0;

  while (t <= maxDist) {
    const id = world.getBlock(x, y, z);
    if (id !== B.AIR && BLOCKS[id].solid) {
      return { x, y, z, nx, ny, nz, id };
    }
    if (tMaxX < tMaxY && tMaxX < tMaxZ) {
      x += stepX; t = tMaxX; tMaxX += tDeltaX;
      nx = -stepX; ny = 0; nz = 0;
    } else if (tMaxY < tMaxZ) {
      y += stepY; t = tMaxY; tMaxY += tDeltaY;
      nx = 0; ny = -stepY; nz = 0;
    } else {
      z += stepZ; t = tMaxZ; tMaxZ += tDeltaZ;
      nx = 0; ny = 0; nz = -stepZ;
    }
  }
  return null;
}
