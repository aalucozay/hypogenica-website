"use client";

import { HorizontalScrollText } from "@/components/ui/horizontal-scroll-text";

const PHRASES = ["Carbon-Negative CaCO3", "Cleaner", "Cheaper", "Efficient"];

function Band({ accent }: { accent?: boolean }) {
  // Repeat enough to overfill the viewport at large type sizes.
  const items = Array.from({ length: 3 }).flatMap(() => PHRASES);
  return (
    <span className="inline-flex items-center">
      {items.map((phrase, i) => (
        <span key={i} className="inline-flex items-center">
          <span
            className={`px-6 text-6xl font-medium tracking-[-0.02em] sm:text-7xl lg:text-8xl ${
              accent ? "text-future-teal" : "text-caco3-white"
            }`}
          >
            {phrase}
          </span>
          <span className="text-future-teal/50">·</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-cloud-gray/10 bg-deep-green py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <HorizontalScrollText from={4} to={-26}>
          <Band />
        </HorizontalScrollText>
        <HorizontalScrollText from={-26} to={6}>
          <Band accent />
        </HorizontalScrollText>
      </div>
    </div>
  );
}
