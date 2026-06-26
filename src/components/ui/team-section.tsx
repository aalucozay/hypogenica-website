"use client";

import { Reveal } from "@/components/ui/reveal";

const TEAM = ["Team Member", "Team Member", "Team Member", "Team Member"];

export function TeamSection() {
  return (
    <section id="about" className="bg-hypogenica-green py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-future-teal">
            The Team
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 max-w-3xl text-3xl font-medium leading-tight text-caco3-white md:text-5xl">
            Experts in technical applications of cave and materials science.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-cloud-gray">
            Our team is made up of experts in cave, microbiology, and materials
            sciences from renowned institutions across the country, including the
            University of Alabama and Sherwin-Williams.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TEAM.map((member, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border border-cloud-gray/20 bg-cloud-gray">
                <span className="text-sm font-medium tracking-wide text-hypogenica-green/40">
                  {member}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
