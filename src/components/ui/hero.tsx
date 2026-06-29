"use client";

import { ArrowButton } from "@/components/ui/arrow-button";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-hypogenica-green">
      {/* Subtle living background — faint drifting greens within the dark palette */}
      <div className="organic-bg">
        <span className="blob animate-blob-a left-[-10%] top-[-5%] size-[55vw] bg-card-green/80" />
        <span className="blob animate-blob-b right-[-15%] top-[8%] size-[52vw] bg-card-green/70" />
        <span className="blob animate-blob-c bottom-[-20%] left-[15%] size-[48vw] bg-future-teal/8" />
      </div>

      {/* Fluid particle flow-field laced over the gradient */}
      <div className="pointer-events-none absolute inset-0">
        <FluidParticlesBackground
          particleColor="206, 240, 226"
          opacity={0.16}
          speed={0.45}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 pb-20 pt-44 md:px-12 md:pb-28 md:pt-56">
        {/* Headline */}
        <div className="flex-1">
          <h1
            className="animate-fade-up max-w-[15ch] text-6xl font-bold leading-[0.92] tracking-[-0.04em] text-caco3-white sm:text-8xl lg:text-9xl xl:text-[10.5rem]"
            style={{ animationDelay: "0ms" }}
          >
            Using biotech for a better future.
          </h1>
        </div>

        {/* Subtext + CTA */}
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div
            className="animate-fade-up max-w-xl"
            style={{ animationDelay: "150ms" }}
          >
            <p className="text-base leading-relaxed text-caco3-white/60 sm:text-lg">
              We&apos;ve patented a bacteria-driven way to make pure calcium
              carbonate that is cleaner, cheaper, and more efficient. How? Using
              cave science.
            </p>
          </div>

          <div
            className="animate-fade-up shrink-0"
            style={{ animationDelay: "300ms" }}
          >
            <ArrowButton href="#science" variant="outline">
              Discover our science
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
