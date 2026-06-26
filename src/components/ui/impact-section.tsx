"use client";

import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { value: "Carbon Negative", label: "Every gram sequesters CO2" },
  { value: "$Ms Saved", label: "Lower-cost production at scale" },
  { value: "Pure CaCO3", label: "Industrial-grade calcite" },
];

export function ImpactSection() {
  return (
    <section id="impact" className="bg-caco3-white py-24 text-hypogenica-green md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-future-teal">
            The Value
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-tight text-hypogenica-green md:text-5xl">
            Making a cleaner, cost-effective calcium carbonate, for us all.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-hypogenica-green">
            It&apos;s not just millions of dollars saved — it&apos;s also
            preserving the future of our earth and its natural habitats. As
            scientists and cavers, we&apos;re invested in a world where industry
            and environment synergize.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {STATS.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 100}>
              <div className="border-t border-hypogenica-green/15 pt-6">
                <p className="text-2xl font-bold text-future-teal md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-base font-light text-hypogenica-green/80">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
