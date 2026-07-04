import type { Metadata, Viewport } from "next";
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

// Organization structured data so search engines can surface the company name,
// logo, and location as a rich result.
const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hypogenica",
  url: "https://hypogenica.com",
  logo: "https://hypogenica.com/logo.png",
  description: SITE_DESCRIPTION,
  email: "info@hypogenica.com",
  foundingDate: "2020-08",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tuscaloosa",
    addressRegion: "AL",
    addressCountry: "US",
  },
  sameAs: ["https://www.linkedin.com/company/hypogenica/"],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hypogenica.com"),
  title: "Hypogenica | Sustainable Calcium Carbonate Through Cave Science",
  description: SITE_DESCRIPTION,
  applicationName: "Hypogenica",
  formatDetection: { telephone: false },
  appleWebApp: {
    capable: true,
    title: "Hypogenica",
    statusBarStyle: "black-translucent",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

// Tint the mobile browser chrome (address/status bar) to match the dark-green
// background instead of the default white, so it blends with the page.
export const viewport: Viewport = {
  themeColor: "#0d2818",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${funnelSans.variable} ${robotoMono.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased bg-hypogenica-green text-caco3-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-caco3-white focus:px-4 focus:py-2 focus:text-hypogenica-green focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
        {children}
      </body>
    </html>
  );
}
