import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gizlilik ve Çerez Politikası",
  description: "Antephan Künefe web sitesinin kişisel veri, çerez ve üçüncü taraf hizmet kullanımına ilişkin bilgilendirme.",
  alternates: { canonical: "/gizlilik/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Gizlilik ve Çerez Politikası" updated="25 Ekim 2026">
      <p>
        Bu metin, antephankunefe.com web sitesini ziyaret ettiğinizde hangi bilgilerin işlendiğini, 6698 sayılı Kişisel
        Verilerin Korunması Kanunu (KVKK) kapsamındaki haklarınızı ve sitede kullanılan üçüncü taraf hizmetleri açıklar.
      </p>

      <h2>Topladığımız bilgiler</h2>
      <p>
        Bu site bir tanıtım sitesidir. Üyelik, sipariş, ödeme veya iletişim formu bulunmaz; sitede ad, telefon, e-posta
        gibi kişisel bilgiler istenmez ve kaydedilmez.
      </p>
      <p>
        Siteyi barındıran sunucu, her web sitesinde olduğu gibi, sayfaların size iletilebilmesi için IP adresi, tarayıcı
        türü ve ziyaret zamanı gibi teknik kayıtları kısa süreli olarak tutabilir. Bu kayıtlar yalnızca sitenin güvenli ve
        kesintisiz çalışması için kullanılır.
      </p>

      <h2>Çerezler</h2>
      <p>
        Sitemiz reklam, analiz veya takip amaçlı çerez kullanmaz. Yazı tipleri ve görseller kendi sunucumuzdan yüklenir;
        sayfaları gezerken üçüncü taraf bir hizmete otomatik olarak bilgi gönderilmez.
      </p>

      <h2>Üçüncü taraf hizmetler</h2>
      <p>Aşağıdaki bağlantıları kullandığınızda ilgili hizmetin kendi gizlilik koşulları geçerli olur:</p>
      <ul>
        <li>
          <strong>Google Haritalar:</strong> “Yol tarifi” bağlantıları Google Haritalar’ı açar. Şube sayfalarındaki harita
          ise yalnızca “Haritayı göster” butonuna bastığınızda yüklenir; bu durumda Google çerez kullanabilir.
        </li>
        <li>
          <strong>Instagram:</strong> Instagram bağlantıları sizi Meta’nın işlettiği Instagram’a yönlendirir.
        </li>
        <li>
          <strong>Telefon ve e-posta:</strong> Telefon numaralarına dokunduğunuzda cihazınızın arama uygulaması, e-posta
          adresine tıkladığınızda e-posta uygulamanız açılır.
        </li>
      </ul>

      <h2>Haklarınız</h2>
      <p>
        KVKK’nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini
        veya silinmesini isteme gibi haklara sahipsiniz. Talepleriniz için{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> adresine yazabilirsiniz.
      </p>

      <h2>Değişiklikler</h2>
      <p>
        Sitede yeni bir hizmet kullanılmaya başlanırsa bu metin güncellenir. Güncel sürüm her zaman bu sayfada yer alır.
      </p>
    </LegalPage>
  );
}
