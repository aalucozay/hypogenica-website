"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "News", href: "#news" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight whichever linked section is crossing the middle of
  // the viewport. rootMargin narrows the "active band" to a horizontal line.
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1)).concat("contact");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out-expo ${
        scrolled
          ? "border-b border-caco3-white/10 bg-hypogenica-green/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-4 md:px-12">
        {/* Logo — scrolls back to the very top without leaving a stray "#" in
            the URL; honours reduced-motion by skipping the smooth animation. */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const reduce = window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            ).matches;
            window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo-mark.png"
            alt="Hypogenica logo"
            width={120}
            height={120}
            priority
            className="h-9 w-9"
          />
          <span className="text-xl font-medium lowercase tracking-tight text-caco3-white">
            hypogenica
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "true" : undefined}
                className={`text-base transition-colors duration-300 ${
                  active
                    ? "text-caco3-white"
                    : "text-caco3-white/70 hover:text-caco3-white"
                }`}
              >
                <AnimatedUnderline>{link.label}</AnimatedUnderline>
              </a>
            );
          })}
          <a
            href="#contact"
            aria-current={activeId === "contact" ? "true" : undefined}
            className="text-base text-caco3-white transition-colors duration-300 hover:text-future-teal"
          >
            <AnimatedUnderline>Contact</AnimatedUnderline>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
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
      </div>

      {/* Mobile menu — `inert` when collapsed so its links stay out of the tab
          order and are hidden from assistive tech until opened. */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`overflow-hidden bg-hypogenica-green/95 backdrop-blur-md transition-all duration-500 ease-out-expo md:hidden ${
          menuOpen ? "max-h-80 border-t border-caco3-white/10" : "max-h-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col px-6 py-2">
          {[...LINKS, { label: "Contact", href: "#contact" }].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3.5 text-lg text-caco3-white/90 transition-colors hover:text-future-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
