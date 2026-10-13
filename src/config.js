// Oyun yapılandırması: ayarlar menüsü buradaki değerleri değiştirir,
// sistemler (render, ses, kontroller) canlı okur. localStorage'da saklanır.

export const DEFAULTS = {
  renderDist: 4,      // chunk cinsinden görüş mesafesi
  fov: 75,            // görüş açısı
  volume: 0.8,        // ana ses seviyesi (0-1)
  muted: false,
  sensitivity: 1.0,   // fare hassasiyeti çarpanı
  gamemode: 'survival', // 'survival' | 'creative'
  dayMinutes: 10,     // bir gündüz/gece döngüsünün süresi (dakika)
  mobs: true,         // moblar aç/kapa
  particles: true,    // kırılma parçacıkları
  showCoords: true,   // koordinat/fps göstergesi
  hunger: true,       // açlık sistemi
  god: false,         // geliştirici: hasar almama
};

const stored = (() => {
  try {
    return JSON.parse(localStorage.getItem('pcraft:settings')) || {};
  } catch {
    return {};
  }
})();

export const config = { ...DEFAULTS, ...stored };

export function saveConfig() {
  try {
    localStorage.setItem('pcraft:settings', JSON.stringify(config));
  } catch { /* storage dolu — ayarlar en iyisi olarak kalır */ }
}

export function resetConfig() {
  Object.assign(config, DEFAULTS);
  saveConfig();
}
