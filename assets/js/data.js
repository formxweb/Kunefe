/*
 * Antephan Künefe – site içeriği
 *
 * Menü, şubeler, SSS ve iletişim bilgileri bu dosyadan okunur.
 * Kaynak: antephankunefe.com (Ekim 2026).
 *
 * Fiyat eklemek için ürünün `price` alanına sayı yazın (ör. price: 320).
 * Çalışma saati eklemek için şubenin `hours` alanını doldurun
 * (ör. hours: "Her gün 10:00 – 02:00").
 * Merkezi bir WhatsApp hattı varsa `contact.whatsapp` alanına yazın
 * (ör. "0552 451 00 27"); sayfada sabit WhatsApp butonu görünür.
 */
window.SITE = {
  contact: {
    email: "info@antephankunefe.com",
    instagram: "antephankunefe",
    website: "https://antephankunefe.com",
    location: "Türkiye / İstanbul",
    whatsapp: "",
    // Cep telefonu numarası olan şubelerde WhatsApp butonu gösterilsin mi?
    branchWhatsapp: true
  },

  currency: "₺",

  menu: [
    {
      id: "kunefe",
      title: "Künefe",
      heading: "Künefe Çeşitlerimiz",
      items: [
        { name: "Antephan Özel", image: "antephan-ozel", price: null },
        { name: "Antephan Fıstıkderesi", image: "antephan-kunefe-fistikderesi", price: null },
        { name: "Cevizli", image: "cevizli", price: null },
        { name: "Kaymaklı Ezme", image: "kaymakli-ezme", price: null },
        { name: "Fıstıkzade", image: "fistikzade", price: null },
        { name: "Hasır Künefe", image: "hasir-kunefe", price: null },
        { name: "Kaymaklı Paşa", image: "kaymakli-pasa", price: null },
        { name: "Mozaik Künefe", image: "mozaik-kunefe", price: null },
        { name: "Peynirli Künefe", image: "peynirli-kunefe", price: null },
        { name: "Yarı Yarıya", desc: "Yarı fıstıklı, yarı peynirli", image: "yari-yariya", price: null },
        { name: "Yeşil Sultan", image: "yesil-sultan", price: null }
      ]
    },
    {
      id: "baklava",
      title: "Baklava",
      heading: "Baklava Çeşitlerimiz",
      items: [
        { name: "Havuç Dilimi Baklava", image: "havuc-dilimi-baklava", price: null },
        { name: "Soğuk Baklava", image: "soguk-baklava", price: null },
        { name: "Midye Baklava", image: "midye-baklava", price: null },
        { name: "Fıstıklı Baklava", image: "fistikli-baklava", price: null }
      ]
    },
    {
      id: "katmer",
      title: "Katmer",
      heading: "Katmer Çeşitlerimiz",
      items: [
        { name: "Meşhur Antep Katmer", image: "meshur-antep-katmer", price: null },
        { name: "Simit Katmer", image: "simit-katmer", price: null },
        { name: "Muska Katmer", image: "muska-katmer", price: null },
        { name: "Burma Katmer", image: "burma-katmer", price: null }
      ]
    }
  ],

  regions: [
    { id: "istanbul-avrupa", label: "İstanbul Avrupa" },
    { id: "istanbul-anadolu", label: "İstanbul Anadolu" },
    { id: "ankara", label: "Ankara" },
    { id: "tekirdag", label: "Tekirdağ" },
    { id: "edirne", label: "Edirne" },
    { id: "kars", label: "Kars" },
    { id: "van", label: "Van" }
  ],

  // image: true → assets/img/branches/<slug>.webp
  branches: [
    // İstanbul – Avrupa Yakası
    { name: "Bahçeşehir", slug: "bahcesehir", region: "istanbul-avrupa", district: "Başakşehir", city: "İstanbul", address: "Bahçeşehir 2. Kısım, Avni Akyol Blv.", phone: "0552 828 22 27", image: true, hours: null },
    { name: "Altınşehir", slug: "altinsehir", region: "istanbul-avrupa", district: "Başakşehir", city: "İstanbul", address: "Altınşehir Mah. Osmanlı Cd., Gülnihal Sk. No:1", phone: "0505 593 54 02", image: true, hours: null },
    { name: "Bereç", slug: "berec", region: "istanbul-avrupa", district: "Bayrampaşa", city: "İstanbul", address: "Uluyol Bereç Pashador Cad., Muratpaşa, Eski Edirne Asf. No:1/20", phone: "0501 106 24 51", image: true, hours: null },
    { name: "Esenler", slug: "esenler", region: "istanbul-avrupa", district: "Esenler", city: "İstanbul", address: "Kazım Karabekir Mah., Kazım Karabekir Cd. No:2", phone: "0541 153 82 52", image: true, hours: null },
    { name: "Esenyurt", slug: "esenyurt", region: "istanbul-avrupa", district: "Esenyurt", city: "İstanbul", address: "Doğan Araslı Cd., Mahir İş Merkezi No:167/A", phone: "0552 879 21 27", image: false, hours: null },
    { name: "Eyüp", slug: "eyup", region: "istanbul-avrupa", district: "Eyüpsultan", city: "İstanbul", address: "Defterdar, Akşemsettin Mah. Mustafa Kemal Blv. No:8/3F Çarşı Zemin Dükkan 98", phone: "0212 618 27 27", image: false, hours: null },
    { name: "Güzelyurt", slug: "guzelyurt", region: "istanbul-avrupa", district: "Esenyurt", city: "İstanbul", address: "Güzelyurt, Orhangazi Cd. 1-3", phone: "0537 892 30 86", image: true, hours: null },
    { name: "Habipler", slug: "habipler", region: "istanbul-avrupa", district: "Sultangazi", city: "İstanbul", address: "Eski Habipler, Eski Edirne Asf. Cd. No:971", phone: "0507 701 04 55", image: true, hours: null },
    { name: "Kağıthane", slug: "kagithane", region: "istanbul-avrupa", district: "Kağıthane", city: "İstanbul", address: "Merkez, Sadabad Cd. No:44 Kat:1", phone: "0535 763 87 25", image: false, hours: null },
    { name: "Kayaşehir", slug: "kayasehir", region: "istanbul-avrupa", district: "Başakşehir", city: "İstanbul", address: "Park Mavera 4, Kayabaşı, Tınaztepe Cd. Sit 3Ha", phone: "0533 761 93 27", image: true, hours: null },
    { name: "Mahmutbey", slug: "mahmutbey", region: "istanbul-avrupa", district: "Bağcılar", city: "İstanbul", address: "Mahmutbey, Göztepe, Bosna Cd. No:2 M", phone: "0530 214 35 27", image: true, hours: null },
    { name: "Sultangazi", slug: "sultangazi", region: "istanbul-avrupa", district: "Sultangazi", city: "İstanbul", address: "Cebeci, Eski Edirne Asf. No:694", phone: "0212 890 26 25", image: true, hours: null },
    { name: "Şirinevler", slug: "sirinevler", region: "istanbul-avrupa", district: "Bahçelievler", city: "İstanbul", address: "Hürriyet, Mahmutbey Cd. 31A", phone: "0532 616 73 27", image: true, hours: null },
    { name: "Yakuplu", slug: "yakuplu", region: "istanbul-avrupa", district: "Beylikdüzü", city: "İstanbul", address: "Ülker Sok., Yakuplu, Osmangazi Cd. No:9 Daire No:4", phone: "0554 132 25 27", image: true, hours: null },

    // İstanbul – Anadolu Yakası
    { name: "Ataşehir", slug: "atasehir", region: "istanbul-anadolu", district: "Ataşehir", city: "İstanbul", address: "Örnek, Yunus Emre Cd. No:80", phone: "0507 297 47 27", image: true, hours: null },
    { name: "Aydınlı", slug: "aydinli", region: "istanbul-anadolu", district: "Tuzla", city: "İstanbul", address: "Aydınlı, Gürpınar Cd. 61 A", phone: "0544 297 27 63", image: true, hours: null },
    { name: "Cevizli", slug: "cevizli", region: "istanbul-anadolu", district: "Maltepe", city: "İstanbul", address: "Cevizli, Zuhal Cd. No:44B", phone: "0536 729 02 63", image: true, hours: null },
    { name: "Kavacık", slug: "kavacik", region: "istanbul-anadolu", district: "Beykoz", city: "İstanbul", address: "Rüzgarlıbahçe, Çavuşbaşı Cumhuriyet Cd. No:14", phone: "0530 864 04 65", image: true, hours: null },
    { name: "Kurtköy", slug: "kurtkoy", region: "istanbul-anadolu", district: "Pendik", city: "İstanbul", address: "Kurtköy, Ankara Cd. No:353/1", phone: "0541 128 94 27", image: true, hours: null },
    { name: "Madenler", slug: "madenler", region: "istanbul-anadolu", district: "Çekmeköy", city: "İstanbul", address: "Madenler, Serencebey Cd. No:52/B", phone: "0552 622 69 27", image: true, hours: null },
    { name: "Maltepe", slug: "maltepe", region: "istanbul-anadolu", district: "Maltepe", city: "İstanbul", address: "Zümrütevler, Firuzan Sk. No:8", phone: "0532 626 49 28", image: false, hours: null },
    { name: "Pendik", slug: "pendik", region: "istanbul-anadolu", district: "Pendik", city: "İstanbul", address: "Fevzi Çakmak, Tevfik İleri Cd. 119A", phone: "0552 676 34 27", image: true, hours: null },
    { name: "Taşdelen", slug: "tasdelen", region: "istanbul-anadolu", district: "Çekmeköy", city: "İstanbul", address: "Güngören, Turgut Özal Cd. No:42", phone: "0534 044 08 27", image: true, hours: null },
    { name: "Ümraniye", slug: "umraniye", region: "istanbul-anadolu", district: "Ümraniye", city: "İstanbul", address: "Tepeüstü, Alemdağ Cd. No:536/1", phone: "0552 451 00 27", image: true, hours: null },

    // Ankara
    { name: "Etimesgut", slug: "etimesgut", region: "ankara", district: "Etimesgut", city: "Ankara", address: "Altay, Ayaş Ankara Yolu Blv. No:162 CI", phone: "0531 088 63 27", image: true, hours: null },
    { name: "Ovacık", slug: "ovacik", region: "ankara", district: "Keçiören", city: "Ankara", address: "Ovacık, Yozgat Blv. No:68/3 D:6", phone: "0501 253 67 27", image: true, hours: null },
    { name: "Yenimahalle", slug: "yenimahalle", region: "ankara", district: "Yenimahalle", city: "Ankara", address: "Mehmet Akif Ersoy, 681. Sk. No:6", phone: "0312 502 96 66", image: true, hours: null },

    // Tekirdağ
    { name: "Çerkezköy", slug: "cerkezkoy", region: "tekirdag", district: "Çerkezköy", city: "Tekirdağ", address: "Gazi Osman Paşa, Atatürk Cd. No:91", phone: "0282 726 33 37", image: false, hours: null },
    { name: "Çorlu", slug: "corlu", region: "tekirdag", district: "Çorlu", city: "Tekirdağ", address: "Kazımiye, Salih Omurtak Cd. No:70A", phone: "0543 949 59 27", image: true, hours: null },

    // Diğer şehirler
    { name: "Edirne", slug: "edirne", region: "edirne", district: "Merkez", city: "Edirne", address: "Şükrüpaşa, Abdi İpekçi Cd. 22/A No:42", phone: "0542 188 67 08", image: true, hours: null },
    { name: "Kars", slug: "kars", region: "kars", district: "Merkez", city: "Kars", address: "Yusufpaşa, Atatürk Cd. No:25", phone: "0507 200 27 36", image: false, hours: null },
    { name: "Van", slug: "van", region: "van", district: "İpekyolu", city: "Van", address: "Cengiz Keremoğlu, Alipaşa, İskele Cd. Apt. 104/4A", phone: "0505 565 27 65", image: true, hours: null }
  ],

  faq: [
    { q: "Künefeler günlük mü hazırlanıyor?", a: "Evet. Künefelerimiz anlık olarak hazırlanmaktadır. Tüm şubelerimizde ürünler büyük titizlikle, müşterimizin gözlemleyebileceği şekilde şeffaf olarak hazırlanmakta ve en taze şekilde servis edilmektedir." },
    { q: "Siparişlerinizde gerçek Antep fıstığı kullanıyor musunuz?", a: "Ürünlerimizde kaliteli Antep fıstığı kullanılmaktadır. Lezzet ve kalite standartlarımız tüm şubelerimizde korunmaktadır." },
    { q: "Online sipariş verebilir miyim?", a: "Evet. Anlaşmalı yemek platformları üzerinden online sipariş oluşturabilirsiniz." },
    { q: "Paket servis hizmetiniz var mı?", a: "Evet. Belirli bölgelerde paket servis hizmetimiz bulunmaktadır. Detaylı bilgi için size en yakın şubeyle iletişime geçebilirsiniz." },
    { q: "Şubeleriniz hangi saatlerde hizmet veriyor?", a: "Şubelerimizin çalışma saatleri bölgeye göre değişiklik göstermektedir. Google işletme hesabı üzerinden size en yakın şubemizin güncel çalışma saatlerini görüntüleyebilirsiniz." },
    { q: "Rezervasyon yaptırabiliyor muyum?", a: "Bazı şubelerimiz rezervasyon kabul etmektedir. Özellikle yoğun günlerde önceden iletişime geçmenizi öneririz." },
    { q: "Künefe yanında dondurma servisi bulunuyor mu?", a: "Evet. Dilerseniz künefenizi dondurmalı olarak tercih edebilirsiniz." },
    { q: "Künefe siparişleriniz kaç kişiliktir?", a: "Menümüzde tek kişilik, iki kişilik ve dört kişilik gibi seçenekler bulunmaktadır." },
    { q: "Şubelerinize nasıl ulaşabilirim?", a: "Şubeler bölümünden adres, telefon ve konum bilgilerine ulaşabilir, harita uygulamalarından yol tarifi alabilirsiniz." },
    { q: "Franchise / bayilik veriyor musunuz?", a: "Markamızın bayilik süreçleriyle ilgili detaylı bilgi almak için sayfadaki “Franchise Başvuru” bölümünden bizimle iletişime geçebilirsiniz." }
  ],

  instagram: [
    { url: "https://www.instagram.com/p/DVLvqo7iIEj/", image: "1", alt: "Peyniri uzayan künefe servisi" },
    { url: "https://www.instagram.com/p/DTDgNDYiPQj/", image: "2", alt: "Antephan Künefe tabelası önünde alevli ocak" },
    { url: "https://www.instagram.com/p/DT3FLJICBHR/", image: "3", alt: "Çilek ve muzlu fıstıklı katmer" },
    { url: "https://www.instagram.com/p/DVqsdBACDSZ/", image: "4", alt: "Gece kalabalık bir Antephan Künefe şubesi" },
    { url: "https://www.instagram.com/p/DXRvslmoDwr/", image: "5", alt: "Meyvelerle sunulan fıstıklı baklava ve burma" },
    { url: "https://www.instagram.com/p/DOlJWYCjSm4/", image: "6", alt: "Beylikdüzü Güzelyurt şubesi açılışı" }
  ]
};
