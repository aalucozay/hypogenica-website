import Image from "next/image";
import { LinkedInIcon } from "@/components/ui/linkedin-icon";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-caco3-white/[0.08] bg-hypogenica-green">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt="Hypogenica logo"
            width={120}
            height={120}
            className="h-7 w-7"
          />
          <span className="text-lg font-medium lowercase tracking-tight text-caco3-white">
            hypogenica
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-caco3-white/55 transition-colors duration-300 hover:text-caco3-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/company/hypogenica/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hypogenica on LinkedIn (opens in a new tab)"
            className="text-caco3-white/55 transition-colors duration-300 hover:text-future-teal"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </nav>

        <p className="text-sm text-caco3-white/55">
          © {new Date().getFullYear()} Hypogenica LLC
          <span className="mx-1.5 text-caco3-white/35">|</span>
          Site by{" "}
          <a
            href="#"
            className="text-caco3-white/55 no-underline transition-colors duration-300 hover:text-caco3-white/80 hover:underline"
          >
            Abdullah Alucozai
          </a>
        </p>
      </div>
    </footer>
  );
}
