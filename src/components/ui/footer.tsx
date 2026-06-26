"use client";

import Image from "next/image";

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
    <footer className="border-t border-cloud-gray/10 bg-hypogenica-green">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-icon.png"
              alt="Hypogenica logo"
              width={73}
              height={73}
              className="h-8 w-8"
            />
            <span className="text-lg font-medium lowercase tracking-tight text-caco3-white">
              hypogenica
            </span>
          </div>

          {/* Link columns */}
          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-future-teal">
                Navigate
              </p>
              <ul className="mt-5 space-y-3">
                {NAVIGATE.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-caco3-white/70 transition-opacity duration-300 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-future-teal">
                Connect
              </p>
              <ul className="mt-5 space-y-3">
                {CONNECT.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-caco3-white/70 transition-opacity duration-300 hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 flex items-center justify-between border-t border-cloud-gray/10 pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-caco3-white/40">
            © 2025 Hypogenica LLC. All rights reserved.
          </p>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex size-10 items-center justify-center rounded-full border border-cloud-gray/20 text-caco3-white transition-colors duration-300 hover:border-future-teal hover:text-future-teal"
          >
            <svg
              width="16"
              height="16"
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
      </div>
    </footer>
  );
}
