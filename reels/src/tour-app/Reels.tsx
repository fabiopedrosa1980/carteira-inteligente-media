import React from "react";
import { AbsoluteFill, CalculateMetadataFunction, Sequence, staticFile } from "remotion";
import { Audio } from "@remotion/media";
import { c } from "./theme";
import { Hook } from "./Hook";
import { TelaCarteira } from "./TelaCarteira";
import { TelaRadar } from "./TelaRadar";
import { TelaAnalise } from "./TelaAnalise";
import { Cta } from "./Fecho";
import { getAudioDuration } from "./duracao-audio";

export const FPS = 30;

/** Ordem das cenas. Casa com os ids de narracao.ts e com os arquivos em public/narracao/tour-app/. */
const CENAS = ["gancho", "carteira", "radar", "analise", "cta"] as const;

/** A narração desta campanha vive numa pasta própria: as cenas "gancho" e "cta"
 *  existem nos dois Reels, e no diretório plano um sobrescreveria o outro. */
const wav = (id: string) => staticFile(`narracao/tour-app/${id}.wav`);

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
  const segundos = await Promise.all(CENAS.map((id) => getAudioDuration(wav(id))));
  const duracoes = segundos.map((s) => Math.ceil(s * FPS) + RESPIRO);

  return {
    durationInFrames: duracoes.reduce((a, b) => a + b, 0),
    props: { duracoes },
  };
};

export const ReelsTourApp: React.FC<ReelsProps> = ({ duracoes }) => {
  let cursor = 0;
  const em = (i: number) => {
    const from = cursor;
    cursor += duracoes[i];
    return { from, durationInFrames: duracoes[i] };
  };

  const cenas = [
    { id: "gancho", node: <Hook /> },
    { id: "carteira", node: <TelaCarteira /> },
    { id: "radar", node: <TelaRadar /> },
    { id: "analise", node: <TelaAnalise /> },
    { id: "cta", node: <Cta /> },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: c.bg }}>
      {cenas.map((cena, i) => (
        <Sequence key={cena.id} name={cena.id} {...em(i)}>
          <Audio src={wav(cena.id)} />
          {cena.node}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
