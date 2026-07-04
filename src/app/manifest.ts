import type { MetadataRoute } from "next";

// Web app manifest — gives the site an installable identity and themes the
// browser/splash chrome to the dark-green palette.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hypogenica",
    short_name: "Hypogenica",
    description:
      "Sustainable calcium carbonate from atmospheric CO2, through cave science.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d2818",
    theme_color: "#0d2818",
    icons: [
      { src: "/logo-mark.png", sizes: "120x120", type: "image/png" },
    ],
  };
}
