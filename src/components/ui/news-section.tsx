"use client";

import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ArrowButton } from "@/components/ui/arrow-button";

const ARTICLES = [
  {
    date: "July 2025",
    title: "NSF STTR Phase I Award",
    snippet:
      "Awarded NSF funding for Microbially-Produced Precipitated Calcium Carbonates (mPCCs) as a Paint Filler, advancing biomineralization research into new biotechnology.",
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
    title: "Culverhouse Competition First Prize",
    snippet:
      "Won the $5,000 first prize at the University of Alabama's Faculty and Staff Competition for Carbon-Negative CaCO3 Production.",
    href: "https://aei.culverhouse.ua.edu/faculty-staff/2024-faculty-staff-competition-winners/",
  },
];

export function NewsSection() {
  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="bg-hypogenica-green py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Heading row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Parallax>
              <h2
                id="news-heading"
                className="text-5xl font-medium tracking-[-0.02em] sm:text-7xl lg:text-8xl"
              >
                Newsroom
              </h2>
            </Parallax>
          </Reveal>
          <Reveal delay={100}>
            <ArrowButton href={ARTICLES[0].href} external>
              View all articles
            </ArrowButton>
          </Reveal>
        </div>

        {/* Text-only cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={i * 100}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-caco3-white/[0.08] bg-card-green p-8 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-caco3-white/20"
              >
                <span className="text-sm text-caco3-white/50 transition-colors duration-300 group-hover:text-future-teal">
                  {article.date}
                </span>
                <h3 className="mt-5 text-2xl font-bold leading-snug tracking-[-0.01em] text-caco3-white">
                  {article.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </h3>
                <p className="mt-4 flex-1 text-pretty text-base leading-relaxed text-caco3-white/60">
                  {article.snippet}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-caco3-white transition-colors duration-300 group-hover:text-future-teal">
                  Read more
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
