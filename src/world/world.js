import * as THREE from 'three';
import { CHUNK, HEIGHT, B, DIM_OVERWORLD, DIM_NETHER } from '../constants.js';
import { config } from '../config.js';
import { Chunk, blockIndex } from './chunk.js';
import {
  makeGenerator, generateChunkData, makeNetherGenerator, generateNetherData,
} from './worldgen.js';
import { meshChunk } from './mesher.js';

const key = (cx, cz) => `${cx},${cz}`;

export class World {
  constructor(scene, atlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.chunks = new Map(); // key -> Chunk (current dimension)
    this.meshes = new Map(); // key -> {group, opaque?, cutout?, water?, emissive?}
    this.dirty = new Set(); // chunk keys needing remesh
    this.dim = DIM_OVERWORLD;
    this.gens = new Map(); // dim -> generator
    this.dimEdits = new Map(); // dim -> Map("x,y,z" -> id)
    this.dimEditsByChunk = new Map(); // dim -> Map(chunkKey -> Map(blockIndex -> id))
    this.edits = this._dimStore(this.dim); // active dimension's edit map

    const tex = atlas.texture;
    // su yüzeyi dalgası için paylaşılan zaman üniformu
    this.waterTime = { value: 0 };
    const waterMat = new THREE.MeshLambertMaterial({
      map: tex, vertexColors: true, transparent: true, opacity: 0.72,
      depthWrite: false, side: THREE.DoubleSide,
    });
    waterMat.onBeforeCompile = (shader) => {
      shader.uniforms.uWaterTime = this.waterTime;
      shader.vertexShader = `uniform float uWaterTime;\n${shader.vertexShader}`.replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vec4 wpos = modelMatrix * vec4(transformed, 1.0);
        float wv = sin(uWaterTime * 1.7 + (wpos.x + wpos.z) * 0.55) * 0.05
                 + sin(uWaterTime * 2.9 + (wpos.x - wpos.z) * 0.35) * 0.03;
        transformed.y += wv * max(normal.y, 0.0);`,
      );
    };
    this.materials = {
      opaque: new THREE.MeshLambertMaterial({ map: tex, vertexColors: true }),
      cutout: new THREE.MeshLambertMaterial({
        map: tex, vertexColors: true, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide,
      }),
      water: waterMat,
      // self-lit blocks (lava, glowstone, torches): unaffected by lights;
      // DoubleSide so cross-shaped torches read from every angle
      emissive: new THREE.MeshBasicMaterial({ map: tex, vertexColors: true, side: THREE.DoubleSide }),
    };
  }

  // zamanla değişen görsel efektler (su dalgası)
  animate(dt) {
    this.waterTime.value += dt;
  }

  _dimStore(dim) {
    let m = this.dimEdits.get(dim);
    if (!m) this.dimEdits.set(dim, (m = new Map()));
    if (!this.dimEditsByChunk.has(dim)) this.dimEditsByChunk.set(dim, new Map());
    return m;
  }

  _chunkStore(dim) {
    this._dimStore(dim);
    return this.dimEditsByChunk.get(dim);
  }

  generatorFor(dim) {
    let g = this.gens.get(dim);
    if (!g) {
      g = dim === DIM_NETHER
        ? makeNetherGenerator(this.seed)
        : makeGenerator(this.seed);
      this.gens.set(dim, g);
    }
    return g;
  }

  setSeed(seed) {
    this.seed = seed;
    this.gens.clear();
    this.gen = this.generatorFor(this.dim);
    // Edits describe a diff against the generated world; changing the seed
    // makes them meaningless, so drop them instead of leaking them into the
    // new world (e.g. switching from a fresh world to the room's world).
    this.dimEdits.clear();
    this.dimEditsByChunk.clear();
    this.edits = this._dimStore(this.dim);
    this.clearChunks();
  }

  // Drop all loaded chunks/meshes (dimension switch or seed change).
  clearChunks() {
    for (const k of [...this.meshes.keys()]) this.disposeMesh(k);
    this.chunks.clear();
    this.dirty.clear();
  }

  // Switch the active dimension; returns nothing. Callers set up spawn.
  setDimension(dim) {
    if (this.dim === dim) return;
    this.dim = dim;
    this.gen = this.generatorFor(dim);
    this.edits = this._dimStore(dim);
    this.clearChunks();
  }

  getChunk(cx, cz) {
    const k = key(cx, cz);
    let c = this.chunks.get(k);
    if (!c) {
      const data = this.dim === DIM_NETHER
        ? generateNetherData(this.gen, cx, cz)
        : generateChunkData(this.gen, cx, cz);
      c = new Chunk(cx, cz, data);
      // overlay recorded edits that fall inside this chunk
      const editMap = this.dimEditsByChunk.get(this.dim)?.get(k);
      if (editMap) {
        for (const [i, id] of editMap) c.data[i] = id;
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
    if (record) {
      this.edits.set(`${x},${y},${z}`, id);
      const k = key(cx, cz);
      const byChunk = this._chunkStore(this.dim);
      let m = byChunk.get(k);
      if (!m) byChunk.set(k, (m = new Map()));
      m.set(blockIndex(lx, y, lz), id);
    }

    this.dirty.add(key(cx, cz));
    if (lx === 0) this.dirty.add(key(cx - 1, cz));
    if (lx === CHUNK - 1) this.dirty.add(key(cx + 1, cz));
    if (lz === 0) this.dirty.add(key(cx, cz - 1));
    if (lz === CHUNK - 1) this.dirty.add(key(cx, cz + 1));
    return true;
  }

  // Record a block edit into a specific dimension's history. Only touches
  // loaded chunks when it's the active dimension (used by multiplayer sync).
  recordEdit(dim, x, y, z, id) {
    if (y <= 0 || y >= HEIGHT) return;
    const store = this._dimStore(dim);
    const pk = `${x},${y},${z}`;
    if (store.get(pk) === id) return;
    store.set(pk, id);
    const cx = Math.floor(x / CHUNK);
    const cz = Math.floor(z / CHUNK);
    const k = key(cx, cz);
    const byChunk = this._chunkStore(dim);
    let m = byChunk.get(k);
    if (!m) byChunk.set(k, (m = new Map()));
    m.set(blockIndex(x - cx * CHUNK, y, z - cz * CHUNK), id);
    if (dim === this.dim) this.setBlock(x, y, z, id, false);
  }

  editsArray(dim = this.dim) {
    return [...this._dimStore(dim)].map(([pk, id]) => [...pk.split(',').map(Number), id]);
  }

  // Apply an edit array to a specific dimension.
  applyEditsTo(arr, dim = this.dim) {
    for (const [x, y, z, id] of arr) this.recordEdit(dim, x, y, z, id);
  }

  // Legacy/compat: apply to the current dimension.
  applyEdits(arr) {
    this.applyEditsTo(arr, this.dim);
  }

  buildMesh(cx, cz) {
    const k = key(cx, cz);
    this.disposeMesh(k);
    const geos = meshChunk(this, cx, cz, this.atlas.tileUV);
    const group = new THREE.Group();
    group.position.set(cx * CHUNK, 0, cz * CHUNK);
    const entry = { group };
    for (const part of ['opaque', 'cutout', 'water', 'emissive']) {
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
    for (const part of ['opaque', 'cutout', 'water', 'emissive']) {
      entry[part]?.geometry.dispose();
    }
    this.scene.remove(entry.group);
    this.meshes.delete(k);
  }

  // Stream chunks around the player; budget = max meshes built per call
  update(px, pz, budget = 2) {
    const pcx = Math.floor(px / CHUNK);
    const pcz = Math.floor(pz / CHUNK);
    const RENDER_DIST = config.renderDist;

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

  // aktif boyutun üreticisini döndür (kısayol)
  get currentGen() {
    return this.generatorFor(this.dim);
  }
}
