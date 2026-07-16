/**
 * Gera a narração do Reels com a voz nativa do macOS e imprime a duração de
 * cada cena, que é o que define o tempo de tela em Reels.tsx.
 *
 *   cd reels && node gera-narracao.ts
 *
 * WAV e não AIFF de propósito: o ffmpeg que vem no Remotion é compilado sem o
 * demuxer de aiff, que é o formato padrão do `say`. Ele lê wav sem reclamar.
 */
import { execFileSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import { narracao, VOZ, PALAVRAS_POR_MINUTO } from "./narracao.ts";

mkdirSync("public/narracao", { recursive: true });

const duracoes: Record<string, number> = {};

for (const { id, texto } of narracao) {
  const wav = `public/narracao/${id}.wav`;

  execFileSync("say", [
    "-v", VOZ,
    "-r", String(PALAVRAS_POR_MINUTO),
    "-o", wav,
    "--data-format=LEI16@22050",
    texto,
  ]);

  const dur = execFileSync("npx", [
    "remotion",
    "ffprobe",
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "csv=p=0",
    wav,
  ])
    .toString()
    .trim();

  duracoes[id] = Number(dur);
  console.log(`${id.padEnd(8)} ${Number(dur).toFixed(2)}s`);
}

const total = Object.values(duracoes).reduce((a, b) => a + b, 0);
console.log(`\ntotal de fala: ${total.toFixed(2)}s (sem as respiradas entre cenas)`);
