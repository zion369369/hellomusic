import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "DUS 80 MASTER — %80 Ortak Soru Kampı";
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
          backgroundColor: "#090d16",
          padding: "60px 70px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                backgroundColor: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              🎓
            </div>
            <span style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
              DUS 80 MASTER
            </span>
          </div>
          <div
            style={{
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34d399",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            %80 ORTAK SORU HAVUZU
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <h1
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            610 Yüksek Verimli Spot Soru
          </h1>
          <p style={{ fontSize: "24px", color: "#94a3b8", maxWidth: "900px" }}>
            16 ÖSYM Branşı • 120 Soru Deneme Simülatörü • Aktif Hatırlama Kartları • S610 Turlama Taktiği
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          <span>Temel Bilimler (TBT) & Klinik Bilimler (KBT)</span>
          <span style={{ color: "#10b981", fontWeight: 600 }}>Hedef: %80 Net / 110+ Puan</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
