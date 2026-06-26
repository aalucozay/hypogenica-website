"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollText } from "@/components/ui/scroll-text";
import { ArrowButton } from "@/components/ui/arrow-button";

const PILLARS = [
  {
    index: "01",
    title: "Cave Science",
    description:
      "Microbial ecosystems from Alabama's caves, directing biomineralization with precision.",
    theme: "bg-future-teal text-hypogenica-green",
    sub: "text-hypogenica-green/70",
  },
  {
    index: "02",
    title: "Biomineralization",
    description:
      "A patented, bacteria-driven process that pulls pure CaCO3 from atmospheric CO2.",
    theme: "bg-deep-green text-caco3-white border border-cloud-gray/10",
    sub: "text-caco3-white/70",
  },
  {
    index: "03",
    title: "Carbon Capture",
    description:
      "Every batch sequesters carbon — a carbon-negative supply of industrial calcite.",
    theme: "bg-cloud-gray text-hypogenica-green",
    sub: "text-hypogenica-green/70",
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
              <div className="text-future-teal md:sticky md:top-32">
                <Eyebrow>The Platform</Eyebrow>
              </div>
            </Reveal>
          </div>

          {/* Heading + body */}
          <div>
            <Reveal>
              <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
                <ScrollText text="Turning cave chemistry into an engine of carbon-negative materials." />
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-caco3-white/80">
                Microbiology, geology, and materials science — producing calcium
                carbonate the way nature does, at industrial scale.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <ArrowButton href="#about">Meet the Team</ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pillar cards — oversized index numbers bleed into each panel */}
        <div className="mt-24 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.index} delay={i * 120}>
              <article
                className={`group relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-lg p-8 transition-transform duration-500 ease-out-expo hover:-translate-y-1.5 ${pillar.theme}`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 -top-12 select-none text-[11rem] font-bold leading-none tracking-tighter opacity-[0.07]"
                >
                  {pillar.index}
                </span>
                <div className="relative">
                  <h3 className="text-2xl font-medium md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className={`mt-4 text-base font-light leading-relaxed ${pillar.sub}`}>
                    {pillar.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
