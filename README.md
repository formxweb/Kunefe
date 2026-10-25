# Antephan Künefe · Web Sitesi

Antephan Künefe için Next.js, TypeScript, Tailwind CSS ve Framer Motion ile geliştirilmiş, statik olarak dışa aktarılan web sitesi.

## Sayfalar

| Adres | İçerik |
| --- | --- |
| `/` | Hero, imza lezzetler vitrini, kategori filtreli menü, “Lezzetin En Güzel Hâli” marka bölümü, şube özeti, Instagram galerisi |
| `/subeler/` | 32 şubenin tamamı: bölge filtresi, arama, telefon ve Google Haritalar yol tarifi. Filtre adres çubuğuna yazılır (`/subeler/?bolge=ankara`) |
| `/subeler/<şube>/` | Her şube için ayrı sayfa: adres, telefon, yol tarifi, istenince yüklenen harita |
| `/menu/<ürün>/` | Her ürün için detay sayfası |
| `/gizlilik/`, `/kullanim-kosullari/` | Gizlilik ve çerez politikası, kullanım koşulları |

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # statik çıktı: out/
npm start          # out/ klasörünü yerelde sunar
```

`out/` klasörü herhangi bir statik barındırma hizmetine (Vercel, Netlify, Cloudflare Pages, cPanel) olduğu gibi yüklenebilir.

- Alt dizinde yayın (ör. GitHub Pages): `NEXT_PUBLIC_BASE_PATH=/Kunefe npm run build`
- Farklı alan adı: `NEXT_PUBLIC_SITE_URL=https://ornek.com npm run build` (kanonik adresler, sitemap ve paylaşım görselleri için)
- Önizleme (dizine eklenmesin): `NEXT_PUBLIC_NOINDEX=1 npm run build`

### Önizleme yayını

Dala yapılan her gönderimde [`.github/workflows/pages.yml`](.github/workflows/pages.yml) siteyi derleyip GitHub Pages'e yükler: https://formxweb.github.io/Kunefe/

Bu yayın `noindex` ile derlenir; arama motorları dizine eklemez. Gerçek alan adına taşırken `NEXT_PUBLIC_NOINDEX` değişkenini kaldırın.

## İçerik güncelleme

Tüm içerik [`src/lib/data.ts`](src/lib/data.ts) dosyasındadır.

- **Fiyat:** Ürüne `price: 650` eklendiğinde menüde ve ürün sayfasında görünür. Fiyat yalnızca resmî olarak doğrulandığında girilmelidir.
- **Yeni şube:** `branches` listesine ekleyin. Fotoğraf varsa `public/images/branches/<slug>.webp` olarak kaydedip `photo: true` yapın; yoksa marka deseni gösterilir.
- **Yeni ürün:** `products` listesine ekleyip fotoğrafı `public/images/products/` altına koyun. Görsel boyutları ve yüklenirken gösterilen zemin rengi [`src/lib/images.ts`](src/lib/images.ts) içindedir.
- **Vitrin:** Ana sayfadaki üç imza ürün `signatureSlugs` ile seçilir; ilki büyük gösterilir.

## Tasarım ilkeleri

- Renkler: kırık beyaz zemin, Antep fıstığı yeşili, koyu çikolata kahvesi, az miktarda sıcak turuncu. Siyah-altın kullanılmaz.
- Yazı tipleri: başlıklarda Fraunces, metinde Alegreya Sans (sunucudan, `next/font` ile).
- Sivri kemer (şube kapılarından) ve sekiz köşeli yıldız kafesi (vitrinlerden) marka motifi olarak kullanılır.
- Hazır ikon seti, emoji, gradyan, buzlu cam, noktalı zemin, bento ızgarası ve uydurma yorum kullanılmaz. Hover yalnızca tıklanabilir öğelerdedir; animasyonlar `prefers-reduced-motion` ayarına uyar.
- Sayfa içeriği derleme sırasında HTML olarak üretilir; JavaScript yüklenmeden de görünür.

## Kaynaklar ve eksik bilgiler

İçerik ve görseller Ekim 2026’da [antephankunefe.com](https://antephankunefe.com/) sitesinden ve sitenin bağlandığı resmî Instagram gönderilerinden alınmıştır.

- **Fiyatlar:** Resmî sitede yayımlanmıyor. Yemek platformlarındaki fiyatlar şubeye göre çok farklı olduğundan siteye eklenmedi.
- **Çalışma saatleri:** Resmî sitede yok; SSS’de şubeye göre değiştiği belirtiliyor. Şube sayfaları Google Haritalar kaydına yönlendirir.
- **WhatsApp:** Resmî bir WhatsApp hattı bulunamadı; doğrulanmamış numara eklenmedi.
- **Sultanzade:** Platform menülerinde geçiyor ancak resmî sitede fotoğrafı yok. Vitrinde onun yerine resmî fotoğrafı olan Yeşil Sultan kullanıldı.
- **antephankunefe.com.tr:** Alan adı şu an çözümlenmiyor; Instagram profili oturum açmadan görüntülenemiyor.
- Esenyurt ve Eyüp şubeleri için kaynak sitede başka şubelerin fotoğrafı kullanıldığından bu şubelerde marka deseni gösterilir.
