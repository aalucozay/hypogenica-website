interface EyebrowProps {
  children: React.ReactNode;
  /** Colour of the small leading square. Defaults to Future Teal. */
  dotClassName?: string;
  className?: string;
}

/**
 * Monospace uppercase section label inside a subtle pill with a small leading
 * square — the recurring "what we do" marker used across the page.
 */
export function Eyebrow({
  children,
  dotClassName = "bg-future-teal",
  className = "",
}: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-md border border-current/10 bg-current/5 px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] ${className}`}
    >
      <span className={`size-2 rounded-[2px] ${dotClassName}`} />
      {children}
    </span>
  );
}
