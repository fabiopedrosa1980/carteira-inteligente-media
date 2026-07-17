import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { c, safe } from "./theme";
import { fontBody, fontDisplay, fontMono } from "./fonts";
import { Logo } from "./Chrome";
import { surge } from "./anim";
import { posicoes } from "./data";

/**
 * O gancho é a promessa do produto em duas linhas: a carteira existe e ninguém
 * digitou nada. O contraste ("seis" contra "zero") é o que puxa — e ele precisa
 * funcionar no mudo, porque é assim que a maioria vê os primeiros segundos.
 *
 * Os tickers entram como prova visual, um a um, no lugar de um print que não
 * pode existir: o app real só abre logado, com dado de gente de verdade.
 */
export const Hook: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: c.bg,
        padding: `${safe.top}px ${safe.x}px ${safe.bottom}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, ...surge(frame, 0) }}>
        <Logo size={56} />
        <span style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 32, color: c.text }}>
          Carteira <strong style={{ fontWeight: 600 }}>Inteligente</strong>
        </span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: fontDisplay,
            fontWeight: 600,
            fontSize: 130,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: c.text,
            ...surge(frame, 2, 26),
          }}
        >
          {posicoes.length} ativos.
        </div>
        <div
          style={{
            fontFamily: fontDisplay,
            fontWeight: 600,
            fontSize: 130,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: c.accent,
            marginTop: 6,
            ...surge(frame, 14, 26),
          }}
        >
          Zero digitados.
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 60 }}>
          {posicoes.map((p, i) => (
            <span
              key={p.ticker}
              style={{
                fontFamily: fontMono,
                fontSize: 34,
                color: c.text,
                backgroundColor: c.card,
                border: `2px solid ${c.border}`,
                borderRadius: 12,
                padding: "14px 22px",
                ...surge(frame, 30 + i * 4, 16),
              }}
            >
              {p.ticker}
            </span>
          ))}
        </div>

        <div
          style={{
            fontFamily: fontBody,
            fontSize: 40,
            lineHeight: 1.4,
            color: c.secondary,
            marginTop: 56,
            ...surge(frame, 56),
          }}
        >
          Importados do extrato da B3.
        </div>
      </div>
    </AbsoluteFill>
  );
};
