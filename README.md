# pcraft

Tarayıcıda çalışan, arkadaşlarınla oynayabileceğin voxel (Minecraft tarzı) oyun.

**Oyna:** https://padrosum.uk/pcraft/

## Nasıl oynanır

1. Siteyi aç, ismini gir, **Oda Kur**'a bas.
2. Sağ üstteki **Linki Kopyala** ile linki arkadaşlarına gönder.
3. Aynı linki açan herkes aynı dünyaya bağlanır — sunucu yok, bağlantı tarayıcılar arasında doğrudan (WebRTC P2P) kurulur.

| Tuş | İşlev |
|---|---|
| WASD | yürü |
| Boşluk | zıpla / suda yüz |
| Sol tık | blok kır |
| Sağ tık | blok koy |
| 1–9 / tekerlek | blok seç |
| E | envanter |
| Esc | menü |

## Özellikler

- Seed'li prosedürel arazi: tepeler, göller, kumsallar, ağaçlar
- Gündüz/gece döngüsü (~10 dk), güneş ve ay
- Gerçek zamanlı çok oyunculu: oyuncular, isim etiketleri, blok değişiklikleri senkron
- Dünya tarayıcıda saklanır (localStorage) — aynı linkle kaldığın yerden devam
- Tüm dokular ve sesler kodla üretilir, hiçbir asset dosyası yok

## Geliştirme

```bash
npm install
npm run dev          # http://localhost:5173/pcraft/
node scripts/smoke.mjs   # headless 2 oyunculu duman testi (puppeteer-core gerekir)
```

`main`'e push edilince GitHub Actions otomatik olarak GitHub Pages'e dağıtır.

## Teknoloji

[Three.js](https://threejs.org) (render) · [Trystero](https://github.com/dmotz/trystero) (sunucusuz WebRTC) · [simplex-noise](https://github.com/jwagner/simplex-noise.js) (arazi) · [Vite](https://vitejs.dev) (build)

## Lisans

[GPL-3.0-or-later](LICENSE). Tüm dokular ve sesler bu projenin kodu tarafından
çalışma anında üretilir; üçüncü taraf asset içermez.
