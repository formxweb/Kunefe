import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowRight, ArrowUpRight, InstagramIcon, MailIcon } from "./icons";
import { branchesByRegion, site } from "@/lib/data";

export function Footer() {
  const groups = branchesByRegion();
  const year = 2026;

  return (
    <footer id="iletisim" className="relative overflow-hidden bg-choco-deep text-cream">
      {/* Kapanış çağrısı */}
      <div className="shell">
        <div className="grid gap-8 border-b border-cream/15 pb-14 pt-20 md:grid-cols-[1.4fr_1fr] md:items-end md:pt-28">
          <h2 className="text-[clamp(2.5rem,6vw,5.25rem)] text-paper">
            Bir tabak künefe,
            <br />
            <span className="display-italic text-pistachio-soft">en yakın şubede.</span>
          </h2>
          <div className="flex flex-col gap-3 md:items-end">
            <Link
              href="/subeler/"
              className="group inline-flex h-14 w-full items-center justify-between gap-6 bg-pistachio-soft px-6 text-lg font-bold text-choco-deep transition-colors duration-200 hover:bg-paper md:w-auto"
            >
              Şubelerimizi gör
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Franchise başvurusu")}`}
              className="inline-flex h-12 items-center gap-2 text-[1.02rem] font-medium text-cream/80 hover:text-paper"
            >
              Franchise başvurusu için yazın <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr_2fr]">
        <div>
          <Logo size="lg" tone="light" />
          <p className="mt-6 max-w-xs text-cream/75">
            Türkiye’de 38 yıldır tatlı ve baklava geleneğini Antep fıstığıyla sürdürüyoruz.
          </p>
        </div>

        <div className="grid gap-8 xs:grid-cols-2 lg:grid-cols-1">
          <div>
            <h3 className="eyebrow text-pistachio-soft">Sayfalar</h3>
            <ul className="mt-4 space-y-2.5 text-[1.05rem]">
              <li><Link href="/" className="hover:text-paper text-cream/85">Ana Sayfa</Link></li>
              <li><Link href="/#menumuz" className="hover:text-paper text-cream/85">Menümüz</Link></li>
              <li><Link href="/#hakkimizda" className="hover:text-paper text-cream/85">Hakkımızda</Link></li>
              <li><Link href="/subeler/" className="hover:text-paper text-cream/85">Şubelerimiz</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-pistachio-soft">İletişim</h3>
            <ul className="mt-4 space-y-2.5 text-[1.05rem]">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-cream/85 hover:text-paper">
                  <MailIcon size={18} /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cream/85 hover:text-paper">
                  <InstagramIcon size={18} /> {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-pistachio-soft">Şubeler</h3>
          <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
            {groups.map(({ region, items }) => (
              <div key={region.id}>
                <p className="text-sm font-bold text-ember-soft">{region.short}</p>
                <ul className="mt-1.5 flex flex-wrap gap-x-2 gap-y-0.5 text-[0.98rem] text-cream/75">
                  {items.map((b, i) => (
                    <li key={b.slug}>
                      <Link href={`/subeler/${b.slug}/`} className="hover:text-paper">
                        {b.name}
                      </Link>
                      {i < items.length - 1 && <span aria-hidden="true" className="text-cream/30">,</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="shell">
        <div className="flex flex-col gap-3 border-t border-cream/15 py-6 text-[0.95rem] text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Antephan Künefe. Tüm hakları saklıdır.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/gizlilik/" className="hover:text-paper">Gizlilik ve Çerez Politikası</Link></li>
            <li><Link href="/kullanim-kosullari/" className="hover:text-paper">Kullanım Koşulları</Link></li>
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[2.2vw] select-none whitespace-nowrap text-center font-display text-[17.5vw] font-semibold uppercase leading-[0.8] tracking-[-0.02em] text-choco-mid/50"
        style={{ fontVariationSettings: '"SOFT" 0, "opsz" 144' }}
      >
        Antephan
      </p>
    </footer>
  );
}
