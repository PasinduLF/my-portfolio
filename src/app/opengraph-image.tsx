import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default async function OpengraphImage() {
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
          background: "#050505",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 85% 85%, rgba(139,92,246,0.3), transparent 45%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#3b82f6",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Software Engineer
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 24 }}>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#a1a1aa", marginTop: 28, maxWidth: 900 }}>
          Building full-stack products from idea to production — React, Next.js, Node.js.
        </div>
      </div>
    ),
    { ...size }
  );
}
