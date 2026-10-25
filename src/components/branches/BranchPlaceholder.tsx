import Image from "next/image";
import { asset } from "@/lib/asset";

/**
 * Fotoğrafı olmayan şubeler için: şube vitrinlerindeki sekiz köşeli
 * yıldız kafesinden esinlenen desen ve marka rozeti.
 */
export function BranchPlaceholder({ name, className = "", compact = false }: { name: string; className?: string; compact?: boolean }) {
  const id = `star-${name.replace(/\W/g, "")}`;
  return (
    <div className={`relative overflow-hidden bg-choco ${className}`}>
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-cream/10">
        <defs>
          <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M28 6l6.4 15.6L50 28l-15.6 6.4L28 50l-6.4-15.6L6 28l15.6-6.4Z M28 13.5l4.5 10 10 4.5-10 4.5-4.5 10-4.5-10-10-4.5 10-4.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path d="M0 0 6 6M56 0l-6 6M0 56l6-6M56 56l-6-6" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
        <Image
          src={asset("/images/brand/logo-badge.webp")}
          alt=""
          width={compact ? 64 : 72}
          height={compact ? 64 : 72}
          className={compact ? "h-14 w-14 sm:h-16 sm:w-16" : "h-[4.5rem] w-[4.5rem]"}
        />
        {!compact && <span className="font-display text-[1.4rem] text-cream/90">{name}</span>}
      </div>
    </div>
  );
}
