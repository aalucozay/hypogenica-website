"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Fraction of the element that must be visible to trigger (0–1). */
  threshold?: number;
  /** Only fire once, then stop observing. */
  triggerOnce?: boolean;
  /** Margin around the root used to grow/shrink the trigger area. */
  rootMargin?: string;
}

/**
 * Detects when an element scrolls into the viewport via IntersectionObserver.
 * Returns a ref to attach and an `isInView` boolean for toggling CSS classes.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  triggerOnce = true,
  rootMargin = "0px",
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, isInView };
}
