"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";

interface Member {
  name: string;
  role: string;
  initials: string;
  /**
   * Official headshot. Drop a licensed image at the given path and it renders
   * automatically. Leave undefined to show the monogram avatar.
   * e.g. photo: "/images/team/hazel-barton.jpg"
   */
  photo?: string;
}

const TEAM: Member[] = [
  { name: "Reilly Blackwell", role: "Founder & CEO", initials: "RB" },
  {
    name: "Dr. Hazel Barton",
    role: "CTO · Cave Microbiologist",
    initials: "HB",
    photo: "/images/team/hazel-barton.jpg",
  },
  { name: "Materials Science", role: "Sherwin-Williams alumni", initials: "MS" },
  { name: "Microbiology", role: "University of Alabama", initials: "MB" },
];

export function TeamSection() {
  return (
    <section id="about" className="bg-moss-green py-32 md:py-48">
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
              <p className="mt-8 max-w-xl text-lg font-normal leading-relaxed text-caco3-white/80">
                Experts in cave, microbiology, and materials sciences, drawn from
                the University of Alabama and Sherwin-Williams.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 100} scale>
              <div className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-caco3-white/10 bg-deep-green transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(min-width: 768px) 22vw, 50vw"
                      className="object-cover object-center transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-5xl font-light tracking-tight text-caco3-white/25">
                        {member.initials}
                      </span>
                    </div>
                  )}
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
    </section>
  );
}
