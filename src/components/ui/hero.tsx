"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowButton } from "@/components/ui/arrow-button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-hypogenica-green">
      {/* Flowing organic background — soft tonal greens with one faint teal note */}
      <div className="organic-bg">
        <span className="blob animate-blob-a left-[-10%] top-[-5%] size-[55vw] bg-moss-green/70" />
        <span className="blob animate-blob-b right-[-15%] top-[10%] size-[50vw] bg-deep-green/80" />
        <span className="blob animate-blob-c bottom-[-20%] left-[20%] size-[45vw] bg-future-teal/8" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-44">
        {/* Top: eyebrow + headline */}
        <div className="flex-1">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Eyebrow>Sustainable materials biotech</Eyebrow>
          </div>

          <h1
            className="animate-fade-up mt-8 max-w-[15ch] text-6xl font-bold leading-[0.92] tracking-[-0.04em] text-caco3-white sm:text-8xl lg:text-9xl xl:text-[10.5rem]"
            style={{ animationDelay: "150ms" }}
          >
            Using biotech for a better future.
          </h1>
        </div>

        {/* Bottom: subtext + CTA */}
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div
            className="animate-fade-up max-w-xl"
            style={{ animationDelay: "300ms" }}
          >
            <p className="text-base font-normal leading-relaxed text-caco3-white/80 sm:text-lg">
              We&apos;ve patented a bacteria-driven way to make pure calcium
              carbonate that is cleaner, cheaper, and more efficient than
              anything before it.
            </p>
            <p className="mt-5 text-lg italic text-caco3-white/90">
              How? Using cave science.
            </p>
          </div>

          <div
            className="animate-fade-up shrink-0"
            style={{ animationDelay: "450ms" }}
          >
            <ArrowButton href="#science" variant="solid">
              Discover our science
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
