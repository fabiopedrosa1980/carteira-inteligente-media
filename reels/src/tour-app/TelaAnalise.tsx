import React from "react";
import { useCurrentFrame } from "remotion";
import { c } from "./theme";
import { fontBody, fontMono } from "./fonts";
import { AppFrame, Selo, SubAbas, TituloTela } from "./Chrome";
import { surge } from "./anim";
import { brl, precoTeto } from "./data";

/**
 * Tela "Análise", sub-aba "Decisão" (/app/analise) — a sub-aba padrão do app.
 *
 * Esta é a cena de maior risco regulatório da peça. O preço-teto é a régua que o
 * USUÁRIO definiu: o card diz onde o preço está em relação a ela e para por aí.
 * Nenhum rótulo aqui vira "compre" ou "venda" (CLAUDE.md, CVM Res. 20), e o
 * aviso não é rodapé de letra miúda — é a última coisa que a cena diz, na
 * redação do próprio app (`legal-disclaimer`).
 */
export const TelaAnalise: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AppFrame ativa="analise">
      <div style={surge(frame, 0)}>
        <TituloTela>Análise</TituloTela>
      </div>

      <div style={surge(frame, 4)}>
        <SubAbas itens={["Decisão", "Composição", "Alocação"]} ativa="Decisão" />
      </div>

      <div
        style={{
          fontFamily: fontBody,
          fontSize: 26,
          color: c.secondary,
          marginBottom: 22,
          ...surge(frame, 8),
        }}
      >
        Preço-teto · o critério é seu
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {precoTeto.map((p, i) => (
          <CardTeto key={p.ticker} frame={frame} delay={14 + i * 8} {...p} />
        ))}
      </div>

      <Aviso frame={frame} />

      <div style={{ marginTop: "auto" }}>
        <Selo />
      </div>
    </AppFrame>
  );
};

/**
 * O teto fica sempre no mesmo ponto da régua (75%) e o preço se move em relação
 * a ele. Escala fixa por card seria pior: dois tetos diferentes dariam duas
 * réguas diferentes, e o olho compararia as barras em vez do que elas dizem.
 */
const TETO_NA_REGUA = 0.75;

const CardTeto: React.FC<{
  frame: number;
  delay: number;
  ticker: string;
  preco: number;
  teto: number;
}> = ({ frame, delay, ticker, preco, teto }) => {
  const abaixo = preco <= teto;
  const cor = abaixo ? c.accent : c.attention;
  const fill = Math.min((preco / teto) * TETO_NA_REGUA, 1);

  return (
    <div
      style={{
        backgroundColor: c.card,
        border: `2px solid ${c.border}`,
        borderRadius: 18,
        padding: "26px 30px",
        ...surge(frame, delay),
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: fontMono, fontWeight: 500, fontSize: 34, color: c.text }}>
          {ticker}
        </span>
        <span
          style={{
            marginLeft: "auto",
            fontFamily: fontBody,
            fontSize: 24,
            fontWeight: 600,
            color: cor,
            backgroundColor: abaixo ? "rgba(26,127,75,.10)" : "rgba(180,92,10,.10)",
            border: `2px solid ${cor}`,
            borderRadius: 999,
            padding: "8px 20px",
          }}
        >
          {abaixo ? "abaixo do seu teto" : "acima do seu teto"}
        </span>
      </div>

      {/* Régua: o preço corre, o teto é o risco fixo. */}
      <div
        style={{
          position: "relative",
          height: 18,
          borderRadius: 999,
          backgroundColor: c.bg,
          border: `1px solid ${c.border}`,
          marginTop: 22,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: `${fill * 100}%`,
            backgroundColor: cor,
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -4,
            bottom: -4,
            left: `${TETO_NA_REGUA * 100}%`,
            width: 4,
            backgroundColor: c.text,
          }}
        />
      </div>

      <div style={{ display: "flex", marginTop: 18 }}>
        <Dado rotulo="Preço" valor={`R$ ${brl(preco)}`} cor={cor} />
        <Dado rotulo="Seu teto" valor={`R$ ${brl(teto)}`} />
      </div>
    </div>
  );
};

const Dado: React.FC<{ rotulo: string; valor: string; cor?: string }> = ({ rotulo, valor, cor }) => (
  <div style={{ flex: 1 }}>
    <div style={{ fontFamily: fontBody, fontSize: 22, color: c.secondary }}>{rotulo}</div>
    <div style={{ fontFamily: fontMono, fontSize: 30, color: cor ?? c.text, marginTop: 4 }}>
      {valor}
    </div>
  </div>
);

/** Redação do `legal-disclaimer` do app, encurtada para caber falada na cena. */
const Aviso: React.FC<{ frame: number }> = ({ frame }) => (
  <div
    style={{
      marginTop: 30,
      borderLeft: `4px solid ${c.border}`,
      paddingLeft: 26,
      fontFamily: fontBody,
      fontSize: 28,
      lineHeight: 1.45,
      color: c.secondary,
      ...surge(frame, 34),
    }}
  >
    Os números são o resultado dos critérios que{" "}
    <strong style={{ color: c.text, fontWeight: 600 }}>você</strong> definiu. Não é recomendação de
    compra ou venda. <strong style={{ color: c.text, fontWeight: 600 }}>A decisão é sua.</strong>
  </div>
);
