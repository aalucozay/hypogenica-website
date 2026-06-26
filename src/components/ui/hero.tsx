"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowButton } from "@/components/ui/arrow-button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-hypogenica-green">
      {/* Flowing organic background */}
      <div className="organic-bg">
        <span className="blob animate-blob-a left-[-10%] top-[-5%] size-[55vw] bg-future-teal/25" />
        <span className="blob animate-blob-b right-[-15%] top-[10%] size-[50vw] bg-[#0e3a2a]/80" />
        <span className="blob animate-blob-c bottom-[-20%] left-[20%] size-[45vw] bg-ralf-yellow/10" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-44">
        {/* Top: eyebrow + headline */}
        <div className="flex-1">
          <div
            className="animate-fade-up text-future-teal"
            style={{ animationDelay: "80ms" }}
          >
            <Eyebrow>Sustainable Materials Biotech</Eyebrow>
          </div>

          <h1
            className="animate-fade-up mt-8 max-w-[16ch] text-5xl font-medium leading-[0.98] tracking-[-0.03em] text-ralf-yellow sm:text-7xl lg:text-8xl xl:text-[8.5rem]"
            style={{ animationDelay: "180ms" }}
          >
            Using biotech for a better future.
          </h1>
        </div>

        {/* Bottom: subtext + CTA */}
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div
            className="animate-fade-up max-w-xl"
            style={{ animationDelay: "340ms" }}
          >
            <p className="text-base font-light leading-relaxed text-caco3-white sm:text-lg">
              Current processes for making calcium carbonate are costly,
              inefficient, and harmful for the environment. We&apos;ve patented a
              way to get pure CaCO3 — cleaner, cheaper, and more efficient.
            </p>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.14em] text-future-teal">
              How? Using cave science.
            </p>
          </div>

          <div
            className="animate-fade-up shrink-0"
            style={{ animationDelay: "460ms" }}
          >
            <ArrowButton href="#science">Discover Our Science</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
