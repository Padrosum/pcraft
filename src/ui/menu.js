import { loadName, storeName } from '../net/room.js';

export class Menu {
  constructor(joiningRoomId) {
    this.el = document.getElementById('menu');
    this.input = document.getElementById('name-input');
    this.btn = document.getElementById('start-btn');
    this.statusEl = document.getElementById('menu-status');

    this.input.value = loadName();
    if (joiningRoomId) {
      this.btn.textContent = `Odaya Katıl (${joiningRoomId})`;
    }
    if (!window.matchMedia('(pointer: fine)').matches) {
      this.setStatus('⚠ Dokunmatik kontroller henüz yok — bilgisayardan (fare + klavye) oyna');
    }
    this.input.focus();
  }

  onStart(cb) {
    const go = () => {
      const name = this.input.value.trim().slice(0, 16);
      if (!name) {
        this.setStatus('Önce bir isim gir!');
        this.input.focus();
        return;
      }
      storeName(name);
      this.btn.disabled = true;
      cb(name);
    };
    this.btn.addEventListener('click', go);
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') go();
    });
  }

  setStatus(msg) {
    this.statusEl.textContent = msg;
  }

  hide() {
    this.el.hidden = true;
  }
}
