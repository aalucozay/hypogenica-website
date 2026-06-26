"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ScrollText } from "@/components/ui/scroll-text";

const TEAM = [
  { name: "Reilly Blackwell", role: "Founder & CEO" },
  { name: "Dr. Hazel Barton", role: "CTO · Cave Microbiologist" },
  { name: "Materials Science", role: "Sherwin-Williams alumni" },
  { name: "Microbiology", role: "University of Alabama" },
];

export function TeamSection() {
  return (
    <section id="about" className="bg-hypogenica-green py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <Reveal>
              <div className="text-future-teal md:sticky md:top-32">
                <Eyebrow>The Team</Eyebrow>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
                <ScrollText text="Experts in technical applications of cave and materials science." />
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-caco3-white/80">
                Experts in cave, microbiology, and materials sciences — drawn
                from the University of Alabama and Sherwin-Williams.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <div className="group">
                <div className="flex aspect-[4/5] w-full items-end overflow-hidden rounded-sm border border-cloud-gray/20 bg-cloud-gray p-5 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-hypogenica-green/40">
                    Team Member
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-caco3-white">
                  {member.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-future-teal">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
