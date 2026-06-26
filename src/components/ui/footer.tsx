import Image from "next/image";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Science", href: "#science" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-cloud-gray/10 bg-hypogenica-green">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Logo + wordmark */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/squarelogo.png"
              alt="Hypogenica logo"
              width={390}
              height={309}
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold lowercase tracking-tight text-caco3-white">
              hypogenica
            </span>
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
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
        </div>

        <p className="mt-10 text-sm font-light text-cloud-gray/70">
          © 2025 Hypogenica LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
