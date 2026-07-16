import React from "react";
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { c, safe } from "./theme";
import { fontBody, fontMono } from "./fonts";
import { Brand, Footer } from "./Chrome";
import { DATA_CONSULTA, type Ticker } from "./data";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

/** Entra de baixo com fade, a partir do slot que já é dele no fluxo. */
const surge = (frame: number, delay: number) => ({
  opacity: interpolate(frame, [delay, delay + 14], [0, 1], {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
    easing: ease,
  }),
  translate: `0px ${interpolate(frame, [delay, delay + 18], [24, 0], {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
    easing: ease,
  })}px`,
});

export const TickerScene: React.FC<{ t: Ticker; idx: number; total: number }> = ({ t, idx, total }) => {
  const frame = useCurrentFrame();
  const cor = t.status === "ok" ? c.accent : c.attention;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: c.bg,
        padding: `${safe.top}px ${safe.x}px ${safe.bottom}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Halo na cor do estágio — decorativo, atrás de tudo */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(900px 800px at 84% 62%, ${
            t.status === "ok" ? "rgba(26,127,75,.10)" : "rgba(180,92,10,.11)"
          }, transparent 62%)`,
        }}
      />

      <Brand idx={`0${idx} / 0${total}`} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Identidade do papel */}
        <div style={{ display: "flex", alignItems: "center", gap: 30, ...surge(frame, 0) }}>
          <div
            style={{
              width: 132,
              height: 132,
              borderRadius: 30,
              flex: "none",
              overflow: "hidden",
              backgroundColor: c.card,
              border: `1px solid ${c.border}`,
            }}
          >
            <Img
              src={staticFile(t.logo)}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span
              style={{
                fontFamily: fontMono,
                fontWeight: 500,
                fontSize: 76,
                lineHeight: 1,
                letterSpacing: "0.01em",
                color: c.text,
              }}
            >
              {t.ticker}
            </span>
            <span style={{ fontFamily: fontBody, fontSize: 34, fontWeight: 500, color: c.secondary }}>
              {t.empresa}
            </span>
          </div>
        </div>

        {/* Estágio — a cor carrega o significado */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            alignSelf: "flex-start",
            marginTop: 52,
            padding: "14px 24px",
            borderRadius: 999,
            fontFamily: fontMono,
            fontSize: 26,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: cor,
            backgroundColor: t.status === "ok" ? "rgba(26,127,75,.12)" : "rgba(180,92,10,.12)",
            border: `1px solid ${t.status === "ok" ? "rgba(26,127,75,.28)" : "rgba(180,92,10,.28)"}`,
            ...surge(frame, 8),
          }}
        >
          <span style={{ width: 13, height: 13, borderRadius: "50%", backgroundColor: cor }} />
          {t.rotulo}
        </span>

        {/* Número protagonista */}
        <div style={{ marginTop: 44, ...surge(frame, 16) }}>
          <div
            style={{
              fontFamily: fontMono,
              fontWeight: 500,
              lineHeight: 0.98,
              fontSize: t.hero.length > 10 ? 104 : 150,
              letterSpacing: "-0.02em",
              color: t.status === "ok" ? c.text : c.attention,
            }}
          >
            {t.hero}
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 34, color: c.secondary, marginTop: 20 }}>
            {t.heroUnidade}
          </div>
        </div>

        {/* Datas */}
        <div style={{ display: "flex", gap: 18, marginTop: 54, ...surge(frame, 24) }}>
          {t.celulas.map((cel) => (
            <div
              key={cel.k}
              style={{
                flex: 1,
                backgroundColor: c.card,
                border: `1px solid ${c.border}`,
                borderRadius: 18,
                padding: "26px 24px",
              }}
            >
              <div
                style={{
                  fontFamily: fontMono,
                  fontSize: 22,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: c.secondary,
                }}
              >
                {cel.k}
              </div>
              <div
                style={{
                  fontFamily: fontMono,
                  fontSize: cel.v.length > 7 ? 30 : 46,
                  color: c.text,
                  marginTop: 14,
                  lineHeight: 1.05,
                }}
              >
                {cel.v}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 46,
            fontFamily: fontBody,
            fontSize: 34,
            lineHeight: 1.5,
            color: c.secondary,
            borderLeft: `4px solid ${c.border}`,
            paddingLeft: 26,
            ...surge(frame, 32),
          }}
        >
          {t.nota}
        </div>
      </div>

      <Footer>dados de {DATA_CONSULTA} · não é recomendação</Footer>
    </AbsoluteFill>
  );
};
