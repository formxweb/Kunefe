/**
 * Antephan Künefe içeriği.
 * Kaynak: antephankunefe.com (resmî site ve API), Ekim 2026.
 * Ürün adları, görseller, şube adresleri ve telefonları resmî siteden alınmıştır.
 * Resmî sitede fiyat ve çalışma saati yayınlanmadığı için bu alanlar boş bırakılmıştır.
 */

export type CategoryId = "kunefe" | "baklava" | "katmer";

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  description: string;
  image: string;
  /** Fiyat yalnızca resmî olarak doğrulandığında girilmelidir (TL). */
  price?: number;
};

export type Category = {
  id: CategoryId;
  label: string;
  plural: string;
  note: string;
};

export const categories: Category[] = [
  {
    id: "kunefe",
    label: "Künefe",
    plural: "Künefe çeşitleri",
    note: "Künefeler siparişle anında hazırlanır. Tek, iki ve dört kişilik seçenekleri vardır; dilerseniz dondurmayla servis edilir.",
  },
  {
    id: "baklava",
    label: "Baklava",
    plural: "Baklava çeşitleri",
    note: "Baklavalarımız bol Antep fıstığıyla, ince yufka katlarıyla hazırlanır.",
  },
  {
    id: "katmer",
    label: "Katmer",
    plural: "Katmer çeşitleri",
    note: "İncecik açılan hamur ve Antep fıstığıyla, Gaziantep usulü katmer.",
  },
];

export const products: Product[] = [
  // Künefe
  {
    slug: "antephan-ozel",
    name: "Antephan Özel",
    category: "kunefe",
    description: "Markanın imzasını taşıyan künefe. Ortası fıstık ezmesiyle, çevresi bütün Antep fıstıklarıyla süslenir.",
    image: "/images/products/antephan-ozel.webp",
  },
  {
    slug: "fistikzade",
    name: "Fıstıkzade",
    category: "kunefe",
    description: "Yüzeyinin tamamı bütün Antep fıstıklarıyla kaplanır. Her lokmada çıtır kadayıf, uzayan peynir ve fıstık bir arada.",
    image: "/images/products/fistikzade.webp",
  },
  {
    slug: "yesil-sultan",
    name: "Yeşil Sultan",
    category: "kunefe",
    description: "Toz ve bütün Antep fıstığıyla yemyeşil kaplanan, dilimlenerek servis edilen künefe.",
    image: "/images/products/yesil-sultan.webp",
  },
  {
    slug: "antephan-fistikderesi",
    name: "Antephan Fıstıkderesi",
    category: "kunefe",
    description: "Altın renkli künefenin ortasından bir dere gibi akan bütün Antep fıstıkları.",
    image: "/images/products/antephan-kunefe-fistikderesi.webp",
  },
  {
    slug: "peynirli-kunefe",
    name: "Peynirli Künefe",
    category: "kunefe",
    description: "Uzayan peyniri ve şerbetli kadayıfıyla klasik Antep künefesi, ortasında toz fıstık.",
    image: "/images/products/peynirli-kunefe.webp",
  },
  {
    slug: "yari-yariya",
    name: "Yarı Yarıya",
    category: "kunefe",
    description: "Bir yarısı peynirli, bir yarısı fıstıklı. Kararsızlar için iki lezzet tek tepside.",
    image: "/images/products/yari-yariya.webp",
  },
  {
    slug: "kaymakli-pasa",
    name: "Kaymaklı Paşa",
    category: "kunefe",
    description: "Toz Antep fıstığının üzerinde bol kaymak parçaları.",
    image: "/images/products/kaymakli-pasa.webp",
  },
  {
    slug: "kaymakli-ezme",
    name: "Kaymaklı Ezme",
    category: "kunefe",
    description: "Yoğun fıstık ezmesiyle kaplanan, üzeri bütün fıstıklarla tamamlanan künefe.",
    image: "/images/products/kaymakli-ezme.webp",
  },
  {
    slug: "mozaik-kunefe",
    name: "Mozaik Künefe",
    category: "kunefe",
    description: "İki ayrı süslemenin yan yana durduğu, renkli görünümüyle mozaik künefe.",
    image: "/images/products/mozaik-kunefe.webp",
  },
  {
    slug: "hasir-kunefe",
    name: "Hasır Künefe",
    category: "kunefe",
    description: "Hasır kadayıfla örülen, çıtır dokusuyla öne çıkan künefe.",
    image: "/images/products/hasir-kunefe.webp",
  },
  {
    slug: "cevizli",
    name: "Cevizli",
    category: "kunefe",
    description: "Çıtır kadayıfın üzerinde iri ceviz içleri.",
    image: "/images/products/cevizli.webp",
  },
  // Baklava
  {
    slug: "fistikli-baklava",
    name: "Fıstıklı Baklava",
    category: "baklava",
    description: "İnce yufka katları ve bol Antep fıstığıyla klasik Antep baklavası.",
    image: "/images/products/fistikli-baklava.webp",
  },
  {
    slug: "havuc-dilimi-baklava",
    name: "Havuç Dilimi Baklava",
    category: "baklava",
    description: "Havuç dilimi biçiminde kesilen, bol fıstıklı baklava.",
    image: "/images/products/havuc-dilimi-baklava.webp",
  },
  {
    slug: "midye-baklava",
    name: "Midye Baklava",
    category: "baklava",
    description: "Midye kabuğu biçiminde sarılan, içi fıstık dolu baklava.",
    image: "/images/products/midye-baklava.webp",
  },
  {
    slug: "soguk-baklava",
    name: "Soğuk Baklava",
    category: "baklava",
    description: "Sütlü şerbetiyle hafif, üzeri kakao ve fıstıkla tamamlanan soğuk baklava.",
    image: "/images/products/soguk-baklava.webp",
  },
  // Katmer
  {
    slug: "meshur-antep-katmer",
    name: "Meşhur Antep Katmer",
    category: "katmer",
    description: "İncecik açılan hamurun arasında kaymak ve toz fıstık. Gaziantep’in meşhur katmeri.",
    image: "/images/products/meshur-antep-katmer.webp",
  },
  {
    slug: "burma-katmer",
    name: "Burma Katmer",
    category: "katmer",
    description: "Spiral biçiminde burularak pişirilen fıstıklı katmer.",
    image: "/images/products/burma-katmer.webp",
  },
  {
    slug: "simit-katmer",
    name: "Simit Katmer",
    category: "katmer",
    description: "Simit gibi halka biçiminde pişirilen fıstıklı katmer.",
    image: "/images/products/simit-katmer.webp",
  },
  {
    slug: "muska-katmer",
    name: "Muska Katmer",
    category: "katmer",
    description: "Üçgen muska biçiminde katlanan fıstıklı katmer.",
    image: "/images/products/muska-katmer.webp",
  },
];

/** Ana sayfadaki vitrin: ilk ürün büyük gösterilir. */
export const signatureSlugs = ["fistikzade", "antephan-ozel", "yesil-sultan"] as const;

export type RegionId =
  | "istanbul-avrupa"
  | "istanbul-anadolu"
  | "ankara"
  | "tekirdag"
  | "edirne"
  | "kars"
  | "van";

export type Region = { id: RegionId; label: string; short: string };

export const regions: Region[] = [
  { id: "istanbul-avrupa", label: "İstanbul Avrupa Yakası", short: "İstanbul Avrupa" },
  { id: "istanbul-anadolu", label: "İstanbul Anadolu Yakası", short: "İstanbul Anadolu" },
  { id: "ankara", label: "Ankara", short: "Ankara" },
  { id: "tekirdag", label: "Tekirdağ", short: "Tekirdağ" },
  { id: "edirne", label: "Edirne", short: "Edirne" },
  { id: "kars", label: "Kars", short: "Kars" },
  { id: "van", label: "Van", short: "Van" },
];

export type Branch = {
  slug: string;
  name: string;
  region: RegionId;
  district: string;
  city: string;
  address: string;
  phone: string;
  /** public/images/branches/<slug>.webp mevcut mu? */
  photo: boolean;
};

export const branches: Branch[] = [
  // İstanbul Avrupa Yakası
  { slug: "altinsehir", name: "Altınşehir", region: "istanbul-avrupa", district: "Başakşehir", city: "İstanbul", address: "Altınşehir Mah. Osmanlı Cd., Gülnihal Sk. No:1", phone: "0505 593 54 02", photo: true },
  { slug: "bahcesehir", name: "Bahçeşehir", region: "istanbul-avrupa", district: "Başakşehir", city: "İstanbul", address: "Bahçeşehir 2. Kısım, Avni Akyol Blv.", phone: "0552 828 22 27", photo: true },
  { slug: "berec", name: "Bereç", region: "istanbul-avrupa", district: "Bayrampaşa", city: "İstanbul", address: "Uluyol Bereç Pashador Cad., Muratpaşa, Eski Edirne Asf. No:1/20", phone: "0501 106 24 51", photo: true },
  { slug: "esenler", name: "Esenler", region: "istanbul-avrupa", district: "Esenler", city: "İstanbul", address: "Kazım Karabekir Mah., Kazım Karabekir Cd. No:2", phone: "0541 153 82 52", photo: true },
  { slug: "esenyurt", name: "Esenyurt", region: "istanbul-avrupa", district: "Esenyurt", city: "İstanbul", address: "Doğan Araslı Cd., Mahir İş Merkezi No:167/A", phone: "0552 879 21 27", photo: false },
  { slug: "eyup", name: "Eyüp", region: "istanbul-avrupa", district: "Eyüpsultan", city: "İstanbul", address: "Defterdar, Akşemsettin Mah. Mustafa Kemal Blv. No:8/3F, Çarşı Zemin Dükkan 98", phone: "0212 618 27 27", photo: false },
  { slug: "guzelyurt", name: "Güzelyurt", region: "istanbul-avrupa", district: "Esenyurt", city: "İstanbul", address: "Güzelyurt, Orhangazi Cd. 1-3", phone: "0537 892 30 86", photo: true },
  { slug: "habipler", name: "Habipler", region: "istanbul-avrupa", district: "Sultangazi", city: "İstanbul", address: "Eski Habipler, Eski Edirne Asf. Cd. No:971", phone: "0507 701 04 55", photo: true },
  { slug: "kagithane", name: "Kağıthane", region: "istanbul-avrupa", district: "Kağıthane", city: "İstanbul", address: "Merkez, Sadabad Cd. No:44 Kat:1", phone: "0535 763 87 25", photo: false },
  { slug: "kayasehir", name: "Kayaşehir", region: "istanbul-avrupa", district: "Başakşehir", city: "İstanbul", address: "Park Mavera 4, Kayabaşı, Tınaztepe Cd. Sit 3Ha", phone: "0533 761 93 27", photo: true },
  { slug: "mahmutbey", name: "Mahmutbey", region: "istanbul-avrupa", district: "Bağcılar", city: "İstanbul", address: "Mahmutbey, Göztepe, Bosna Cd. No:2 M", phone: "0530 214 35 27", photo: true },
  { slug: "sultangazi", name: "Sultangazi", region: "istanbul-avrupa", district: "Sultangazi", city: "İstanbul", address: "Cebeci, Eski Edirne Asf. No:694", phone: "0212 890 26 25", photo: true },
  { slug: "sirinevler", name: "Şirinevler", region: "istanbul-avrupa", district: "Bahçelievler", city: "İstanbul", address: "Hürriyet, Mahmutbey Cd. 31A", phone: "0532 616 73 27", photo: true },
  { slug: "yakuplu", name: "Yakuplu", region: "istanbul-avrupa", district: "Beylikdüzü", city: "İstanbul", address: "Ülker Sok., Yakuplu, Osmangazi Cd. No:9 Daire No:4", phone: "0554 132 25 27", photo: true },

  // İstanbul Anadolu Yakası
  { slug: "atasehir", name: "Ataşehir", region: "istanbul-anadolu", district: "Ataşehir", city: "İstanbul", address: "Örnek, Yunus Emre Cd. No:80", phone: "0507 297 47 27", photo: true },
  { slug: "aydinli", name: "Aydınlı", region: "istanbul-anadolu", district: "Tuzla", city: "İstanbul", address: "Aydınlı, Gürpınar Cd. 61 A", phone: "0544 297 27 63", photo: true },
  { slug: "cevizli", name: "Cevizli", region: "istanbul-anadolu", district: "Maltepe", city: "İstanbul", address: "Cevizli, Zuhal Cd. No:44B", phone: "0536 729 02 63", photo: true },
  { slug: "kavacik", name: "Kavacık", region: "istanbul-anadolu", district: "Beykoz", city: "İstanbul", address: "Rüzgarlıbahçe, Çavuşbaşı Cumhuriyet Cd. No:14", phone: "0530 864 04 65", photo: true },
  { slug: "kurtkoy", name: "Kurtköy", region: "istanbul-anadolu", district: "Pendik", city: "İstanbul", address: "Kurtköy, Ankara Cd. No:353/1", phone: "0541 128 94 27", photo: true },
  { slug: "madenler", name: "Madenler", region: "istanbul-anadolu", district: "Çekmeköy", city: "İstanbul", address: "Madenler, Serencebey Cd. No:52/B", phone: "0552 622 69 27", photo: true },
  { slug: "maltepe", name: "Maltepe", region: "istanbul-anadolu", district: "Maltepe", city: "İstanbul", address: "Zümrütevler, Firuzan Sk. No:8", phone: "0532 626 49 28", photo: false },
  { slug: "pendik", name: "Pendik", region: "istanbul-anadolu", district: "Pendik", city: "İstanbul", address: "Fevzi Çakmak, Tevfik İleri Cd. 119A", phone: "0552 676 34 27", photo: true },
  { slug: "tasdelen", name: "Taşdelen", region: "istanbul-anadolu", district: "Çekmeköy", city: "İstanbul", address: "Güngören, Turgut Özal Cd. No:42", phone: "0534 044 08 27", photo: true },
  { slug: "umraniye", name: "Ümraniye", region: "istanbul-anadolu", district: "Ümraniye", city: "İstanbul", address: "Tepeüstü, Alemdağ Cd. No:536/1", phone: "0552 451 00 27", photo: true },

  // Ankara
  { slug: "etimesgut", name: "Etimesgut", region: "ankara", district: "Etimesgut", city: "Ankara", address: "Altay, Ayaş Ankara Yolu Blv. No:162 CI", phone: "0531 088 63 27", photo: true },
  { slug: "ovacik", name: "Ovacık", region: "ankara", district: "Keçiören", city: "Ankara", address: "Ovacık, Yozgat Blv. No:68/3 D:6", phone: "0501 253 67 27", photo: true },
  { slug: "yenimahalle", name: "Yenimahalle", region: "ankara", district: "Yenimahalle", city: "Ankara", address: "Mehmet Akif Ersoy, 681. Sk. No:6", phone: "0312 502 96 66", photo: true },

  // Tekirdağ
  { slug: "cerkezkoy", name: "Çerkezköy", region: "tekirdag", district: "Çerkezköy", city: "Tekirdağ", address: "Gazi Osman Paşa, Atatürk Cd. No:91", phone: "0282 726 33 37", photo: false },
  { slug: "corlu", name: "Çorlu", region: "tekirdag", district: "Çorlu", city: "Tekirdağ", address: "Kazımiye, Salih Omurtak Cd. No:70A", phone: "0543 949 59 27", photo: true },

  // Diğer şehirler
  { slug: "edirne", name: "Edirne", region: "edirne", district: "Merkez", city: "Edirne", address: "Şükrüpaşa, Abdi İpekçi Cd. 22/A No:42", phone: "0542 188 67 08", photo: true },
  { slug: "kars", name: "Kars", region: "kars", district: "Merkez", city: "Kars", address: "Yusufpaşa, Atatürk Cd. No:25", phone: "0507 200 27 36", photo: false },
  { slug: "van", name: "Van", region: "van", district: "İpekyolu", city: "Van", address: "Cengiz Keremoğlu, Alipaşa, İskele Cd. Apt. 104/4A", phone: "0505 565 27 65", photo: true },
];

export const instagramPosts = [
  { url: "https://www.instagram.com/p/DT3FLJICBHR/", image: "/images/instagram/3.webp", w: 628, h: 761, caption: "Çilekli, muzlu fıstıklı katmer" },
  { url: "https://www.instagram.com/p/DTDgNDYiPQj/", image: "/images/instagram/2.webp", w: 626, h: 761, caption: "Ocak başında" },
  { url: "https://www.instagram.com/p/DVqsdBACDSZ/", image: "/images/instagram/4.webp", w: 522, h: 639, caption: "Gece kapanmayan kalabalık" },
  { url: "https://www.instagram.com/p/DXRvslmoDwr/", image: "/images/instagram/5.webp", w: 524, h: 641, caption: "Burma ve fıstıklı baklava" },
  { url: "https://www.instagram.com/p/DOlJWYCjSm4/", image: "/images/instagram/6.webp", w: 520, h: 641, caption: "Beylikdüzü Güzelyurt açılışı" },
];

export const heroPost = "https://www.instagram.com/p/DVLvqo7iIEj/";

export const site = {
  name: "Antephan Künefe",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://antephankunefe.com",
  /** Önizleme yayınlarında arama motorlarının siteyi dizine eklememesi için */
  noindex: process.env.NEXT_PUBLIC_NOINDEX === "1",
  email: "info@antephankunefe.com",
  instagram: "https://www.instagram.com/antephankunefe/",
  instagramHandle: "@antephankunefe",
  description:
    "Antephan Künefe: gerçek Antep fıstığı ve 38 yıllık ustalıkla künefe, baklava ve katmer. İstanbul, Ankara, Tekirdağ, Edirne, Kars ve Van’da 32 şube.",
};

/** Resmî bannerlardaki marka ilkeleri. */
export const pillars = [
  { title: "%100 Antep fıstığı", text: "En kaliteli Antep fıstığı ile zenginleştirilmiş lezzet." },
  { title: "Taze günlük peynir", text: "Özel künefe peyniri ile uzayan, eriyen ve damakta iz bırakan tat." },
  { title: "Çıtır kadayıf", text: "İncecik tel kadayıfın tereyağında kızartılmasıyla eşsiz çıtırlık." },
  { title: "Özel şerbet", text: "Geleneksel tarifle hazırlanan şerbet ile mükemmel denge." },
];

/** Resmî sitedeki Sıkça Sorulan Sorular’dan şube ziyaretiyle ilgili olanlar. */
export const visitFaq = [
  { q: "Şubeleriniz hangi saatlerde hizmet veriyor?", a: "Şubelerimizin çalışma saatleri bölgeye göre değişiklik göstermektedir. Google işletme hesabı üzerinden size en yakın şubemizin güncel çalışma saatlerini görüntüleyebilirsiniz." },
  { q: "Rezervasyon yaptırabiliyor muyum?", a: "Bazı şubelerimiz rezervasyon kabul etmektedir. Özellikle yoğun günlerde önceden şubeyi aramanızı öneririz." },
  { q: "Paket servis hizmetiniz var mı?", a: "Evet. Belirli bölgelerde paket servis hizmetimiz bulunmaktadır. Detaylı bilgi için size en yakın şubeyle iletişime geçebilirsiniz." },
  { q: "Online sipariş verebilir miyim?", a: "Evet. Anlaşmalı yemek platformları üzerinden online sipariş oluşturabilirsiniz." },
  { q: "Künefeler günlük mü hazırlanıyor?", a: "Evet. Künefelerimiz anlık olarak hazırlanır. Tüm şubelerimizde ürünler müşterilerimizin görebileceği şekilde, şeffaf olarak hazırlanır ve en taze hâliyle servis edilir." },
  { q: "Franchise veriyor musunuz?", a: "Bayilik süreçleriyle ilgili bilgi almak için info@antephankunefe.com adresine yazabilirsiniz." },
];

// Yardımcılar

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(id: CategoryId) {
  return categories.find((c) => c.id === id)!;
}

export function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug);
}

export function getRegion(id: RegionId) {
  return regions.find((r) => r.id === id)!;
}

export function branchesByRegion() {
  return regions.map((region) => ({
    region,
    items: branches
      .filter((b) => b.region === region.id)
      .sort((a, b) => a.name.localeCompare(b.name, "tr")),
  }));
}

/** "0552 451 00 27" → "+905524510027" */
export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const intl = digits.startsWith("90") && digits.length === 12 ? digits : "90" + digits.replace(/^0/, "");
  return `tel:+${intl}`;
}

export function fullAddress(b: Branch) {
  return `${b.address}, ${b.district}/${b.city}`;
}

export function directionsUrl(b: Branch) {
  const q = `Antephan Künefe ${b.name}, ${fullAddress(b)}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
}

export function mapsSearchUrl(b: Branch) {
  const q = `Antephan Künefe ${b.name}, ${fullAddress(b)}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

export function mapEmbedUrl(b: Branch) {
  const q = `Antephan Künefe ${b.name}, ${fullAddress(b)}`;
  return `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
}

export const cityCount = new Set(branches.map((b) => b.city)).size;
