import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#1c2023",
        color: "white",
        padding: 72,
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 24,
          fontWeight: 700,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 52,
            height: 52,
            background: "#d92f32",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 29,
          }}
        >
          B
        </div>
        {business.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            color: "#f07575",
            fontSize: 24,
            fontWeight: 800,
            letterSpacing: 4,
          }}
        >
          24/7 EMERGENCY DISPATCH
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 64,
            lineHeight: 1.05,
            fontWeight: 800,
          }}
        >
          Towing & Auto Repair
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            color: "#c2c6c8",
            fontSize: 30,
          }}
        >
          {business.city}, {business.region}
        </div>
      </div>
      <div
        style={{ display: "flex", width: 74, height: 7, background: "#d92f32" }}
      />
    </div>,
    size,
  );
}
