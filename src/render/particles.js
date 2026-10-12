import * as THREE from 'three';

const GRAVITY = -22;
const LIFE = 0.8;

// Small pooled cube particles used for block break feedback.
export class Particles {
  constructor(scene, count = 120) {
    this.geometry = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    this.items = [];
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        this.geometry,
        new THREE.MeshLambertMaterial({ color: 0xffffff })
      );
      mesh.visible = false;
      scene.add(mesh);
      this.items.push({ mesh, vel: new THREE.Vector3(), life: 0, max: 1, base: 1 });
    }
    this.next = 0;
  }

  burst(x, y, z, color, n = 10) {
    for (let i = 0; i < n; i++) {
      const p = this.items[this.next];
      this.next = (this.next + 1) % this.items.length;
      p.mesh.position.set(
        x + (Math.random() - 0.5) * 0.7,
        y + (Math.random() - 0.5) * 0.7,
        z + (Math.random() - 0.5) * 0.7
      );
      p.mesh.material.color.copy(color);
      p.base = 0.7 + Math.random() * 0.8;
      p.mesh.scale.setScalar(p.base);
      p.mesh.rotation.set(Math.random() * 3, Math.random() * 3, 0);
      p.vel.set(
        (Math.random() - 0.5) * 3.6,
        Math.random() * 3.4 + 0.8,
        (Math.random() - 0.5) * 3.6
      );
      p.life = p.max = LIFE * (0.7 + Math.random() * 0.6);
      p.mesh.visible = true;
    }
  }

  update(dt) {
    for (const p of this.items) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.mesh.visible = false;
        continue;
      }
      p.vel.y += GRAVITY * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      p.mesh.rotation.x += dt * 7;
      p.mesh.rotation.y += dt * 5;
      p.mesh.scale.setScalar(p.base * (0.35 + 0.65 * (p.life / p.max)));
    }
  }
}
