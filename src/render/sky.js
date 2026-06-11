import * as THREE from 'three';
import { DAY_LENGTH } from '../constants.js';

const DAY = new THREE.Color('#87ceeb');
const NIGHT = new THREE.Color('#0b1026');
const DAWN = new THREE.Color('#ff9e5e');

export class Sky {
  constructor(scene) {
    this.scene = scene;
    this.time = 0.08; // 0 = sunrise, 0.25 = noon, 0.5 = sunset

    this.ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.sun = new THREE.DirectionalLight(0xfff3d6, 1.0);
    scene.add(this.ambient, this.sun, this.sun.target);

    this.sunMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(36, 36),
      new THREE.MeshBasicMaterial({ color: 0xffe14d, fog: false })
    );
    this.moonMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(26, 26),
      new THREE.MeshBasicMaterial({ color: 0xdfe7ff, fog: false })
    );
    scene.add(this.sunMesh, this.moonMesh);

    scene.background = new THREE.Color();
    scene.fog = new THREE.Fog(0x87ceeb, 40, 110);
    this._color = new THREE.Color();
  }

  update(dt, playerPos, camera) {
    this.time = (this.time + dt / DAY_LENGTH) % 1;
    const a = this.time * Math.PI * 2; // sun angle
    const sunY = Math.sin(a);
    const sunX = Math.cos(a);

    const daylight = THREE.MathUtils.clamp(sunY * 3 + 0.1, 0, 1);
    const dawnAmount = THREE.MathUtils.clamp(1 - Math.abs(sunY) * 4, 0, 1) * 0.8;

    this._color.copy(NIGHT).lerp(DAY, daylight).lerp(DAWN, dawnAmount * daylight * 0.9 + dawnAmount * 0.15);
    this.scene.background.copy(this._color);
    this.scene.fog.color.copy(this._color);

    this.ambient.intensity = 0.22 + daylight * 0.55;
    this.sun.intensity = daylight * 1.1;
    this.sun.position.set(playerPos.x + sunX * 60, sunY * 80 + 10, playerPos.z + 25);
    this.sun.target.position.copy(playerPos);

    const R = 350;
    this.sunMesh.position.set(playerPos.x + sunX * R, sunY * R, playerPos.z);
    this.moonMesh.position.set(playerPos.x - sunX * R, -sunY * R, playerPos.z);
    this.sunMesh.lookAt(camera.position);
    this.moonMesh.lookAt(camera.position);
  }
}
