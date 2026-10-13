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
    // ---- ayarlar paneli ----
    const rows = [];
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
      rows.push(wrap);
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
      rows.push(wrap);
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
      rows.push(wrap);
    };

    slider('Görüş mesafesi', 'renderDist', 2, 8, 1, (v) => `${v} chunk`);
    slider('Görüş açısı (FOV)', 'fov', 60, 110, 1, (v) => `${v}°`);
    slider('Ses seviyesi', 'volume', 0, 1, 0.05, (v) => `%${Math.round(v * 100)}`);
    slider('Fare hassasiyeti', 'sensitivity', 0.3, 2.5, 0.05, (v) => `${v.toFixed(2)}×`);
    slider('Gün uzunluğu', 'dayMinutes', 2, 40, 1, (v) => `${v} dk`);
    toggle('Sesi kapat', 'muted');
    toggle('Moblar', 'mobs');
    toggle('Parçacıklar', 'particles');
    toggle('Koordinat göster', 'showCoords');
    toggle('Açlık sistemi', 'hunger');
    choice('Oyun modu', 'gamemode', [['survival', 'Hayatta Kalma'], ['creative', 'Yaratıcı']]);

    const resetBtn = document.createElement('button');
    resetBtn.className = 'mini-btn';
    resetBtn.textContent = 'Ayarları sıfırla';
    resetBtn.addEventListener('click', () => {
      resetConfig();
      this.el.querySelectorAll('input, select').forEach((i) => i.dispatchEvent(new Event('input')));
      this.el.querySelectorAll('input[type=checkbox], select').forEach((i) => i.dispatchEvent(new Event('change')));
      this.hooks.onSetting?.('*');
    });
    rows.push(resetBtn);

    const devBtn = document.createElement('button');
    devBtn.className = 'mini-btn';
    devBtn.textContent = '🛠 Geliştirici Menüsü';
    devBtn.addEventListener('click', () => this.openDev());
    rows.push(devBtn);

    for (const r of rows) this.el.querySelector('.set-rows').appendChild(r);

    // ---- geliştirici paneli ----
    const d = this.devEl.querySelector('.dev-rows');

    // saat
    const timeRow = document.createElement('div');
    timeRow.className = 'dev-row';
    timeRow.innerHTML = '<span>Günün saati:</span>';
    for (const [label, t] of [['🌅 Sabah', 0.02], ['☀️ Öğle', 0.25], ['🌇 Akşam', 0.48], ['🌙 Gece', 0.75]]) {
      const b = document.createElement('button');
      b.className = 'mini-btn';
      b.textContent = label;
      b.addEventListener('click', () => this.hooks.setTime?.(t));
      timeRow.appendChild(b);
    }
    d.appendChild(timeRow);

    // ışınlanma
    const tp = document.createElement('div');
    tp.className = 'dev-row';
    tp.innerHTML = '<span>Işınlan:</span>';
    this.tpX = document.createElement('input');
    this.tpY = document.createElement('input');
    this.tpZ = document.createElement('input');
    for (const inp of [this.tpX, this.tpY, this.tpZ]) {
      inp.type = 'number'; inp.className = 'dev-num'; inp.placeholder = '0';
      tp.appendChild(inp);
    }
    const tpBtn = document.createElement('button');
    tpBtn.className = 'mini-btn';
    tpBtn.textContent = 'Git';
    tpBtn.addEventListener('click', () => {
      const x = Number(this.tpX.value) || 0;
      const y = Number(this.tpY.value) || 40;
      const z = Number(this.tpZ.value) || 0;
      this.hooks.teleport?.(x, y, z);
    });
    tp.appendChild(tpBtn);
    d.appendChild(tp);

    // boyut
    const dimRow = document.createElement('div');
    dimRow.className = 'dev-row';
    dimRow.innerHTML = '<span>Boyut:</span>';
    const dimBtn = document.createElement('button');
    dimBtn.className = 'mini-btn';
    dimBtn.textContent = 'Ana Dünya ⇄ Cehennem';
    dimBtn.addEventListener('click', () => this.hooks.toggleDim?.());
    dimRow.appendChild(dimBtn);
    d.appendChild(dimRow);

    // item verme
    const give = document.createElement('div');
    give.className = 'dev-row';
    give.innerHTML = '<span>Item ver:</span>';
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
    const giveBtn = document.createElement('button');
    giveBtn.className = 'mini-btn';
    giveBtn.textContent = 'Ver';
    giveBtn.addEventListener('click', () => {
      this.hooks.give?.(this.giveSel.value, Number(this.giveCount.value) || 1);
    });
    give.append(this.giveSel, this.giveCount, giveBtn);
    d.appendChild(give);

    // mob çağırma
    const mobRow = document.createElement('div');
    mobRow.className = 'dev-row';
    mobRow.innerHTML = '<span>Mob çağır:</span>';
    this.mobSel = document.createElement('select');
    this.mobSel.className = 'dev-sel';
    for (const kind of Object.keys(SPECIES)) {
      const o = document.createElement('option');
      o.value = kind; o.textContent = kind;
      this.mobSel.appendChild(o);
    }
    const mobBtn = document.createElement('button');
    mobBtn.className = 'mini-btn';
    mobBtn.textContent = 'Çağır';
    mobBtn.addEventListener('click', () => this.hooks.spawnMob?.(this.mobSel.value));
    mobRow.append(this.mobSel, mobBtn);
    d.appendChild(mobRow);

    // ek dev araçları
    const extra = document.createElement('div');
    extra.className = 'dev-row';
    extra.innerHTML = '<span>Diğer:</span>';
    const godBtn = document.createElement('button');
    godBtn.className = 'mini-btn';
    const godLabel = () => { godBtn.textContent = config.god ? 'God: AÇIK' : 'God: kapalı'; };
    godLabel();
    godBtn.addEventListener('click', () => {
      config.god = !config.god;
      saveConfig();
      godLabel();
    });
    const killBtn = document.createElement('button');
    killBtn.className = 'mini-btn';
    killBtn.textContent = 'Mobları sil';
    killBtn.addEventListener('click', () => this.hooks.killMobs?.());
    const clearBtn = document.createElement('button');
    clearBtn.className = 'mini-btn';
    clearBtn.textContent = 'Envanteri boşalt';
    clearBtn.addEventListener('click', () => this.hooks.clearInv?.());
    const worldBtn = document.createElement('button');
    worldBtn.className = 'mini-btn';
    worldBtn.textContent = 'Yeni dünya (seed)';
    worldBtn.addEventListener('click', () => {
      if (confirm('Bu odanın kaydı silinip yeni bir seed ile başlanacak. Emin misin?')) {
        this.hooks.newWorld?.();
      }
    });
    extra.append(godBtn, killBtn, clearBtn, worldBtn);
    d.appendChild(extra);

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
