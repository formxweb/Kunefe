import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Antephan Künefe web sitesinin kullanım koşulları.",
  alternates: { canonical: "/kullanim-kosullari/" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Kullanım Koşulları" updated="25 Ekim 2026">
      <p>
        antephankunefe.com web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Bu koşulları kabul
        etmiyorsanız lütfen siteyi kullanmayın.
      </p>

      <h2>Sitenin amacı</h2>
      <p>
        Bu site Antephan Künefe markasını, ürünlerini ve şubelerini tanıtmak amacıyla hazırlanmıştır. Sitede satış veya
        sipariş işlemi yapılmaz.
      </p>

      <h2>Bilgilerin doğruluğu</h2>
      <p>
        Ürün, şube, adres ve telefon bilgilerini güncel tutmaya özen gösteriyoruz. Ürün çeşitleri, fiyatlar, porsiyon
        seçenekleri ve çalışma saatleri şubeye göre farklılık gösterebilir. Ziyaretten veya siparişten önce bilgileri ilgili
        şubeden teyit etmenizi öneririz. Ürün fotoğrafları sunum amaçlıdır.
      </p>

      <h2>Fikrî haklar</h2>
      <p>
        Sitedeki “Antephan Künefe” adı, logo, fotoğraflar ve metinler Antephan Künefe’ye aittir. Yazılı izin olmadan
        kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.
      </p>

      <h2>Bağlantılar</h2>
      <p>
        Site; Google Haritalar ve Instagram gibi üçüncü taraf hizmetlere bağlantılar içerir. Bu hizmetlerin içeriğinden ve
        uygulamalarından ilgili hizmet sağlayıcılar sorumludur. Kişisel verilerle ilgili ayrıntılar için{" "}
        <Link href="/gizlilik/">Gizlilik ve Çerez Politikası</Link> sayfasına bakabilirsiniz.
      </p>

      <h2>Değişiklikler ve iletişim</h2>
      <p>
        Bu koşullar gerektiğinde güncellenebilir; güncel sürüm bu sayfada yayımlanır. Sorularınız için{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> adresine yazabilirsiniz.
      </p>
    </LegalPage>
  );
}
