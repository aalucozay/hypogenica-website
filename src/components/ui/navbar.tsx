"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "News", href: "#news" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6">
        {/* Logo pill */}
        <a
          href="#"
          className={`flex items-center gap-2.5 rounded-2xl px-4 py-2.5 transition-all duration-500 ease-out-expo ${
            scrolled
              ? "border border-cloud-gray/10 bg-hypogenica-green/70 backdrop-blur-md"
              : "border border-transparent"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Hypogenica logo"
            width={398}
            height={124}
            priority
            className="h-7 w-auto"
          />
          <span className="text-lg font-bold lowercase tracking-tight text-caco3-white">
            hypogenica
          </span>
        </a>

        {/* Desktop nav pill */}
        <nav className="hidden items-center gap-1 rounded-2xl border border-cloud-gray/10 bg-hypogenica-green/60 p-1.5 backdrop-blur-md md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-caco3-white/80 transition-colors duration-300 hover:bg-caco3-white/5 hover:text-caco3-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 rounded-xl bg-future-teal px-4 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.14em] text-hypogenica-green transition-all duration-300 ease-out-expo hover:brightness-110"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger pill */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 rounded-2xl border border-cloud-gray/10 bg-hypogenica-green/60 p-4 backdrop-blur-md md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-caco3-white transition-all duration-300 ease-out-expo ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-caco3-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-caco3-white transition-all duration-300 ease-out-expo ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`mx-4 overflow-hidden rounded-2xl border border-cloud-gray/10 bg-hypogenica-green/90 backdrop-blur-md transition-all duration-500 ease-out-expo md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col p-2">
          {[...LINKS, { label: "Contact", href: "#contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 font-mono text-sm uppercase tracking-[0.14em] text-caco3-white/90 transition-colors hover:bg-caco3-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
