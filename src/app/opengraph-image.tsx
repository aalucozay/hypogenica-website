import { ImageResponse } from "next/og";

// Branded 1200x630 social card, generated at build/request time. Replaces the
// oversized 5000x4000 photo that was previously used for sharing (wrong aspect
// ratio and far too heavy for a link preview).
export const alt =
  "Hypogenica — sustainable calcium carbonate through cave science.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d2818",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 9999,
              backgroundColor: "#0bdd99",
            }}
          />
          <div
            style={{
              fontSize: 40,
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            hypogenica
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 900,
            }}
          >
            Pure calcium carbonate, made carbon-negative.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.04em",
            }}
          >
            From CO₂, by cave bacteria · Tuscaloosa, Alabama
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
