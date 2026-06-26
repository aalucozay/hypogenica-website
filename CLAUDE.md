# Hypogenica — Master Branding & Development Guide

## Project Overview

Hypogenica is a sustainable materials biotech company headquartered in Tuscaloosa, Alabama. The company uses a bacteria-driven process to precipitate calcium carbonate (CaCO3) from atmospheric CO2. The resulting high-purity calcite is used in industrial applications including plastics, cosmetics, drug delivery, and paint fillers.

- **Founded:** August 2020
- **CEO:** Reilly Blackwell (founder)
- **CTO:** Dr. Hazel Barton — Loper Endowed Professor of Geological Sciences at the University of Alabama, a world-renowned cave microbiologist
- **NSF STTR Phase I award recipient** for "Microbially-Produced Precipitated Calcium Carbonates (mPCCs) as a Paint Filler"
- **Participant:** HudsonAlpha/gener8tor AgTech Accelerator (Fall 2025)
- **Award:** First prize ($5,000) at the 2024 Culverhouse Faculty/Staff Competition for "Carbon-Negative CaCO3 Production"
- **Tagline:** "Using biotech for a better future."
- **Key themes:** cave science, biomineralization, carbon capture, sustainability

## Tech Stack

- Next.js 14+ App Router
- TypeScript
- Tailwind CSS
- Deployed on Vercel
- Components live in `src/components/ui/`
- Client components need the `"use client"` directive
- Use shadcn/ui patterns where appropriate

## Design Reference

Inspired by [integratedbio.com](https://integratedbio.com) (Awwwards SOTD). Key characteristics:

- Clean dark backgrounds, high contrast text
- Numbered feature sections with large imagery
- Smooth scroll-triggered fade-in animations
- Horizontal scrolling marquee ticker
- Minimalist navigation
- Newsroom section with card-based article previews
- Generous whitespace, editorial typography

**Avoid:** No curved/wavy section dividers. No parallax. No scroll-jacking. Animations use CSS transitions and Intersection Observer only.

## Typography

- **Font:** Funnel Sans from Google Fonts (import via `next/font/google`)
- **Weights:** Light 300, Regular 400, Medium 500, Bold 700
- **H1:** Bold
- **H2:** Medium
- **Body:** Light/Regular
- The wordmark "hypogenica" is **always lowercase**

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Hypogenica Green | `#081c15` | Primary dark background |
| CaCO3 White | `#ffffff` | Primary text on dark |
| Cloud Gray | `#dae6e5` | Subtle backgrounds, borders |
| Future Teal | `#0bdd99` | Accent, highlights, interactive elements |
| Ralf Yellow | `#fcdb48` | Sparingly — draws the eye, CTAs |

### Palette Rules

- Only Hypogenica Green and White at full opacity as text backgrounds
- Cloud Gray background only with a white box behind text
- Future Teal and Ralf Yellow are accents, used sparingly. Ralf Yellow is rarest.
- **H1:** primarily Ralf Yellow, can be Future Teal
- **H2:** Hypogenica Green, White, or Future Teal — never Ralf Yellow
- H1 and H2 never the same color
- Body text: only black, Hypogenica Green, or white

## Logo

Geometric hexagonal prism referencing the CaCO3 crystal structure and a tilted "H". Tricolor: black, white, Future Teal.

- Store at `public/logo.png`
- Download from https://www.genspark.ai/api/files/s/An0p0xgb
- Best on Hypogenica Green background
- **Never** place over Ralf Yellow or Future Teal backgrounds

## Site Structure (single page scroll)

1. **Navbar** — fixed/sticky, logo left, links right (About, Science, News, Contact), blur background on scroll
2. **Hero** — full viewport, Hypogenica Green background, H1 in Ralf Yellow "Using biotech for a better future.", white subtext, CTA button, fade-up entrance
3. **Science Section** — numbered cards (01, 02, 03): Cave Science, Biomineralization, Carbon Capture. Placeholder image areas. Short descriptions.
4. **Marquee** — infinite horizontal scroll CSS animation, repeating "Carbon-negative CaCO3 — Cleaner. Cheaper. Efficient." with separator dots
5. **Team Section** — heading about experts in cave/materials science, University of Alabama and Sherwin-Williams mentioned, placeholder for team cards
6. **Impact Section** — environmental and economic value, carbon-negative, preserving habitats
7. **News Section** — 3 cards: NSF STTR Award (2024), HudsonAlpha Accelerator (Dec 2025), Culverhouse First Prize (2024). Date, title, snippet, link.
8. **Contact Section** — info@hypogenica.com, Tuscaloosa AL
9. **Footer** — logo, copyright, minimal links

## Animation Guidelines

- Intersection Observer for scroll-triggered fade-in/slide-up
- CSS transitions only (opacity, transform), no JS animation libraries
- Stagger grouped elements with slight delays
- Marquee uses a CSS keyframe `translateX` loop
- All transitions under 800ms
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

## File Structure

```
src/app/layout.tsx                      # root layout, font, metadata
src/app/page.tsx                        # composes all sections
src/components/ui/navbar.tsx
src/components/ui/hero.tsx
src/components/ui/science-section.tsx
src/components/ui/marquee.tsx
src/components/ui/team-section.tsx
src/components/ui/impact-section.tsx
src/components/ui/news-section.tsx
src/components/ui/contact-section.tsx
src/components/ui/footer.tsx
public/logo.png
```

## Important Rules

- **Never run `npm run dev`**
- Always end with: `git add -A && git commit -m "description" && git push origin main`
- Placeholder images should be solid Cloud Gray rectangles with subtle borders, not external services
- Overall feel: premium biotech, dark and confident, scientifically credible, cave/geology undertones
- No WordPress template energy
