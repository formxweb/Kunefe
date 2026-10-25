import Link from "next/link";
import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { branches, cityCount, regions } from "@/lib/data";

const featured = [
  { slug: "umraniye", label: "Ümraniye, Alemdağ Caddesi" },
  { slug: "cevizli", label: "Cevizli, Maltepe" },
];

export function BranchesTeaser() {
  return (
    <section aria-labelledby="subeler-baslik" className="overflow-hidden bg-paper py-20 md:py-28">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-x-14">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-ember">Şubelerimiz</p>
            <h2 id="subeler-baslik" className="mt-4 text-[clamp(2.5rem,5.4vw,4.4rem)]">
              {cityCount} şehirde{" "}
              <span className="display-italic text-pistachio">{branches.length} şube.</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.15rem] text-muted">
              Türkiye’nin dört bir yanında aynı lezzet, aynı kalite. Şehrinizi seçin, size en yakın Antephan’ı bulun.
            </p>
          </Reveal>

          <ul className="mt-10 border-t border-line">
            {regions.map((r, i) => {
              const count = branches.filter((b) => b.region === r.id).length;
              return (
                <li key={r.id}>
                  <Reveal delay={i * 0.04} y={14}>
                    <Link
                      href={`/subeler/?bolge=${r.id}`}
                      className="group flex items-center gap-4 border-b border-line py-4 transition-colors duration-200 hover:text-pistachio"
                    >
                      <span className="font-display text-[1.32rem] leading-none xs:text-[1.5rem] sm:text-[1.8rem]">{r.label}</span>
                      <span aria-hidden="true" className="h-px flex-1 bg-line" />
                      <span className="w-8 text-right font-bold tabular-nums text-muted">{count}</span>
                      <span className="sr-only">şube</span>
                      <ArrowRight size={18} className="text-ember transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Link
            href="/subeler/"
            className="group mt-10 inline-flex h-14 items-center gap-8 rounded-[3px] bg-choco px-6 text-[1.08rem] font-bold text-paper transition-colors duration-200 hover:bg-choco-mid"
          >
            Tüm şubeleri gör
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="relative grid gap-6 lg:col-span-6 lg:pt-20">
          {featured.map((f, i) => (
            <Reveal key={f.slug} delay={0.1 + i * 0.12} className={i === 1 ? "lg:mr-20" : "lg:ml-16"}>
              <Link href={`/subeler/${f.slug}/`} className="group block">
                <div className="overflow-hidden">
                  <Photo
                    src={`/images/branches/${f.slug}.webp`}
                    alt={`Antephan Künefe ${f.label} şubesinin dış cephesi`}
                    sizes="(min-width: 1024px) 36rem, 92vw"
                    className={i === 0 ? "aspect-[16/9]" : "aspect-[1170/435]"}
                    imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-3 flex items-center justify-between text-[1rem] text-muted">
                  <span>{f.label}</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-choco">
                    Şube sayfası <ArrowRight size={15} />
                  </span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
