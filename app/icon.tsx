import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#faf7f2",
          color: "#c45c3e",
          fontSize: 18,
          fontFamily: "Georgia, serif",
          border: "1px solid #c4a574",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
