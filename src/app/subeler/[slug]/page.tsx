import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { BranchPlaceholder } from "@/components/branches/BranchPlaceholder";
import { MapEmbed } from "@/components/branches/MapEmbed";
import { ArrowRight, PhoneIcon, PinIcon } from "@/components/icons";
import {
  branches,
  directionsUrl,
  fullAddress,
  getBranch,
  getProduct,
  getRegion,
  mapEmbedUrl,
  mapsSearchUrl,
  signatureSlugs,
  site,
  telHref,
} from "@/lib/data";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const b = getBranch(slug);
  if (!b) return {};
  return {
    title: `${b.name} Şubesi`,
    description: `Antephan Künefe ${b.name} şubesi: ${fullAddress(b)}. Telefon: ${b.phone}. Yol tarifi ve harita.`,
    alternates: { canonical: `/subeler/${b.slug}/` },
  };
}

export default async function BranchPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const b = getBranch(slug);
  if (!b) notFound();

  const region = getRegion(b.region);
  const nearby = branches
    .filter((x) => x.region === b.region && x.slug !== b.slug)
    .sort((x, y) => x.name.localeCompare(y.name, "tr"));
  const others = nearby.length > 0 ? nearby : branches.filter((x) => x.slug !== b.slug && x.city !== b.city).slice(0, 6);
  const picks = signatureSlugs.map((s) => getProduct(s)!);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: `Antephan Künefe ${b.name}`,
          url: `${site.url}/subeler/${b.slug}/`,
          telephone: telHref(b.phone).replace("tel:", ""),
          servesCuisine: ["Künefe", "Baklava", "Katmer"],
          image: b.photo ? `${site.url}/images/branches/${b.slug}.webp` : `${site.url}/images/brand/logo-badge.webp`,
          address: {
            "@type": "PostalAddress",
            streetAddress: b.address,
            addressLocality: b.district,
            addressRegion: b.city,
            addressCountry: "TR",
          },
          hasMap: mapsSearchUrl(b),
          brand: { "@type": "Brand", name: site.name },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${site.url}/` },
            { "@type": "ListItem", position: 2, name: "Şubelerimiz", item: `${site.url}/subeler/` },
            { "@type": "ListItem", position: 3, name: b.name, item: `${site.url}/subeler/${b.slug}/` },
          ],
        }}
      />

      <section aria-labelledby="sube-baslik">
        <div className="shell pb-10 pt-8 lg:pt-12">
          <nav aria-label="Sayfa konumu" className="text-[0.95rem] text-muted">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-choco">Ana Sayfa</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/subeler/" className="hover:text-choco">Şubelerimiz</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-bold text-choco">{b.name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-ember">{region.label}</p>
              <h1 id="sube-baslik" className="mt-4 leading-[0.9]">
                <span className="block font-sans text-[1.15rem] font-bold uppercase tracking-[0.2em] text-pistachio">Antephan Künefe</span>
                <span className="mt-2 block text-[clamp(3.2rem,10vw,7rem)]">{b.name}</span>
              </h1>
            </div>

            <div className="grid gap-6 border-t-2 border-choco pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <p className="eyebrow text-muted">Adres</p>
                <address className="mt-2 text-[1.15rem] not-italic leading-snug">
                  {b.address}
                  <br />
                  {b.district} / {b.city}
                </address>
              </div>
              <div>
                <p className="eyebrow text-muted">Telefon</p>
                <a href={telHref(b.phone)} className="mt-2 inline-block font-display text-[2rem] leading-none tabular-nums hover:text-pistachio">
                  {b.phone}
                </a>
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row lg:col-span-1 xl:col-span-2">
                <a
                  href={directionsUrl(b)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-[3px] bg-pistachio sm:flex-1 px-6 text-[1.08rem] font-bold text-paper transition-colors duration-200 hover:bg-pistachio-deep"
                >
                  <PinIcon /> Yol tarifi al
                </a>
                <a
                  href={telHref(b.phone)}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-[3px] border-[1.5px] border-choco sm:flex-1 px-6 text-[1.08rem] font-bold transition-colors duration-200 hover:bg-choco hover:text-paper"
                >
                  <PhoneIcon /> Şubeyi ara
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="shell">
          {b.photo ? (
            <Photo
              src={`/images/branches/${b.slug}.webp`}
              alt={`Antephan Künefe ${b.name} şubesinin dış cephesi`}
              sizes="(min-width: 1312px) 78rem, 100vw"
              className="aspect-[16/9] sm:aspect-[1170/435]"
              priority
            />
          ) : (
            <BranchPlaceholder name={`Antephan Künefe ${b.name}`} className="aspect-[16/9] sm:aspect-[1170/435]" />
          )}
        </div>
      </section>

      <section aria-label="Konum ve ziyaret bilgisi" className="py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Konum</h2>
            <div className="mt-6">
              <MapEmbed src={mapEmbedUrl(b)} title={`Antephan Künefe ${b.name} haritası`} />
            </div>
          </div>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">Ziyaret</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line text-[1.08rem]">
              <div className="grid gap-1 py-4">
                <dt className="font-bold">Çalışma saatleri</dt>
                <dd className="text-muted">
                  Şubelerimizin saatleri bölgeye göre değişir. Güncel saatler için şubeyi arayabilir ya da{" "}
                  <a href={mapsSearchUrl(b)} target="_blank" rel="noopener noreferrer" className="font-bold text-choco underline underline-offset-2">
                    Google Haritalar kaydına
                  </a>{" "}
                  bakabilirsiniz.
                </dd>
              </div>
              <div className="grid gap-1 py-4">
                <dt className="font-bold">Rezervasyon</dt>
                <dd className="text-muted">Bazı şubelerimiz rezervasyon kabul eder; yoğun günlerde önceden aramanızı öneririz.</dd>
              </div>
              <div className="grid gap-1 py-4">
                <dt className="font-bold">Paket servis ve online sipariş</dt>
                <dd className="text-muted">Belirli bölgelerde paket servis vardır; anlaşmalı yemek platformlarından da sipariş verebilirsiniz.</dd>
              </div>
            </dl>

            <h2 className="mt-12 text-[1.6rem]">{nearby.length > 0 ? `${region.short} bölgesindeki diğer şubeler` : "Diğer şehirlerdeki şubeler"}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {others.map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/subeler/${x.slug}/`}
                    className="inline-flex h-10 items-center rounded-full border-[1.5px] border-line bg-paper px-4 font-bold transition-colors duration-200 hover:border-choco"
                  >
                    {x.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="lezzetler-baslik" className="bg-pistachio-mist py-16 md:py-24">
        <div className="shell grid gap-x-8 gap-y-10 md:grid-cols-12">
          <Reveal className="md:col-span-5 md:row-span-2">
            <Link href={`/menu/${picks[0].slug}/`} className="group block">
              <div className="overflow-hidden">
                <Photo
                  src={picks[0].image}
                  alt=""
                  sizes="(min-width: 768px) 38vw, 92vw"
                  className="aspect-[4/5]"
                  imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-4 flex items-center justify-between font-display text-[1.8rem]">
                {picks[0].name}
                <ArrowRight size={18} className="text-ember transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </Link>
          </Reveal>

          <div className="md:col-span-7 md:pt-4">
            <p className="eyebrow text-ember">Menüden</p>
            <h2 id="lezzetler-baslik" className="mt-4 text-[clamp(2.2rem,5vw,3.75rem)]">
              Antephan’ın <span className="display-italic text-pistachio">imza tabakları.</span>
            </h2>
            <p className="mt-4 max-w-md text-[1.1rem] text-muted">
              Bol Antep fıstıklı künefelerimiz. Ürün çeşitleri şubeye göre farklılık gösterebilir; sormak için şubeyi arayabilirsiniz.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-5 self-end md:col-span-7 md:gap-8">
            {picks.slice(1).map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={0.08 * (i + 1)}>
                  <Link href={`/menu/${p.slug}/`} className="group block">
                    <div className="overflow-hidden">
                      <Photo
                        src={p.image}
                        alt=""
                        sizes="(min-width: 768px) 26vw, 45vw"
                        className="aspect-square"
                        imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-3 flex items-center justify-between gap-2 font-display text-[1.35rem] leading-tight sm:text-[1.6rem]">
                      {p.name}
                      <ArrowRight size={18} className="shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-1" />
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
