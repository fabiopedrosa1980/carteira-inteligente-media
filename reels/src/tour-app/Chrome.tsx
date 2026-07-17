import React from "react";
import { c, safe } from "./theme";
import { fontBody, fontDisplay, fontMono } from "./fonts";

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

/**
 * As quatro abas da barra principal do app, com os mesmos rótulos e os mesmos
 * `iconPath` do dashboard (src/app/components/dashboard/dashboard.ts). Metas e
 * Aposentadoria não entram: no app elas vivem no menu de conta, não na barra.
 */
export type AbaId = "carteira" | "lancamentos" | "dividendos" | "analise";

const ABAS: { id: AbaId; label: string; iconPath: string }[] = [
  { id: "carteira", label: "Carteira", iconPath: "M3 17l6-6 4 4 7-8M21 7v5M21 7h-5" },
  {
    id: "lancamentos",
    label: "Lançamentos",
    iconPath: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  },
  {
    id: "dividendos",
    label: "Dividendos",
    iconPath:
      "M7 3v3M17 3v3M4 8h16M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z",
  },
  { id: "analise", label: "Análise", iconPath: "M4 19V5M4 19h16M8 16V9M13 16v-5M18 16v-8" },
];

export const Icone: React.FC<{ d: string; size: number; cor: string; largura?: number }> = ({
  d,
  size,
  cor,
  largura = 2,
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d={d} stroke={cor} strokeWidth={largura} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Selo obrigatório de toda cena que mostra número: a carteira do tour não é de
 * ninguém. Os tickers são reais, os valores não (CLAUDE.md — nunca usar dado de
 * usuário real; ticker real em arte é ilustrativo e a peça precisa dizer isso).
 *
 * Fica acima de `safe.bottom` de propósito: mais embaixo some atrás da legenda
 * e dos botões do Reels, e um aviso que não se lê não cumpre o papel.
 */
export const Selo: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: fontMono,
      fontSize: 24,
      color: c.secondary,
      paddingTop: 24,
    }}
  >
    <span
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        flex: "none",
        backgroundColor: c.secondary,
        opacity: 0.5,
      }}
    />
    Carteira fictícia · valores ilustrativos
  </div>
);

/**
 * O app dentro do frame 9:16: cabeçalho, barra de abas e o conteúdo da tela.
 *
 * Recriação, não print: o app real só abre logado e com dado de usuário de
 * verdade, que não pode entrar numa peça. Os rótulos, os ícones e a hierarquia
 * saem do código do site; os números saem do data.ts fictício.
 */
export const AppFrame: React.FC<{ ativa: AbaId; children: React.ReactNode }> = ({
  ativa,
  children,
}) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      paddingTop: safe.top,
      paddingBottom: safe.bottom,
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Cabeçalho: fundo de card, com a borda que o separa do conteúdo. */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18,
        padding: `0 ${safe.x}px 26px`,
        borderBottom: `2px solid ${c.border}`,
      }}
    >
      <Logo size={52} />
      <span style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 32, color: c.text }}>
        Carteira <strong style={{ fontWeight: 600 }}>Inteligente</strong>
      </span>
      <span
        style={{
          marginLeft: "auto",
          width: 52,
          height: 52,
          borderRadius: "50%",
          backgroundColor: c.border,
        }}
      />
    </div>

    {/* Barra de abas. No app ela fica logo abaixo do cabeçalho, não no rodapé —
        o que aqui é sorte: rodapé some atrás da UI do Instagram. */}
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: `22px ${safe.x}px 0`,
        borderBottom: `2px solid ${c.border}`,
      }}
    >
      {ABAS.map((a) => {
        const on = a.id === ativa;
        return (
          <div
            key={a.id}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              paddingBottom: 18,
              borderBottom: `4px solid ${on ? c.accent : "transparent"}`,
              opacity: on ? 1 : 0.45,
            }}
          >
            <Icone d={a.iconPath} size={34} cor={on ? c.accent : c.text} />
            <span
              style={{
                fontFamily: fontBody,
                fontWeight: on ? 600 : 400,
                fontSize: 24,
                color: on ? c.accent : c.text,
              }}
            >
              {a.label}
            </span>
          </div>
        );
      })}
    </div>

    <div
      style={{
        flex: 1,
        padding: `36px ${safe.x}px 0`,
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      {children}
    </div>
  </div>
);

/** Título da tela, no mesmo lugar em que o app põe o `.page-title`. */
export const TituloTela: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2
    style={{
      fontFamily: fontDisplay,
      fontWeight: 600,
      fontSize: 56,
      letterSpacing: "-0.01em",
      color: c.text,
      margin: "0 0 26px",
    }}
  >
    {children}
  </h2>
);

/** Sub-abas (os "chips" de Dividendos e Análise). */
export const SubAbas: React.FC<{ itens: string[]; ativa: string }> = ({ itens, ativa }) => (
  <div style={{ display: "flex", gap: 14, marginBottom: 30 }}>
    {itens.map((t) => {
      const on = t === ativa;
      return (
        <div
          key={t}
          style={{
            fontFamily: fontBody,
            fontWeight: on ? 600 : 400,
            fontSize: 26,
            color: on ? "#ffffff" : c.secondary,
            backgroundColor: on ? c.accent : c.card,
            border: `2px solid ${on ? c.accent : c.border}`,
            borderRadius: 999,
            padding: "14px 28px",
          }}
        >
          {t}
        </div>
      );
    })}
  </div>
);
