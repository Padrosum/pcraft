import { config, saveConfig, resetConfig } from '../config.js';
import { ITEMS, itemName } from '../world/items.js';
import { SPECIES } from '../render/mobs.js';

// Ayarlar ve geliştirici menüsü panelleri. Geliştirici menüsüne giriş
// için şifre gerekir (oturum içinde bir kez sorulur).
const DEV_PASSWORD = 'padros';

export class SettingsMenu {
  constructor(hooks) {
    this.hooks = hooks; // { onDimChange, teleport, give, spawnMob, setTime, killMobs, newWorld, toggleDim, player }
    this.el = document.getElementById('settings');
    this.devEl = document.getElementById('devmenu');
    this.devLocked = !sessionStorage.getItem('pcraft:dev');
    this._build();
  }

  _build() {
    this._buildSettings();
    this._buildDev();
  }

  // ---- ayarlar paneli ----
  _buildSettings() {
    const rows = this.el.querySelector('.set-rows');

    // Satırları başlıklı gruplara ayırır. `section(başlık)` yeni bir grup
    // açar; ardından gelen satırlar o gruba eklenir.
    let group = null;
    const section = (title) => {
      group = document.createElement('div');
      group.className = 'set-group';
      if (title) {
        const t = document.createElement('div');
        t.className = 'set-group-title';
        t.textContent = title;
        group.appendChild(t);
      }
      rows.appendChild(group);
    };
    const put = (el) => (group ?? rows).appendChild(el);

    const slider = (label, key, min, max, step, fmt) => {
      const wrap = document.createElement('label');
      wrap.className = 'set-row';
      const span = document.createElement('span');
      span.textContent = label;
      const input = document.createElement('input');
      input.type = 'range';
      input.min = min; input.max = max; input.step = step;
      input.value = config[key];
      const val = document.createElement('b');
      val.textContent = fmt ? fmt(config[key]) : config[key];
      input.addEventListener('input', () => {
        config[key] = Number(input.value);
        val.textContent = fmt ? fmt(config[key]) : config[key];
        saveConfig();
        this.hooks.onSetting?.(key);
      });
      wrap.append(span, input, val);
      put(wrap);
    };
    const toggle = (label, key) => {
      const wrap = document.createElement('label');
      wrap.className = 'set-row';
      const span = document.createElement('span');
      span.textContent = label;
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = !!config[key];
      input.addEventListener('change', () => {
        config[key] = input.checked;
        saveConfig();
        this.hooks.onSetting?.(key);
      });
      wrap.append(span, input);
      put(wrap);
    };
    const choice = (label, key, options) => {
      const wrap = document.createElement('label');
      wrap.className = 'set-row';
      const span = document.createElement('span');
      span.textContent = label;
      const sel = document.createElement('select');
      for (const [v, text] of options) {
        const o = document.createElement('option');
        o.value = v; o.textContent = text;
        sel.appendChild(o);
      }
      sel.value = config[key];
      sel.addEventListener('change', () => {
        config[key] = sel.value;
        saveConfig();
        this.hooks.onSetting?.(key);
      });
      wrap.append(span, sel);
      put(wrap);
    };

    section('Görünüm');
    slider('Görüş mesafesi', 'renderDist', 2, 8, 1, (v) => `${v} chunk`);
    slider('Görüş açısı (FOV)', 'fov', 60, 110, 1, (v) => `${v}°`);
    toggle('Parçacıklar', 'particles');
    toggle('Koordinat göster', 'showCoords');

    section('Oyun');
    choice('Oyun modu', 'gamemode', [['survival', 'Hayatta Kalma'], ['creative', 'Yaratıcı']]);
    slider('Gün uzunluğu', 'dayMinutes', 2, 40, 1, (v) => `${v} dk`);
    toggle('Moblar', 'mobs');
    toggle('Açlık sistemi', 'hunger');

    section('Ses ve kontrol');
    slider('Ses seviyesi', 'volume', 0, 1, 0.05, (v) => `%${Math.round(v * 100)}`);
    toggle('Sesi kapat', 'muted');
    slider('Fare hassasiyeti', 'sensitivity', 0.3, 2.5, 0.05, (v) => `${v.toFixed(2)}×`);

    // eylemler
    const actions = document.createElement('div');
    actions.className = 'set-actions';

    const resetBtn = document.createElement('button');
    resetBtn.type = 'button';
    resetBtn.className = 'mini-btn full';
    resetBtn.textContent = 'Ayarları sıfırla';
    resetBtn.addEventListener('click', () => {
      resetConfig();
      this.el.querySelectorAll('input, select').forEach((i) => i.dispatchEvent(new Event('input')));
      this.el.querySelectorAll('input[type=checkbox], select').forEach((i) => i.dispatchEvent(new Event('change')));
      this.hooks.onSetting?.('*');
    });

    const devBtn = document.createElement('button');
    devBtn.type = 'button';
    devBtn.className = 'mini-btn full';
    devBtn.textContent = '🛠 Geliştirici Menüsü';
    devBtn.addEventListener('click', () => this.openDev());

    actions.append(resetBtn, devBtn);
    rows.appendChild(actions);
  }

  // ---- geliştirici paneli ----
  _buildDev() {
    const d = this.devEl.querySelector('.dev-rows');

    const section = (title) => {
      const g = document.createElement('div');
      g.className = 'dev-group';
      const t = document.createElement('div');
      t.className = 'dev-group-title';
      t.textContent = title;
      g.appendChild(t);
      d.appendChild(g);
      return g;
    };
    const row = (parent, label) => {
      const r = document.createElement('div');
      r.className = 'dev-row';
      const span = document.createElement('span');
      span.textContent = label;
      r.appendChild(span);
      parent.appendChild(r);
      return r;
    };
    const mini = (parent, label, onClick) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'mini-btn';
      b.textContent = label;
      b.addEventListener('click', onClick);
      parent.appendChild(b);
      return b;
    };

    // saat
    const timeGroup = section('Zaman');
    const timeRow = row(timeGroup, 'Günün saati:');
    for (const [label, t] of [['🌅 Sabah', 0.02], ['☀️ Öğle', 0.25], ['🌇 Akşam', 0.48], ['🌙 Gece', 0.75]]) {
      mini(timeRow, label, () => this.hooks.setTime?.(t));
    }

    // ışınlanma
    const posGroup = section('Konum');
    const tp = row(posGroup, 'Işınlan:');
    this.tpX = document.createElement('input');
    this.tpY = document.createElement('input');
    this.tpZ = document.createElement('input');
    for (const inp of [this.tpX, this.tpY, this.tpZ]) {
      inp.type = 'number'; inp.className = 'dev-num'; inp.placeholder = '0';
      tp.appendChild(inp);
    }
    mini(tp, 'Git', () => {
      const x = Number(this.tpX.value) || 0;
      const y = Number(this.tpY.value) || 40;
      const z = Number(this.tpZ.value) || 0;
      this.hooks.teleport?.(x, y, z);
    });

    // dünya
    const worldGroup = section('Dünya');
    const dimRow = row(worldGroup, 'Boyut:');
    mini(dimRow, 'Ana Dünya ⇄ Cehennem', () => this.hooks.toggleDim?.());
    const newRow = row(worldGroup, 'Yeni dünya:');
    mini(newRow, 'Seed yenile', () => {
      if (confirm('Bu odanın kaydı silinip yeni bir seed ile başlanacak. Emin misin?')) {
        this.hooks.newWorld?.();
      }
    });

    // item verme
    const itemGroup = section('Item & Mob');
    const give = row(itemGroup, 'Item ver:');
    this.giveSel = document.createElement('select');
    this.giveSel.className = 'dev-sel';
    for (const [id, def] of Object.entries(ITEMS)) {
      const o = document.createElement('option');
      o.value = id; o.textContent = def.name;
      this.giveSel.appendChild(o);
    }
    this.giveCount = document.createElement('input');
    this.giveCount.type = 'number'; this.giveCount.value = 64; this.giveCount.min = 1;
    this.giveCount.className = 'dev-num';
    give.append(this.giveSel, this.giveCount);
    mini(give, 'Ver', () => {
      this.hooks.give?.(this.giveSel.value, Number(this.giveCount.value) || 1);
    });

    // mob çağırma
    const mobRow = row(itemGroup, 'Mob çağır:');
    this.mobSel = document.createElement('select');
    this.mobSel.className = 'dev-sel';
    for (const kind of Object.keys(SPECIES)) {
      const o = document.createElement('option');
      o.value = kind; o.textContent = kind;
      this.mobSel.appendChild(o);
    }
    mobRow.appendChild(this.mobSel);
    mini(mobRow, 'Çağır', () => this.hooks.spawnMob?.(this.mobSel.value));

    // ek dev araçları
    const playerGroup = section('Oyuncu');
    const extra = row(playerGroup, 'Diğer:');
    const godBtn = document.createElement('button');
    godBtn.type = 'button';
    godBtn.className = 'mini-btn';
    const godLabel = () => { godBtn.textContent = config.god ? 'God: AÇIK' : 'God: kapalı'; };
    godLabel();
    godBtn.addEventListener('click', () => {
      config.god = !config.god;
      saveConfig();
      godLabel();
    });
    extra.appendChild(godBtn);
    mini(extra, 'Mobları sil', () => this.hooks.killMobs?.());
    mini(extra, 'Envanteri boşalt', () => this.hooks.clearInv?.());

    // şifre formu
    this.devEl.querySelector('#dev-close').addEventListener('click', () => this.closeDev());
    const unlock = () => {
      const pass = this.devEl.querySelector('#dev-pass').value;
      if (pass === DEV_PASSWORD) {
        sessionStorage.setItem('pcraft:dev', '1');
        this.devLocked = false;
        this.devEl.querySelector('#dev-gate').hidden = true;
        this.devEl.querySelector('.dev-rows').hidden = false;
      } else {
        const err = this.devEl.querySelector('#dev-err');
        err.textContent = 'Yanlış şifre!';
        setTimeout(() => { err.textContent = ''; }, 1500);
      }
    };
    this.devEl.querySelector('#dev-unlock').addEventListener('click', unlock);
    this.devEl.querySelector('#dev-pass').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') unlock();
    });
  }

  show() {
    this.el.hidden = false;
  }

  hide() {
    this.el.hidden = true;
    this.devEl.hidden = true;
  }

  openDev() {
    this.devEl.hidden = false;
    const unlocked = !this.devLocked;
    this.devEl.querySelector('#dev-gate').hidden = unlocked;
    this.devEl.querySelector('.dev-rows').hidden = !unlocked;
    if (!unlocked) this.devEl.querySelector('#dev-pass').focus();
  }

  closeDev() {
    this.devEl.hidden = true;
  }
}
