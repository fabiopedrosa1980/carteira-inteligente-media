import React from "react";
import { AbsoluteFill, CalculateMetadataFunction, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { c } from "./theme";
import { tickers } from "./data";
import { Hook } from "./Hook";
import { TickerScene } from "./TickerScene";
import { Cta, Fecho } from "./Fecho";
import { getAudioDuration } from "./duracao-audio";

export const FPS = 30;

/** Ordem das cenas. Casa com os ids de narracao.ts e com os arquivos em public/narracao/. */
const CENAS = ["gancho", "cxse3", "bbse3", "bbas3", "petr4", "fecho", "cta"] as const;

/**
 * Respiro depois que a voz cala, antes do corte. Sem isso a cena troca em cima
 * da última sílaba e a leitura fica ofegante.
 */
const RESPIRO = Math.round(0.5 * FPS);

export type ReelsProps = {
  /** Duração de cada cena em frames, na ordem de CENAS. Vem do calculateMetadata. */
  duracoes: number[];
};

/**
 * O tempo de tela é o tempo da fala: cada cena dura o áudio dela mais um respiro.
 * Medir no render em vez de cravar número evita o clássico de reescrever a
 * narração e esquecer de ajustar a timeline.
 */
export const calculateMetadata: CalculateMetadataFunction<ReelsProps> = async () => {
  const segundos = await Promise.all(
    CENAS.map((id) => getAudioDuration(staticFile(`narracao/${id}.wav`))),
  );

  const duracoes = segundos.map((s) => Math.ceil(s * FPS) + RESPIRO);

  return {
    durationInFrames: duracoes.reduce((a, b) => a + b, 0),
    props: { duracoes },
  };
};

export const ReelsDividendosAgosto: React.FC<ReelsProps> = ({ duracoes }) => {
  let cursor = 0;
  const em = (i: number) => {
    const from = cursor;
    cursor += duracoes[i];
    return { from, durationInFrames: duracoes[i] };
  };

  const gancho = em(0);
  const cenasTicker = tickers.map((t, i) => ({ t, ...em(i + 1) }));
  const fecho = em(5);
  const cta = em(6);

  return (
    <AbsoluteFill style={{ backgroundColor: c.bg }}>
      <Sequence name="Gancho" {...gancho}>
        <Narracao id="gancho" />
        <Hook />
      </Sequence>

      {cenasTicker.map(({ t, from, durationInFrames }, i) => (
        <Sequence key={t.ticker} name={t.ticker} from={from} durationInFrames={durationInFrames}>
          <Narracao id={CENAS[i + 1]} />
          <TickerScene t={t} idx={i + 1} total={tickers.length} />
        </Sequence>
      ))}

      <Sequence name="Fecho" {...fecho}>
        <Narracao id="fecho" />
        <Fecho />
      </Sequence>

      <Sequence name="CTA" {...cta}>
        <Narracao id="cta" />
        <Cta />
      </Sequence>
    </AbsoluteFill>
  );
};

const Narracao: React.FC<{ id: string }> = ({ id }) => (
  <Audio src={staticFile(`narracao/${id}.wav`)} />
);
