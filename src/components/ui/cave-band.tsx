import Image from "next/image";
import { blurData } from "@/lib/blur-data";

/**
 * Full-bleed cave photograph used as a dramatic visual break between sections.
 * Soft top/bottom gradients blend it into the surrounding dark-green sections.
 */
export function CaveBand() {
  return (
    <section
      aria-hidden="true"
      className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-hypogenica-green"
    >
      <Image
        src="/images/cave-exploring.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={90}
        placeholder="blur"
        blurDataURL={blurData["/images/cave-exploring.jpg"]}
        className="object-cover"
      />
      {/* Blend edges into the adjacent dark sections */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-hypogenica-green to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hypogenica-green to-transparent" />
    </section>
  );
}
