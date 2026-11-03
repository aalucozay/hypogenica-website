import type { NextConfig } from "next";

// Baseline security headers applied to every response.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Stops other sites framing this one and blocks plugin and base-tag
  // injection. Restricting scripts would need per-request nonces and would
  // make every page dynamic.
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Prefer AVIF (falls back to WebP), which is meaningfully smaller than
    // WebP for the photographic cave imagery on this site.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // www served a second copy of the site; send it to the bare domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hypogenica.com" }],
        destination: "https://hypogenica.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
