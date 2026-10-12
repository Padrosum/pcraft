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
};

// tiles: [top, side, bottom] atlas tile indices
// group: 'opaque' | 'cutout' | 'water' render bucket
export const BLOCKS = {
  [B.AIR]: { name: 'Hava', solid: false, opaque: false },
  [B.GRASS]: { name: 'Çimen', tiles: [0, 1, 2], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft' },
  [B.DIRT]: { name: 'Toprak', tiles: [2, 2, 2], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft' },
  [B.STONE]: { name: 'Taş', tiles: [3, 3, 3], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard' },
  [B.COBBLE]: { name: 'Kırıktaş', tiles: [4, 4, 4], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard' },
  [B.SAND]: { name: 'Kum', tiles: [5, 5, 5], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft' },
  [B.LOG]: { name: 'Kütük', tiles: [7, 6, 7], solid: true, opaque: true, group: 'opaque', place: true, sound: 'wood' },
  [B.PLANKS]: { name: 'Tahta', tiles: [8, 8, 8], solid: true, opaque: true, group: 'opaque', place: true, sound: 'wood' },
  [B.LEAVES]: { name: 'Yaprak', tiles: [9, 9, 9], solid: true, opaque: false, group: 'cutout', place: true, sound: 'soft' },
  [B.GLASS]: { name: 'Cam', tiles: [10, 10, 10], solid: true, opaque: false, group: 'cutout', place: true, sound: 'hard' },
  [B.WATER]: { name: 'Su', tiles: [11, 11, 11], solid: false, opaque: false, group: 'water', liquid: true, unbreakable: true },
  [B.BRICK]: { name: 'Tuğla', tiles: [12, 12, 12], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard' },
  [B.BEDROCK]: { name: 'Ana Kaya', tiles: [13, 13, 13], solid: true, opaque: true, group: 'opaque', unbreakable: true, sound: 'hard' },
  [B.GRAVEL]: { name: 'Çakıl', tiles: [14, 14, 14], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft' },
  [B.SANDSTONE]: { name: 'Kumtaşı', tiles: [15, 15, 15], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard' },
  [B.SNOW]: { name: 'Kar', tiles: [16, 17, 2], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft' },
  [B.COAL_ORE]: { name: 'Kömür Cevheri', tiles: [18, 18, 18], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard' },
  [B.IRON_ORE]: { name: 'Demir Cevheri', tiles: [19, 19, 19], solid: true, opaque: true, group: 'opaque', place: true, sound: 'hard' },
  [B.CACTUS]: { name: 'Kaktüs', tiles: [20, 20, 20], solid: true, opaque: true, group: 'opaque', place: true, sound: 'soft' },
};

export const PLACEABLE = Object.keys(BLOCKS)
  .map(Number)
  .filter((id) => BLOCKS[id].place);

export const DEFAULT_HOTBAR = [
  B.GRASS, B.DIRT, B.STONE, B.COBBLE, B.SAND, B.LOG, B.PLANKS, B.GLASS, B.BRICK,
];
