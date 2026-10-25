import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PistachioGlyph } from "../icons";
import { asset } from "@/lib/asset";
import { branches, cityCount, heroPost } from "@/lib/data";

/** Şube kapılarındaki sivri kemer; maske olarak kullanılır. */
const archMask = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" preserveAspectRatio="none"><path d="M0 125V47C0 24 20 9 50 0c30 9 50 24 50 47v78Z"/></svg>'
)}")`;

const scatter = [
  { top: "8%", left: "46%", size: 46, rotate: -24, opacity: 0.5 },
  { top: "74%", left: "3%", size: 58, rotate: 32, opacity: 0.35 },
  { top: "86%", left: "44%", size: 38, rotate: 70, opacity: 0.45 },
  { top: "14%", left: "93%", size: 52, rotate: 12, opacity: 0.4 },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-baslik" className="relative overflow-hidden">
      {/* Hafif fıstık motifleri */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
        {scatter.map((s, i) => (
          <PistachioGlyph
            key={i}
            size={s.size}
            className="absolute text-pistachio-mid"
            style={{ top: s.top, left: s.left, transform: `rotate(${s.rotate}deg)`, opacity: s.opacity }}
          />
        ))}
      </div>

      <div className="shell relative grid items-center gap-x-10 pb-14 pt-8 md:pt-12 lg:grid-cols-[1.08fr_1fr] lg:py-10 xl:gap-x-16">
        {/* Başlık */}
        <div className="order-1 lg:pb-6">
          <h1
            id="hero-baslik"
            className="rise-in text-[clamp(3.1rem,10.5vw,4.5rem)] leading-[0.92] tracking-[-0.03em] lg:text-[clamp(4.5rem,6.6vw,6.6rem)]"
            style={{ fontVariationSettings: '"SOFT" 30, "WONK" 0, "opsz" 144' }}
          >
            Her Lokmada
            <br />
            Antep’in <span className="display-italic text-pistachio">İmzası.</span>
          </h1>

          <p className="rise-in rise-in-1 mt-6 inline-flex items-stretch border border-choco/80 text-[0.74rem] font-bold uppercase tracking-[0.22em] sm:text-[0.8rem]">
            <span className="flex items-center bg-choco px-3 py-2 text-paper">Antephan</span>
            <span className="flex items-center px-3 py-2" lang="en">
              <span aria-hidden="true" className="mr-2.5 inline-block h-[7px] w-[7px] rotate-45 bg-ember-bright" />
              Signature Dessert
            </span>
          </p>

          <div className="hidden lg:block">
            <HeroBody />
          </div>
        </div>

        {/* Fotoğraf */}
        <div className="relative order-2 mx-auto mt-10 w-full max-w-[25rem] sm:max-w-[28rem] lg:mt-0 lg:w-[min(33rem,calc((100svh-17rem)*0.8))] lg:min-w-[24rem] lg:max-w-none lg:justify-self-end">
          {/* Kemer çizgisi */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 125"
            preserveAspectRatio="none"
            className="absolute -right-3 -top-3 h-full w-full text-pistachio sm:-right-5 sm:-top-5"
          >
            <path d="M0 125V47C0 24 20 9 50 0c30 9 50 24 50 47v78" fill="none" stroke="currentColor" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
          </svg>

          <div className="arch-in relative aspect-[4/5]">
            <div
              className="absolute inset-0 bg-[#a6865c]"
              style={{ WebkitMaskImage: archMask, maskImage: archMask, WebkitMaskSize: "100% 100%", maskSize: "100% 100%" }}
            >
              <Image
                src={asset("/images/brand/hero-kunefe.webp")}
                alt="Spatulayla kaldırılan, peyniri uzayan sıcak künefe; yanında Antep fıstıkları"
                fill
                preload
                fetchPriority="high"
                sizes="(min-width: 1024px) 34rem, (min-width: 640px) 28rem, 90vw"
                className="object-cover object-[50%_40%]"
              />
            </div>
          </div>

          {/* Mühür */}
          <div className="absolute -bottom-6 -left-4 grid h-28 w-28 place-items-center rounded-full bg-cream sm:-left-10 sm:h-32 sm:w-32">
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full text-choco" aria-hidden="true">
              <defs>
                <path id="seal-path" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
              </defs>
              <text className="fill-current font-sans text-[10px] font-bold uppercase">
                <textPath href="#seal-path" textLength="286" lengthAdjust="spacing">
                  Gaziantep · Künefe · Katmer ·
                </textPath>
              </text>
            </svg>
            <Image src={asset("/images/brand/logo-badge.webp")} alt="" width={56} height={56} className="h-14 w-14" />
          </div>

          <a
            href={heroPost}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -right-1 bottom-8 hidden max-w-[11rem] bg-paper px-4 py-3 text-[0.95rem] leading-snug sm:block lg:-right-6"
          >
            <span className="block font-display text-[1.15rem] italic text-choco" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
              Sıcak servis,
            </span>
            uzayan peynir, bol Antep fıstığı.
          </a>
        </div>

        <div className="order-3 lg:hidden">
          <HeroBody />
        </div>
      </div>

      {/* Alt bilgi şeridi */}
      <div className="border-y border-line bg-paper">
        <dl className="shell grid grid-cols-3 divide-x divide-line">
          {[
            { k: "38", v: "yıllık ustalık" },
            { k: String(branches.length), v: "şube" },
            { k: String(cityCount), v: "şehir" },
          ].map((s) => (
            <div key={s.v} className="flex flex-col items-center justify-center gap-0.5 py-4 sm:flex-row sm:gap-3 sm:py-5">
              <dt className="sr-only">{s.v}</dt>
              <dd className="font-display text-[2rem] leading-none text-pistachio sm:text-[2.4rem]" style={{ fontVariationSettings: '"opsz" 144' }}>
                {s.k}
              </dd>
              <dd aria-hidden="true" className="text-[0.95rem] font-medium text-muted sm:text-[1.05rem]">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function HeroBody() {
  return (
    <>
      <p className="rise-in rise-in-2 mt-8 max-w-[31rem] text-[1.2rem] leading-relaxed text-muted lg:text-[1.28rem]">
        Gaziantep’in künefe, baklava ve katmer geleneğini gerçek Antep fıstığı ve ustalarımızın elinden, 38 yıldır aynı özenle sofranıza taşıyoruz.
      </p>
      <div className="rise-in rise-in-3 mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/#menumuz"
          className="group inline-flex h-14 items-center justify-between gap-8 rounded-[3px] bg-pistachio px-6 text-[1.08rem] font-bold text-paper transition-colors duration-200 hover:bg-pistachio-deep"
        >
          Lezzetleri Keşfet
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <Link
          href="/subeler/"
          className="inline-flex h-14 items-center justify-center rounded-[3px] border-[1.5px] border-choco px-6 text-[1.08rem] font-bold text-choco transition-colors duration-200 hover:bg-choco hover:text-paper"
        >
          Şubelerimizi Gör
        </Link>
      </div>
    </>
  );
}
