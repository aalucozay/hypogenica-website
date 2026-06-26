"use client";

import { useEffect, useRef } from "react";

/**
 * Runs `handler` on every scroll/resize, throttled to one call per animation
 * frame. The latest handler is always used without re-binding listeners, so it
 * is safe to pass an inline closure that reads fresh props/refs each render.
 *
 * Intended for direct DOM writes (transform/opacity) rather than setState, to
 * keep scroll-linked effects smooth and library-free.
 */
export function useScrollRaf(handler: () => void) {
  const handlerRef = useRef(handler);

  // Keep the ref pointing at the latest handler without re-binding listeners.
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    let ticking = false;
    const run = () => {
      handlerRef.current();
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(run);
      }
    };

    run(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}

export const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));
