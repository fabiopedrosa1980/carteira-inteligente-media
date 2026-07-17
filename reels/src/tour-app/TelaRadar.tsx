import React from "react";
import { useCurrentFrame } from "remotion";
import { c } from "./theme";
import { fontBody, fontMono } from "./fonts";
import { AppFrame, Selo, SubAbas, TituloTela } from "./Chrome";
import { surge } from "./anim";
import { melhorMes, PROXIMO_MES, radarDe } from "./data";

/**
 * Tela "Dividendos", sub-aba "Radar" (/app/dividendos/radar) — a sub-aba padrão
 * do app. Os doze meses e o que cada ativo paga em cada um.
 *
 * A classe é "Ações" porque o radar do app é filtrado por classe, e o toggle da
 * tela sempre tem uma ativa. Mês sem provento mostra "-", como no app: é o vazio
 * que faz agosto parecer cheio.
 */
const CLASSE = "Ações" as const;

export const TelaRadar: React.FC = () => {
  const frame = useCurrentFrame();
  const meses = radarDe(CLASSE);
  const top = melhorMes(CLASSE);

  return (
    <AppFrame ativa="dividendos">
      <div style={surge(frame, 0)}>
        <TituloTela>Dividendos</TituloTela>
      </div>

      <div style={surge(frame, 4)}>
        <SubAbas itens={["Ações", "FIIs"]} ativa={CLASSE} />
      </div>
      <div style={surge(frame, 8)}>
        <SubAbas itens={["Radar", "Histórico", "Recebidos", "Projetados"]} ativa="Radar" />
      </div>

      {/* Legenda dos destaques, como no radar mobile do app: as tags do card são
          só ícone, e o significado vive aqui. */}
      <div style={{ display: "flex", gap: 34, marginBottom: 20, ...surge(frame, 12) }}>
        <Legenda cor={c.gold} texto="Melhor mês" />
        <Legenda cor={c.attention} texto="Oportunidade" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }}
      >
        {meses.map((m, i) => (
          <CardMes
            key={m.mes}
            frame={frame}
            delay={16 + i * 3}
            mes={m.mes}
            tickers={m.tickers}
            top={m.mes === top}
            proximo={m.mes === PROXIMO_MES}
          />
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <Selo />
      </div>
    </AppFrame>
  );
};

const Legenda: React.FC<{ cor: string; texto: string }> = ({ cor, texto }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <span style={{ width: 14, height: 14, borderRadius: 4, backgroundColor: cor }} />
    <span style={{ fontFamily: fontBody, fontSize: 24, color: c.secondary }}>{texto}</span>
  </div>
);

const CardMes: React.FC<{
  frame: number;
  delay: number;
  mes: string;
  tickers: string[];
  top: boolean;
  proximo: boolean;
}> = ({ frame, delay, mes, tickers, top, proximo }) => {
  const destaque = top ? c.gold : proximo ? c.attention : null;

  return (
    <div
      style={{
        backgroundColor: c.card,
        border: `2px solid ${destaque ?? c.border}`,
        borderRadius: 16,
        padding: "16px 18px",
        minHeight: 150,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        ...surge(frame, delay, 14),
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontFamily: fontBody, fontWeight: 600, fontSize: 28, color: c.text }}>
          {mes}
        </span>
        {top ? <Estrela /> : null}
        {proximo ? <Alerta /> : null}
        {tickers.length > 0 ? (
          <span
            style={{
              marginLeft: "auto",
              fontFamily: fontMono,
              fontSize: 22,
              color: c.secondary,
            }}
          >
            {tickers.length}
          </span>
        ) : null}
      </div>

      {tickers.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tickers.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: fontMono,
                fontSize: 19,
                color: c.text,
                backgroundColor: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: 8,
                padding: "5px 9px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      ) : (
        <span style={{ fontFamily: fontMono, fontSize: 26, color: c.secondary, opacity: 0.5 }}>
          -
        </span>
      )}
    </div>
  );
};

/* Agosto é o melhor mês E o próximo, e mostra as duas tags. A borda é uma só e
   fica com o ouro, mas os dois ícones aparecem: a legenda acima promete os dois,
   e legenda que explica símbolo que não está na tela é legenda mentindo. */
const Estrela: React.FC = () => (
  <svg width={26} height={26} viewBox="0 0 24 24">
    <path
      d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9l6.9-.7Z"
      fill={c.gold}
    />
  </svg>
);

const Alerta: React.FC = () => (
  <svg width={26} height={26} viewBox="0 0 24 24" fill="none">
    <path
      d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"
      stroke={c.attention}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 9v4" stroke={c.attention} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17h.01" stroke={c.attention} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
