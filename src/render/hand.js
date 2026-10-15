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
    this.swingSpeed = 3.4;
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
    } else if (def.tool) {
      this.itemMesh = this._toolMesh(def);
    } else {
      this.itemMesh = this._itemMesh(id);
    }
    if (this.itemMesh) this.itemAnchor.add(this.itemMesh);
  }

  triggerSwing(speed = 3.4) {
    this.swingSpeed = speed;
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

  // Elde tutulan araçlar için gerçek 3D model: ikon düzlemi yerine
  // kılıç/balta geometrisi; tier'a göre metal rengi değişir.
  _toolMesh(def) {
    const tier = def.tier ?? 2;
    const BLADE = { 1: 0xa8824e, 2: 0x9a9a9a, 3: 0xdfe4e9 }[tier] ?? 0x9a9a9a;
    const DARK = { 1: 0x6f5632, 2: 0x5f5f5f, 3: 0x8f99a3 }[tier] ?? 0x5f5f5f;
    const LIGHT = { 1: 0xcaa46a, 2: 0xc6c6c6, 3: 0xffffff }[tier] ?? 0xc6c6c6;
    const HANDLE = 0x7a5a34;
    const mat = (c) => new THREE.MeshLambertMaterial({ color: c });
    const box = (w, h, d, c, x, y, z = 0, rz = 0) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c));
      m.position.set(x, y, z);
      m.rotation.z = rz;
      return m;
    };

    const g = new THREE.Group();
    if (def.tool === 'axe') {
      // sap
      g.add(box(0.055, 0.66, 0.055, HANDLE, 0, 0.03));
      // kafa gövdesi
      g.add(box(0.17, 0.19, 0.065, DARK, 0.09, 0.28));
      // bıçak (öne taşan keskin kenar)
      g.add(box(0.11, 0.23, 0.05, BLADE, 0.17, 0.28, 0, -0.08));
      g.add(box(0.03, 0.23, 0.052, LIGHT, 0.235, 0.28, 0, -0.08)); // parlama
      // arka mahmuz
      g.add(box(0.09, 0.09, 0.06, DARK, -0.02, 0.3));
    } else {
      // kabza
      g.add(box(0.05, 0.24, 0.05, HANDLE, 0, -0.12));
      // topuz
      g.add(box(0.075, 0.06, 0.075, DARK, 0, -0.26));
      // balçak
      g.add(box(0.23, 0.05, 0.07, DARK, 0, 0));
      // bıçak gövdesi
      g.add(box(0.075, 0.44, 0.024, BLADE, 0, 0.25));
      // keskin kenar parlaması
      g.add(box(0.022, 0.42, 0.026, LIGHT, -0.028, 0.25));
      // uç
      g.add(box(0.06, 0.09, 0.02, LIGHT, 0, 0.5));
    }
    g.rotation.set(0.1, 0.3, -0.62);
    g.scale.setScalar(0.92);
    return g;
  }

  _dispose(obj) {
    this.itemAnchor.remove(obj);
    obj.traverse?.((o) => {
      if (!o.isMesh) return;
      o.geometry?.dispose();
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        m?.map?.dispose?.();
        m?.dispose?.();
      }
    });
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
      this.swing += dt * this.swingSpeed * (sprinting ? 1.2 : 1);
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
