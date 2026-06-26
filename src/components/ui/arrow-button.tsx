interface ArrowButtonProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  /** Visual variant of the pill body. */
  variant?: "dark" | "teal";
  className?: string;
}

/**
 * Signature dual CTA: a pill body holding the label, joined to a square accent
 * tile with an arrow. The whole thing animates together on hover (the arrow
 * nudges right, the accent brightens).
 */
export function ArrowButton({
  children,
  href,
  external = false,
  variant = "dark",
  className = "",
}: ArrowButtonProps) {
  const body =
    variant === "dark"
      ? "bg-deep-green text-caco3-white"
      : "bg-future-teal text-hypogenica-green";

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`group inline-flex items-stretch gap-1.5 ${className}`}
    >
      <span
        className={`flex items-center rounded-xl px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${body}`}
      >
        {children}
      </span>
      <span className="flex items-center justify-center rounded-xl bg-future-teal px-3 text-hypogenica-green transition-all duration-300 ease-out-expo group-hover:brightness-110">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  );
}
