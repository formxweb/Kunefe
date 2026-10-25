# Antephan Künefe – Web Sitesi

Antephan Künefe için tek sayfalık, statik web sitesi. Kurulum veya derleme adımı yoktur; dosyalar herhangi bir statik barındırma hizmetinde (GitHub Pages, Netlify, Vercel, cPanel vb.) olduğu gibi yayınlanabilir.

## Bölümler

- **Menü:** Künefe (11), baklava (4) ve katmer (4) çeşitleri, sekmeli görünüm ve ürün fotoğrafları
- **Hakkımızda:** Marka hikâyesi ve öne çıkan değerler
- **Şubeler:** 6 şehirde 32 şube; arama, bölge filtresi, tek dokunuşla arama, WhatsApp ve Google Haritalar yol tarifi
- **Instagram:** @antephankunefe gönderilerinden seçkiler
- **SSS, Franchise başvurusu ve iletişim**

## Yerelde çalıştırma

```bash
python3 -m http.server 8000
# http://localhost:8000 adresini açın
```

`index.html` dosyasını doğrudan tarayıcıda açmak da çalışır.

## İçeriği güncelleme

Menü, şubeler, SSS ve iletişim bilgilerinin tamamı tek dosyadadır: [`assets/js/data.js`](assets/js/data.js).

| Ne yapmak istiyorsunuz? | Nasıl? |
| --- | --- |
| Ürüne fiyat eklemek | İlgili ürünün `price` alanına sayı yazın: `price: 320` → “320 ₺” olarak görünür |
| Şubeye çalışma saati eklemek | Şubenin `hours` alanını doldurun: `hours: "Her gün 10:00 – 02:00"` |
| Sabit WhatsApp butonu göstermek | `contact.whatsapp` alanına numarayı yazın: `whatsapp: "0552 451 00 27"` |
| Şube WhatsApp butonlarını kapatmak | `contact.branchWhatsapp: false` yapın |
| Yeni şube eklemek | `branches` listesine yeni bir satır ekleyin; fotoğraf varsa `assets/img/branches/<slug>.webp` olarak kaydedip `image: true` yapın |
| Yeni ürün eklemek | İlgili kategorinin `items` listesine ekleyin; fotoğrafı `assets/img/menu/<image>.webp` olarak kaydedin |

## Klasör yapısı

```
index.html            Sayfa iskeleti
assets/css/style.css  Tasarım
assets/js/data.js     İçerik (menü, şubeler, SSS, iletişim)
assets/js/main.js     Menü sekmeleri, şube arama/filtre, SSS, yapılandırılmış veri
assets/img/           Logo, ürün, şube ve Instagram görselleri (WebP)
site.webmanifest      Ana ekrana ekleme bilgileri
```

## GitHub Pages ile yayınlama

Repo ayarlarında **Settings → Pages → Build and deployment** altında kaynak olarak bu dalı ve `/ (root)` klasörünü seçin.

Site `antephankunefe.com` dışında bir alan adında yayınlanacaksa `index.html` içindeki `canonical` ve `og:image` adreslerini, `assets/js/data.js` içindeki `contact.website` alanını güncelleyin.

## Kaynak ve notlar

İçerik ve görseller Ekim 2026'da [antephankunefe.com](https://antephankunefe.com/) adresinden alınmıştır.

- Mevcut sitede ürün fiyatı yayınlanmıyor; bu nedenle fiyatlar boş bırakıldı.
- Şube çalışma saatleri mevcut sitede yer almıyor (SSS'de saatlerin şubeye göre değiştiği ve Google işletme kaydından görülebileceği belirtiliyor). Her şube kartındaki “Yol tarifi” bağlantısı Google Haritalar kaydını açar.
- Sitede merkezi bir WhatsApp hattı yer almıyor. Şube kartlarındaki WhatsApp butonları, şubenin cep telefonu numarasına bağlanır.
- Esenyurt ve Eyüp şubeleri için kaynak sitede başka şubelere ait fotoğraflar kullanıldığından bu iki şubede logo gösterilir. Çerkezköy, Kars, Maltepe ve Kağıthane şubelerinin fotoğrafı yoktur.
- Instagram profili oturum açmadan görüntülenemediği için Instagram görselleri, kaynak sitedeki Instagram gönderi bağlantılarından alınmıştır.
