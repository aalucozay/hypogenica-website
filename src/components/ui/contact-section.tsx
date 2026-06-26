"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ContactSection() {
  return (
    <section id="contact" className="bg-hypogenica-green py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          <div>
            <Reveal>
              <div className="md:sticky md:top-32">
                <Eyebrow>Contact</Eyebrow>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="text-4xl font-medium tracking-[-0.02em] text-caco3-white sm:text-6xl">
                Get in touch
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10 space-y-4">
                <a
                  href="mailto:info@hypogenica.com"
                  className="block text-2xl font-medium text-caco3-white transition-opacity duration-300 hover:opacity-60 sm:text-3xl"
                >
                  info@hypogenica.com
                </a>
                <p className="text-lg text-caco3-white/60">
                  Tuscaloosa, Alabama
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
