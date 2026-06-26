"use client";

const PHRASES = ["Carbon-negative CaCO3", "Cleaner", "Cheaper", "Efficient"];

function MarqueeGroup() {
  // One full copy of the content. Two copies are rendered in the track so the
  // -50% translate loops seamlessly.
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {PHRASES.map((phrase, index) => (
        <span key={index} className="flex items-center">
          <span className="px-6 text-lg font-medium uppercase tracking-wide text-future-teal md:text-xl">
            {phrase}
          </span>
          <span className="text-future-teal/50">·</span>
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-cloud-gray/10 bg-hypogenica-green py-5">
      <div className="flex w-max animate-marquee">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
