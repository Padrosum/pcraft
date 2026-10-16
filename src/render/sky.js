import * as THREE from 'three';
import { DIM_NETHER } from '../constants.js';
import { config } from '../config.js';

// Gökyüzü paleti: ufuk (alt) ve zenit (üst) renkleri, gün evresine göre karılır.
const DAY_TOP = new THREE.Color('#2f7fd0');
const DAY_BOTTOM = new THREE.Color('#a9d6f2');
const NIGHT_TOP = new THREE.Color('#04060f');
const NIGHT_BOTTOM = new THREE.Color('#101a33');
const DAWN_TOP = new THREE.Color('#33508f');
const DAWN_BOTTOM = new THREE.Color('#ff9a55');
const UNDERWATER = new THREE.Color('#12406e');
const NETHER_SKY = new THREE.Color('#241009');
const NETHER_FOG = new THREE.Color('#481608');
const WHITE = new THREE.Color('#ffffff');

const DOME_R = 700;

// Bloklu, Minecraft'a benzer bulut dokusu (prosedürel)
function makeCloudTexture() {
  const size = 128;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 110; i++) {
    ctx.globalAlpha = 0.1 + Math.random() * 0.4;
    const x = Math.random() * size;
    const y = Math.random() * size;
    const rad = 3 + Math.random() * 13;
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  // eşikle: yumuşak lekeleri keskin bloklara çevir
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const on = d[i + 3] > 128;
    d[i] = 255; d[i + 1] = 255; d[i + 2] = 255;
    d[i + 3] = on ? 235 : 0;
  }
  ctx.putImageData(img, 0, 0);

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(3, 3);
  tex.magFilter = THREE.NearestFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  return tex;
}

export class Sky {
  constructor(scene) {
    this.scene = scene;
    this.time = 0.08; // 0 = gün doğumu, 0.25 = öğle, 0.5 = gün batımı

    this.ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.sun = new THREE.DirectionalLight(0xfff3d6, 1.0);
    scene.add(this.ambient, this.sun, this.sun.target);

    // oyuncuyu izleyen sıcak ışık: karanlıkta meşale, cehennemde tek kaynak
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

    // --- gökyüzü kubbesi (dikey degrade + güneş halesi) ---
    this.domeUniforms = {
      uTop: { value: DAY_TOP.clone() },
      uBottom: { value: DAY_BOTTOM.clone() },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSun: { value: new THREE.Color('#fff2b0') },
      uGlow: { value: 0.6 },
    };
    this.dome = new THREE.Mesh(
      new THREE.SphereGeometry(DOME_R, 24, 16),
      new THREE.ShaderMaterial({
        uniforms: this.domeUniforms,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        vertexShader: `
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }`,
        fragmentShader: `
          uniform vec3 uTop;
          uniform vec3 uBottom;
          uniform vec3 uSunDir;
          uniform vec3 uSun;
          uniform float uGlow;
          varying vec3 vDir;
          void main() {
            float h = clamp(vDir.y * 1.15 + 0.06, 0.0, 1.0);
            vec3 col = mix(uBottom, uTop, pow(h, 0.65));
            float s = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
            col += uSun * pow(s, 9.0) * uGlow;
            gl_FragColor = vec4(col, 1.0);
          }`,
      })
    );
    this.dome.renderOrder = -2;
    this.dome.frustumCulled = false;
    scene.add(this.dome);

    // --- yıldızlar (gece görünür) ---
    const starN = 700;
    const sp = new Float32Array(starN * 3);
    for (let i = 0; i < starN; i++) {
      const u = Math.random() * 2 - 1;
      const th = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      sp[i * 3] = Math.cos(th) * r * 660;
      sp[i * 3 + 1] = u * 660;
      sp[i * 3 + 2] = Math.sin(th) * r * 660;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    this.stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        color: 0xffffff, size: 2.2, sizeAttenuation: false,
        transparent: true, opacity: 0, depthWrite: false, fog: false,
      })
    );
    this.stars.renderOrder = 0;
    this.stars.frustumCulled = false;
    scene.add(this.stars);

    // --- bulutlar (oyuncuyu izleyen, sürüklenen düzlem) ---
    this.cloudTex = makeCloudTexture();
    this.clouds = new THREE.Mesh(
      new THREE.PlaneGeometry(900, 900),
      new THREE.MeshBasicMaterial({
        map: this.cloudTex, transparent: true, opacity: 0,
        depthWrite: false, fog: false, side: THREE.DoubleSide,
      })
    );
    this.clouds.rotation.x = -Math.PI / 2;
    this.clouds.renderOrder = 2;
    this.clouds.frustumCulled = false;
    scene.add(this.clouds);
    this.cloudDrift = 0;

    scene.background = new THREE.Color();
    scene.fog = new THREE.Fog(0x87ceeb, 40, 110);

    this._horizon = new THREE.Color();
    this._zenith = new THREE.Color();
    this._cloud = new THREE.Color();
  }

  // güneş ufkun altında mı?
  get isNight() {
    return Math.sin(this.time * Math.PI * 2) < -0.12;
  }

  update(dt, playerPos, camera, underwater = false, dim = 0) {
    const nether = dim === DIM_NETHER;
    const dayLength = Math.max(30, config.dayMinutes * 60);
    this.time = (this.time + dt / dayLength) % 1;
    const a = this.time * Math.PI * 2; // güneş açısı
    const sunY = Math.sin(a);
    const sunX = Math.cos(a);

    const daylight = nether ? 0 : THREE.MathUtils.clamp(sunY * 3 + 0.1, 0, 1);
    const dawnAmount = nether ? 0 : THREE.MathUtils.clamp(1 - Math.abs(sunY) * 4, 0, 1) * 0.8;

    if (nether) {
      this._horizon.copy(NETHER_SKY);
      this._zenith.copy(NETHER_SKY);
      this.scene.fog.near = 8;
      this.scene.fog.far = 60;
      this.scene.fog.color.copy(NETHER_FOG);
    } else if (underwater) {
      this._horizon.copy(UNDERWATER).multiplyScalar(0.35 + daylight * 0.65);
      this._zenith.copy(this._horizon).multiplyScalar(0.7);
      this.scene.fog.near = 0.1;
      this.scene.fog.far = 20;
      this.scene.fog.color.copy(this._horizon);
    } else {
      this._zenith.copy(NIGHT_TOP).lerp(DAY_TOP, daylight)
        .lerp(DAWN_TOP, dawnAmount * 0.7);
      this._horizon.copy(NIGHT_BOTTOM).lerp(DAY_BOTTOM, daylight)
        .lerp(DAWN_BOTTOM, dawnAmount * 0.85);
      // fog, görüş mesafesinin bittiği yere denk gelsin; ufuk rengiyle kaynaşsın
      const viewFar = config.renderDist * 16;
      this.scene.fog.near = Math.max(24, viewFar * 0.5);
      this.scene.fog.far = viewFar + 14;
      this.scene.fog.color.copy(this._horizon);
    }

    this.scene.background.copy(this._horizon);

    this.ambient.intensity = nether ? 0.38 : 0.22 + daylight * 0.55;
    this.sun.intensity = daylight * 1.1;
    this.sun.position.set(playerPos.x + sunX * 60, sunY * 80 + 10, playerPos.z + 25);
    this.sun.target.position.copy(playerPos);

    // meşale karanlıkta parlar (gece ya da cehennem); lava/ışıltıtaşı da aydınlatır
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

    // --- kubbe, yıldızlar ve bulutlar ---
    this.domeUniforms.uTop.value.copy(this._zenith);
    this.domeUniforms.uBottom.value.copy(this._horizon);
    this.domeUniforms.uSunDir.value.set(sunX, sunY, 0.35);
    this.domeUniforms.uGlow.value = nether ? 0 : 0.55 * (0.35 + daylight * 0.75);
    this.dome.position.copy(camera.position);

    const nightAmount = nether ? 0 : THREE.MathUtils.clamp(1 - daylight * 2.2, 0, 1);
    this.stars.material.opacity = nightAmount * 0.95;
    this.stars.position.copy(playerPos);
    this.stars.rotation.y += dt * 0.01;
    this.stars.visible = nightAmount > 0.02;

    this.clouds.visible = !nether && !underwater;
    if (this.clouds.visible) {
      this.cloudDrift += dt * 0.9;
      this.cloudTex.offset.x = this.cloudDrift * 0.02;
      this.clouds.position.set(playerPos.x, 140, playerPos.z);
      // gece bulutları sönsün, hafif mavi kalsın
      this._cloud.copy(NIGHT_BOTTOM).lerp(WHITE, 0.12 + daylight * 0.82);
      this.clouds.material.color.copy(this._cloud);
      this.clouds.material.opacity = 0.24 + daylight * 0.62;
    }
  }
}
