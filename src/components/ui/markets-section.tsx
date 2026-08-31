"use client";

import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { chem } from "@/lib/chem";

/**
 * Every market calcium carbonate already sells into, not only the ones we are
 * chasing first. Paint leads because that is what the NSF STTR funds; the rest
 * are listed because the same material serves them.
 */
const MARKETS = [
  {
    name: "Paint and coatings",
    use: "An extender that carries opacity, so a formulation needs less titanium dioxide. Particle size sets the sheen and the way the paint flows.",
  },
  {
    name: "Plastics",
    use: "Filler in PVC pipe and profile, polyolefin film and masterbatch. It adds stiffness and dimensional stability while displacing resin.",
  },
  {
    name: "Paper",
    use: "Filler and coating pigment. It brings brightness, opacity and a printable surface at a lower cost than fibre.",
  },
  {
    name: "Cosmetics",
    use: "Bulking and oil absorption in pressed powders and foundations, and a mild abrasive in toothpaste.",
  },
  {
    name: "Drug delivery",
    use: "An antacid and calcium source in its own right, a tablet excipient, and a carrier for controlled release, where purity and particle size govern the dose.",
  },
  {
    name: "Adhesives and sealants",
    use: "A reinforcing filler in caulks, sealants and rubber that controls viscosity and stops a bead from slumping.",
  },
  {
    name: "Food and supplements",
    use: "Calcium fortification, anti-caking and acidity regulation, at food grade purity.",
  },
  {
    name: "Construction and agriculture",
    use: "An additive in cements, mortars and joint compounds, and a soil amendment that lifts pH on acidic ground.",
  },
];

export function MarketsSection() {
  return (
    <section
      id="markets"
      aria-labelledby="markets-heading"
      className="bg-hypogenica-green py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Parallax>
                <h2
                  id="markets-heading"
                  className="text-balance text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl"
                >
                  <ScrollText text="Who buys calcium carbonate, and what they do with it." />
                </h2>
              </Parallax>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-md text-pretty text-lg leading-relaxed text-caco3-white/60">
                It goes into more than most people expect. Paint is where we
                start, since that is the application the NSF is funding. The
                rest of this list is where the same material already goes.
              </p>
            </Reveal>
          </div>

          <ul className="border-t border-caco3-white/10">
            {MARKETS.map((market, i) => (
              <li key={market.name}>
                <Reveal delay={i * 60}>
                  <div className="group grid gap-2 border-b border-caco3-white/10 py-6 transition-colors duration-500 ease-out-expo hover:border-future-teal/30 sm:grid-cols-[minmax(0,0.75fr)_minmax(0,1.6fr)] sm:gap-8">
                    <h3 className="text-lg font-medium text-caco3-white transition-colors duration-500 ease-out-expo group-hover:text-future-teal">
                      {market.name}
                    </h3>
                    <p className="text-pretty text-base leading-relaxed text-caco3-white/60">
                      {chem(market.use)}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
