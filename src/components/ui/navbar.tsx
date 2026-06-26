"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "border-b border-cloud-gray/10 bg-hypogenica-green/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo + wordmark */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Hypogenica logo"
            width={398}
            height={124}
            priority
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold lowercase tracking-tight text-caco3-white">
            hypogenica
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-caco3-white opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-caco3-white transition-all duration-300 ease-out-expo ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-caco3-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-caco3-white transition-all duration-300 ease-out-expo ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-cloud-gray/10 bg-hypogenica-green/95 backdrop-blur-md transition-all duration-500 ease-out-expo md:hidden ${
          menuOpen ? "max-h-72" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-caco3-white opacity-90 transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
