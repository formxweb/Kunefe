import Image from "next/image";
import { asset } from "@/lib/asset";

type Props = { size?: "sm" | "md" | "lg"; tone?: "dark" | "light" };

const badgeSize = { sm: 40, md: 48, lg: 88 } as const;

export function Logo({ size = "md", tone = "dark" }: Props) {
  const px = badgeSize[size];
  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src={asset("/images/brand/logo-badge.webp")}
        alt=""
        width={px}
        height={px}
        className="shrink-0"
        style={{ width: px, height: px }}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-[0.06em] uppercase ${
            size === "lg" ? "text-[2rem]" : "text-[1.35rem]"
          } ${tone === "dark" ? "text-choco" : "text-paper"}`}
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 0, "opsz" 72' }}
        >
          Antephan
        </span>
        <span
          className={`mt-1 font-sans font-bold uppercase tracking-[0.42em] ${
            size === "lg" ? "text-[0.78rem]" : "text-[0.62rem]"
          } ${tone === "dark" ? "text-pistachio" : "text-pistachio-soft"}`}
        >
          Künefe
        </span>
      </span>
    </span>
  );
}
