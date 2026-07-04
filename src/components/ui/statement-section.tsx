"use client";

import { useRef, useState } from "react";
import { clamp, useScrollRaf } from "@/hooks/useScrollRaf";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Eyebrow } from "@/components/ui/eyebrow";

const STATEMENTS = [
  "We explore microbial ecosystems deep within Alabama's 9,000+ caves, where bacteria have precipitated minerals in the dark for millennia.",
  "Our patented, bacteria driven process pulls calcium carbonate from atmospheric CO2, replicating millions of years of cave chemistry in days.",
  "Every gram of CaCO3 we make sequesters carbon. The process is carbon negative, turning a greenhouse gas into industrial grade material.",
];

export function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useScrollRaf(() => {
    const el = sectionRef.current;
    if (!el) return;
    const vh = window.innerHeight;
    const total = el.offsetHeight - vh;
    const progress = total > 0 ? clamp(-el.getBoundingClientRect().top / total) : 0;

    const seg = Math.min(STATEMENTS.length - 1, Math.floor(progress * STATEMENTS.length));
    const local = clamp(progress * STATEMENTS.length - seg);

    if (seg !== indexRef.current) {
      indexRef.current = seg;
      setIndex(seg);
    }

    if (barRef.current) barRef.current.style.width = `${progress * 100}%`;
    if (counterRef.current) {
      counterRef.current.textContent = String(seg + 1).padStart(2, "0");
    }

    if (reduced) return; // counter/progress still update; skip the word fill
    const spans = wordsRef.current;
    const n = spans.length;
    spans.forEach((span, i) => {
      if (!span) return;
      const wordProgress = clamp(local * n * 1.4 - i);
      span.style.opacity = String(0.16 + 0.84 * wordProgress);
    });
  });

  const words = STATEMENTS[index].split(" ");

  return (
    <section
      id="science"
      ref={sectionRef}
      className="relative h-[280vh] bg-hypogenica-green"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* subtle backdrop glow */}
        <div className="organic-bg">
          <span className="blob animate-blob-b right-[-10%] top-[20%] size-[45vw] bg-future-teal/10" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1600px] gap-12 px-6 md:grid-cols-[280px_1fr] md:px-12">
          {/* Left rail */}
          <div className="flex flex-col gap-8">
            <Eyebrow>Our approach</Eyebrow>
            <div className="text-sm text-caco3-white/50">
              <span ref={counterRef} className="text-caco3-white">
                01
              </span>
              <span className="mx-1.5">/</span>
              <span>0{STATEMENTS.length}</span>
            </div>
            <div className="h-px w-full overflow-hidden bg-caco3-white/10">
              <span
                ref={barRef}
                className="block h-full bg-future-teal"
                style={{ width: "0%" }}
              />
            </div>
          </div>

          {/* Statement */}
          <div className="flex items-center">
            <p
              key={index}
              className="animate-fade-up max-w-5xl text-balance text-3xl font-medium leading-[1.15] tracking-[-0.01em] text-caco3-white sm:text-4xl lg:text-6xl"
              style={{ animationDuration: "600ms" }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    wordsRef.current[i] = el;
                  }}
                  style={{
                    opacity: reduced ? 1 : 0.16,
                    transition: "opacity 120ms linear",
                  }}
                >
                  {word}
                  {i < words.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
