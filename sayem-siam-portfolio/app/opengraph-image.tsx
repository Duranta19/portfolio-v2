import { ImageResponse } from "next/og";
import { siteConfig } from "@/src/config";

export const alt = siteConfig.title;
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
          justifyContent: "center",
          padding: "80px",
          background: "#fff8ed",
          color: "#0c0c0c",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b45309",
            marginBottom: 24,
          }}
        >
          {siteConfig.jobTitle}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#57534e",
            marginTop: 32,
            maxWidth: 980,
          }}
        >
          Software Engineer at RoBenDevs · Research in Deep Learning &amp;
          Computer Vision · Dhaka, Bangladesh
        </div>
      </div>
    ),
    { ...size },
  );
}
