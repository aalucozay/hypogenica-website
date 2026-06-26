"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { ArrowButton } from "@/components/ui/arrow-button";
import { useInView } from "@/hooks/useInView";

const PILLARS = [
  {
    index: "01",
    title: "Cave science",
    description:
      "Microbial ecosystems from Alabama's caves, directing biomineralization with precision.",
    image: "/images/cave-formations.jpg",
  },
  {
    index: "02",
    title: "Biomineralization",
    description:
      "A patented, bacteria-driven process that pulls pure CaCO3 from atmospheric CO2.",
    image: "/images/lab-flask.jpg",
  },
  {
    index: "03",
    title: "Carbon capture",
    description:
      "Every batch sequesters carbon, creating a carbon-negative supply of industrial calcite.",
    image: "/images/caco3-powder.jpg",
  },
];

function PillarCard({
  pillar,
  delay,
}: {
  pillar: (typeof PILLARS)[number];
  delay: number;
}) {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-lg transition-all duration-[900ms] ease-out-expo ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Photo — scales gently from slightly zoomed to rest as it reveals */}
      <Image
        src={pillar.image}
        alt={pillar.title}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className={`object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03] ${
          isInView ? "scale-100" : "scale-[1.06]"
        }`}
      />
      {/* Dark wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-deep-green/75 to-deep-green/25" />

      {/* Oversized index, uncovered left-to-right */}
      <span
        aria-hidden="true"
        style={{
          clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
          transition: "clip-path 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="pointer-events-none absolute -right-4 -top-10 select-none text-[11rem] font-bold leading-none tracking-tighter text-caco3-white/15"
      >
        {pillar.index}
      </span>

      <div className="relative z-10 p-8">
        <h3 className="text-2xl font-medium text-caco3-white md:text-3xl">
          {pillar.title}
        </h3>
        <p className="mt-4 text-base font-normal leading-relaxed text-caco3-white/80">
          {pillar.description}
        </p>
      </div>
    </article>
  );
}

export function ScienceSection() {
  return (
    <section className="relative bg-hypogenica-green py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          {/* Left rail eyebrow */}
          <div>
            <Reveal>
              <div className="md:sticky md:top-32">
                <Eyebrow>The platform</Eyebrow>
              </div>
            </Reveal>
          </div>

          {/* Heading + body */}
          <div>
            <Reveal>
              <Parallax>
                <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
                  <ScrollText text="Turning cave chemistry into an engine of carbon-negative materials." />
                </h2>
              </Parallax>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg font-normal leading-relaxed text-caco3-white/80">
                We combine microbiology, geology, and materials science to
                produce calcium carbonate the way nature does, at industrial
                scale.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <ArrowButton href="#about">Meet the team</ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="mt-24 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.index} pillar={pillar} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
