import * as THREE from 'three';
import { CHUNK, HEIGHT, B, RENDER_DIST } from '../constants.js';
import { Chunk } from './chunk.js';
import { makeGenerator, generateChunkData } from './worldgen.js';
import { meshChunk } from './mesher.js';

const key = (cx, cz) => `${cx},${cz}`;

export class World {
  constructor(scene, atlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.chunks = new Map(); // key -> Chunk
    this.meshes = new Map(); // key -> {group, opaque?, cutout?, water?}
    this.edits = new Map(); // "x,y,z" -> block id (diff vs generated world)
    this.dirty = new Set(); // chunk keys needing remesh
    this.gen = null;

    const tex = atlas.texture;
    this.materials = {
      opaque: new THREE.MeshLambertMaterial({ map: tex, vertexColors: true }),
      cutout: new THREE.MeshLambertMaterial({
        map: tex, vertexColors: true, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide,
      }),
      water: new THREE.MeshLambertMaterial({
        map: tex, vertexColors: true, transparent: true, opacity: 0.7,
        depthWrite: false, side: THREE.DoubleSide,
      }),
    };
  }

  setSeed(seed) {
    this.seed = seed;
    this.gen = makeGenerator(seed);
    for (const k of [...this.meshes.keys()]) this.disposeMesh(k);
    this.chunks.clear();
    this.dirty.clear();
  }

  getChunk(cx, cz) {
    const k = key(cx, cz);
    let c = this.chunks.get(k);
    if (!c) {
      c = new Chunk(cx, cz, generateChunkData(this.gen, cx, cz));
      // overlay recorded edits that fall inside this chunk
      const x0 = cx * CHUNK;
      const z0 = cz * CHUNK;
      for (const [pk, id] of this.edits) {
        const [x, y, z] = pk.split(',').map(Number);
        if (x >= x0 && x < x0 + CHUNK && z >= z0 && z < z0 + CHUNK) {
          c.set(x - x0, y, z - z0, id);
        }
      }
      this.chunks.set(k, c);
    }
    return c;
  }

  getBlock(x, y, z) {
    if (y < 0 || y >= HEIGHT) return B.AIR;
    const cx = Math.floor(x / CHUNK);
    const cz = Math.floor(z / CHUNK);
    return this.getChunk(cx, cz).get(x - cx * CHUNK, y, z - cz * CHUNK);
  }

  setBlock(x, y, z, id, record = true) {
    if (y <= 0 || y >= HEIGHT) return false;
    const cx = Math.floor(x / CHUNK);
    const cz = Math.floor(z / CHUNK);
    const lx = x - cx * CHUNK;
    const lz = z - cz * CHUNK;
    const chunk = this.getChunk(cx, cz);
    if (chunk.get(lx, y, lz) === id) return false;
    chunk.set(lx, y, lz, id);
    if (record) this.edits.set(`${x},${y},${z}`, id);

    this.dirty.add(key(cx, cz));
    if (lx === 0) this.dirty.add(key(cx - 1, cz));
    if (lx === CHUNK - 1) this.dirty.add(key(cx + 1, cz));
    if (lz === 0) this.dirty.add(key(cx, cz - 1));
    if (lz === CHUNK - 1) this.dirty.add(key(cx, cz + 1));
    return true;
  }

  editsArray() {
    return [...this.edits].map(([pk, id]) => [...pk.split(',').map(Number), id]);
  }

  applyEdits(arr) {
    for (const [x, y, z, id] of arr) {
      this.edits.set(`${x},${y},${z}`, id);
      const k = key(Math.floor(x / CHUNK), Math.floor(z / CHUNK));
      const c = this.chunks.get(k);
      if (c) {
        c.set(x - Math.floor(x / CHUNK) * CHUNK, y, z - Math.floor(z / CHUNK) * CHUNK, id);
        this.dirty.add(k);
      }
    }
  }

  buildMesh(cx, cz) {
    const k = key(cx, cz);
    this.disposeMesh(k);
    const geos = meshChunk(this, cx, cz, this.atlas.tileUV);
    const group = new THREE.Group();
    group.position.set(cx * CHUNK, 0, cz * CHUNK);
    const entry = { group };
    for (const part of ['opaque', 'cutout', 'water']) {
      if (!geos[part]) continue;
      const mesh = new THREE.Mesh(geos[part], this.materials[part]);
      if (part === 'water') mesh.renderOrder = 1;
      group.add(mesh);
      entry[part] = mesh;
    }
    this.scene.add(group);
    this.meshes.set(k, entry);
  }

  disposeMesh(k) {
    const entry = this.meshes.get(k);
    if (!entry) return;
    for (const part of ['opaque', 'cutout', 'water']) {
      entry[part]?.geometry.dispose();
    }
    this.scene.remove(entry.group);
    this.meshes.delete(k);
  }

  // Stream chunks around the player; budget = max meshes built per call
  update(px, pz, budget = 2) {
    const pcx = Math.floor(px / CHUNK);
    const pcz = Math.floor(pz / CHUNK);

    // remesh dirty chunks first (block edits)
    for (const k of [...this.dirty]) {
      this.dirty.delete(k);
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - pcx) <= RENDER_DIST + 1 && Math.abs(cz - pcz) <= RENDER_DIST + 1) {
        this.buildMesh(cx, cz);
      }
      if (--budget <= 0) return;
    }

    // build missing chunk meshes, nearest first
    const wanted = [];
    for (let dx = -RENDER_DIST; dx <= RENDER_DIST; dx++) {
      for (let dz = -RENDER_DIST; dz <= RENDER_DIST; dz++) {
        if (dx * dx + dz * dz > (RENDER_DIST + 0.5) ** 2) continue;
        const cx = pcx + dx;
        const cz = pcz + dz;
        if (!this.meshes.has(key(cx, cz))) wanted.push([dx * dx + dz * dz, cx, cz]);
      }
    }
    wanted.sort((a, b) => a[0] - b[0]);
    for (const [, cx, cz] of wanted) {
      this.buildMesh(cx, cz);
      if (--budget <= 0) break;
    }

    // drop far meshes
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - pcx) > RENDER_DIST + 2 || Math.abs(cz - pcz) > RENDER_DIST + 2) {
        this.disposeMesh(k);
      }
    }
  }
}
