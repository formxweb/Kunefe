"use client";

import Link from "next/link";
import { useState } from "react";
import { PinIcon } from "../icons";

/** Harita yalnızca istenince yüklenir; Google’a istek gitmeden önce ziyaretçi onaylar. */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] w-full border-0 bg-cream-deep sm:aspect-[16/10] lg:aspect-[4/3]"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 border-[1.5px] border-dashed border-line bg-cream-deep px-6 text-center sm:aspect-[16/10] lg:aspect-[4/3]">
      <PinIcon size={32} className="text-pistachio" />
      <button
        type="button"
        onClick={() => setShow(true)}
        className="inline-flex h-12 items-center rounded-[3px] bg-choco px-5 font-bold text-paper transition-colors duration-200 hover:bg-choco-mid"
      >
        Haritayı göster
      </button>
      <p className="max-w-sm text-[0.95rem] text-muted">
        Harita Google tarafından sağlanır ve yalnızca bu butona bastığınızda yüklenir.{" "}
        <Link href="/gizlilik/" className="underline underline-offset-2">Gizlilik</Link>
      </p>
    </div>
  );
}
