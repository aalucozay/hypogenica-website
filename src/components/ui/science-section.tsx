"use client";

import Image from "next/image";
import { blurData } from "@/lib/blur-data";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { ArrowButton } from "@/components/ui/arrow-button";

const PILLARS = [
  {
    index: "01",
    label: "Microbiology",
    title: "Cave science",
    description:
      "Microbial ecosystems from Alabama's caves, directing biomineralization with precision.",
    image: "/images/cave-pool-research.jpg",
    alt: "A researcher sampling at a still cave pool among stalactites",
  },
  {
    index: "02",
    label: "Bioprocess",
    title: "Biomineralization",
    description:
      "A patented, bacteria driven process that pulls pure CaCO3 from atmospheric CO2.",
    image: "/images/lab-bioreactor.jpg",
    alt: "An amber bacterial culture in a laboratory bioreactor",
  },
  {
    index: "03",
    label: "Sequestration",
    title: "Carbon capture",
    description:
      "Every batch sequesters carbon, creating a carbon negative supply of industrial calcite.",
    image: "/images/caco3-microscopy.jpg",
    alt: "Microscopy of precipitated calcium carbonate crystals",
  },
];

export function ScienceSection() {
  return (
    <section
      aria-labelledby="science-heading"
      className="relative bg-hypogenica-green py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Centered section header */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Parallax>
              <h2
                id="science-heading"
                className="text-balance text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl"
              >
                <ScrollText text="Turning cave chemistry into an engine of carbon negative materials." />
              </h2>
            </Parallax>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-caco3-white/60">
              We combine microbiology, geology, and materials science to produce
              calcium carbonate the way nature does, at industrial scale.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <ArrowButton href="#about">Meet the team</ArrowButton>
            </div>
          </Reveal>
        </div>

        {/* Editorial list — large faint numbers, dividing lines between items */}
        <div className="mt-24 border-t border-caco3-white/10">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 100}>
              <div className="group grid items-center gap-6 border-b border-caco3-white/10 py-10 transition-colors duration-500 ease-out-expo hover:border-future-teal/30 md:grid-cols-[auto_1fr_clamp(180px,24vw,320px)] md:gap-12 md:py-12">
                <span
                  aria-hidden="true"
                  className="select-none font-mono text-6xl font-light tabular-nums leading-none tracking-tight text-caco3-white/20 transition-colors duration-500 ease-out-expo group-hover:text-future-teal/70 md:text-8xl"
                >
                  {pillar.index}
                </span>
                <div className="max-w-2xl">
                  <span className="block font-mono text-xs uppercase tracking-[0.2em] text-future-teal/80">
                    {pillar.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-medium text-caco3-white md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-caco3-white/60 md:text-lg">
                    {pillar.description}
                  </p>
                </div>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(min-width: 768px) 320px, 100vw"
                    quality={90}
                    placeholder="blur"
                    blurDataURL={blurData[pillar.image]}
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
