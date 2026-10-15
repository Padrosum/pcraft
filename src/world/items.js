// Item sistemi: her blok bir itemdir; ek olarak blok olmayan itemler
// (çubuk, kömür, yemekler, araçlar) vardır. Tüm ikonlar kodla çizilir.
import { B, BLOCKS } from '../constants.js';

export const STACK_MAX = 64;

// ---- araç tanımları ----
export const TOOL_TIERS = { wood: 1, stone: 2, iron: 3 };
export const TIER_SPEED = { 0: 1, 1: 2, 2: 4, 3: 6 }; // tier -> hız çarpanı
export const SWORD_DAMAGE = { 0: 2, 1: 4, 2: 5, 3: 6 }; // yumruk 2
export const AXE_DAMAGE = { 0: 2, 1: 5, 2: 6, 3: 7 }; // balta daha sert ama yavaş

// ---- blok item id'si: 'block:<id>' ----
export const blockItem = (id) => `block:${id}`;
export const itemOfBlock = (blockId) => `block:${blockId}`;

function defBlock(blockId) {
  return { name: BLOCKS[blockId].name, block: blockId, category: 'block' };
}

// ---- item kayıtları ----
export const ITEMS = {
  // bloklar
  [blockItem(B.GRASS)]: defBlock(B.GRASS),
  [blockItem(B.DIRT)]: defBlock(B.DIRT),
  [blockItem(B.STONE)]: defBlock(B.STONE),
  [blockItem(B.COBBLE)]: defBlock(B.COBBLE),
  [blockItem(B.SAND)]: defBlock(B.SAND),
  [blockItem(B.LOG)]: defBlock(B.LOG),
  [blockItem(B.PLANKS)]: defBlock(B.PLANKS),
  [blockItem(B.LEAVES)]: defBlock(B.LEAVES),
  [blockItem(B.GLASS)]: defBlock(B.GLASS),
  [blockItem(B.BRICK)]: defBlock(B.BRICK),
  [blockItem(B.SNOW)]: defBlock(B.SNOW),
  [blockItem(B.GRAVEL)]: defBlock(B.GRAVEL),
  [blockItem(B.SANDSTONE)]: defBlock(B.SANDSTONE),
  [blockItem(B.COAL_ORE)]: defBlock(B.COAL_ORE),
  [blockItem(B.IRON_ORE)]: defBlock(B.IRON_ORE),
  [blockItem(B.CACTUS)]: defBlock(B.CACTUS),
  [blockItem(B.GLOWSTONE)]: defBlock(B.GLOWSTONE),
  [blockItem(B.NETHERRACK)]: defBlock(B.NETHERRACK),
  [blockItem(B.OBSIDIAN)]: defBlock(B.OBSIDIAN),
  [blockItem(B.PORTAL)]: defBlock(B.PORTAL),
  [blockItem(B.WOOL)]: defBlock(B.WOOL),
  [blockItem(B.TORCH)]: defBlock(B.TORCH),
  [blockItem(B.FLOWER_RED)]: defBlock(B.FLOWER_RED),
  [blockItem(B.FLOWER_YELLOW)]: defBlock(B.FLOWER_YELLOW),
  [blockItem(B.NETHER_TORCH)]: defBlock(B.NETHER_TORCH),

  // malzemeler
  stick: { name: 'Çubuk', category: 'material' },
  coal: { name: 'Kömür', category: 'material' },
  iron_chunk: { name: 'Demir Parçası', category: 'material' },
  feather: { name: 'Tüy', category: 'material' },
  bone: { name: 'Kemik', category: 'material' },
  blaze_rod: { name: 'Alev Çubuğu', category: 'material' },
  magma_powder: { name: 'Magma Tozu', category: 'material' },
  wraith_dust: { name: 'Hayalet Tozu', category: 'material' },

  // yemekler (food: açlık puanı)
  porkchop: { name: 'Pirzola', food: 4, category: 'food' },
  beef: { name: 'Biftek', food: 4, category: 'food' },
  chicken_meat: { name: 'Tavuk', food: 3, category: 'food' },
  mutton: { name: 'Kuzu Pirzolası', food: 3, category: 'food' },
  rotten_flesh: { name: 'Çürük Et', food: 2, category: 'food' },

  // kazmalar: doğru blok sınıfında hız çarpanı
  wood_pick: { name: 'Tahta Kazma', tool: 'pickaxe', tier: 1, stack: 1, category: 'tool' },
  stone_pick: { name: 'Taş Kazma', tool: 'pickaxe', tier: 2, stack: 1, category: 'tool' },
  iron_pick: { name: 'Demir Kazma', tool: 'pickaxe', tier: 3, stack: 1, category: 'tool' },

  // kürekler
  wood_shovel: { name: 'Tahta Kürek', tool: 'shovel', tier: 1, stack: 1, category: 'tool' },
  stone_shovel: { name: 'Taş Kürek', tool: 'shovel', tier: 2, stack: 1, category: 'tool' },
  iron_shovel: { name: 'Demir Kürek', tool: 'shovel', tier: 3, stack: 1, category: 'tool' },

  // kılıçlar: hasar
  wood_sword: { name: 'Tahta Kılıç', tool: 'sword', tier: 1, stack: 1, category: 'tool' },
  stone_sword: { name: 'Taş Kılıç', tool: 'sword', tier: 2, stack: 1, category: 'tool' },
  iron_sword: { name: 'Demir Kılıç', tool: 'sword', tier: 3, stack: 1, category: 'tool' },

  // baltalar: kılıçtan yüksek hasar, daha yavaş; odunu hızlı keser
  wood_axe: { name: 'Tahta Balta', tool: 'axe', tier: 1, stack: 1, category: 'tool' },
  stone_axe: { name: 'Taş Balta', tool: 'axe', tier: 2, stack: 1, category: 'tool' },
  iron_axe: { name: 'Demir Balta', tool: 'axe', tier: 3, stack: 1, category: 'tool' },
};

export const itemName = (id) => ITEMS[id]?.name ?? id;
export const itemStackMax = (id) => ITEMS[id]?.stack ?? STACK_MAX;
export const itemCategory = (id) => ITEMS[id]?.category
  ?? (ITEMS[id]?.food ? 'food' : ITEMS[id]?.tool ? 'tool' : 'material');

// ---- tarifler: shapeless, malzeme sayısıyla eşleşme ----
export const RECIPES = [
  { out: { id: blockItem(B.PLANKS), count: 4 }, in: [{ id: blockItem(B.LOG), count: 1 }] },
  { out: { id: 'stick', count: 4 }, in: [{ id: blockItem(B.PLANKS), count: 2 }] },
  { out: { id: blockItem(B.TORCH), count: 4 }, in: [{ id: 'coal', count: 1 }, { id: 'stick', count: 1 }] },
  { out: { id: blockItem(B.SANDSTONE), count: 1 }, in: [{ id: blockItem(B.SAND), count: 4 }] },
  { out: { id: blockItem(B.GLASS), count: 4 }, in: [{ id: blockItem(B.SAND), count: 4 }, { id: 'coal', count: 1 }] },
  { out: { id: blockItem(B.NETHER_TORCH), count: 4 }, in: [{ id: 'blaze_rod', count: 1 }, { id: 'stick', count: 2 }] },
  { out: { id: 'wood_pick', count: 1 }, in: [{ id: blockItem(B.PLANKS), count: 3 }, { id: 'stick', count: 2 }] },
  { out: { id: 'stone_pick', count: 1 }, in: [{ id: blockItem(B.COBBLE), count: 3 }, { id: 'stick', count: 2 }] },
  { out: { id: 'iron_pick', count: 1 }, in: [{ id: 'iron_chunk', count: 3 }, { id: 'stick', count: 2 }] },
  { out: { id: 'wood_shovel', count: 1 }, in: [{ id: blockItem(B.PLANKS), count: 1 }, { id: 'stick', count: 2 }] },
  { out: { id: 'stone_shovel', count: 1 }, in: [{ id: blockItem(B.COBBLE), count: 1 }, { id: 'stick', count: 2 }] },
  { out: { id: 'iron_shovel', count: 1 }, in: [{ id: 'iron_chunk', count: 1 }, { id: 'stick', count: 2 }] },
  { out: { id: 'wood_sword', count: 1 }, in: [{ id: blockItem(B.PLANKS), count: 2 }, { id: 'stick', count: 1 }] },
  { out: { id: 'stone_sword', count: 1 }, in: [{ id: blockItem(B.COBBLE), count: 2 }, { id: 'stick', count: 1 }] },
  { out: { id: 'iron_sword', count: 1 }, in: [{ id: 'iron_chunk', count: 2 }, { id: 'stick', count: 1 }] },
  { out: { id: 'wood_axe', count: 1 }, in: [{ id: blockItem(B.PLANKS), count: 3 }, { id: 'stick', count: 2 }] },
  { out: { id: 'stone_axe', count: 1 }, in: [{ id: blockItem(B.COBBLE), count: 3 }, { id: 'stick', count: 2 }] },
  { out: { id: 'iron_axe', count: 1 }, in: [{ id: 'iron_chunk', count: 3 }, { id: 'stick', count: 2 }] },
];

// ---- kırılma düşmeleri: blok -> item ----
export const BLOCK_DROPS = {
  [B.GRASS]: { id: blockItem(B.DIRT), count: 1 },
  [B.DIRT]: { id: blockItem(B.DIRT), count: 1 },
  [B.STONE]: { id: blockItem(B.COBBLE), count: 1 },
  [B.COBBLE]: { id: blockItem(B.COBBLE), count: 1 },
  [B.SAND]: { id: blockItem(B.SAND), count: 1 },
  [B.LOG]: { id: blockItem(B.LOG), count: 1 },
  [B.PLANKS]: { id: blockItem(B.PLANKS), count: 1 },
  [B.LEAVES]: null, // yapraklar sürprizsiz çözülür
  [B.GLASS]: null, // cam kırılınca kaybolur (klasik)
  [B.BRICK]: { id: blockItem(B.BRICK), count: 1 },
  [B.SNOW]: { id: blockItem(B.SNOW), count: 1 },
  [B.GRAVEL]: { id: blockItem(B.GRAVEL), count: 1 },
  [B.SANDSTONE]: { id: blockItem(B.SANDSTONE), count: 1 },
  [B.COAL_ORE]: { id: 'coal', count: 1 },
  [B.IRON_ORE]: { id: 'iron_chunk', count: 1 },
  [B.GLOWSTONE]: { id: blockItem(B.GLOWSTONE), count: 1 },
  [B.NETHERRACK]: { id: blockItem(B.NETHERRACK), count: 1 },
  [B.OBSIDIAN]: { id: blockItem(B.OBSIDIAN), count: 1 },
  [B.PORTAL]: { id: blockItem(B.PORTAL), count: 1 },
  [B.WOOL]: { id: blockItem(B.WOOL), count: 1 },
  [B.TORCH]: { id: blockItem(B.TORCH), count: 1 },
  [B.FLOWER_RED]: { id: blockItem(B.FLOWER_RED), count: 1 },
  [B.FLOWER_YELLOW]: { id: blockItem(B.FLOWER_YELLOW), count: 1 },
  [B.NETHER_TORCH]: { id: blockItem(B.NETHER_TORCH), count: 1 },
  [B.CACTUS]: { id: blockItem(B.CACTUS), count: 1 },
};

// ---- mob düşmeleri: [{ id, min, max, chance }] ----
export const MOB_DROPS = {
  pig: [{ id: 'porkchop', min: 1, max: 2, chance: 1 }],
  cow: [{ id: 'beef', min: 1, max: 2, chance: 1 }],
  sheep: [{ id: 'mutton', min: 1, max: 1, chance: 1 }, { id: blockItem(B.WOOL), min: 1, max: 1, chance: 1 }],
  chicken: [{ id: 'chicken_meat', min: 1, max: 1, chance: 1 }, { id: 'feather', min: 0, max: 2, chance: 0.8 }],
  zombie: [{ id: 'rotten_flesh', min: 0, max: 2, chance: 0.9 }],
  piglin: [{ id: 'porkchop', min: 0, max: 1, chance: 0.7 }],
  hellhound: [{ id: 'bone', min: 1, max: 2, chance: 1 }],
  magma: [{ id: 'magma_powder', min: 1, max: 2, chance: 1 }],
  blaze: [{ id: 'blaze_rod', min: 1, max: 1, chance: 1 }],
  wraith: [{ id: 'wraith_dust', min: 1, max: 1, chance: 1 }],
};

// ---- üretim: envanterdeki malzemeye göre tarif yapılabilir mi? ----
export function canCraft(slots, recipe) {
  const have = new Map();
  for (const s of slots) {
    if (!s) continue;
    have.set(s.id, (have.get(s.id) || 0) + s.count);
  }
  return recipe.in.every(({ id, count }) => (have.get(id) || 0) >= count);
}

// Bir item, mevcut yığınları doldurarak boş slotlara sığar mı?
// Bu fonksiyon slotları değiştirir; üretim önizlemesi için kopya slot dizisi verilir.
export function canAdd(slots, id, count) {
  let left = Math.max(0, Math.floor(Number(count) || 0));
  const max = itemStackMax(id);
  for (const s of slots) {
    if (left <= 0) break;
    if (s?.id === id) left -= Math.max(0, max - s.count);
  }
  for (const s of slots) {
    if (left <= 0) break;
    if (!s) left -= max;
  }
  return left <= 0;
}

export function addToSlots(slots, id, count) {
  if (!ITEMS[id]) return Math.max(0, Math.floor(Number(count) || 0));
  let left = Math.max(0, Math.floor(Number(count) || 0));
  const max = itemStackMax(id);
  for (let i = 0; i < slots.length && left > 0; i++) {
    const s = slots[i];
    if (!s || s.id !== id || s.count >= max) continue;
    const put = Math.min(max - s.count, left);
    s.count += put;
    left -= put;
  }
  for (let i = 0; i < slots.length && left > 0; i++) {
    if (slots[i]) continue;
    const put = Math.min(max, left);
    slots[i] = { id, count: put };
    left -= put;
  }
  return left;
}

export function canCraftWithOutput(slots, recipe) {
  if (!canCraft(slots, recipe)) return false;
  const preview = slots.map((s) => (s ? { ...s } : null));
  for (const { id, count } of recipe.in) {
    let left = count;
    for (let i = 0; i < preview.length && left > 0; i++) {
      const s = preview[i];
      if (!s || s.id !== id) continue;
      const take = Math.min(s.count, left);
      s.count -= take;
      left -= take;
      if (s.count <= 0) preview[i] = null;
    }
  }
  return canAdd(preview, recipe.out.id, recipe.out.count);
}

export function craft(slots, recipe) {
  if (!canCraft(slots, recipe)) return false;
  for (const { id, count } of recipe.in) {
    let left = count;
    for (let i = 0; i < slots.length && left > 0; i++) {
      const s = slots[i];
      if (!s || s.id !== id) continue;
      const take = Math.min(s.count, left);
      s.count -= take;
      left -= take;
      if (s.count <= 0) slots[i] = null;
    }
  }
  return recipe.out;
}
