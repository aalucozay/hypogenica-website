"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";

interface Member {
  name: string;
  role: string;
  /** Drop a portrait at this path to replace the placeholder. */
  image?: string;
}

const TEAM: Member[] = [
  {
    name: "Reilly Blackwell",
    role: "Founder & CEO",
    image: "/images/reilly-blackwell.png",
  },
  {
    name: "Dr. Hazel Barton",
    role: "CTO · Cave Microbiologist",
    image: "/images/hazel-barton.png",
  },
];

export function TeamSection() {
  return (
    <section id="about" className="bg-hypogenica-green py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <Reveal>
              <div className="md:sticky md:top-32">
                <Eyebrow>The team</Eyebrow>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <Parallax>
                <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl">
                  <ScrollText text="Experts in technical applications of cave and materials science." />
                </h2>
              </Parallax>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-caco3-white/60">
                Led by experts in cave microbiology and materials science, with
                research roots at the University of Alabama and Sherwin-Williams.
              </p>
            </Reveal>

            <div className="mt-16 grid max-w-xl grid-cols-2 gap-6">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} delay={i * 100} scale>
                  <div className="group">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[radial-gradient(120%_85%_at_50%_12%,#ffffff,#dae6e5_78%)] shadow-[0_0_0_rgba(11,221,153,0)] transition-all duration-500 ease-out-expo group-hover:-translate-y-3 group-hover:shadow-[0_28px_60px_-12px_rgba(11,221,153,0.55)]">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 768px) 280px, 45vw"
                          quality={90}
                          className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.05]"
                        />
                      ) : null}
                      {/* subtle pulsing accent ring on hover */}
                      <span className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-future-teal/0 transition-colors duration-500 group-hover:ring-future-teal/50 group-hover:animate-pulse" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-caco3-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-caco3-white/55">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
