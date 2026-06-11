import { CHUNK, HEIGHT } from '../constants.js';

export const blockIndex = (lx, y, lz) => (lx * CHUNK + lz) * HEIGHT + y;

export class Chunk {
  constructor(cx, cz, data) {
    this.cx = cx;
    this.cz = cz;
    this.data = data; // Uint8Array(CHUNK*CHUNK*HEIGHT)
  }

  get(lx, y, lz) {
    return this.data[blockIndex(lx, y, lz)];
  }

  set(lx, y, lz, id) {
    this.data[blockIndex(lx, y, lz)] = id;
  }
}
