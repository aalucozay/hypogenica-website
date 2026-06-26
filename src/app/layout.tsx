import type { Metadata } from "next";
import { Funnel_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-funnel-sans",
  display: "swap",
});

// Monospace for eyebrow labels, nav, counters and buttons — the "lab" detail
// that gives the layout its technical, editorial feel.
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hypogenica — Using Biotech for a Better Future",
  description:
    "Hypogenica is a sustainable materials biotech company producing high-purity calcium carbonate from atmospheric CO2 with a bacteria-driven, carbon-negative process inspired by cave science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelSans.variable} ${robotoMono.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased bg-hypogenica-green text-caco3-white">
        {children}
      </body>
    </html>
  );
}
