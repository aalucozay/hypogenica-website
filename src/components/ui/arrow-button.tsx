interface ArrowButtonProps {
  children: React.ReactNode;
  href: string;
  external?: boolean;
  /**
   * "outline" is a bordered button that fills white on hover (the primary CTA).
   * "ghost" is an understated text link with an arrow. "solid" is a rare teal
   * fill, kept for occasional use.
   */
  variant?: "outline" | "solid" | "ghost";
  className?: string;
}

export function ArrowButton({
  children,
  href,
  external = false,
  variant = "ghost",
  className = "",
}: ArrowButtonProps) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const Arrow = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  );

  if (variant === "outline") {
    return (
      <a
        href={href}
        {...linkProps}
        className={`group inline-flex items-center gap-2.5 rounded-md border border-caco3-white/60 px-6 py-3.5 text-base font-medium text-caco3-white transition-all duration-300 ease-out-expo hover:bg-caco3-white hover:text-hypogenica-green active:scale-[0.98] ${className}`}
      >
        {children}
        {Arrow}
      </a>
    );
  }

  if (variant === "solid") {
    return (
      <a
        href={href}
        {...linkProps}
        className={`group inline-flex items-center gap-2.5 rounded-md bg-future-teal px-6 py-3.5 text-base font-medium text-hypogenica-green transition-all duration-300 ease-out-expo hover:brightness-105 active:scale-[0.98] ${className}`}
      >
        {children}
        {Arrow}
      </a>
    );
  }

  return (
    <a
      href={href}
      {...linkProps}
      className={`group inline-flex items-center gap-2.5 text-base font-medium text-caco3-white transition-colors duration-300 hover:text-future-teal ${className}`}
    >
      {children}
      {Arrow}
    </a>
  );
}
