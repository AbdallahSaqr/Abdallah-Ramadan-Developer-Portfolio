import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Browser tab icon: the AR monogram as a flat block, legible at 16px. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17150f",
          color: "#faf9f7",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: -2,
          fontFamily: "sans-serif",
        }}
      >
        AR
      </div>
    ),
    size
  );
}
