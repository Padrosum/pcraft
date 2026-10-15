import * as THREE from 'three';
import { BLOCKS } from '../constants.js';
import { ITEMS } from '../world/items.js';
import { tileIcon, itemIconCanvas } from './textures.js';

const SKIN = 0xd8a075;
const SLEEVE = 0x4f7cc4;

// Birinci şahıs görünümü: kameranın önünde duran kol ve elde tutulan item.
// Ana sahnenin üstüne ayrı bir sahne olarak çizilir; böylece dünya geometrisi
// eli kesmez ve el her zaman görünür kalır.
export class Hand {
  constructor(atlasCanvas) {
    this.atlasCanvas = atlasCanvas;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.05, 20);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(0.7, 1, 0.9);
    this.scene.add(light);

    this.group = new THREE.Group();
    this.scene.add(this.group);

    // kol: uzun ekseni ileri (-z) doğru, ekranın sağ altından girer
    this.arm = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.16, 0.64),
      new THREE.MeshLambertMaterial({ color: SKIN }),
    );
    this.arm.position.set(0.32, -0.3, -0.5);
    this.arm.rotation.set(0.45, 0.25, 0.18);
    this._armBaseRotX = this.arm.rotation.x;

    // kameraya yakın uçtaki kol yen (gömlek)
    const sleeve = new THREE.Mesh(
      new THREE.BoxGeometry(0.19, 0.19, 0.3),
      new THREE.MeshLambertMaterial({ color: SLEEVE }),
    );
    sleeve.position.set(0, 0, 0.36);
    this.arm.add(sleeve);

    // item tutamağı: kolun ucunda durur, bu yüzden sallanırken item de gelir
    this.itemAnchor = new THREE.Group();
    this.itemAnchor.position.set(0, 0, -0.42);
    // item kameraya dönük dursun diye kolun dönüşünü geri al
    this.itemAnchor.quaternion.copy(this.arm.quaternion).invert();
    this.itemAnchor.rotateZ(0.28);
    this.itemAnchor.rotateX(-0.12);
    this.arm.add(this.itemAnchor);

    this.group.add(this.arm);

    this.itemId = null;
    this.itemMesh = null;
    this.swinging = false;
    this.swing = 0;
    this.mining = false;
    this.bobPhase = 0;
    this.group.visible = false;
  }

  setVisible(on) {
    this.group.visible = !!on;
  }

  // hotbar seçimi / envanter değişince çağrılır
  setItem(id) {
    if (id === this.itemId) return;
    this.itemId = id;
    if (this.itemMesh) {
      this.itemAnchor.remove(this.itemMesh);
      this._dispose(this.itemMesh);
      this.itemMesh = null;
    }
    const def = ITEMS[id];
    if (!def) return;

    if (def.block !== undefined) {
      this.itemMesh = this._blockMesh(def.block);
    } else {
      this.itemMesh = this._itemMesh(id);
    }
    if (this.itemMesh) this.itemAnchor.add(this.itemMesh);
  }

  triggerSwing() {
    this.swinging = true;
    this.swing = 0;
  }

  setMining(on) {
    this.mining = !!on;
  }

  _blockMesh(blockId) {
    const tiles = BLOCKS[blockId].tiles;
    const texture = (tile) => {
      const tex = new THREE.CanvasTexture(tileIcon(this.atlasCanvas, tile, 32));
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };
    // BoxGeometry yüz sırası: +x, -x, +y, -y, +z, -z
    const side = texture(tiles[1]);
    const top = texture(tiles[0]);
    const bottom = texture(tiles[2] ?? tiles[1]);
    const materials = [side, side, top, bottom, side, side]
      .map((map) => new THREE.MeshLambertMaterial({ map }));
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), materials);
    mesh.rotation.set(0.15, 0.7, 0);
    return mesh;
  }

  _itemMesh(itemId) {
    const tex = new THREE.CanvasTexture(itemIconCanvas(itemId, 64));
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.38, 0.38),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide }),
    );
    mesh.rotation.z = -0.5; // Minecraft benzeri eğik duruş
    return mesh;
  }

  _dispose(mesh) {
    this.itemAnchor.remove(mesh);
    mesh.geometry?.dispose();
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const m of mats) {
      m?.map?.dispose?.();
      m?.dispose?.();
    }
  }

  resize(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // moving: yürüyor mu, sprinting: koşuyor mu
  update(dt, moving = false, sprinting = false) {
    if (!this.group.visible) return;

    if (this.mining && !this.swinging) this.triggerSwing();
    if (this.swinging) {
      this.swing += dt * (sprinting ? 4.2 : 3.4);
      if (this.swing >= 1) {
        this.swing = 0;
        this.swinging = false;
      }
    }

    // yürüyüş salınımı: adım başına hafif aşağı-yukarı + yana
    this.bobPhase += dt * (moving ? (sprinting ? 13 : 9) : 2.4);
    const amp = moving ? (sprinting ? 1.35 : 1) : 0.25;
    const bobY = Math.sin(this.bobPhase * 2) * 0.02 * amp;
    const bobX = Math.cos(this.bobPhase) * 0.016 * amp;
    this.group.position.set(bobX, bobY, 0);

    // vuruş yayı
    const arc = Math.sin(Math.min(1, this.swinging ? this.swing : 0) * Math.PI);
    this.arm.rotation.x = this._armBaseRotX - arc * 1.0;
    this.group.rotation.z = arc * 0.12;
  }

  // ana sahne çizildikten sonra çağrılır
  render(renderer) {
    if (!this.group.visible) return;
    const prevAutoClear = renderer.autoClear;
    renderer.autoClear = false;
    renderer.clearDepth();
    renderer.render(this.scene, this.camera);
    renderer.autoClear = prevAutoClear;
  }
}
