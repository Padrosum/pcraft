import { B, BLOCKS } from '../constants.js';
import {
  ITEMS,
  RECIPES,
  addToSlots,
  canCraft,
  canCraftWithOutput,
  craft,
  itemCategory,
  itemName,
  itemStackMax,
} from '../world/items.js';
import { tileIcon, itemIconCanvas } from '../render/textures.js';

const INV_KEY = 'pcraft:inv';
const SLOT_COUNT = 36;
const HOTBAR_SIZE = 9;
const CATEGORY_NAMES = {
  block: 'Blok',
  material: 'Malzeme',
  food: 'Yemek',
  tool: 'Alet',
};

// 0-8 hızlı erişim, 9-35 ana çanta. Her slot null | { id, count }.
export class Inventory {
  constructor(atlasCanvas) {
    this.atlasCanvas = atlasCanvas;
    this.slots = new Array(SLOT_COUNT).fill(null);
    this.selected = 0;
    this.open = false;
    this.held = null;
    this.activeTab = 'survival';
    this.query = '';
    this.el = document.getElementById('inventory');
    this.gridEl = null;
    this.hotbarEl = null;
    this.craftEl = null;
    this.paletteEl = null;
    this.heldEl = null;
    this.summaryEl = null;
    this.capacityEl = null;
    this.paletteCountEl = null;
    this.onChange = null;
    this.onToggle = null;
    this._load();
    this._buildUI();

    document.addEventListener('mousemove', (e) => {
      if (!this.heldEl || !this.held) return;
      this.heldEl.style.left = `${e.clientX + 10}px`;
      this.heldEl.style.top = `${e.clientY + 10}px`;
    });
  }

  // ---- veri işlemleri ----
  add(id, count = 1) {
    const amount = Math.max(0, Math.floor(Number(count) || 0));
    if (!ITEMS[id] || amount <= 0) return amount;
    const left = addToSlots(this.slots, id, amount);
    if (left !== amount) this._changed();
    return left;
  }

  count(id) {
    return this.slots.reduce((n, s) => n + (s?.id === id ? s.count : 0), 0);
  }

  consumeSelected(n = 1) {
    const amount = Math.max(0, Math.floor(Number(n) || 0));
    const s = this.slots[this.selected];
    if (!s || s.count < amount || amount <= 0) return false;
    s.count -= amount;
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
    return ITEMS[s.id]?.block ?? null;
  }

  clear() {
    this.slots.fill(null);
    this.held = null;
    this._syncHeld();
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
    } catch {
      // Storage kullanılamazsa envanter yine oturum boyunca çalışır.
    }
  }

  _load() {
    try {
      const raw = localStorage.getItem(INV_KEY);
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return;

      // Eski/bozuk kayıtlar oyunu bozmasın; geçerli itemleri normal yığınlara böl.
      const normalized = new Array(SLOT_COUNT).fill(null);
      for (const rawStack of arr.slice(0, SLOT_COUNT)) {
        if (!rawStack || !ITEMS[rawStack.id]) continue;
        const count = Math.min(
          itemStackMax(rawStack.id),
          Math.max(0, Math.floor(Number(rawStack.count) || 0)),
        );
        if (count > 0) addToSlots(normalized, rawStack.id, count);
      }
      this.slots = normalized;
    } catch {
      // Bozuk kayıt: boş envanter.
    }
  }

  // ---- UI ----
  _buildUI() {
    this.el.innerHTML = `
      <div class="panel inv-panel">
        <header class="inv-header">
          <div>
            <p class="eyebrow">OYUNCU ÇANTASI</p>
            <h2>Envanter</h2>
            <p id="inv-summary" class="inv-summary"></p>
          </div>
          <button id="inventory-close" class="icon-btn" type="button" aria-label="Envanteri kapat">×</button>
        </header>
        <div class="inv-toolbar">
          <div id="inv-tabs" role="tablist" aria-label="Envanter bölümleri">
            <button id="tab-survival" class="tab-btn active" type="button" role="tab" aria-selected="true">Çanta &amp; üretim</button>
            <button id="tab-palette" class="tab-btn" type="button" role="tab" aria-selected="false">Yaratıcı palet</button>
          </div>
          <label class="inv-search">
            <span aria-hidden="true">⌕</span>
            <input id="inv-search" type="search" placeholder="Item ara…" autocomplete="off" />
          </label>
        </div>
        <div class="inv-content">
          <section id="inv-survival" role="tabpanel">
            <div class="inventory-layout">
              <div class="inventory-main">
                <div class="section-label"><span>Çanta</span><span id="inv-capacity"></span></div>
                <div id="inv-slots" class="inventory-grid"></div>
                <div class="section-label hotbar-label"><span>Hızlı erişim</span><span>1–9</span></div>
                <div id="inv-hotbar" class="hotbar-row inventory-grid"></div>
              </div>
              <aside class="craft-panel">
                <div class="section-label"><span>Üretim</span><span class="section-hint">çıktı →</span></div>
                <div id="craft-list"></div>
              </aside>
            </div>
          </section>
          <section id="inv-palette" class="palette-panel" role="tabpanel" hidden>
            <div class="section-label"><span>Item kataloğu</span><span id="inv-palette-count"></span></div>
            <div id="inv-palette-grid" class="palette-grid"></div>
          </section>
        </div>
        <footer class="inv-help">
          <span><b>Sol tık</b> taşı</span>
          <span><b>Sağ tık</b> yarıya böl / tek koy</span>
          <span><b>Esc</b> veya <b>×</b> kapat</span>
        </footer>
      </div>`;

    this.gridEl = this.el.querySelector('#inv-slots');
    this.hotbarEl = this.el.querySelector('#inv-hotbar');
    this.craftEl = this.el.querySelector('#craft-list');
    this.paletteEl = this.el.querySelector('#inv-palette-grid');
    this.survivalEl = this.el.querySelector('#inv-survival');
    this.summaryEl = this.el.querySelector('#inv-summary');
    this.capacityEl = this.el.querySelector('#inv-capacity');
    this.paletteCountEl = this.el.querySelector('#inv-palette-count');

    this.heldEl = document.createElement('div');
    this.heldEl.id = 'cursor-item';
    this.heldEl.hidden = true;
    document.body.appendChild(this.heldEl);

    for (let i = HOTBAR_SIZE; i < SLOT_COUNT; i++) this.gridEl.appendChild(this._slotEl(i));
    for (let i = 0; i < HOTBAR_SIZE; i++) this.hotbarEl.appendChild(this._slotEl(i, true));

    this.el.querySelector('#tab-survival').addEventListener('click', () => this._tab('survival'));
    this.el.querySelector('#tab-palette').addEventListener('click', () => this._tab('palette'));
    this.el.querySelector('#inventory-close').addEventListener('click', () => this.toggle(false));
    this.el.querySelector('#inv-search').addEventListener('input', (e) => {
      this.query = e.target.value.trim().toLocaleLowerCase('tr-TR');
      this.renderUI();
    });

    this.renderUI();
  }

  _tab(which) {
    this.activeTab = which;
    const survival = which === 'survival';
    this.survivalEl.hidden = !survival;
    this.el.querySelector('#inv-palette').hidden = survival;
    for (const button of this.el.querySelectorAll('.tab-btn')) {
      const active = button.id === `tab-${which}`;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    }
    this.renderUI();
  }

  _matches(id) {
    if (!this.query) return true;
    return itemName(id).toLocaleLowerCase('tr-TR').includes(this.query) || id.includes(this.query);
  }

  _iconEl(id, size = 32) {
    const def = ITEMS[id];
    if (def?.block !== undefined) return tileIcon(this.atlasCanvas, BLOCKS[def.block].tiles[1], size);
    return itemIconCanvas(id, size);
  }

  _slotEl(i, hotbar = false) {
    const el = document.createElement('div');
    el.className = `slot inv-slot${hotbar ? ' hotbar-slot' : ''}`;
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
        const max = itemStackMax(s.id);
        const put = Math.min(max - s.count, this.held.count);
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
      const max = itemStackMax(this.held.id);
      if (!s) {
        this.slots[i] = { id: this.held.id, count: 1 };
        this.held.count--;
      } else if (s.id === this.held.id && s.count < max) {
        s.count++;
        this.held.count--;
      }
      if (this.held.count <= 0) this.held = null;
    } else if (s) {
      // Tek item de sağ tıkla alınabilir; yığınlar yukarı yuvarlanır.
      const half = Math.ceil(s.count / 2);
      this.held = { id: s.id, count: half };
      s.count -= half;
      if (s.count <= 0) this.slots[i] = null;
    }
    this._syncHeld();
    this._changed();
  }

  _syncHeld() {
    if (!this.held || this.held.count <= 0) {
      this.held = null;
      this.heldEl.hidden = true;
      return;
    }
    this.heldEl.hidden = false;
    this.heldEl.innerHTML = '';
    this.heldEl.appendChild(this._iconEl(this.held.id, 30));
    const n = document.createElement('span');
    n.className = 'count';
    n.textContent = this.held.count > 1 ? this.held.count : '';
    this.heldEl.appendChild(n);
  }

  _renderSlot(el) {
    const i = Number(el.dataset.slot);
    const s = this.slots[i];
    el.innerHTML = '';
    el.classList.toggle('selected', i < HOTBAR_SIZE && i === this.selected);
    el.classList.toggle('empty', !s);
    if (!s) {
      el.title = '';
      el.removeAttribute('aria-label');
      return;
    }
    el.appendChild(this._iconEl(s.id));
    if (i < HOTBAR_SIZE) {
      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = i + 1;
      el.appendChild(num);
    }
    if (s.count > 1) {
      const n = document.createElement('span');
      n.className = 'count';
      n.textContent = s.count;
      el.appendChild(n);
    }
    const label = `${itemName(s.id)} · ${s.count} adet`;
    el.title = label;
    el.setAttribute('aria-label', label);
  }

  _craftRecipe(recipe) {
    if (!canCraftWithOutput(this.slots, recipe)) return;
    const preview = this.slots.map((s) => (s ? { ...s } : null));
    const out = craft(preview, recipe);
    if (!out || addToSlots(preview, out.id, out.count) > 0) return;
    this.slots = preview;
    this._changed();
    window.dispatchEvent(new CustomEvent('pcraft:craft'));
  }

  _renderRecipes() {
    this.craftEl.innerHTML = '';
    const recipes = RECIPES.filter((recipe) => {
      if (!this.query) return true;
      return this._matches(recipe.out.id) || recipe.in.some(({ id }) => this._matches(id));
    });
    if (!recipes.length) {
      this.craftEl.innerHTML = '<p class="empty-state">Aramana uygun tarif yok.</p>';
      return;
    }
    for (const recipe of recipes) {
      const ok = canCraft(this.slots, recipe);
      const fits = ok && canCraftWithOutput(this.slots, recipe);
      const row = document.createElement('div');
      row.className = `recipe${fits ? ' ok' : ''}`;

      const out = document.createElement('span');
      out.className = 'recipe-out';
      out.appendChild(this._iconEl(recipe.out.id, 28));
      const outCount = document.createElement('span');
      outCount.className = 'count';
      outCount.textContent = recipe.out.count > 1 ? recipe.out.count : '';
      out.appendChild(outCount);
      row.appendChild(out);

      const details = document.createElement('span');
      details.className = 'recipe-details';
      const name = document.createElement('b');
      name.textContent = itemName(recipe.out.id);
      const ingredients = document.createElement('small');
      ingredients.textContent = recipe.in.map(({ id, count }) => `${count}× ${itemName(id)}`).join(' + ');
      details.append(name, ingredients);
      row.appendChild(details);

      const button = document.createElement('button');
      button.className = 'craft-btn';
      button.type = 'button';
      button.textContent = fits ? 'Üret' : ok ? 'Yer yok' : 'Eksik';
      button.disabled = !fits;
      button.addEventListener('click', () => this._craftRecipe(recipe));
      row.appendChild(button);
      this.craftEl.appendChild(row);
    }
  }

  _renderPalette() {
    this.paletteEl.innerHTML = '';
    const ids = Object.keys(ITEMS).filter((id) => this._matches(id));
    this.paletteCountEl.textContent = `${ids.length}/${Object.keys(ITEMS).length}`;
    if (!ids.length) {
      this.paletteEl.innerHTML = '<p class="empty-state">Aramana uygun item yok.</p>';
      return;
    }
    for (const id of ids) {
      const slot = document.createElement('div');
      slot.className = 'slot palette-slot';
      slot.dataset.category = itemCategory(id);
      slot.title = `${itemName(id)} · ${CATEGORY_NAMES[itemCategory(id)] ?? 'Item'}`;
      slot.setAttribute('aria-label', slot.title);
      slot.appendChild(this._iconEl(id));
      const label = document.createElement('span');
      label.className = 'palette-name';
      label.textContent = itemName(id);
      slot.appendChild(label);
      slot.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.held = { id, count: itemStackMax(id) };
        this._syncHeld();
      });
      this.paletteEl.appendChild(slot);
    }
  }

  renderUI() {
    for (const el of this.gridEl.querySelectorAll('.inv-slot')) this._renderSlot(el);
    for (const el of this.hotbarEl.querySelectorAll('.inv-slot')) this._renderSlot(el);

    const occupied = this.slots.filter(Boolean).length;
    const total = this.slots.reduce((n, s) => n + (s?.count ?? 0), 0);
    this.summaryEl.textContent = `${total} item · ${occupied}/${SLOT_COUNT} yuva dolu`;
    this.capacityEl.textContent = `${occupied}/${SLOT_COUNT}`;
    this._renderRecipes();
    this._renderPalette();
  }

  toggle(open = !this.open) {
    if (!open && this.held) {
      const held = this.held;
      this.held = null;
      const left = addToSlots(this.slots, held.id, held.count);
      if (left > 0) this.held = { id: held.id, count: left };
      this._syncHeld();
      if (left > 0) {
        this.open = true;
        this.el.hidden = false;
        this.renderUI();
        return;
      }
      this._changed();
    }
    this.open = open;
    this.el.hidden = !open;
    if (open) {
      document.exitPointerLock?.();
      this.renderUI();
    }
    this.onToggle?.(open);
  }
}
