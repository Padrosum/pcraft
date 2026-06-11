import { BLOCKS, PLACEABLE } from '../constants.js';
import { tileIcon } from '../render/textures.js';

export class Inventory {
  constructor(atlasCanvas, hud) {
    this.el = document.getElementById('inventory');
    this.open = false;
    const grid = document.getElementById('inv-grid');

    for (const id of PLACEABLE) {
      const slot = document.createElement('div');
      slot.className = 'slot';
      slot.appendChild(tileIcon(atlasCanvas, BLOCKS[id].tiles[1], 36));
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = BLOCKS[id].name;
      slot.appendChild(label);
      slot.addEventListener('click', () => {
        hud.setSlot(hud.selected, id);
        this.toggle(false);
      });
      grid.appendChild(slot);
    }
  }

  toggle(open = !this.open) {
    this.open = open;
    this.el.hidden = !open;
    if (open) document.exitPointerLock?.();
  }
}
