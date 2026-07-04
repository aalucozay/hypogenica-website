"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

type Status = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  // Open the visitor's mail client as a zero-backend fallback.
  const openMailto = (name: string, email: string, message: string) => {
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:info@hypogenica.com?subject=${encodeURIComponent(
      `Website inquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      // Backend not configured (503) — fall back to the mail client.
      if (res.status === 503) {
        openMailto(name, email, message);
        setStatus("idle");
        return;
      }

      setStatus("error");
    } catch {
      // Network failure — still give the visitor a way through.
      openMailto(name, email, message);
      setStatus("idle");
    }
  };

  const fieldClass =
    "w-full rounded-md border border-caco3-white/15 bg-caco3-white/5 px-4 py-3 text-caco3-white caret-future-teal placeholder-caco3-white/50 outline-none transition-colors duration-300 focus:border-future-teal";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-hypogenica-green py-32 md:py-48"
    >
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
                <h2
                  id="contact-heading"
                  className="text-4xl font-medium tracking-[-0.02em] text-caco3-white sm:text-6xl"
                >
                  Get in touch
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-10 space-y-4">
                  <a
                    href="mailto:info@hypogenica.com"
                    className="block text-2xl font-medium text-caco3-white transition-colors duration-300 hover:text-future-teal sm:text-3xl"
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
              <form
                onSubmit={handleSubmit}
                aria-label="Contact form"
                className="space-y-4"
              >
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
                      autoComplete="name"
                      autoCapitalize="words"
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
                      autoComplete="email"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
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
                    autoCapitalize="sentences"
                    required
                    placeholder="How can we help?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-md bg-caco3-white px-7 py-3 text-base font-medium text-hypogenica-green transition-all duration-300 ease-out-expo hover:opacity-80 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                  <p
                    role="status"
                    aria-live="polite"
                    className="text-sm text-caco3-white/70"
                  >
                    {status === "success" &&
                      "Thanks — your message is on its way."}
                    {status === "error" && (
                      <span className="text-ralf-yellow">
                        Something went wrong. Please email{" "}
                        <a
                          href="mailto:info@hypogenica.com"
                          className="underline hover:text-future-teal"
                        >
                          info@hypogenica.com
                        </a>
                        .
                      </span>
                    )}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
