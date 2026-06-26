"use client";

import { useRef } from "react";
import { clamp, useScrollRaf } from "@/hooks/useScrollRaf";

interface HorizontalScrollTextProps {
  children: React.ReactNode;
  /** translateX (%) when the band first enters the viewport. */
  from?: number;
  /** translateX (%) when it has fully passed. */
  to?: number;
  className?: string;
}

/**
 * Drifts an over-wide line of text horizontally, linked to vertical scroll
 * position — the big "rewriting the biology" band from the reference.
 */
export function HorizontalScrollText({
  children,
  from = 8,
  to = -32,
  className = "",
}: HorizontalScrollTextProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useScrollRaf(() => {
    const section = sectionRef.current;
    const inner = innerRef.current;
    if (!section || !inner) return;
    const vh = window.innerHeight;
    const rect = section.getBoundingClientRect();
    const progress = clamp((vh - rect.top) / (vh + rect.height));
    const x = from + (to - from) * progress;
    inner.style.transform = `translate3d(${x}%, 0, 0)`;
  });

  return (
    <div ref={sectionRef} className={`overflow-hidden ${className}`}>
      <div
        ref={innerRef}
        className="whitespace-nowrap will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
