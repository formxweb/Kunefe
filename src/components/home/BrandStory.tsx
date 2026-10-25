"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { ArrowRight } from "../icons";
import { asset } from "@/lib/asset";
import { pillars } from "@/lib/data";

export function BrandStory() {
  return (
    <section id="hakkimizda" aria-labelledby="hakkimizda-baslik" className="scroll-mt-28 bg-choco py-20 text-cream md:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-ember-soft">Hakkımızda</p>
            <h2
              id="hakkimizda-baslik"
              className="mt-5 text-[clamp(3rem,8.4vw,7.25rem)] leading-[0.9] text-paper"
              style={{ fontVariationSettings: '"SOFT" 30, "opsz" 144' }}
            >
              Lezzetin
              <br />
              En Güzel <span className="display-italic text-pistachio-soft">Hâli.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5 lg:pb-3">
            <p className="text-[1.2rem] leading-relaxed text-cream/85">
              Türkiye’de 38 yıldan beri tatlı ve baklava sektörünün öncü lideri olmaktan gurur duyuyor, işimizi ilk günkü özen ve aşkla yerine getiriyoruz.
            </p>
            <p className="mt-4 text-[1.2rem] leading-relaxed text-cream/85">
              Güler yüzlü ekibimiz ve tecrübeli ustalarımızla misafirlerimizin mutluluğunu her zaman ilk sıraya koyuyoruz.
            </p>
          </Reveal>
        </div>

        <figure className="mt-14 md:mt-20">
          <motion.div
            data-reveal
            className="relative aspect-[4/3] overflow-hidden bg-[#6c5d51] sm:aspect-[16/8] lg:aspect-[1170/435]"
            initial={{ clipPath: "inset(10% 8% 10% 8%)" }}
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.14 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={asset("/images/branches/edirne.webp")}
                alt="Akşam saatlerinde Antephan Künefe Edirne şubesi: aydınlık kemerli giriş ve sırada bekleyen misafirler"
                fill
                sizes="(min-width: 1312px) 78rem, 100vw"
                className="object-cover object-[30%_50%]"
              />
            </motion.div>
          </motion.div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[0.98rem] text-cream/70">
            <span>Antephan Künefe Edirne şubesi, Abdi İpekçi Caddesi</span>
            <Link href="/subeler/edirne/" className="inline-flex items-center gap-2 font-bold text-cream hover:text-pistachio-soft">
              Şubeyi incele <ArrowRight size={16} />
            </Link>
          </figcaption>
        </figure>

        <ol className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.08} className="border-t border-cream/25 pt-5">
                <span className="font-display text-[0.95rem] font-semibold tracking-[0.2em] text-ember-soft">0{i + 1}</span>
                <h3 className="mt-3 text-[1.9rem] text-paper">{p.title}</h3>
                <p className="mt-3 text-[1.08rem] text-cream/75">{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
