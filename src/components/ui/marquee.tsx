const STATEMENTS = [
  "Pure calcium carbonate from cave bacteria",
  "Carbon negative, by nature's own chemistry",
  "Born in Alabama's deepest caves",
  "Cleaner, cheaper, made the way nature intended",
];

/**
 * A quiet editorial ribbon. Flowing sentence-case statements drift past in a
 * light italic, widely spaced, with no separators or all-caps — closer to a
 * line of margin notes than a tech ticker. Two identical halves translate -50%
 * for a seamless loop.
 */
function Half() {
  return (
    <div className="flex shrink-0 items-center">
      {STATEMENTS.map((statement) => (
        <span
          key={statement}
          className="whitespace-nowrap px-14 text-xl font-light italic sm:text-2xl"
        >
          {statement}
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    // Decorative flourish whose text is duplicated for the seamless loop —
    // hidden from assistive tech so the lines aren't announced twice.
    <div
      aria-hidden="true"
      className="overflow-hidden bg-hypogenica-green py-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-marquee text-caco3-white/50 hover:[animation-play-state:paused]">
        <Half />
        <Half />
      </div>
    </div>
  );
}
