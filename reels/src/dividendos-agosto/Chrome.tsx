import React from "react";
import { c } from "./theme";
import { fontMono, fontDisplay } from "./fonts";

/** Logo do site (public/favicon.svg): barras douradas com linha de tendência. */
export const Logo: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="10" fill="#06090F" />
    <rect x="9" y="30" width="7" height="11" rx="1.5" fill={c.gold} opacity="0.5" />
    <rect x="20.5" y="20" width="7" height="21" rx="1.5" fill={c.gold} opacity="0.75" />
    <rect x="32" y="9" width="7" height="32" rx="1.5" fill={c.gold} />
    <path
      d="M12 26 L24 17 L36 8"
      stroke={c.gold}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.45"
    />
    <circle cx="36" cy="8" r="2.6" fill={c.gold} opacity="0.85" />
  </svg>
);

export const Brand: React.FC<{ idx?: string }> = ({ idx }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
    <Logo size={60} />
    <span
      style={{
        fontFamily: fontDisplay,
        fontWeight: 600,
        fontSize: 34,
        letterSpacing: "0.01em",
        color: c.text,
      }}
    >
      Carteira Inteligente
    </span>
    {idx ? (
      <span
        style={{
          marginLeft: "auto",
          fontFamily: fontMono,
          fontSize: 30,
          color: c.secondary,
          letterSpacing: "0.04em",
        }}
      >
        {idx}
      </span>
    ) : null}
  </div>
);

/**
 * A data de consulta e o "não é recomendação" são obrigatórios em toda peça que
 * mostra número de mercado (CLAUDE.md). Não remova para ganhar espaço.
 *
 * Fica acima de `safe.bottom` de propósito: mais embaixo some atrás da legenda
 * e dos botões do Reels, e um aviso que não se lê não cumpre o papel.
 */
export const Footer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      paddingTop: 30,
      fontFamily: fontMono,
      fontSize: 26,
      lineHeight: 1.5,
      color: c.secondary,
    }}
  >
    {children}
  </div>
);
