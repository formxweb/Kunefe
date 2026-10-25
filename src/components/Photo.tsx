import Image from "next/image";
import { asset, meta } from "@/lib/asset";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  position?: string;
};

/**
 * Görseli, ortalama rengi zemin olan bir kapsayıcı içinde gösterir;
 * fotoğraf yüklenirken alan boş kalmaz. Kapsayıcının boyutu className ile verilir.
 */
export function Photo({ src, alt, sizes, className = "", imgClassName = "", priority, position }: Props) {
  const m = meta(src);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: m.color }}>
      <Image
        src={asset(src)}
        alt={alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className={`object-cover ${imgClassName}`}
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
