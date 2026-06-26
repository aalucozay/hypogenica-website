"use client";

import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-hypogenica-green py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Info */}
          <div>
            <Reveal>
              <h2 className="text-4xl font-bold text-ralf-yellow md:text-5xl">
                Get In Touch
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 space-y-2">
                <a
                  href="mailto:info@hypogenica.com"
                  className="block text-xl font-medium text-caco3-white transition-opacity duration-300 hover:opacity-80"
                >
                  info@hypogenica.com
                </a>
                <p className="text-base font-light text-cloud-gray">
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
                  className="mb-2 block text-sm font-medium text-cloud-gray"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-cloud-gray/15 bg-caco3-white/5 px-4 py-3 text-caco3-white placeholder-cloud-gray/40 outline-none transition-colors duration-300 focus:border-future-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-cloud-gray"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-cloud-gray/15 bg-caco3-white/5 px-4 py-3 text-caco3-white placeholder-cloud-gray/40 outline-none transition-colors duration-300 focus:border-future-teal"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-cloud-gray"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-cloud-gray/15 bg-caco3-white/5 px-4 py-3 text-caco3-white placeholder-cloud-gray/40 outline-none transition-colors duration-300 focus:border-future-teal"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-future-teal px-8 py-3.5 text-base font-bold text-hypogenica-green transition-all duration-300 ease-out-expo hover:brightness-110"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
