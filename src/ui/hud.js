import { BLOCKS, DEFAULT_HOTBAR } from '../constants.js';
import { tileIcon } from '../render/textures.js';

export class Hud {
  constructor(atlasCanvas) {
    this.atlasCanvas = atlasCanvas;
    this.slots = [...DEFAULT_HOTBAR];
    this.selected = 0;
    this.el = document.getElementById('hud');
    this.hotbarEl = document.getElementById('hotbar');
    this.coordsEl = document.getElementById('coords');
    this.countEl = document.getElementById('player-count');
    this.toastEl = document.getElementById('toast');
    this._toastTimer = null;
    this.renderHotbar();

    window.addEventListener('wheel', (e) => {
      if (document.pointerLockElement) {
        this.select((this.selected + (e.deltaY > 0 ? 1 : -1) + 9) % 9);
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.code.startsWith('Digit')) {
        const n = Number(e.code.slice(5));
        if (n >= 1 && n <= 9) this.select(n - 1);
      }
    });
  }

  show() { this.el.hidden = false; }

  renderHotbar() {
    this.hotbarEl.innerHTML = '';
    this.slots.forEach((id, i) => {
      const slot = document.createElement('div');
      slot.className = 'slot' + (i === this.selected ? ' selected' : '');
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = i + 1;
      slot.appendChild(num);
      if (id && BLOCKS[id]) {
        slot.appendChild(tileIcon(this.atlasCanvas, BLOCKS[id].tiles[1], 32));
        slot.title = BLOCKS[id].name;
      }
      this.hotbarEl.appendChild(slot);
    });
  }

  select(i) {
    this.selected = i;
    this.renderHotbar();
  }

  setSlot(i, blockId) {
    this.slots[i] = blockId;
    this.renderHotbar();
  }

  currentBlock() {
    return this.slots[this.selected];
  }

  setCoords(pos, fps) {
    this.coordsEl.textContent =
      `x ${pos.x.toFixed(0)}  y ${pos.y.toFixed(0)}  z ${pos.z.toFixed(0)}  ·  ${fps} fps`;
  }

  setPlayerCount(n) {
    this.countEl.textContent = `👤 ${n}`;
  }

  toast(msg, ms = 2500) {
    this.toastEl.textContent = msg;
    this.toastEl.hidden = false;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { this.toastEl.hidden = true; }, ms);
  }
}
