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
| Shift | koş |
| Ctrl | çömel (kenardan düşmezsin) |
| Boşluk | zıpla / suda yüz |
| F veya çift Boşluk | uçuş modu (Space yukarı, Shift aşağı) |
| Sol tık (basılı tut) | blok kır / moba vur |
| Sağ tık | blok koy / yemek ye |
| 1–9 / tekerlek | eşya seç |
| E | envanter + üretim |
| Esc | menü (Ayarlar buradan) |

## Özellikler

- Seed'li prosedürel arazi: ova, orman, çöl, kar ve dağ biyomları; göller,
  kumsallar, ağaçlar, kaktüsler ve çiçekler
- Yer altı mağaraları, kömür/demir cevherleri ve çakıl yatakları
- **Eşya & envanter:** kırdığın her blok item düşürür; itemler yere saçılır,
  sana doğru çekilir ve 36 slotluk envanterine girer (yığın 64, tık/sağ tık
  ile taşı/yarısını al). Envanter tarayıcıda saklanır
- **Üretim (crafting):** tarif listesinden tahta, çubuk, meşale, cam,
  kumtaşı ve tahta/taş/demir **kazma, kürek, kılıç** üret
- **Araçlar:** doğru alet blokları hızlı kırar (kazma taş, kürek toprak,
  kürek yaprak/kum); kılıç moblara daha çok hasar verir
- **Can & açlık:** 10 kalp ve 10 açlık; yüksekten düşme, boğulma (hava
  kabarcıkları), lav, açlık ve mob hasarı. Yemek ye, canın dolsun
- **10 mob:**
  - Ana dünya: domuz, koyun, inek, tavuk (vurunca kaçar, ganimet düşürür)
    ve geceleri çıkan zombi (kovalar, vurur, gündüz yanar)
  - Cehennem: nötr **piglin**, hızlı **cehennem köpeği**, zıplayan
    **magma küpü**, uçan **alev** ve duvarlardan geçen **hayalet**
- **Cehennem boyutu:** Portal bloğunu koy, içine gir — netherrack
  mağaraları, lav denizi ve ışıltıtaşı. Oradaki portalla geri dön
- **Ayarlar menüsü:** görüş mesafesi, FOV, ses, fare hassasiyeti, gün
  uzunluğu, moblar, parçacıklar, açlık, oyun modu (hayatta kalma/yaratıcı)
- **Geliştirici menüsü:** şifre ile açılır (Ayarlar → Geliştirici Menüsü);
  saat kontrolü, ışınlanma, boyut değiştirme, item verme, mob çağırma,
  god mode, mobları silme, yeni dünya
- Gündüz/gece döngüsü, güneş/ay ve oyuncu meşalesi; su altı görüşü
- Gerçek zamanlı çok oyunculu: oyuncular, isim etiketleri, blok
  değişiklikleri ve boyutlar senkron
- Tüm dokular ve sesler kodla üretilir, hiçbir asset dosyası yok

## Geliştirme

```bash
npm install
npm run dev          # http://localhost:5173/pcraft/
npm test             # tarayıcısız birim/regresyon testleri (dünya, mesher, fizik)
node scripts/smoke.mjs   # headless 2 oyunculu duman testi (puppeteer-core gerekir)
```

`main`'e push edilince GitHub Actions otomatik olarak GitHub Pages'e dağıtır.
Geliştirici menüsü şifre korumalıdır (şifre kaynakta `src/ui/panels.js` içinde).

## Teknoloji

[Three.js](https://threejs.org) (render) · [Trystero](https://github.com/dmotz/trystero) (sunucusuz WebRTC) · [simplex-noise](https://github.com/jwagner/simplex-noise.js) (arazi) · [Vite](https://vitejs.dev) (build)

## Lisans

[GPL-3.0-or-later](LICENSE). Tüm dokular ve sesler bu projenin kodu tarafından
çalışma anında üretilir; üçüncü taraf asset içermez.
