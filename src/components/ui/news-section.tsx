"use client";

import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowButton } from "@/components/ui/arrow-button";

const ARTICLES = [
  {
    date: "July 2025",
    category: "Funding",
    title: "NSF STTR Phase I Award",
    snippet:
      "Awarded NSF funding for Microbially-Produced Precipitated Calcium Carbonates (mPCCs) as a Paint Filler — advancing fundamental biomineralization research into novel biotechnology.",
    href: "https://seedfund.nsf.gov/awardees/phase-1/details/?company=hypogenica-llc",
  },
  {
    date: "December 2025",
    category: "Accelerator",
    title: "HudsonAlpha AgTech Accelerator",
    snippet:
      "Selected for the HudsonAlpha and gener8tor sixth AgTech Accelerator cohort, advancing carbon capture through industrial biomaterials.",
    href: "https://www.hudsonalpha.org/hudsonalpha-and-gener8tor-kick-off-sixth-agtech-accelerator-cohort-with-10-startups/",
  },
  {
    date: "2024",
    category: "Award",
    title: "Culverhouse Competition — First Prize",
    snippet:
      "Won $5,000 first prize at the University of Alabama's Faculty/Staff Competition for Carbon-Negative CaCO3 Production.",
    href: "https://aei.culverhouse.ua.edu/faculty-staff/2024-faculty-staff-competition-winners/",
  },
];

const [featured, ...rest] = ARTICLES;

export function NewsSection() {
  return (
    <section id="news" className="bg-hypogenica-green py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Heading row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="text-5xl font-medium tracking-[-0.02em] sm:text-7xl lg:text-8xl">
              Newsroom
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <ArrowButton href={featured.href} external>
              View All Articles
            </ArrowButton>
          </Reveal>
        </div>

        {/* Featured article */}
        <Reveal delay={80}>
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-16 grid gap-8 rounded-3xl border border-cloud-gray/10 bg-deep-green p-6 transition-colors duration-300 hover:border-cloud-gray/25 md:grid-cols-2 md:p-8"
          >
            <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-cloud-gray/15 bg-cloud-gray">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-hypogenica-green/40">
                Image Placeholder
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <div className="text-future-teal">
                  <Eyebrow>{featured.category}</Eyebrow>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-cloud-gray/70">
                  {featured.date}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.01em] text-caco3-white md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-cloud-gray">
                {featured.snippet}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-future-teal">
                Read more
                <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </a>
        </Reveal>

        {/* Remaining cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((article, i) => {
            const teal = i % 2 === 1;
            return (
              <Reveal key={article.title} delay={i * 120}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col rounded-3xl p-8 transition-transform duration-500 ease-out-expo hover:-translate-y-1.5 ${
                    teal
                      ? "bg-future-teal text-hypogenica-green"
                      : "border border-cloud-gray/10 bg-deep-green text-caco3-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.12em] opacity-70">
                      {article.category}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] opacity-70">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-medium leading-snug tracking-[-0.01em] md:text-3xl">
                    {article.title}
                  </h3>
                  <p
                    className={`mt-4 flex-1 text-base font-light leading-relaxed ${
                      teal ? "text-hypogenica-green/75" : "text-cloud-gray"
                    }`}
                  >
                    {article.snippet}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em]">
                    Read more
                    <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
