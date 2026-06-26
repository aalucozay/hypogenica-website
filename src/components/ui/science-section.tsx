"use client";

import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    number: "01.",
    title: "Cave Science",
    description:
      "We explore microbial ecosystems deep within Alabama's 9,000+ caves to understand how bacteria naturally precipitate minerals in extreme environments.",
  },
  {
    number: "02.",
    title: "Biomineralization",
    description:
      "Our patented bacteria-driven process produces high-purity calcium carbonate from atmospheric CO2, replicating millions of years of cave chemistry in days.",
  },
  {
    number: "03.",
    title: "Carbon Capture",
    description:
      "Every gram of CaCO3 we produce sequesters carbon. Our process is carbon-negative, turning greenhouse gas into industrial-grade material.",
  },
];

function ImagePlaceholder() {
  return (
    <div className="flex aspect-[10/7] w-full items-center justify-center rounded-2xl border border-cloud-gray/20 bg-cloud-gray">
      <span className="text-sm font-medium tracking-wide text-hypogenica-green/40">
        Image Placeholder
      </span>
    </div>
  );
}

export function ScienceSection() {
  return (
    <section id="science" className="bg-hypogenica-green py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-future-teal">
            What We Do
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {FEATURES.map((feature, index) => {
            const imageRight = index % 2 === 0;
            return (
              <Reveal key={feature.number} delay={index * 120}>
                <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  {/* Text */}
                  <div className={imageRight ? "md:order-1" : "md:order-2"}>
                    <span className="block text-6xl font-bold text-future-teal/20 md:text-7xl">
                      {feature.number}
                    </span>
                    <h3 className="mt-4 text-3xl font-bold text-caco3-white md:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="mt-5 max-w-md text-lg font-light leading-relaxed text-cloud-gray">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className={imageRight ? "md:order-2" : "md:order-1"}>
                    <ImagePlaceholder />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
