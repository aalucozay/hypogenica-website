"use client";

import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Also scale up slightly (0.97 to 1) for a sense of depth. */
  scale?: boolean;
  className?: string;
}

/**
 * Wraps content and fades/slides it up the first time it enters the viewport.
 * CSS-transition only (opacity + transform), driven by IntersectionObserver,
 * with the smooth deceleration easing used across the site.
 */
export function Reveal({
  children,
  delay = 0,
  scale = false,
  className = "",
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const hidden = scale
    ? "translate-y-10 scale-[0.97] opacity-0"
    : "translate-y-10 opacity-0";
  const shown = "translate-y-0 scale-100 opacity-100";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out-expo ${
        isInView ? shown : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}
