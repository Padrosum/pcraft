export const CHUNK = 16;
export const HEIGHT = 64;
export const SEA_LEVEL = 22;
export const RENDER_DIST = 4; // chunks
export const DAY_LENGTH = 600; // seconds for a full day/night cycle

export const B = {
  AIR: 0,
  GRASS: 1,
  DIRT: 2,
  STONE: 3,
  COBBLE: 4,
  SAND: 5,
  LOG: 6,
  PLANKS: 7,
  LEAVES: 8,
  GLASS: 9,
  WATER: 10,
  BRICK: 11,
  BEDROCK: 12,
  GRAVEL: 13,
  SANDSTONE: 14,
  SNOW: 15,
  COAL_ORE: 16,
  IRON_ORE: 17,
  CACTUS: 18,
  OBSIDIAN: 21,
  GLOWSTONE: 22,
  NETHERRACK: 23,
  LAVA: 24,
  PORTAL: 25,
};

// Boyut kimlikleri
export const DIM_OVERWORLD = 0;
export const DIM_NETHER = 8;

// tiles: [top, side, bottom] atlas tile indices
// group: 'opaque' | 'cutout' | 'water' render bucket
// hardness: seconds of holding left click to break the block
export const BLOCKS = {
  [B.AIR]: { name: 'Hava', solid: false, opaque: false },
  [B.GRASS]: { name: 'Çimen', tiles: [0, 1, 2], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft', hardness: 0.35 },
  [B.DIRT]: { name: 'Toprak', tiles: [2, 2, 2], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft', hardness: 0.35 },
  [B.STONE]: { name: 'Taş', tiles: [3, 3, 3], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 0.9 },
  [B.COBBLE]: { name: 'Kırıktaş', tiles: [4, 4, 4], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 0.9 },
  [B.SAND]: { name: 'Kum', tiles: [5, 5, 5], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft', hardness: 0.3 },
  [B.LOG]: { name: 'Kütük', tiles: [7, 6, 7], solid: true, opaque: true, group: 'opaque', place: true, sound: 'wood', hardness: 0.6 },
  [B.PLANKS]: { name: 'Tahta', tiles: [8, 8, 8], solid: true, opaque: true, group: 'opaque', place: true, sound: 'wood', hardness: 0.55 },
  [B.LEAVES]: { name: 'Yaprak', tiles: [9, 9, 9], solid: true, opaque: false, group: 'cutout', place: true, sound: 'soft', hardness: 0.2 },
  [B.GLASS]: { name: 'Cam', tiles: [10, 10, 10], solid: true, opaque: false, group: 'cutout', place: true, sound: 'hard', hardness: 0.4 },
  [B.WATER]: { name: 'Su', tiles: [11, 11, 11], solid: false, opaque: false, group: 'water', liquid: true, unbreakable: true },
  [B.BRICK]: { name: 'Tuğla', tiles: [12, 12, 12], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 0.9 },
  [B.BEDROCK]: { name: 'Ana Kaya', tiles: [13, 13, 13], solid: true, opaque: true, group: 'opaque', unbreakable: true, sound: 'hard' },
  [B.GRAVEL]: { name: 'Çakıl', tiles: [14, 14, 14], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft', hardness: 0.35 },
  [B.SANDSTONE]: { name: 'Kumtaşı', tiles: [15, 15, 15], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 0.8 },
  [B.SNOW]: { name: 'Kar', tiles: [16, 17, 2], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft', hardness: 0.25 },
  [B.COAL_ORE]: { name: 'Kömür Cevheri', tiles: [18, 18, 18], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 1.1 },
  [B.IRON_ORE]: { name: 'Demir Cevheri', tiles: [19, 19, 19], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 1.3 },
  [B.CACTUS]: { name: 'Kaktüs', tiles: [20, 20, 20], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft', hardness: 0.35 },
  [B.OBSIDIAN]: { name: 'Obsidyen', tiles: [21, 21, 21], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 2.2 },
  [B.GLOWSTONE]: { name: 'Işıltıtaşı', tiles: [22, 22, 22], solid: true, opaque: true, group: 'emissive', place: true, sound: 'hard', hardness: 0.5 },
  [B.NETHERRACK]: { name: 'Cehennem Taşı', tiles: [23, 23, 23], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard', hardness: 0.6 },
  [B.LAVA]: { name: 'Lav', tiles: [24, 24, 24], solid: false, opaque: false, group: 'emissive', liquid: true, unbreakable: true },
  [B.PORTAL]: { name: 'Portal', tiles: [25, 25, 25], solid: false, opaque: false, group: 'cutout', place: true, sound: 'hard', hardness: 0.1 },
};

export const PLACEABLE = Object.keys(BLOCKS)
  .map(Number)
  .filter((id) => BLOCKS[id].place);

export const DEFAULT_HOTBAR = [
  B.GRASS, B.DIRT, B.STONE, B.COBBLE, B.PLANKS, B.GLASS, B.GLOWSTONE, B.OBSIDIAN, B.PORTAL,
];
