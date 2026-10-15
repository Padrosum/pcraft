import { BLOCKS } from '../constants.js';
import { ITEMS, itemName } from '../world/items.js';
import { tileIcon, itemIconCanvas } from '../render/textures.js';

export class Hud {
  constructor(atlasCanvas) {
    this.atlasCanvas = atlasCanvas;
    this.el = document.getElementById('hud');
    this.hotbarEl = document.getElementById('hotbar');
    this.coordsEl = document.getElementById('coords');
    this.countEl = document.getElementById('player-count');
    this.toastEl = document.getElementById('toast');
    this.waterEl = document.getElementById('water-overlay');
    this.heartsEl = document.getElementById('hearts');
    this.hungerEl = document.getElementById('hunger');
    this.bubblesEl = document.getElementById('bubbles');
    this.itemNameEl = document.getElementById('item-name');
    this.attackEl = document.getElementById('attack-meter');
    this.attackFillEl = this.attackEl?.querySelector('i') ?? null;
    this._toastTimer = null;
    this._flashTimer = null;
    this._nameTimer = null;
    this.slots = new Array(9).fill(null);
    this.selected = 0;
    this.renderHearts();
    this.renderHunger();
    this.renderBubbles();
  }

  show() { this.el.hidden = false; }

  // ---- can / açlık / hava ----
  renderHearts() {
    this._row(this.heartsEl, 10, '♥');
  }

  renderHunger() {
    this._row(this.hungerEl, 10, '🍗');
  }

  renderBubbles() {
    this._row(this.bubblesEl, 10, '●');
  }

  _row(el, n, ch) {
    if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.className = 'pip';
      s.textContent = ch;
      el.appendChild(s);
    }
  }

  setHealth(hp) {
    this._pips(this.heartsEl, hp, 2);
  }

  setHunger(hunger) {
    this._pips(this.hungerEl, hunger, 1);
  }

  setAir(bubbles) {
    if (!this.bubblesEl) return;
    const show = bubbles < 10;
    this.bubblesEl.style.display = show ? 'flex' : 'none';
    this._pips(this.bubblesEl, bubbles, 1);
  }

  _pips(el, value, unit) {
    if (!el) return;
    const pips = el.children;
    for (let i = 0; i < pips.length; i++) {
      const filled = value >= (i + 1) * unit;
      const half = !filled && value === i * unit + unit / 2;
      pips[i].className = 'pip' + (filled ? ' full' : half ? ' half' : ' empty');
    }
  }

  flashDamage() {
    if (!this.heartsEl) return;
    this.heartsEl.classList.remove('shake');
    void this.heartsEl.offsetWidth;
    this.heartsEl.classList.add('shake');
    this.heartsEl.classList.add('red');
    clearTimeout(this._flashTimer);
    this._flashTimer = setTimeout(() => this.heartsEl.classList.remove('red'), 350);
  }

  // ---- vuruş şarjı ----
  // t: 0..1 şarj ilerlemesi, crit: kritik vuruş mümkün mü
  setAttackCharge(t, crit = false) {
    if (!this.attackEl) return;
    const ready = t >= 0.999;
    this.attackEl.classList.add('active');
    this.attackEl.classList.toggle('ready', ready && !crit);
    this.attackEl.classList.toggle('crit', crit);
    if (this.attackFillEl) this.attackFillEl.style.width = `${Math.round(t * 100)}%`;
  }

  // ---- hotbar: envanterden beslenir ----
  setHotbar(slots, selected) {
    this.slots = slots;
    this.selected = selected;
    this.hotbarEl.innerHTML = '';
    slots.forEach((s, i) => {
      const slot = document.createElement('div');
      slot.className = 'slot' + (i === selected ? ' selected' : '');
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = i + 1;
      slot.appendChild(num);
      if (s) {
        const def = ITEMS[s.id];
        const icon = def?.block !== undefined
          ? tileIcon(this.atlasCanvas, BLOCKS[def.block].tiles[1], 32)
          : itemIconCanvas(s.id, 32);
        slot.appendChild(icon);
        slot.title = itemName(s.id);
        if (s.count > 1) {
          const n = document.createElement('span');
          n.className = 'count';
          n.textContent = s.count;
          slot.appendChild(n);
        }
      }
      this.hotbarEl.appendChild(slot);
    });
  }

  flashItemName(id) {
    if (!this.itemNameEl || !id) return;
    this.itemNameEl.textContent = itemName(id);
    this.itemNameEl.hidden = false;
    clearTimeout(this._nameTimer);
    this._nameTimer = setTimeout(() => { this.itemNameEl.hidden = true; }, 1500);
  }

  // ---- genel ----
  setCoords(pos, fps, flying = false) {
    this.coordsEl.textContent =
      `x ${pos.x.toFixed(0)}  y ${pos.y.toFixed(0)}  z ${pos.z.toFixed(0)}  ·  ${fps} fps` +
      (flying ? '  ·  ✈ uçuş' : '');
  }

  setUnderwater(on) {
    this.waterEl.hidden = !on;
    this.waterEl.classList.toggle('lava', false);
  }

  setInLava(on) {
    this.waterEl.hidden = !on;
    this.waterEl.classList.toggle('lava', on);
  }

  toggleCoords(on) {
    this.coordsEl.style.display = on ? 'block' : 'none';
  }

  toast(msg, ms = 2500) {
    this.toastEl.textContent = msg;
    this.toastEl.hidden = false;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => { this.toastEl.hidden = true; }, ms);
  }
}
