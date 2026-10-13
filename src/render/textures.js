import * as THREE from 'three';

export const TILE = 16;
export const COLS = 4;
export const ROWS = 8;

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
  // 14 gravel
  (ctx, r) => {
    fill(ctx, '#8a837c');
    speckle(ctx, r, ['#7b746d', '#98918a', '#6a635c', '#a29b93'], 0.55);
    ctx.fillStyle = '#5d564f';
    for (let i = 0; i < 7; i++) {
      const s = 1 + ((r() * 2) | 0);
      ctx.fillRect((r() * (TILE - s)) | 0, (r() * (TILE - s)) | 0, s + 1, s + 1);
    }
  },
  // 15 sandstone
  (ctx, r) => {
    fill(ctx, '#d9cb96');
    speckle(ctx, r, ['#d1c28c', '#e2d5a4'], 0.35);
    ctx.fillStyle = '#bfb07c';
    for (let y = 1; y < TILE; y += 5) ctx.fillRect(0, y, TILE, 1);
  },
  // 16 snow top
  (ctx, r) => {
    fill(ctx, '#eef3f8');
    speckle(ctx, r, ['#e4ebf2', '#f8fbff', '#dde6ef'], 0.45);
  },
  // 17 snow side (dirt with a snowy cap)
  (ctx, r) => {
    fill(ctx, '#7a5538');
    speckle(ctx, r, ['#6e4b30', '#86603f', '#5f4129'], 0.45);
    for (let x = 0; x < TILE; x++) {
      const d = 3 + ((r() * 3) | 0);
      for (let y = 0; y < d; y++) px(ctx, x, y, r() < 0.5 ? '#eef3f8' : '#e0e8f0');
    }
  },
  // 18 coal ore
  (ctx, r) => {
    fill(ctx, '#8d8d8d');
    speckle(ctx, r, ['#828282', '#979797'], 0.4);
    for (let i = 0; i < 9; i++) {
      const s = 1 + ((r() * 2) | 0);
      ctx.fillStyle = ['#2b2b2b', '#1c1c1c', '#3a3a3a'][(r() * 3) | 0];
      ctx.fillRect((r() * (TILE - s)) | 0, (r() * (TILE - s)) | 0, s + 1, s + 1);
    }
  },
  // 19 iron ore
  (ctx, r) => {
    fill(ctx, '#8d8d8d');
    speckle(ctx, r, ['#828282', '#979797'], 0.4);
    for (let i = 0; i < 9; i++) {
      const s = 1 + ((r() * 2) | 0);
      ctx.fillStyle = ['#d8a06a', '#c98f56', '#e8b57f'][(r() * 3) | 0];
      ctx.fillRect((r() * (TILE - s)) | 0, (r() * (TILE - s)) | 0, s + 1, s + 1);
    }
  },
  // 20 cactus
  (ctx, r) => {
    fill(ctx, '#3f7d2e');
    for (let x = 0; x < TILE; x += 4) {
      for (let y = 0; y < TILE; y++) px(ctx, x, y, '#346a26');
    }
    speckle(ctx, r, ['#458a33', '#39702a'], 0.3);
    for (let i = 0; i < 10; i++) {
      px(ctx, (r() * TILE) | 0, (r() * TILE) | 0, '#dfe8d0');
    }
  },
  // 21 obsidian
  (ctx, r) => {
    fill(ctx, '#17111f');
    speckle(ctx, r, ['#100b18', '#221a2e', '#0b0712'], 0.5);
    for (let i = 0; i < 7; i++) {
      px(ctx, (r() * TILE) | 0, (r() * TILE) | 0, '#4a3a6a');
    }
    for (let i = 0; i < 4; i++) {
      px(ctx, (r() * TILE) | 0, (r() * TILE) | 0, '#6a55a0');
    }
  },
  // 22 glowstone
  (ctx, r) => {
    fill(ctx, '#c9a24a');
    speckle(ctx, r, ['#b8903c', '#e0bd63', '#a07f33'], 0.45);
    for (let i = 0; i < 12; i++) {
      const s = 1 + ((r() * 2) | 0);
      ctx.fillStyle = ['#ffe9a8', '#fff6d8', '#f5d87e'][(r() * 3) | 0];
      ctx.fillRect((r() * (TILE - s)) | 0, (r() * (TILE - s)) | 0, s + 1, s + 1);
    }
  },
  // 23 netherrack
  (ctx, r) => {
    fill(ctx, '#6e2f2f');
    speckle(ctx, r, ['#5e2626', '#7e3a3a', '#4e1f1f', '#8a4444'], 0.55);
    ctx.fillStyle = '#3f1818';
    for (let i = 0; i < 8; i++) {
      ctx.fillRect((r() * TILE) | 0, (r() * TILE) | 0, 1 + ((r() * 2) | 0), 1);
    }
  },
  // 24 lava
  (ctx, r) => {
    fill(ctx, '#e25822');
    speckle(ctx, r, ['#d44a1a', '#f26a2a', '#c23f14'], 0.4);
    ctx.fillStyle = '#ffd23e';
    for (let i = 0; i < 6; i++) {
      const x = (r() * 12) | 0;
      const y = (r() * TILE) | 0;
      ctx.fillRect(x, y, 2 + ((r() * 3) | 0), 1);
      ctx.fillRect(x + 1, y + 1, 2, 1);
    }
    for (let i = 0; i < 5; i++) {
      px(ctx, (r() * TILE) | 0, (r() * TILE) | 0, '#fff0a0');
    }
  },
  // 25 portal (swirling violet energy)
  (ctx, r) => {
    ctx.clearRect(0, 0, TILE, TILE);
    for (let y = 0; y < TILE; y++) {
      for (let x = 0; x < TILE; x++) {
        if (r() < 0.18) continue; // holes -> looks like flowing energy
        const t = (x + y) / (TILE * 2);
        const c = ['#8a2be2', '#6a1fb8', '#a94fff', '#5416a0'][(r() * 4) | 0];
        ctx.fillStyle = c;
        ctx.fillRect(x, y, 1, 1);
      }
    }
    ctx.fillStyle = 'rgba(220,160,255,0.9)';
    for (let i = 0; i < 8; i++) {
      px(ctx, (r() * TILE) | 0, (r() * TILE) | 0, 'rgba(230,190,255,0.95)');
    }
  },
  // 26 wool
  (ctx, r) => {
    fill(ctx, '#e8e8e8');
    speckle(ctx, r, ['#dedede', '#f4f4f4', '#d2d2d2'], 0.5);
    ctx.fillStyle = '#c8c8c8';
    for (let i = 0; i < 10; i++) {
      ctx.fillRect((r() * TILE) | 0, (r() * TILE) | 0, 2, 1);
    }
  },
  // 27 torch (cross quads: stick + flame)
  (ctx) => {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = '#8a6a3e';
    ctx.fillRect(7, 6, 2, 10);
    ctx.fillStyle = '#6e5330';
    ctx.fillRect(7, 6, 1, 10);
    ctx.fillStyle = '#ffd23e';
    ctx.fillRect(6.5, 3, 3, 4);
    ctx.fillStyle = '#fff0a0';
    ctx.fillRect(7, 1.5, 2, 3);
    ctx.fillStyle = '#e25822';
    ctx.fillRect(6, 5, 4, 2);
  },
  // 28 poppy (red flower cross)
  (ctx) => {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = '#3f7d2e';
    ctx.fillRect(7.5, 8, 1, 8);
    ctx.fillStyle = '#458a33';
    ctx.fillRect(5, 11, 3, 1);
    ctx.fillRect(8, 9, 3, 1);
    ctx.fillStyle = '#d43a2f';
    ctx.fillRect(5.5, 3, 5, 5);
    ctx.fillStyle = '#b02a22';
    ctx.fillRect(6, 6, 4, 2);
    ctx.fillStyle = '#2b2b2b';
    ctx.fillRect(7, 4.5, 2, 2);
  },
  // 29 dandelion (yellow flower cross)
  (ctx) => {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = '#3f7d2e';
    ctx.fillRect(7.5, 8, 1, 8);
    ctx.fillStyle = '#458a33';
    ctx.fillRect(8, 12, 3, 1);
    ctx.fillStyle = '#ffd23e';
    ctx.fillRect(5.5, 3, 5, 5);
    ctx.fillStyle = '#f0b429';
    ctx.fillRect(6, 6, 4, 2);
    ctx.fillStyle = '#fff0a0';
    ctx.fillRect(7, 4.5, 2, 2);
  },
  // 30 nether torch (blue flame)
  (ctx) => {
    ctx.clearRect(0, 0, TILE, TILE);
    ctx.fillStyle = '#5e4630';
    ctx.fillRect(7, 6, 2, 10);
    ctx.fillStyle = '#453322';
    ctx.fillRect(7, 6, 1, 10);
    ctx.fillStyle = '#4fc3f7';
    ctx.fillRect(6.5, 3, 3, 4);
    ctx.fillStyle = '#e0f7ff';
    ctx.fillRect(7, 1.5, 2, 3);
    ctx.fillStyle = '#1e88e5';
    ctx.fillRect(6, 5, 4, 2);
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

// Item ikonu: blok itemleri atlas karesinden, blok olmayanlar piksel art
// çizimden üretilir (16x16, ölçeklenerek büyütülür).
const ITEM_PAINTERS = {
  stick: (c) => {
    c.fillStyle = '#8a6a3e';
    for (let i = 0; i < 9; i++) c.fillRect(3 + i, 12 - i, 2, 2);
  },
  coal: (c) => {
    c.fillStyle = '#2b2b2b';
    c.fillRect(4, 6, 5, 5);
    c.fillRect(8, 4, 4, 4);
    c.fillStyle = '#4a4a4a';
    c.fillRect(5, 7, 2, 1);
    c.fillRect(9, 5, 2, 1);
  },
  iron_chunk: (c) => {
    c.fillStyle = '#d8d8d8';
    c.fillRect(4, 5, 5, 5);
    c.fillRect(8, 8, 4, 4);
    c.fillStyle = '#f4f4f4';
    c.fillRect(5, 6, 2, 2);
    c.fillStyle = '#9a9a9a';
    c.fillRect(9, 9, 2, 2);
  },
  feather: (c) => {
    c.fillStyle = '#f4f4f4';
    for (let i = 0; i < 7; i++) c.fillRect(5 + i * 0.8, 3 + i, 2.4, 1.6);
    c.fillStyle = '#c8c8c8';
    for (let i = 0; i < 7; i++) c.fillRect(6.2 + i * 0.8, 3.5 + i, 0.6, 1);
  },
  bone: (c) => {
    c.fillStyle = '#f0ead8';
    for (let i = 0; i < 8; i++) c.fillRect(4 + i, 11 - i, 2, 2);
    c.fillRect(3, 11, 3, 3);
    c.fillRect(11, 2, 3, 3);
    c.fillStyle = '#d0c8b0';
    c.fillRect(5, 11, 2, 2);
  },
  blaze_rod: (c) => {
    c.fillStyle = '#e8a020';
    for (let i = 0; i < 9; i++) c.fillRect(6, 2 + i, 3, 1.4);
    c.fillStyle = '#ffd23e';
    c.fillRect(6.5, 3, 1, 8);
  },
  magma_powder: (c) => {
    c.fillStyle = '#e25822';
    c.fillRect(4, 6, 4, 4);
    c.fillRect(9, 4, 3, 3);
    c.fillRect(8, 9, 4, 3);
    c.fillStyle = '#ffd23e';
    c.fillRect(5, 7, 2, 1);
    c.fillRect(9, 10, 2, 1);
  },
  wraith_dust: (c) => {
    c.fillStyle = '#9a86c8';
    c.fillRect(4, 6, 3, 3);
    c.fillRect(9, 5, 3, 3);
    c.fillRect(7, 10, 3, 3);
    c.fillStyle = '#d0c4f0';
    c.fillRect(5, 7, 1, 1);
    c.fillRect(10, 6, 1, 1);
  },
  porkchop: (c) => {
    c.fillStyle = '#e89aa4';
    c.fillRect(4, 3, 7, 8);
    c.fillStyle = '#f4c0c8';
    c.fillRect(5, 4, 5, 3);
    c.fillStyle = '#f0ead8';
    c.fillRect(9, 10, 3, 4);
  },
  beef: (c) => {
    c.fillStyle = '#a03428';
    c.fillRect(3, 5, 9, 7);
    c.fillStyle = '#c85040';
    c.fillRect(4, 6, 6, 3);
  },
  chicken_meat: (c) => {
    c.fillStyle = '#e8b87a';
    c.fillRect(4, 4, 8, 7);
    c.fillStyle = '#f4dcae';
    c.fillRect(5, 5, 5, 3);
    c.fillStyle = '#f0ead8';
    c.fillRect(9, 11, 3, 3);
  },
  mutton: (c) => {
    c.fillStyle = '#d46a5a';
    c.fillRect(4, 4, 8, 8);
    c.fillStyle = '#eda092';
    c.fillRect(5, 5, 5, 4);
    c.fillStyle = '#f0ead8';
    c.fillRect(10, 11, 3, 3);
  },
  rotten_flesh: (c) => {
    c.fillStyle = '#7a8a3a';
    c.fillRect(4, 5, 8, 7);
    c.fillStyle = '#5a6a2a';
    c.fillRect(5, 6, 3, 2);
    c.fillRect(9, 9, 2, 2);
    c.fillStyle = '#8a9a4a';
    c.fillRect(9, 6, 2, 2);
  },
};

// araçlar: (kalem rengi tier'a göre) + kafa şekli türe göre
function toolPainter(kind, tier) {
  const head = { 1: '#a8824e', 2: '#8d8d8d', 3: '#e8e8e8' }[tier] || '#8d8d8d';
  const handle = '#8a6a3e';
  return (c) => {
    c.fillStyle = handle;
    for (let i = 0; i < 8; i++) c.fillRect(3 + i, 12 - i, 2, 2);
    if (kind === 'pickaxe') {
      c.fillStyle = head;
      c.fillRect(3, 2, 10, 2);
      c.fillRect(3, 4, 2, 2);
      c.fillRect(11, 4, 2, 2);
    } else if (kind === 'shovel') {
      c.fillStyle = head;
      c.fillRect(10, 2, 4, 4);
      c.fillRect(10, 6, 2, 2);
    } else { // sword: uzun bıçak
      c.fillStyle = head;
      for (let i = 0; i < 8; i++) c.fillRect(6 + i, 8 - i, 2.4, 2);
      c.fillStyle = '#5e4630';
      c.fillRect(4, 10, 4, 2);
    }
  };
}

export function itemIconCanvas(itemId, size = 32) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  let paint = ITEM_PAINTERS[itemId];
  if (!paint) {
    const m = /^(wood|stone|iron)_(pick|shovel|sword)$/.exec(itemId);
    if (m) paint = toolPainter(m[2], { wood: 1, stone: 2, iron: 3 }[m[1]]);
  }
  if (paint) {
    const tmp = document.createElement('canvas');
    tmp.width = tmp.height = 16;
    paint(tmp.getContext('2d'));
    ctx.drawImage(tmp, 0, 0, size, size);
  }
  return canvas;
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

// Average opaque colour of a tile, for break particles. Cached per tile.
const avgCache = new Map();
export function tileAverageColor(atlasCanvas, tileIndex) {
  let color = avgCache.get(tileIndex);
  if (color) return color;
  const ctx = atlasCanvas.getContext('2d');
  const sx = (tileIndex % COLS) * TILE;
  const sy = ((tileIndex / COLS) | 0) * TILE;
  const px = ctx.getImageData(sx, sy, TILE, TILE).data;
  let r = 0, g = 0, b = 0, n = 0;
  for (let i = 0; i < px.length; i += 4) {
    if (px[i + 3] < 128) continue; // skip transparent pixels
    r += px[i]; g += px[i + 1]; b += px[i + 2]; n++;
  }
  if (n === 0) { r = g = b = 128; n = 1; }
  color = new THREE.Color().setRGB(r / n / 255, g / n / 255, b / n / 255, THREE.SRGBColorSpace);
  avgCache.set(tileIndex, color);
  return color;
}

// Progressive crack overlays (one texture per mining stage).
export function createCrackTextures(stages = 3) {
  const rand = rng(4242);
  const cracks = [];
  const textures = [];
  for (let s = 0; s < stages; s++) {
    const want = 3 + s * 4;
    while (cracks.length < want) {
      cracks.push({
        x: (rand() * TILE) | 0,
        y: (rand() * TILE) | 0,
        len: 2 + ((rand() * 6) | 0),
        ang: rand() * Math.PI * 2,
      });
    }
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = TILE;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(0,0,0,0.6)';
    ctx.lineWidth = 1;
    for (const c of cracks) {
      ctx.beginPath();
      ctx.moveTo(c.x + 0.5, c.y + 0.5);
      ctx.lineTo(c.x + 0.5 + Math.cos(c.ang) * c.len, c.y + 0.5 + Math.sin(c.ang) * c.len);
      ctx.stroke();
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;
    textures.push(tex);
  }
  return textures;
}
