import type { MetadataRoute } from "next";

const SITE_URL = "https://hypogenica.com";

// Let crawlers index everything and point them at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
