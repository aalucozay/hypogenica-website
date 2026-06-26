"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { ArrowButton } from "@/components/ui/arrow-button";

const PILLARS = [
  {
    index: "01",
    title: "Cave science",
    description:
      "Microbial ecosystems from Alabama's caves, directing biomineralization with precision.",
  },
  {
    index: "02",
    title: "Biomineralization",
    description:
      "A patented, bacteria-driven process that pulls pure CaCO3 from atmospheric CO2.",
  },
  {
    index: "03",
    title: "Carbon capture",
    description:
      "Every batch sequesters carbon, creating a carbon-negative supply of industrial calcite.",
  },
];

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
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-caco3-white/60">
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

        {/* Editorial list — large faint numbers, dividing lines between items */}
        <div className="mt-24 border-t border-caco3-white/10">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 100}>
              <div className="grid items-start gap-4 border-b border-caco3-white/10 py-10 md:grid-cols-[auto_1fr] md:gap-16 md:py-12">
                <span
                  aria-hidden="true"
                  className="select-none text-7xl font-bold leading-none tracking-tighter text-caco3-white/15 md:text-[6.5rem]"
                >
                  {pillar.index}
                </span>
                <div className="max-w-2xl md:pt-2">
                  <h3 className="text-2xl font-medium text-caco3-white md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-caco3-white/60 md:text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
