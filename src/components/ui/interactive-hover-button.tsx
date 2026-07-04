"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  /** When provided, renders as an anchor link instead of a button. */
  href?: string;
}

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
);

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", href, className, ...props }, ref) => {
  const classes = cn(
    "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-md border border-caco3-white/60 bg-transparent px-6 py-3.5 text-center text-base font-medium text-caco3-white transition-transform duration-300 ease-out-expo active:scale-[0.98]",
    className,
  );

  const content = (
    <>
      {/* Resting label — slides out on hover */}
      <span className="relative z-10 inline-block transition-all duration-500 ease-out-expo group-hover:translate-x-[130%] group-hover:opacity-0">
        {text}
      </span>

      {/* Incoming label + arrow — slides in on hover, dark on the white fill */}
      <span className="absolute inset-0 z-20 flex -translate-x-[130%] items-center justify-center gap-2 text-hypogenica-green opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100">
        {text}
        <Arrow />
      </span>

      {/* White fill wipes in from the left via GPU-composited transform (smooth).
          No corner radius here — the parent's rounded-md + overflow-hidden clips it. */}
      <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-caco3-white transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;
