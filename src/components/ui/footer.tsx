import Image from "next/image";

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

        <nav className="flex flex-wrap gap-x-8 gap-y-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-caco3-white/55 transition-colors duration-300 hover:text-caco3-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-caco3-white/40">
          © 2025 Hypogenica LLC
        </p>
      </div>
    </footer>
  );
}
