import * as THREE from 'three';
import { DIM_NETHER } from '../constants.js';
import { config } from '../config.js';

const DAY = new THREE.Color('#87ceeb');
const NIGHT = new THREE.Color('#0b1026');
const DAWN = new THREE.Color('#ff9e5e');
const UNDERWATER = new THREE.Color('#1a4f8a');
const NETHER_SKY = new THREE.Color('#241009');
const NETHER_FOG = new THREE.Color('#481608');

export class Sky {
  constructor(scene) {
    this.scene = scene;
    this.time = 0.08; // 0 = sunrise, 0.25 = noon, 0.5 = sunset

    this.ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.sun = new THREE.DirectionalLight(0xfff3d6, 1.0);
    scene.add(this.ambient, this.sun, this.sun.target);

    // warm light that follows the player: a torch in the dark, and the
    // only real light source inside the nether
    this.torch = new THREE.PointLight(0xffb060, 0.0, 18, 1.6);
    scene.add(this.torch);

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

  // sun below the horizon?
  get isNight() {
    return Math.sin(this.time * Math.PI * 2) < -0.12;
  }

  update(dt, playerPos, camera, underwater = false, dim = 0) {
    const nether = dim === DIM_NETHER;
    const dayLength = Math.max(30, config.dayMinutes * 60);
    this.time = (this.time + dt / dayLength) % 1;
    const a = this.time * Math.PI * 2; // sun angle
    const sunY = Math.sin(a);
    const sunX = Math.cos(a);

    const daylight = nether ? 0 : THREE.MathUtils.clamp(sunY * 3 + 0.1, 0, 1);
    const dawnAmount = nether ? 0 : THREE.MathUtils.clamp(1 - Math.abs(sunY) * 4, 0, 1) * 0.8;

    if (nether) {
      this._color.copy(NETHER_SKY);
      this.scene.fog.near = 8;
      this.scene.fog.far = 60;
      this.scene.fog.color.copy(NETHER_FOG);
      this.scene.background.copy(this._color);
    } else {
      this._color.copy(NIGHT).lerp(DAY, daylight).lerp(DAWN, dawnAmount * daylight * 0.9 + dawnAmount * 0.15);

      if (underwater) {
        // murky blue, darker at night, with close fog
        this._color.copy(UNDERWATER).multiplyScalar(0.35 + daylight * 0.65);
        this.scene.fog.near = 0.1;
        this.scene.fog.far = 20;
      } else {
        this.scene.fog.near = 40;
        this.scene.fog.far = 110;
      }
      this.scene.background.copy(this._color);
      this.scene.fog.color.copy(this._color);
    }

    this.ambient.intensity = nether ? 0.38 : 0.22 + daylight * 0.55;
    this.sun.intensity = daylight * 1.1;
    this.sun.position.set(playerPos.x + sunX * 60, sunY * 80 + 10, playerPos.z + 25);
    this.sun.target.position.copy(playerPos);

    // torch glows in the dark (night or nether); lava/glowstone light up too
    this.torch.intensity = nether ? 1.6 : (1 - daylight) * 0.55;
    this.torch.position.set(playerPos.x, playerPos.y + 1.6, playerPos.z);

    this.sunMesh.visible = !nether;
    this.moonMesh.visible = !nether;
    if (!nether) {
      const R = 350;
      this.sunMesh.position.set(playerPos.x + sunX * R, sunY * R, playerPos.z);
      this.moonMesh.position.set(playerPos.x - sunX * R, -sunY * R, playerPos.z);
      this.sunMesh.lookAt(camera.position);
      this.moonMesh.lookAt(camera.position);
    }
  }
}
