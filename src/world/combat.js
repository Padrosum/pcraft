// Savaş kuralları: silah istatistikleri, şarj tabanlı hasar ve kritik vuruş.
// Modül saftır (three.js/browser gerektirmez) böylece tarayıcısız test edilir.
import { ITEMS, SWORD_DAMAGE, AXE_DAMAGE } from './items.js';

// Boş elle yumruk
export const FIST = {
  tool: 'fist', tier: 0, damage: 1, cooldown: 0.30, reach: 3.0, knockback: 3.5, crit: 1.5,
};

// Acele vuruşta hasar bu orana kadar düşer; bekleme süresi dolunca tam hasar.
export const MIN_CHARGE = 0.25;

// Silah türüne göre istatistik: hasar, bekleme (sn), erişim (blok), geri tepme, kritik çarpanı.
export function weaponStats(itemId) {
  const def = ITEMS[itemId];
  const tool = def?.tool;
  const tier = def?.tier ?? 1;
  if (tool === 'sword') {
    return { tool, tier, damage: SWORD_DAMAGE[tier] ?? 4, cooldown: 0.45, reach: 3.7, knockback: 5.0, crit: 1.5 };
  }
  if (tool === 'axe') {
    return { tool, tier, damage: AXE_DAMAGE[tier] ?? 5, cooldown: 0.85, reach: 3.4, knockback: 7.5, crit: 1.5 };
  }
  return { ...FIST };
}

// Son vuruştan geçen süreye göre hasar ölçeği (0.25 → 1).
export function chargeMultiplier(elapsed, cooldown) {
  if (!(cooldown > 0)) return 1;
  const t = Math.max(0, Math.min(1, elapsed / cooldown));
  return MIN_CHARGE + (1 - MIN_CHARGE) * t;
}

// Tam şarj göstergesi için 0..1 ilerleme.
export function chargeProgress(elapsed, cooldown) {
  if (!(cooldown > 0)) return 1;
  return Math.max(0, Math.min(1, elapsed / cooldown));
}

// Kritik vuruş: düşerken (havada, aşağı inerken) ve koşmuyorken yapılan vuruş.
export function isCritical(player) {
  return !player.flying && !player.sprinting && !player.onGround && player.vel.y < 0;
}

// Nihai hasar (en az 1).
export function hitDamage(stats, elapsed, crit = false) {
  const raw = stats.damage * chargeMultiplier(elapsed, stats.cooldown) * (crit ? stats.crit : 1);
  return Math.max(1, Math.round(raw));
}

// El sallama hızı: yavaş silahlar daha ağır sallanır.
export function swingSpeed(stats) {
  return Math.max(2.4, Math.min(6, 0.9 + 1.5 / Math.max(0.2, stats.cooldown)));
}
