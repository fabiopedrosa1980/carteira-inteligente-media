import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame } from "remotion";
import { c, safe } from "./theme";
import { fontDisplay, fontMono } from "./fonts";
import { Brand } from "./Chrome";
import { tickers } from "./data";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

/**
 * O gancho é o contraste real do calendário: quatro empresas na fila, uma só com
 * data fechada. Cria a lacuna sem prometer nada — é o próprio dado que puxa.
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
      <Brand />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: fontMono,
            fontSize: 30,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: c.secondary,
            marginBottom: 34,
            opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp", easing: ease }),
          }}
        >
          Radar de proventos · Agosto/2026
        </div>

        <h1
          style={{
            fontFamily: fontDisplay,
            fontWeight: 600,
            fontSize: 108,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: c.text,
            margin: 0,
            opacity: interpolate(frame, [4, 20], [0, 1], { extrapolateRight: "clamp", easing: ease }),
            translate: `0px ${interpolate(frame, [4, 24], [26, 0], { extrapolateRight: "clamp", easing: ease })}px`,
          }}
        >
          Quatro pagam
          <br />
          dividendo
          <br />
          em agosto.
        </h1>

        <Sequence from={26} layout="none">
          <SoUma />
        </Sequence>

        <Sequence from={44} layout="none">
          <Trilha />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};

const SoUma: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        fontFamily: fontDisplay,
        fontWeight: 600,
        fontSize: 108,
        lineHeight: 1.06,
        letterSpacing: "-0.02em",
        color: c.accent,
        marginTop: 18,
        opacity: interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp", easing: ease }),
        translate: `0px ${interpolate(frame, [0, 18], [22, 0], { extrapolateRight: "clamp", easing: ease })}px`,
      }}
    >
      Só uma já tem data.
    </div>
  );
};

const Trilha: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 60 }}>
      {tickers.map((t, i) => (
        <div
          key={t.ticker}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontFamily: fontMono,
            fontSize: 34,
            color: c.text,
            opacity: interpolate(frame, [i * 6, i * 6 + 14], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: ease }),
            translate: `${interpolate(frame, [i * 6, i * 6 + 16], [-18, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: ease })}px 0px`,
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              flex: "none",
              backgroundColor: t.status === "ok" ? c.accent : c.attention,
            }}
          />
          <span>{t.ticker}</span>
          <span style={{ color: c.secondary, fontSize: 28 }}>
            {t.status === "ok" ? "confirmado" : "ainda por vir"}
          </span>
        </div>
      ))}
    </div>
  );
};
