import type { MetadataRoute } from "next";

const SITE_URL = "https://hypogenica.com";

// Single-page site — expose the one canonical URL for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
