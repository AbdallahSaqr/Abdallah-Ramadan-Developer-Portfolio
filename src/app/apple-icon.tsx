import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon for iOS, which ignores SVG favicons. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#17150f",
          color: "#faf9f7",
          fontSize: 92,
          fontWeight: 600,
          letterSpacing: -6,
          fontFamily: "sans-serif",
        }}
      >
        AR
        <div
          style={{
            width: 104,
            height: 6,
            background: "#d99a3a",
            marginTop: 10,
          }}
        />
      </div>
    ),
    size
  );
}
