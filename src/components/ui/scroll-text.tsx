"use client";

import { useRef } from "react";
import { clamp, useScrollRaf } from "@/hooks/useScrollRaf";

interface ScrollTextProps {
  text: string;
  className?: string;
  /** Resting opacity of un-lit words (0–1). */
  dim?: number;
}

/**
 * Brightens its words one-by-one as the element scrolls up through the
 * viewport — the reference site's signature statement effect. Opacity is
 * written straight to the DOM each frame (no per-frame React re-render).
 */
export function ScrollText({ text, className = "", dim = 0.2 }: ScrollTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");

  useScrollRaf(() => {
    const el = containerRef.current;
    if (!el) return;
    const vh = window.innerHeight;
    const rect = el.getBoundingClientRect();
    const start = vh * 0.85;
    const end = vh * 0.32;
    const progress = clamp((start - rect.top) / (start - end));

    const spans = wordsRef.current;
    const n = spans.length;
    spans.forEach((span, i) => {
      if (!span) return;
      // each word lights slightly ahead of the previous one
      const wordProgress = clamp(progress * n * 1.15 - i);
      span.style.opacity = String(dim + (1 - dim) * wordProgress);
    });
  });

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => {
            wordsRef.current[i] = el;
          }}
          style={{ opacity: dim, transition: "opacity 120ms linear" }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
