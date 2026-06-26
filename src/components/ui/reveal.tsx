"use client";

import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
}

/**
 * Wraps content and fades/slides it up the first time it enters the viewport.
 * CSS-transition only (opacity + transform), driven by IntersectionObserver.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out-expo ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
