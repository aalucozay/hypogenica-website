"use client";

import { useEffect, useRef } from "react";
import { useScrollRaf } from "@/hooks/useScrollRaf";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ParallaxProps {
  children: React.ReactNode;
  /** Max vertical travel in px across the viewport. A few px is plenty. */
  strength?: number;
  className?: string;
}

/**
 * Moves its content up very slightly slower than the surrounding page as it
 * scrolls through the viewport — just a few pixels of differential motion to
 * give headings a sense of depth. Pure CSS transform driven by scroll position.
 */
export function Parallax({
  children,
  strength = 26,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Clear any residual transform if the user switches to reduced motion.
  useEffect(() => {
    if (reduced && ref.current) ref.current.style.transform = "";
  }, [reduced]);

  useScrollRaf(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const vh = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    // -0.5 (above) .. 0.5 (below) relative to viewport centre
    const progress = (center - vh / 2) / vh;
    const y = -progress * strength;
    el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
  });

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
