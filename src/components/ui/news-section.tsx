"use client";

import { Reveal } from "@/components/ui/reveal";

const ARTICLES = [
  {
    date: "July 2025",
    title: "NSF STTR Phase I Award",
    snippet:
      "Awarded NSF funding for Microbially-Produced Precipitated Calcium Carbonates (mPCCs) as a Paint Filler — advancing fundamental biomineralization research into novel biotechnology.",
    href: "https://seedfund.nsf.gov/awardees/phase-1/details/?company=hypogenica-llc",
  },
  {
    date: "December 2025",
    title: "HudsonAlpha AgTech Accelerator",
    snippet:
      "Selected for the HudsonAlpha and gener8tor sixth AgTech Accelerator cohort, advancing carbon capture through industrial biomaterials.",
    href: "https://www.hudsonalpha.org/hudsonalpha-and-gener8tor-kick-off-sixth-agtech-accelerator-cohort-with-10-startups/",
  },
  {
    date: "2024",
    title: "Culverhouse Competition — First Prize",
    snippet:
      "Won $5,000 first prize at the University of Alabama's Faculty/Staff Competition for Carbon-Negative CaCO3 Production.",
    href: "https://aei.culverhouse.ua.edu/faculty-staff/2024-faculty-staff-competition-winners/",
  },
];

export function NewsSection() {
  return (
    <section id="news" className="bg-hypogenica-green py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-future-teal">
            Newsroom
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-6 text-3xl font-medium text-caco3-white md:text-5xl">
            Latest Updates
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <Reveal key={article.title} delay={index * 120}>
              <article className="flex h-full flex-col rounded-2xl border border-cloud-gray/10 bg-[#0a2319] p-8 transition-colors duration-300 hover:border-cloud-gray/25">
                <p className="text-sm font-medium text-future-teal">
                  {article.date}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-caco3-white">
                  {article.title}
                </h3>
                <p className="mt-4 flex-1 text-base font-light leading-relaxed text-cloud-gray">
                  {article.snippet}
                </p>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-future-teal transition-opacity duration-300 hover:opacity-80"
                >
                  Read more
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
