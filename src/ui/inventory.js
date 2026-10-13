import { B, BLOCKS } from '../constants.js';
import { ITEMS, RECIPES, STACK_MAX, blockItem, itemName, canCraft, craft } from '../world/items.js';
import { tileIcon, itemIconCanvas } from '../render/textures.js';

const INV_KEY = 'pcraft:inv';

// 36 slot: 0-8 hotbar, 9-35 ana envanter. Her slot null | {id, count}.
export class Inventory {
  constructor(atlasCanvas) {
    this.atlasCanvas = atlasCanvas;
    this.slots = new Array(36).fill(null);
    this.selected = 0;
    this.open = false;
    this.held = null; // imleçte tutulan yığın
    this.el = document.getElementById('inventory');
    this.gridEl = null;
    this.craftEl = null;
    this.paletteEl = null;
    this.heldEl = null;
    this.onChange = null; // hud güncellemesi için
    this._load();
    this._buildUI();
    document.addEventListener('mousemove', (e) => {
      if (this.heldEl && this.held) {
        this.heldEl.style.left = `${e.clientX + 8}px`;
        this.heldEl.style.top = `${e.clientY + 8}px`;
      }
    });
  }

  // ---- veri işlemleri ----
  add(id, count = 1) {
    // önce mevcut yığınları doldur, sonra boş slotları (hotbar öncelikli)
    let left = count;
    for (let i = 0; i < this.slots.length && left > 0; i++) {
      const s = this.slots[i];
      if (s && s.id === id && s.count < STACK_MAX) {
        const put = Math.min(STACK_MAX - s.count, left);
        s.count += put;
        left -= put;
      }
    }
    for (let i = 0; i < this.slots.length && left > 0; i++) {
      if (!this.slots[i]) {
        const put = Math.min(STACK_MAX, left);
        this.slots[i] = { id, count: put };
        left -= put;
      }
    }
    this._changed();
    return left; // sığmayan miktar
  }

  count(id) {
    return this.slots.reduce((n, s) => n + (s && s.id === id ? s.count : 0), 0);
  }

  consumeSelected(n = 1) {
    const s = this.slots[this.selected];
    if (!s || s.count < n) return false;
    s.count -= n;
    if (s.count <= 0) this.slots[this.selected] = null;
    this._changed();
    return true;
  }

  selectedStack() {
    return this.slots[this.selected];
  }

  selectedBlockId() {
    const s = this.selectedStack();
    if (!s) return null;
    const def = ITEMS[s.id];
    return def?.block ?? null;
  }

  clear() {
    this.slots.fill(null);
    this._changed();
  }

  _changed() {
    this._save();
    this.onChange?.();
    if (this.open) this.renderUI();
  }

  _save() {
    try {
      localStorage.setItem(INV_KEY, JSON.stringify(this.slots));
    } catch { /* dolu storage: envanter oturumda kalır */ }
  }

  _load() {
    try {
      const raw = localStorage.getItem(INV_KEY);
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr) && arr.length === 36) this.slots = arr;
      }
    } catch { /* bozuk kayıt: boş envanter */ }
  }

  // ---- UI ----
  _buildUI() {
    this.el.innerHTML = `
      <div class="panel inv-panel">
        <div id="inv-tabs">
          <button id="tab-survival" class="tab-btn">Envanter</button>
          <button id="tab-palette" class="tab-btn">Yaratıcı</button>
        </div>
        <div id="inv-survival">
          <div id="craft-list"></div>
          <div id="inv-slots"></div>
        </div>
        <div id="inv-palette" hidden></div>
        <p class="sub">Tık: al/ bırak · Sağ tık: yarısını al / bir tane koy</p>
      </div>`;
    this.gridEl = this.el.querySelector('#inv-slots');
    this.craftEl = this.el.querySelector('#craft-list');
    this.paletteEl = this.el.querySelector('#inv-palette');
    this.survivalEl = this.el.querySelector('#inv-survival');
    this.heldEl = document.createElement('div');
    this.heldEl.id = 'cursor-item';
    this.heldEl.hidden = true;
    document.body.appendChild(this.heldEl);

    // 4 satır x 9 slot (üst 3 satır ana, alt satır hotbar)
    for (let i = 9; i < 36; i++) this.gridEl.appendChild(this._slotEl(i));
    const hotbarRow = document.createElement('div');
    hotbarRow.className = 'hotbar-row';
    for (let i = 0; i < 9; i++) hotbarRow.appendChild(this._slotEl(i));
    this.gridEl.appendChild(hotbarRow);

    // yaratıcı palet
    for (const id of Object.keys(ITEMS)) {
      const slot = document.createElement('div');
      slot.className = 'slot';
      slot.title = ITEMS[id].name;
      slot.appendChild(this._iconEl(id));
      slot.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.held = { id, count: STACK_MAX };
        this._syncHeld();
      });
      this.paletteEl.appendChild(slot);
    }

    this.el.querySelector('#tab-survival').addEventListener('click', () => this._tab('survival'));
    this.el.querySelector('#tab-palette').addEventListener('click', () => this._tab('palette'));
  }

  _tab(which) {
    this.survivalEl.hidden = which !== 'survival';
    this.paletteEl.hidden = which !== 'palette';
  }

  _iconEl(id, size = 32) {
    const def = ITEMS[id];
    if (def?.block !== undefined) return tileIcon(this.atlasCanvas, BLOCKS[def.block].tiles[1], size);
    return itemIconCanvas(id, size);
  }

  _slotEl(i) {
    const el = document.createElement('div');
    el.className = 'slot inv-slot';
    el.dataset.slot = i;
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      if (e.button === 0) this._clickSlot(i);
      else if (e.button === 2) this._rightClickSlot(i);
    });
    return el;
  }

  _clickSlot(i) {
    const s = this.slots[i];
    if (this.held) {
      if (!s) {
        this.slots[i] = this.held;
        this.held = null;
      } else if (s.id === this.held.id) {
        const put = Math.min(STACK_MAX - s.count, this.held.count);
        s.count += put;
        this.held.count -= put;
        if (this.held.count <= 0) this.held = null;
      } else {
        this.slots[i] = this.held;
        this.held = s;
      }
    } else if (s) {
      this.held = s;
      this.slots[i] = null;
    }
    this._syncHeld();
    this._changed();
  }

  _rightClickSlot(i) {
    const s = this.slots[i];
    if (this.held) {
      // eldeki yığından bir tane koy
      if (!s) {
        this.slots[i] = { id: this.held.id, count: 1 };
        this.held.count--;
      } else if (s.id === this.held.id && s.count < STACK_MAX) {
        s.count++;
        this.held.count--;
      }
      if (this.held.count <= 0) this.held = null;
    } else if (s && s.count > 1) {
      // yarısını al
      const half = Math.ceil(s.count / 2);
      this.held = { id: s.id, count: half };
      s.count -= half;
      if (s.count <= 0) this.slots[i] = null;
    }
    this._syncHeld();
    this._changed();
  }

  _syncHeld() {
    if (this.held) {
      this.heldEl.hidden = false;
      this.heldEl.innerHTML = '';
      this.heldEl.appendChild(this._iconEl(this.held.id, 28));
      const n = document.createElement('span');
      n.className = 'count';
      n.textContent = this.held.count;
      this.heldEl.appendChild(n);
    } else {
      this.heldEl.hidden = true;
    }
  }

  renderUI() {
    // slotlar
    for (const el of this.gridEl.querySelectorAll('.inv-slot')) {
      const i = Number(el.dataset.slot);
      const s = this.slots[i];
      el.innerHTML = '';
      el.classList.toggle('selected', i === this.selected);
      if (s) {
        el.appendChild(this._iconEl(s.id));
        el.title = itemName(s.id);
        const n = document.createElement('span');
        n.className = 'count';
        n.textContent = s.count;
        el.appendChild(n);
      } else {
        el.title = '';
      }
    }
    // tarifler
    this.craftEl.innerHTML = '<h3>Üretim</h3>';
    for (const recipe of RECIPES) {
      const ok = canCraft(this.slots, recipe);
      const row = document.createElement('div');
      row.className = 'recipe' + (ok ? ' ok' : '');
      const out = document.createElement('span');
      out.className = 'recipe-out';
      out.appendChild(this._iconEl(recipe.out.id, 24));
      const n = document.createElement('span');
      n.className = 'count';
      n.textContent = recipe.out.count;
      out.appendChild(n);
      row.appendChild(out);
      const ing = document.createElement('span');
      ing.className = 'recipe-in';
      ing.textContent = recipe.in.map(({ id, count }) => `${count}× ${itemName(id)}`).join(' + ');
      row.appendChild(ing);
      const btn = document.createElement('button');
      btn.textContent = 'Üret';
      btn.disabled = !ok;
      btn.addEventListener('click', () => {
        const out = craft(this.slots, recipe);
        if (out) {
          this.add(out.id, out.count);
          window.dispatchEvent(new CustomEvent('pcraft:craft'));
        }
      });
      row.appendChild(btn);
      this.craftEl.appendChild(row);
    }
  }

  toggle(open = !this.open) {
    this.open = open;
    this.el.hidden = !open;
    if (open) {
      document.exitPointerLock?.();
      this.renderUI();
    } else {
      // açıkken elde kalan yığını envantere geri koy
      if (this.held) {
        const left = this.add(this.held.id, this.held.count);
        if (left > 0) console.warn('envanter doldu, item kayboldu:', left);
        this.held = null;
        this._syncHeld();
      }
    }
  }
}
