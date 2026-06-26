"use client";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-hypogenica-green">
      <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:px-12">
        <div className="max-w-4xl text-left">
          <h1
            className="animate-fade-up text-5xl font-bold leading-[1.05] tracking-tight text-ralf-yellow sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "100ms" }}
          >
            Using biotech for a better future.
          </h1>

          <p
            className="animate-fade-up mt-8 max-w-2xl text-lg font-normal leading-relaxed text-caco3-white sm:text-xl"
            style={{ animationDelay: "260ms" }}
          >
            Current processes for making calcium carbonate are costly,
            inefficient, and harmful for the environment. We&apos;ve patented a
            way to get pure CaCO3 — and it&apos;s cleaner, cheaper, and more
            efficient.
          </p>

          <p
            className="animate-fade-up mt-5 text-base font-medium text-future-teal sm:text-lg"
            style={{ animationDelay: "400ms" }}
          >
            How? Using cave science.
          </p>

          <div
            className="animate-fade-up mt-10"
            style={{ animationDelay: "540ms" }}
          >
            <a
              href="#science"
              className="inline-flex items-center rounded-full bg-future-teal px-8 py-4 text-base font-bold text-hypogenica-green transition-all duration-300 ease-out-expo hover:brightness-110"
            >
              Discover Our Science
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
