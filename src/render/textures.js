import * as THREE from 'three';

export const TILE = 16;
export const COLS = 4;
export const ROWS = 4;

// Deterministic rng so the atlas looks identical for every player
function rng(seed) {
  let a = seed;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function px(ctx, x, y, c) {
  ctx.fillStyle = c;
  ctx.fillRect(x, y, 1, 1);
}

function fill(ctx, c) {
  ctx.fillStyle = c;
  ctx.fillRect(0, 0, TILE, TILE);
}

function speckle(ctx, r, colors, density = 0.35) {
  for (let y = 0; y < TILE; y++) {
    for (let x = 0; x < TILE; x++) {
      if (r() < density) px(ctx, x, y, colors[(r() * colors.length) | 0]);
    }
  }
}

const tilePainters = [
  // 0 grass top
  (ctx, r) => {
    fill(ctx, '#5fae3a');
    speckle(ctx, r, ['#55a032', '#6cbb45', '#4e9430', '#74c24e'], 0.5);
  },
  // 1 grass side
  (ctx, r) => {
    fill(ctx, '#7a5538');
    speckle(ctx, r, ['#6e4b30', '#86603f', '#5f4129'], 0.45);
    for (let x = 0; x < TILE; x++) {
      const d = 3 + ((r() * 2) | 0);
      for (let y = 0; y < d; y++) px(ctx, x, y, r() < 0.5 ? '#5fae3a' : '#55a032');
    }
  },
  // 2 dirt
  (ctx, r) => {
    fill(ctx, '#7a5538');
    speckle(ctx, r, ['#6e4b30', '#86603f', '#5f4129', '#8d6845'], 0.5);
  },
  // 3 stone
  (ctx, r) => {
    fill(ctx, '#8d8d8d');
    speckle(ctx, r, ['#828282', '#979797', '#777777'], 0.45);
  },
  // 4 cobblestone
  (ctx, r) => {
    fill(ctx, '#6f6f6f');
    speckle(ctx, r, ['#7c7c7c', '#666666'], 0.4);
    ctx.fillStyle = '#4f4f4f';
    for (let i = 0; i < 10; i++) {
      ctx.fillRect((r() * TILE) | 0, (r() * TILE) | 0, 1 + ((r() * 3) | 0), 1);
    }
    ctx.fillStyle = '#9a9a9a';
    for (let i = 0; i < 6; i++) {
      ctx.fillRect((r() * TILE) | 0, (r() * TILE) | 0, 2, 2);
    }
  },
  // 5 sand
  (ctx, r) => {
    fill(ctx, '#dbd29a');
    speckle(ctx, r, ['#d2c890', '#e3daa6', '#c9bf85'], 0.5);
  },
  // 6 log side
  (ctx, r) => {
    fill(ctx, '#6b4a2b');
    for (let x = 0; x < TILE; x++) {
      const dark = x % 4 === 0 || r() < 0.12;
      for (let y = 0; y < TILE; y++) {
        if (dark && r() < 0.85) px(ctx, x, y, '#583c22');
        else if (r() < 0.18) px(ctx, x, y, '#795533');
      }
    }
  },
  // 7 log top (rings)
  (ctx, r) => {
    fill(ctx, '#b08e58');
    ctx.strokeStyle = '#8a6c3e';
    for (let rad = 2; rad <= 7; rad += 2) {
      ctx.beginPath();
      ctx.arc(8, 8, rad, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.strokeStyle = '#583c22';
    ctx.strokeRect(0.5, 0.5, TILE - 1, TILE - 1);
  },
  // 8 planks
  (ctx, r) => {
    fill(ctx, '#a8824e');
    speckle(ctx, r, ['#9e7944', '#b28a55'], 0.3);
    ctx.fillStyle = '#7d5e33';
    for (let y = 3; y < TILE; y += 4) ctx.fillRect(0, y, TILE, 1);
    px(ctx, 4, 1, '#6e5128');
    px(ctx, 11, 5, '#6e5128');
    px(ctx, 6, 9, '#6e5128');
    px(ctx, 13, 13, '#6e5128');
  },
  // 9 leaves (with transparent holes)
  (ctx, r) => {
    fill(ctx, '#2e7d1e');
    speckle(ctx, r, ['#266c18', '#378f25', '#1f5e12'], 0.6);
    for (let y = 0; y < TILE; y++) {
      for (let x = 0; x < TILE; x++) {
        if (r() < 0.12) ctx.clearRect(x, y, 1, 1);
      }
    }
  },
  // 10 glass
  (ctx, r) => {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = 'rgba(220,240,250,0.9)';
    ctx.fillRect(0, 0, TILE, 1);
    ctx.fillRect(0, TILE - 1, TILE, 1);
    ctx.fillRect(0, 0, 1, TILE);
    ctx.fillRect(TILE - 1, 0, 1, TILE);
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    px(ctx, 3, 4, 'rgba(255,255,255,0.6)');
    for (let i = 0; i < 5; i++) px(ctx, 11 - i, 3 + i, 'rgba(255,255,255,0.5)');
    for (let i = 0; i < 3; i++) px(ctx, 6 - i, 9 + i, 'rgba(255,255,255,0.4)');
  },
  // 11 water
  (ctx, r) => {
    fill(ctx, '#3a6fd8');
    speckle(ctx, r, ['#3567cb', '#4379e2', '#2f5fbf'], 0.5);
    ctx.fillStyle = '#5d8ceb';
    for (let i = 0; i < 4; i++) {
      ctx.fillRect((r() * 12) | 0, (r() * TILE) | 0, 3, 1);
    }
  },
  // 12 brick
  (ctx, r) => {
    fill(ctx, '#9c4a3a');
    speckle(ctx, r, ['#914437', '#a7523f'], 0.3);
    ctx.fillStyle = '#cfc6bd';
    for (let y = 3; y < TILE; y += 4) ctx.fillRect(0, y, TILE, 1);
    for (let row = 0; row < 4; row++) {
      const off = row % 2 === 0 ? 4 : 0;
      for (let x = off; x < TILE; x += 8) ctx.fillRect(x, row * 4, 1, 3);
    }
  },
  // 13 bedrock
  (ctx, r) => {
    fill(ctx, '#3a3a3a');
    speckle(ctx, r, ['#2c2c2c', '#4a4a4a', '#565656', '#222222'], 0.7);
  },
];

export function createAtlas() {
  const canvas = document.createElement('canvas');
  canvas.width = COLS * TILE;
  canvas.height = ROWS * TILE;
  const ctx = canvas.getContext('2d');

  tilePainters.forEach((paint, i) => {
    const tx = (i % COLS) * TILE;
    const ty = ((i / COLS) | 0) * TILE;
    ctx.save();
    ctx.translate(tx, ty);
    ctx.beginPath();
    ctx.rect(0, 0, TILE, TILE);
    ctx.clip();
    paint(ctx, rng(1234 + i * 99));
    ctx.restore();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;

  // uv rect for a tile, in flipY=true convention (v grows upward)
  function tileUV(i) {
    const col = i % COLS;
    const row = (i / COLS) | 0;
    const u0 = col / COLS;
    const u1 = (col + 1) / COLS;
    const v1 = 1 - row / ROWS; // top of tile
    const v0 = 1 - (row + 1) / ROWS; // bottom of tile
    return [u0, v0, u1, v1];
  }

  return { canvas, texture, tileUV };
}

// Draw a single tile onto a small canvas (used for hotbar/inventory icons)
export function tileIcon(atlasCanvas, tileIndex, size = 32) {
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  const sx = (tileIndex % COLS) * TILE;
  const sy = ((tileIndex / COLS) | 0) * TILE;
  ctx.drawImage(atlasCanvas, sx, sy, TILE, TILE, 0, 0, size, size);
  return c;
}
