"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";

const STATS = [
  { value: "Carbon negative", label: "Every gram sequesters CO2" },
  { value: "Millions saved", label: "Lower cost production at scale" },
  { value: "Pure CaCO3", label: "Industrial grade calcite" },
];

export function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="bg-caco3-white py-32 text-hypogenica-green md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <Reveal>
              <div className="md:sticky md:top-32">
                <Eyebrow>The value</Eyebrow>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_clamp(260px,28vw,380px)] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Parallax>
                  <h2
                    id="impact-heading"
                    className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.01em] text-hypogenica-green sm:text-5xl lg:text-6xl"
                  >
                  <ScrollText
                    text="Making a cleaner, cost effective calcium carbonate, for us all."
                    dim={0.18}
                  />
                </h2>
              </Parallax>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-hypogenica-green/80">
                It&apos;s not just millions of dollars saved. It&apos;s also
                preserving the future of our earth and its natural habitats. As
                scientists and cavers, we&apos;re invested in a world where
                industry and environment work together.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <Reveal key={stat.value} delay={i * 100}>
                  <div className="border-t border-hypogenica-green/15 pt-6">
                    <p className="text-2xl font-medium tracking-[-0.01em] md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-hypogenica-green/60">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            </div>

            <Reveal scale>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/cave-formations.jpg"
                  alt="A caver examining white mineral formations on a cave wall"
                  fill
                  sizes="(min-width: 1024px) 380px, 100vw"
                  quality={90}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
