import { ImageResponse } from "next/og";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site-config";

/** Prerender one card per locale instead of rendering on demand. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card, built as a real PNG because X, LinkedIn and WhatsApp ignore
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
          background: "#0d0c0b",
          borderBottom: "16px solid #d99a3a",
          color: "#f4f2ef",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d99a3a",
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
            color: "#f4f2ef",
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
            color: "#a8a29e",
          }}
        >
          React, Next.js, Django, FastAPI
        </div>
      </div>
    ),
    size
  );
}
