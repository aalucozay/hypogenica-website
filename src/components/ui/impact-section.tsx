"use client";

import Image from "next/image";
import { blurData } from "@/lib/blur-data";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { chem } from "@/lib/chem";

// Minimal line-art icons (inherit currentColor). One per stat: a leaf for
// carbon-negative, a coin for cost saved, a hexagon (the CaCO3 crystal, echoing
// the logo) for purity.
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const LeafIcon = () => (
  <svg {...iconProps} className="size-7">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>
);

const CoinIcon = () => (
  <svg {...iconProps} className="size-7">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M15.5 8.5h-4.75a2 2 0 0 0 0 4h2.5a2 2 0 0 1 0 4H8.5" />
    <path d="M12 17.5V6.5" />
  </svg>
);

const HexIcon = () => (
  <svg {...iconProps} className="size-7">
    <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
  </svg>
);

const STATS = [
  { value: "Carbon negative", label: "Every gram sequesters CO2", Icon: LeafIcon },
  { value: "Millions saved", label: "Lower cost production at scale", Icon: CoinIcon },
  { value: "Pure CaCO3", label: "Industrial grade calcite", Icon: HexIcon },
];

export function ImpactSection() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="bg-caco3-white py-32 text-hypogenica-green md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_clamp(260px,28vw,380px)] lg:items-start lg:gap-16">
            <div>
              <Reveal>
                <Parallax>
                  <h2
                    id="impact-heading"
                    className="max-w-4xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.01em] text-hypogenica-green sm:text-5xl lg:text-6xl"
                  >
                  <ScrollText
                    text="Making a cleaner, cost effective calcium carbonate, for us all."
                    dim={0.18}
                  />
                </h2>
              </Parallax>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-pretty text-lg font-normal leading-relaxed text-hypogenica-green/80">
                It&apos;s not just millions of dollars saved. It&apos;s also
                preserving the future of our planet and its critical
                ecosystems. As scientists and cavers, we&apos;re invested in a
                world where industry and environment work together.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-3">
              {STATS.map((stat, i) => (
                <Reveal key={stat.value} delay={i * 100}>
                  <div className="border-t border-hypogenica-green/15 pt-6">
                    <span className="inline-flex size-12 items-center justify-center rounded-lg bg-hypogenica-green text-future-teal">
                      <stat.Icon />
                    </span>
                    <p className="mt-5 text-2xl font-medium tracking-[-0.01em] md:text-3xl">
                      {chem(stat.value)}
                    </p>
                    <p className="mt-2 text-pretty text-sm text-hypogenica-green/60">
                      {chem(stat.label)}
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
                  placeholder="blur"
                  blurDataURL={blurData["/images/cave-formations.jpg"]}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
      </div>
    </section>
  );
}
