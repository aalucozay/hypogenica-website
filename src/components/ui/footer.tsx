"use client";

import Image from "next/image";
import { ArrowButton } from "@/components/ui/arrow-button";

const NAVIGATE = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "Newsroom", href: "#news" },
  { label: "Contact", href: "#contact" },
];

const CONNECT = [
  { label: "Email", href: "mailto:info@hypogenica.com" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cloud-gray/10 bg-hypogenica-green">
      {/* Flowing backdrop */}
      <div className="organic-bg">
        <span className="blob animate-blob-a left-[10%] top-[-30%] size-[40vw] bg-future-teal/15" />
        <span className="blob animate-blob-c right-[-10%] bottom-[-10%] size-[40vw] bg-[#0e3a2a]/70" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pt-24 md:px-12 md:pt-32">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-20">
          {/* CTA */}
          <div>
            <h2 className="max-w-2xl text-3xl font-medium leading-[1.1] tracking-[-0.01em] text-caco3-white sm:text-5xl">
              Using biotech for a better future.
            </h2>
            <div className="mt-8">
              <ArrowButton href="mailto:info@hypogenica.com" external>
                Work With Us
              </ArrowButton>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cloud-gray/60">
                Navigate
              </p>
              <ul className="mt-5 space-y-3">
                {NAVIGATE.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base text-caco3-white/85 transition-opacity duration-300 hover:opacity-60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cloud-gray/60">
                Connect
              </p>
              <ul className="mt-5 space-y-3">
                {CONNECT.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base text-caco3-white/85 transition-opacity duration-300 hover:opacity-60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="mt-20 flex items-center justify-between border-t border-cloud-gray/10 py-8">
          <div className="flex items-center gap-2.5">
            <Image
              src="/squarelogo.png"
              alt="Hypogenica logo"
              width={390}
              height={309}
              className="h-7 w-auto"
            />
            <span className="text-base font-bold lowercase tracking-tight text-caco3-white">
              hypogenica
            </span>
          </div>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex size-11 items-center justify-center rounded-full border border-cloud-gray/20 text-caco3-white transition-colors duration-300 hover:border-future-teal hover:text-future-teal"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>

        {/* Giant wordmark */}
        <div className="relative select-none">
          <p className="-mb-[0.18em] translate-y-[0.18em] text-center text-[22vw] font-bold lowercase leading-none tracking-[-0.04em] text-caco3-white/[0.06]">
            hypogenica
          </p>
        </div>

        <p className="border-t border-cloud-gray/10 py-8 font-mono text-xs uppercase tracking-[0.14em] text-cloud-gray/60">
          © 2025 Hypogenica LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
