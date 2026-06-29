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

const SITE_DESCRIPTION =
  "Hypogenica is a sustainable materials biotech company. We produce pure calcium carbonate from atmospheric CO2 using a bacteria driven, carbon negative process inspired by cave science.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hypogenica.com"),
  title: "Hypogenica | Sustainable Calcium Carbonate Through Cave Science",
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Hypogenica",
    title: "Hypogenica | Sustainable Calcium Carbonate Through Cave Science",
    description: SITE_DESCRIPTION,
    url: "https://hypogenica.com",
    images: [
      {
        url: "/images/cave-exploring.jpg",
        width: 5000,
        height: 4000,
        alt: "A caver inside a chamber lined with calcite formations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypogenica | Sustainable Calcium Carbonate Through Cave Science",
    description: SITE_DESCRIPTION,
    images: ["/images/cave-exploring.jpg"],
  },
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
