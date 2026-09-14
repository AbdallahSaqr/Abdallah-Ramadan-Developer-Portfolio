import { ImageResponse } from "next/og";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site-config";

/** Prerender one card per locale instead of rendering on demand. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card, built as a real PNG — X, LinkedIn and WhatsApp ignore
 * SVG logos. Text stays English in both locales: the name is Latin script and
 * the renderer has no Arabic font bundled.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #1e1b4b 0%, #030303 55%), #030303",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a5b4fc",
          }}
        >
          {site.location}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 86,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 44,
            fontWeight: 600,
            color: "#fda4af",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            maxWidth: 900,
            fontSize: 30,
            lineHeight: 1.4,
            color: "rgba(244,244,245,0.62)",
          }}
        >
          React · Next.js · Django · FastAPI
        </div>
      </div>
    ),
    size
  );
}
