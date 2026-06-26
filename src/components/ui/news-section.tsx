"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Parallax } from "@/components/ui/parallax";
import { ArrowButton } from "@/components/ui/arrow-button";

const ARTICLES = [
  {
    date: "July 2025",
    category: "Funding",
    title: "NSF STTR Phase I Award",
    snippet:
      "Awarded NSF funding for Microbially-Produced Precipitated Calcium Carbonates (mPCCs) as a Paint Filler. The grant advances fundamental biomineralization research into new biotechnology.",
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
    title: "Culverhouse Competition First Prize",
    snippet:
      "Won the $5,000 first prize at the University of Alabama's Faculty and Staff Competition for Carbon-Negative CaCO3 Production.",
    href: "https://aei.culverhouse.ua.edu/faculty-staff/2024-faculty-staff-competition-winners/",
  },
];

const [featured, ...rest] = ARTICLES;

function ReadMore() {
  return (
    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 group-hover:text-future-teal">
      Read more
      <span className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
        →
      </span>
    </span>
  );
}

export function NewsSection() {
  return (
    <section id="news" className="bg-hypogenica-green py-32 md:py-48">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Heading row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <Parallax>
              <h2 className="text-5xl font-medium tracking-[-0.02em] sm:text-7xl lg:text-8xl">
                Newsroom
              </h2>
            </Parallax>
          </Reveal>
          <Reveal delay={100}>
            <ArrowButton href={featured.href} external>
              View all articles
            </ArrowButton>
          </Reveal>
        </div>

        {/* Featured article */}
        <Reveal delay={80} scale>
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-16 grid gap-8 rounded-lg bg-deep-green p-6 transition-colors duration-300 md:grid-cols-2 md:p-8"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src="/images/cave-rappel.jpg"
                alt="A caver descending among cave formations"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <Eyebrow>{featured.category}</Eyebrow>
                <span className="text-sm text-caco3-white/50">
                  {featured.date}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.01em] text-caco3-white md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-caco3-white/80">
                {featured.snippet}
              </p>
              <ReadMore />
            </div>
          </a>
        </Reveal>

        {/* Remaining cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((article, i) => (
            <Reveal key={article.title} delay={i * 100}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col rounded-lg p-8 text-caco3-white transition-transform duration-500 ease-out-expo hover:-translate-y-1.5 ${
                  i % 2 === 0 ? "bg-moss-green" : "bg-deep-green"
                }`}
              >
                <div className="flex items-center justify-between text-sm text-caco3-white/50">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-6 text-2xl font-medium leading-snug tracking-[-0.01em] md:text-3xl">
                  {article.title}
                </h3>
                <p className="mt-4 flex-1 text-base font-normal leading-relaxed text-caco3-white/80">
                  {article.snippet}
                </p>
                <ReadMore />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
