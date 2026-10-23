import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hello Music — Web Player";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050507",
          backgroundImage:
            "radial-gradient(circle at 50% 20%, rgba(34, 211, 238, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M21 3.25v12.25a3.5 3.5 0 1 1-2.5-3.35V7.15L9.5 9.15v8.35a3.5 3.5 0 1 1-2.5-3.35V5.5a1 1 0 0 1 .8-.98l12-2.5a1 1 0 0 1 1.2.98z" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 900,
                letterSpacing: "2px",
                color: "white",
              }}
            >
              HELLO MUSIC
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#ffffff",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            ● Studio Master
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "monospace",
              textTransform: "uppercase",
              letterSpacing: "3px",
              color: "#a1a1aa",
            }}
          >
            Original Master Soundtrack • ZION
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              letterSpacing: "-1px",
              margin: 0,
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            Fly away
          </h1>

          <p
            style={{
              fontSize: "24px",
              color: "#d4d4d8",
              margin: 0,
              maxWidth: "850px",
              lineHeight: 1.4,
              fontWeight: 300,
            }}
          >
            &ldquo;And once you have learned to fly in your mind, even the universe is no longer the limit.&rdquo;
          </p>
        </div>

        {/* Bottom Bar: Curations & URL */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "28px", color: "#a1a1aa", fontSize: "14px", fontFamily: "monospace" }}>
            <span>Master Release</span>
            <span>•</span>
            <span>Lossless Studio Audio</span>
            <span>•</span>
            <span>ZION</span>
          </div>

          <div
            style={{
              fontSize: "15px",
              fontFamily: "monospace",
              color: "#22d3ee",
              fontWeight: 600,
            }}
          >
            hellomusic-alpha.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
