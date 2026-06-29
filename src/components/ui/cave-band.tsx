import Image from "next/image";

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
        alt="A caver seated in a chamber lined with stalactites and flowstone"
        fill
        sizes="100vw"
        quality={90}
        className="object-cover"
      />
      {/* Blend edges into the adjacent dark sections */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-hypogenica-green to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-hypogenica-green to-transparent" />
    </section>
  );
}
