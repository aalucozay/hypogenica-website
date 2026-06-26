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
              <div className="text-future-teal md:sticky md:top-32">
                <Eyebrow>Contact</Eyebrow>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Info */}
            <div>
              <Reveal>
                <h2 className="text-4xl font-medium tracking-[-0.02em] text-caco3-white sm:text-6xl">
                  Get In Touch
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:info@hypogenica.com"
                    className="block text-xl font-medium text-caco3-white transition-opacity duration-300 hover:opacity-70"
                  >
                    info@hypogenica.com
                  </a>
                  <p className="font-mono text-sm uppercase tracking-[0.14em] text-cloud-gray">
                    Tuscaloosa, Alabama
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={160}>
              <form
                onSubmit={(event) => event.preventDefault()}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.12em] text-cloud-gray"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-xl border border-cloud-gray/15 bg-caco3-white/5 px-4 py-3.5 text-caco3-white placeholder-cloud-gray/40 outline-none transition-colors duration-300 focus:border-future-teal"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.12em] text-cloud-gray"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-xl border border-cloud-gray/15 bg-caco3-white/5 px-4 py-3.5 text-caco3-white placeholder-cloud-gray/40 outline-none transition-colors duration-300 focus:border-future-teal"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-xs uppercase tracking-[0.12em] text-cloud-gray"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-cloud-gray/15 bg-caco3-white/5 px-4 py-3.5 text-caco3-white placeholder-cloud-gray/40 outline-none transition-colors duration-300 focus:border-future-teal"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center rounded-xl bg-future-teal px-8 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-hypogenica-green transition-all duration-300 ease-out-expo hover:brightness-110"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
