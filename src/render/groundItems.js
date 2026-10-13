import * as THREE from 'three';
import { BLOCKS, B } from '../constants.js';
import { ITEMS, blockItem } from '../world/items.js';
import { tileIcon } from './textures.js';

const GRAVITY = -18;
const LIFETIME = 90;
const MAGNET_DIST = 2.2;
const COLLECT_DIST = 0.55;

// Kırılan blokların ve mobların yere düşen, dönen, oyuncuya manyetik
// olarak çekilen item varlıkları.
export class GroundItems {
  constructor(scene, atlasCanvas) {
    this.scene = scene;
    this.atlasCanvas = atlasCanvas;
    this.items = new Map(); // id -> {mesh, vel, age, id(item), count}
    this.nextId = 1;
    this.onCollect = null; // (itemId, count)
    this.enabled = true;
  }

  _iconTexture(itemId) {
    const def = ITEMS[itemId];
    const canvas = tileIcon(this.atlasCanvas, BLOCKS[def.block].tiles[1], 32);
    return canvas;
  }

  spawn(itemId, count, x, y, z) {
    if (!this.enabled) return;
    const def = ITEMS[itemId];
    if (!def) return;

    let mesh;
    if (def.block !== undefined) {
      // mini blok küpü: atlas karesinden canvas doku
      const texCanvas = this._iconTexture(itemId);
      const tex = new THREE.CanvasTexture(texCanvas);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
      mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.28, 0.28),
        new THREE.MeshLambertMaterial({ map: tex })
      );
    } else {
      // düz item: ikon spritesi
      const sprite = this.makeIconSprite(itemId);
      mesh = sprite;
      mesh.scale.set(0.42, 0.42, 0.42);
    }

    mesh.position.set(
      x + (Math.random() - 0.5) * 0.4,
      y + 0.3,
      z + (Math.random() - 0.5) * 0.4
    );
    this.scene.add(mesh);
    const entry = {
      mesh,
      vel: new THREE.Vector3((Math.random() - 0.5) * 1.6, 3 + Math.random() * 1.4, (Math.random() - 0.5) * 1.6),
      age: 0,
      itemId,
      count,
    };
    this.items.set(this.nextId++, entry);
    // çok birikirse en eskileri sil
    while (this.items.size > 90) {
      const oldest = this.items.keys().next().value;
      this.remove(oldest);
    }
  }

  makeIconSprite(itemId) {
    // döngüsel importu önlemek için iconProvider main tarafından verilir
    const canvas = this.iconProvider
      ? this.iconProvider(itemId)
      : tileIcon(this.atlasCanvas, BLOCKS[B.GRASS].tiles[1], 32);
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  }

  remove(id) {
    const e = this.items.get(id);
    if (!e) return;
    this.scene.remove(e.mesh);
    e.mesh.material?.map?.dispose?.();
    e.mesh.material?.dispose?.();
    e.mesh.geometry?.dispose?.();
    this.items.delete(id);
  }

  clear() {
    for (const id of [...this.items.keys()]) this.remove(id);
  }

  update(dt, world, player, onCollect) {
    for (const [id, e] of [...this.items]) {
      e.age += dt;
      if (e.age > LIFETIME) {
        this.remove(id);
        continue;
      }

      const dist = e.mesh.position.distanceTo(player.pos);
      // manyetik çekim
      if (e.age > 0.5 && dist < MAGNET_DIST && !player.dead) {
        const dir = new THREE.Vector3().subVectors(player.pos, e.mesh.position);
        dir.y += 0.9;
        dir.normalize();
        e.mesh.position.addScaledVector(dir, dt * 7);
        if (dist < COLLECT_DIST) {
          const left = onCollect ? onCollect(e.itemId, e.count) : 0;
          if (left <= 0) {
            this.remove(id);
            continue;
          } else {
            e.count = left; // envanter doldu: kısmi toplama
          }
        }
      } else {
        // basit fizik: yerçekimi + zemin çarpması
        e.vel.y += GRAVITY * dt;
        e.mesh.position.addScaledVector(e.vel, dt);
        const bx = Math.floor(e.mesh.position.x);
        const by = Math.floor(e.mesh.position.y - 0.15);
        const bz = Math.floor(e.mesh.position.z);
        if (BLOCKS[world.getBlock(bx, by, bz)].solid) {
          e.mesh.position.y = by + 1.16;
          e.vel.set(0, 0, 0);
        }
        e.mesh.rotation.y += dt * 2;
      }
      // küçük süzülme animasyonu
      e.mesh.position.y += Math.sin(e.age * 2.5) * dt * 0.08;
    }
  }
}
