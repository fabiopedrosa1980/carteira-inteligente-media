import React from "react";
import { useCurrentFrame } from "remotion";
import { c } from "./theme";
import { fontBody, fontMono } from "./fonts";
import { AppFrame, Selo, TituloTela } from "./Chrome";
import { surge, contaAte } from "./anim";
import {
  brl,
  dividendosAReceber,
  dividendosRecebidos,
  ganhoTotal,
  patrimonioTotal,
  posicoes,
  valorAtual,
  valorInvestido,
  variacaoPercent,
} from "./data";

/**
 * Tela "Carteira" (/app/carteira): os seis cards de resumo e a lista de ativos,
 * na mesma ordem do `portfolio-summary` do site. Os rótulos são os do app.
 */
export const TelaCarteira: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AppFrame ativa="carteira">
      <div style={surge(frame, 0)}>
        <TituloTela>Carteira</TituloTela>
      </div>

      <CardHero frame={frame} />

      <div style={{ display: "flex", gap: 18, marginTop: 18 }}>
        <Card frame={frame} delay={14} rotulo="Investido" valor={`R$ ${brl(valorInvestido)}`} />
        <Card
          frame={frame}
          delay={20}
          rotulo="Ganho"
          valor={`+R$ ${brl(ganhoTotal)}`}
          cor={c.accent}
        />
        <Card
          frame={frame}
          delay={26}
          rotulo="Variação"
          valor={`+${variacaoPercent.toFixed(1).replace(".", ",")}%`}
          cor={c.accent}
        />
      </div>

      <div style={{ display: "flex", gap: 18, marginTop: 18 }}>
        {/* Rótulo abreviado: é o `lbl-abbr` que o próprio app usa quando o card
            fica estreito. Por extenso, o valor quebra em duas linhas. */}
        <Card
          frame={frame}
          delay={32}
          rotulo="Div. Recebidos"
          valor={`R$ ${brl(dividendosRecebidos)}`}
        />
        <Card
          frame={frame}
          delay={38}
          rotulo="Div. a receber"
          valor={`R$ ${brl(dividendosAReceber)}`}
        />
      </div>

      <Tabela frame={frame} />

      <div style={{ marginTop: "auto" }}>
        <Selo />
      </div>
    </AppFrame>
  );
};

/** Card de destaque: Patrimônio Total. O número conta até o valor. */
const CardHero: React.FC<{ frame: number }> = ({ frame }) => (
  <div
    style={{
      backgroundColor: c.card,
      border: `2px solid ${c.border}`,
      borderRadius: 20,
      padding: "28px 34px",
      ...surge(frame, 6),
    }}
  >
    <div style={{ fontFamily: fontBody, fontSize: 28, color: c.secondary }}>Patrimônio Total</div>
    <div
      style={{
        fontFamily: fontMono,
        fontWeight: 500,
        fontSize: 76,
        letterSpacing: "-0.02em",
        color: c.text,
        marginTop: 10,
      }}
    >
      R$ {brl(contaAte(frame, patrimonioTotal, 8, 30))}
    </div>
  </div>
);

const Card: React.FC<{
  frame: number;
  delay: number;
  rotulo: string;
  valor: string;
  cor?: string;
}> = ({ frame, delay, rotulo, valor, cor }) => (
  <div
    style={{
      flex: 1,
      backgroundColor: c.card,
      border: `2px solid ${c.border}`,
      borderRadius: 18,
      padding: "22px 24px",
      minWidth: 0,
      ...surge(frame, delay),
    }}
  >
    <div
      style={{
        fontFamily: fontBody,
        fontSize: 22,
        color: c.secondary,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {rotulo}
    </div>
    <div
      style={{
        fontFamily: fontMono,
        fontWeight: 500,
        fontSize: 30,
        color: cor ?? c.text,
        marginTop: 8,
        /* O valor é uma unidade: "R$" numa linha e o número na outra não é
           um card apertado, é um card quebrado. */
        whiteSpace: "nowrap",
      }}
    >
      {valor}
    </div>
  </div>
);

/** Lista de ativos: ticker, classe e valor da posição. */
const Tabela: React.FC<{ frame: number }> = ({ frame }) => (
  <div
    style={{
      marginTop: 24,
      backgroundColor: c.card,
      border: `2px solid ${c.border}`,
      borderRadius: 18,
      overflow: "hidden",
      /* Sem isto o flex encolhe a lista e o `overflow: hidden` come a última
         posição — a carteira do gancho tem seis ativos e a tela mostrava cinco. */
      flexShrink: 0,
      ...surge(frame, 44),
    }}
  >
    {posicoes.map((p, i) => (
      <div
        key={p.ticker}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "14px 26px",
          borderTop: i === 0 ? "none" : `2px solid ${c.bg}`,
          ...surge(frame, 48 + i * 4, 10),
        }}
      >
        <span
          style={{
            width: 10,
            height: 34,
            borderRadius: 3,
            flex: "none",
            backgroundColor: p.classe === "FIIs" ? c.classeFii : c.classeAcoes,
          }}
        />
        <span style={{ fontFamily: fontMono, fontWeight: 500, fontSize: 30, color: c.text }}>
          {p.ticker}
        </span>
        <span style={{ fontFamily: fontBody, fontSize: 24, color: c.secondary }}>{p.nome}</span>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: fontMono,
            fontSize: 28,
            color: c.text,
          }}
        >
          R$ {brl(valorAtual(p))}
        </span>
      </div>
    ))}
  </div>
);
