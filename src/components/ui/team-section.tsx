"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { LinkedInIcon } from "@/components/ui/linkedin-icon";

interface Member {
  name: string;
  role: string;
  /** Drop a portrait at this path to replace the placeholder. */
  image?: string;
  linkedin?: string;
}

const TEAM: Member[] = [
  {
    name: "Reilly Blackwell",
    role: "Founder & CEO",
    image: "/images/reilly-blackwell.png",
    linkedin: "https://www.linkedin.com/in/reillyblackwell/",
  },
  {
    name: "Dr. Hazel Barton",
    role: "CTO · Cave Microbiologist",
    image: "/images/hazel-barton.png",
    linkedin: "https://www.linkedin.com/in/hazel-barton-4124148/",
  },
  {
    name: "George Breley",
    role: "Co-Founder",
    image: "/images/george-breley.png",
    linkedin: "https://www.linkedin.com/in/george-breley-a1b715210/",
  },
];

export function TeamSection() {
  return (
    <section
      id="about"
      aria-labelledby="team-heading"
      className="bg-hypogenica-green py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Centered section header */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Parallax>
              <h2
                id="team-heading"
                className="text-balance text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl"
              >
                <ScrollText text="Experts in technical applications of cave and materials science." />
              </h2>
            </Parallax>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-caco3-white/60">
              Led by experts in cave microbiology and materials science, with
              research roots at the University of Alabama.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12">
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
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-medium text-caco3-white">
                          {member.name}
                        </h3>
                        <p className="text-pretty text-sm text-caco3-white/55">
                          {member.role}
                        </p>
                      </div>
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
                          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-caco3-white/20 text-caco3-white/70 transition-colors duration-300 hover:border-future-teal hover:bg-future-teal/10 hover:text-future-teal"
                        >
                          <LinkedInIcon className="size-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
