const PHRASES = [
  "Carbon-Negative CaCO3",
  "Cleaner",
  "Cheaper",
  "Efficient",
  "Cave Science",
];

/**
 * Understated single-line ticker. Two identical halves sit side by side and the
 * track translates -50%, so the loop is seamless. Small, uppercase, wide
 * tracking and low opacity — a quiet design accent, not a content block.
 */
function Half() {
  return (
    <div className="flex shrink-0 items-center">
      {PHRASES.map((phrase) => (
        <div key={phrase} className="flex items-center">
          <span className="px-6 font-mono text-xs uppercase tracking-[0.25em] sm:text-sm">
            {phrase}
          </span>
          <span aria-hidden="true">·</span>
        </div>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-caco3-white/10 bg-deep-green py-8">
      <div className="flex w-max animate-marquee text-caco3-white/55">
        <Half />
        <Half />
      </div>
    </div>
  );
}
