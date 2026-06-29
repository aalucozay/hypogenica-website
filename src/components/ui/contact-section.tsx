"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:info@hypogenica.com?subject=${encodeURIComponent(
      `Website inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "w-full rounded-md border border-caco3-white/15 bg-caco3-white/5 px-4 py-3 text-caco3-white placeholder-caco3-white/35 outline-none transition-colors duration-300 focus:border-future-teal";

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

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Info */}
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

            {/* Form */}
            <Reveal delay={160}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-caco3-white/60"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-caco3-white/60"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-caco3-white/60"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-caco3-white px-7 py-3 text-base font-medium text-hypogenica-green transition-opacity duration-300 hover:opacity-80"
                >
                  Send message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
