import * as THREE from 'three';

// Minecraft-style box character built from primitives, with a name tag.
function colorFromId(id) {
  let h = 0;
  for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return new THREE.Color().setHSL((h % 360) / 360, 0.65, 0.5);
}

function nameSprite(name) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = 'bold 28px monospace';
  const w = Math.ceil(ctx.measureText(name).width) + 20;
  canvas.width = w;
  canvas.height = 40;
  const c2 = canvas.getContext('2d');
  c2.fillStyle = 'rgba(0,0,0,0.45)';
  c2.fillRect(0, 0, w, 40);
  c2.font = 'bold 28px monospace';
  c2.fillStyle = '#fff';
  c2.textAlign = 'center';
  c2.textBaseline = 'middle';
  c2.fillText(name, w / 2, 21);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false }));
  sprite.scale.set(w / 80, 0.5, 1);
  sprite.position.y = 2.35;
  return sprite;
}

export class RemotePlayer {
  constructor(scene, peerId, name) {
    this.scene = scene;
    this.target = new THREE.Vector3(0, -100, 0);
    this.targetYaw = 0;
    this.targetPitch = 0;
    this.walkPhase = 0;

    const shirt = colorFromId(peerId);
    const pants = shirt.clone().multiplyScalar(0.45);
    const skin = new THREE.Color('#d8a075');

    const mat = (c) => new THREE.MeshLambertMaterial({ color: c });
    const box = (w, h, d, c) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c));

    this.group = new THREE.Group();

    this.head = box(0.48, 0.48, 0.48, skin);
    this.head.position.y = 1.74;

    const body = box(0.52, 0.72, 0.28, shirt);
    body.position.y = 1.14;

    this.armL = box(0.2, 0.72, 0.2, shirt);
    this.armR = this.armL.clone();
    this.armL.position.set(-0.38, 1.14, 0);
    this.armR.position.set(0.38, 1.14, 0);

    this.legL = box(0.22, 0.78, 0.22, pants);
    this.legR = this.legL.clone();
    this.legL.position.set(-0.13, 0.39, 0);
    this.legR.position.set(0.13, 0.39, 0);

    // eyes so you can tell which way they're facing
    const eye = box(0.07, 0.07, 0.02, '#2b1e66');
    eye.position.set(-0.1, 0.06, -0.25);
    const eye2 = eye.clone();
    eye2.position.x = 0.1;
    this.head.add(eye, eye2);

    this.nameTag = nameSprite(name || 'oyuncu');
    this.group.add(this.head, body, this.armL, this.armR, this.legL, this.legR, this.nameTag);
    this.group.position.copy(this.target);
    scene.add(this.group);
  }

  setName(name) {
    this.group.remove(this.nameTag);
    this.nameTag.material.map.dispose();
    this.nameTag.material.dispose();
    this.nameTag = nameSprite(name);
    this.group.add(this.nameTag);
  }

  setTarget(p, yaw, pitch) {
    if (this.group.position.y < -50) {
      this.group.position.set(p[0], p[1], p[2]); // first packet: snap
    }
    this.target.set(p[0], p[1], p[2]);
    this.targetYaw = yaw;
    this.targetPitch = pitch;
  }

  update(dt) {
    const before = this.group.position.clone();
    this.group.position.lerp(this.target, Math.min(1, dt * 12));

    // shortest-path yaw lerp
    let dy = this.targetYaw - this.group.rotation.y;
    dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    this.group.rotation.y += dy * Math.min(1, dt * 12);
    this.head.rotation.x = THREE.MathUtils.lerp(this.head.rotation.x, -this.targetPitch, Math.min(1, dt * 12));

    const speed = before.distanceTo(this.group.position) / Math.max(dt, 1e-4);
    const horiz = Math.hypot(this.target.x - this.group.position.x, this.target.z - this.group.position.z);
    if (speed > 0.4 && horiz > 0.05) {
      this.walkPhase += dt * 9;
      const swing = Math.sin(this.walkPhase) * 0.7;
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
      this.armL.rotation.x = -swing * 0.8;
      this.armR.rotation.x = swing * 0.8;
    } else {
      for (const part of [this.legL, this.legR, this.armL, this.armR]) {
        part.rotation.x *= 0.8;
      }
    }
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      o.geometry?.dispose();
      o.material?.map?.dispose();
      o.material?.dispose();
    });
  }
}
