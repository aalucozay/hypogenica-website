"use client";

import { Reveal } from "@/components/ui/reveal";
import { Parallax } from "@/components/ui/parallax";
import { ScrollText } from "@/components/ui/scroll-text";
import { chem } from "@/lib/chem";

const CRITERIA = [
  "Feedstock",
  "Process",
  "Particle control",
  "GHG footprint",
  "Where it can be built",
];

const ROUTES = [
  {
    name: "Mined",
    tag: "GCC",
    values: [
      "Limestone cut out of a quarry",
      "Blasted, crushed, then ground down to size",
      "Limited. The shape and the spread are whatever the mill leaves behind",
      "Emissive. Quarrying, hauling and grinding all burn energy",
      "Wherever the deposit happens to be",
    ],
  },
  {
    name: "Conventional",
    tag: "PCC",
    values: [
      "Limestone again, burned to lime first",
      "Kiln, then slaking, then recarbonation",
      "Good. Set by the chemistry in the reactor",
      "Emissive. Burning the limestone releases CO2 before any of it is recaptured",
      "Beside a kiln, usually on the site of a paper mill",
    ],
  },
  {
    name: "Our mPCC",
    tag: "Microbially precipitated",
    ours: true,
    values: [
      "Atmospheric CO2, captured by bacteria",
      "Bacteria precipitate calcite the way they do underground, at ambient conditions",
      "Set biologically. The organism decides the crystal, so size and morphology are dialled in",
      "Carbon negative. Every gram locks CO2 away instead of releasing it",
      "Modular bioreactors, sited next to the customer",
    ],
  },
];

export function RoutesSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-caco3-white py-32 text-hypogenica-green md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Reveal>
          <Parallax>
            <h2
              id="process-heading"
              className="max-w-4xl text-balance text-3xl font-medium leading-[1.1] tracking-[-0.01em] sm:text-5xl lg:text-6xl"
            >
              <ScrollText
                text="There are three ways to make calcium carbonate."
                dim={0.18}
              />
            </h2>
          </Parallax>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-hypogenica-green/80">
            Two of them start by digging up limestone. Ours starts with the
            carbon already in the air. That is what makes mPCC{" "}
            <span className="font-medium text-future-teal">carbon negative</span>
            , and what lets us control the crystal and build the plant wherever
            the customer is.
          </p>
        </Reveal>

        {/* Desktop: one row per criterion, so the three routes read across.
            The mPCC column is a full-height dark panel — the point of the
            section, made visually. */}
        <Reveal delay={200}>
          <div className="mt-16 hidden md:block">
            <table className="w-full border-separate border-spacing-0 text-left">
              <caption className="sr-only">
                How mined ground calcium carbonate, conventional precipitated
                calcium carbonate and Hypogenica&apos;s microbially precipitated
                calcium carbonate compare
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[19%] pb-6 pr-8">
                    <span className="sr-only">Criterion</span>
                  </th>
                  {ROUTES.map((route) => (
                    <th
                      key={route.name}
                      scope="col"
                      className={`w-[27%] align-bottom ${
                        route.ours
                          ? "rounded-t-lg bg-hypogenica-green px-8 pb-6 pt-8"
                          : "px-8 pb-6"
                      }`}
                    >
                      <span
                        className={`block font-mono text-xs uppercase tracking-[0.18em] ${
                          route.ours
                            ? "text-future-teal"
                            : "text-hypogenica-green/50"
                        }`}
                      >
                        {route.tag}
                      </span>
                      <span
                        className={`mt-2 block text-2xl font-medium tracking-[-0.01em] ${
                          route.ours ? "text-caco3-white" : ""
                        }`}
                      >
                        {route.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CRITERIA.map((criterion, row) => (
                  <tr key={criterion}>
                    <th
                      scope="row"
                      className="border-t border-hypogenica-green/15 py-6 pr-8 align-top text-sm font-medium"
                    >
                      {criterion}
                    </th>
                    {ROUTES.map((route) => (
                      <td
                        key={route.name}
                        className={`px-8 py-6 align-top text-base leading-relaxed ${
                          route.ours
                            ? "border-t border-caco3-white/10 bg-hypogenica-green text-caco3-white/85"
                            : "border-t border-hypogenica-green/15 text-hypogenica-green/70"
                        } ${
                          route.ours && row === CRITERIA.length - 1
                            ? "rounded-b-lg pb-8"
                            : ""
                        }`}
                      >
                        {chem(route.values[row])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Mobile: the same content, one card per route. */}
        <div className="mt-12 space-y-6 md:hidden">
          {ROUTES.map((route, i) => (
            <Reveal key={route.name} delay={i * 80}>
              <div
                className={`rounded-lg p-6 ${
                  route.ours
                    ? "bg-hypogenica-green"
                    : "border border-hypogenica-green/15"
                }`}
              >
                <span
                  className={`block font-mono text-xs uppercase tracking-[0.18em] ${
                    route.ours ? "text-future-teal" : "text-hypogenica-green/50"
                  }`}
                >
                  {route.tag}
                </span>
                <p
                  className={`mt-2 text-2xl font-medium tracking-[-0.01em] ${
                    route.ours ? "text-caco3-white" : ""
                  }`}
                >
                  {route.name}
                </p>
                <dl className="mt-5">
                  {CRITERIA.map((criterion, row) => (
                    <div
                      key={criterion}
                      className={`mt-4 border-t pt-4 ${
                        route.ours
                          ? "border-caco3-white/10"
                          : "border-hypogenica-green/10"
                      }`}
                    >
                      <dt
                        className={`font-mono text-xs uppercase tracking-[0.14em] ${
                          route.ours
                            ? "text-caco3-white/50"
                            : "text-hypogenica-green/50"
                        }`}
                      >
                        {criterion}
                      </dt>
                      <dd
                        className={`mt-1.5 text-pretty text-base leading-relaxed ${
                          route.ours
                            ? "text-caco3-white/85"
                            : "text-hypogenica-green/70"
                        }`}
                      >
                        {chem(route.values[row])}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
