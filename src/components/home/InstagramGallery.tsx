import { Photo } from "../Photo";
import { Reveal } from "../Reveal";
import { ArrowUpRight, InstagramIcon } from "../icons";
import { instagramPosts, site } from "@/lib/data";

// Masaüstünde farklı genişlik, oran ve yükseklikte, dengeli bir dizilim
const layout = [
  { span: "lg:col-span-3", aspect: "aspect-[4/5]", offset: "lg:mt-0", mobile: "w-[72vw]" },
  { span: "lg:col-span-2", aspect: "aspect-[3/4]", offset: "lg:mt-28", mobile: "w-[56vw]" },
  { span: "lg:col-span-3", aspect: "aspect-square", offset: "lg:mt-12", mobile: "w-[66vw]" },
  { span: "lg:col-span-2", aspect: "aspect-[4/5]", offset: "lg:mt-36", mobile: "w-[56vw]" },
  { span: "lg:col-span-2", aspect: "aspect-[3/5]", offset: "lg:mt-4", mobile: "w-[50vw]" },
];

export function InstagramGallery() {
  return (
    <section aria-labelledby="instagram-baslik" className="overflow-hidden bg-cream-deep py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-ember">Instagram</p>
            <h2 id="instagram-baslik" className="mt-4 text-[clamp(2.3rem,6vw,4.75rem)]">
              <span className="display-italic">{site.instagramHandle}</span>
            </h2>
            <p className="mt-4 max-w-md text-[1.15rem] text-muted">
              Ocak başından, yeni şubelerden ve tepsiden yeni çıkan lezzetlerden kareler.
            </p>
          </Reveal>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 shrink-0 items-center gap-3 self-start border-[1.5px] border-choco px-6 text-[1.05rem] font-bold transition-colors duration-200 hover:bg-choco hover:text-paper md:self-auto"
          >
            <InstagramIcon size={20} />
            Instagram’da takip et
          </a>
        </div>
      </div>

      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory scroll-px-5 items-start gap-4 overflow-x-auto px-5 pb-2 md:scroll-px-8 md:px-8 lg:mx-auto lg:grid lg:max-w-[82rem] lg:grid-cols-12 lg:gap-6 lg:overflow-visible lg:px-8">
        {instagramPosts.map((post, i) => {
          const l = layout[i];
          return (
            <li key={post.url} className={`shrink-0 snap-start ${l.mobile} ${l.span} ${l.offset} lg:w-auto`}>
              <Reveal delay={i * 0.07}>
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="overflow-hidden">
                    <Photo
                      src={post.image}
                      alt={post.caption}
                      sizes="(min-width: 1024px) 20rem, 70vw"
                      className={l.aspect}
                      imgClassName="transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-3 flex items-start justify-between gap-2 text-[0.98rem] leading-snug text-muted">
                    <span>{post.caption}</span>
                    <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-choco" />
                  </p>
                  <span className="sr-only">Instagram gönderisini yeni sekmede aç</span>
                </a>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
