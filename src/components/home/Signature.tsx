import Link from "next/link";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { ArrowRight, ArrowUpRight } from "../icons";
import { getProduct, signatureSlugs, type Product } from "@/lib/data";

export function Signature() {
  const [lead, ...rest] = signatureSlugs.map((s) => getProduct(s)!) as Product[];

  return (
    <section aria-labelledby="imza-baslik" className="bg-pistachio-mist py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <p className="eyebrow text-ember">İmza lezzetler</p>
            <h2 id="imza-baslik" className="mt-4 text-[clamp(2.6rem,6vw,4.75rem)]">
              Üç tabak, <span className="display-italic text-pistachio">tek imza.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm md:pb-2">
            <p className="text-[1.15rem] text-muted">
              Antep fıstığının en cömert hâli. Ustalarımızın imzasını taşıyan, bol fıstıklı üç künefe.
            </p>
            <Link href="/#menumuz" className="link-underline mt-4 inline-flex items-center gap-2 font-bold">
              Tüm menüyü gör <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-14 md:mt-16 lg:grid-cols-12 lg:gap-x-12">
          {/* Büyük ürün */}
          <Reveal className="lg:col-span-7">
            <Link href={`/menu/${lead.slug}/`} className="group block outline-offset-8" aria-label={`${lead.name}: ürün detayı`}>
              <div className="relative">
                <span aria-hidden="true" className="absolute -top-8 left-0 font-display text-[1rem] font-semibold tracking-[0.2em] text-ember">
                  01
                </span>
                <div className="overflow-hidden">
                  <Photo
                    src={lead.image}
                    alt={`${lead.name}: bütün Antep fıstıklarıyla kaplı künefe`}
                    sizes="(min-width: 1024px) 44rem, 92vw"
                    className="aspect-square"
                    imgClassName="transition-transform duration-[900ms] ease-[var(--ease-soft)] group-hover:scale-[1.045]"
                  />
                </div>
                <div className="relative -mt-20 ml-5 bg-paper px-6 pb-6 pt-5 sm:ml-12 sm:max-w-[30rem] md:px-8 md:pb-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="eyebrow text-pistachio">Künefe</p>
                    <ArrowUpRight size={22} className="text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="mt-2 text-[clamp(2.4rem,5vw,3.6rem)]">{lead.name}</h3>
                  <div className="reveal-desc">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-[1.1rem] text-muted">{lead.description}</p>
                      <p className="pt-4 font-bold text-choco">Detayları gör</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* İki küçük ürün */}
          <div className="grid content-between gap-12 lg:col-span-5">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={0.12 * (i + 1)}>
                <Link
                  href={`/menu/${p.slug}/`}
                  className="group grid grid-cols-[8.5rem_1fr] items-center gap-5 outline-offset-8 sm:grid-cols-[12rem_1fr] lg:block"
                  aria-label={`${p.name}: ürün detayı`}
                >
                  <div className="overflow-hidden">
                    <Photo
                      src={p.image}
                      alt={p.name}
                      sizes="(min-width: 1024px) 32rem, 12rem"
                      className="aspect-square lg:aspect-[3/2]"
                      imgClassName="transition-transform duration-[900ms] ease-[var(--ease-soft)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="lg:mt-5 lg:grid lg:grid-cols-[3rem_1fr] lg:gap-x-2">
                    <p className="font-display text-[0.95rem] font-semibold tracking-[0.2em] text-ember lg:pt-2.5">0{i + 2}</p>
                    <div>
                      <h3 className="mt-1 flex items-center justify-between gap-3 text-[clamp(1.7rem,3vw,2.3rem)] lg:mt-0">
                        {p.name}
                        <ArrowUpRight size={20} className="hidden shrink-0 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:block" />
                      </h3>
                      <div className="reveal-desc">
                        <div className="overflow-hidden">
                          <p className="pt-2 text-[1.02rem] leading-snug text-muted">{p.description}</p>
                        </div>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-2 text-[1rem] font-bold lg:hidden">
                        Detay <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
