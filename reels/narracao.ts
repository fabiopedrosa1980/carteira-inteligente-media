/**
 * Roteiro de narração do Reels de dividendos de agosto.
 *
 * Rode com:  cd reels && node --experimental-strip-types narracao.ts
 * Gera reels/public/narracao/<cena>.aiff e imprime a duração de cada uma.
 *
 * Por que o texto aqui não bate com o da tela: TTS lê símbolo mal. "R$ 0,35"
 * sai como "erre cifrão zero vírgula trinta e cinco" e "03/08" vira "três
 * barra oito". Tudo que é número vai por extenso, do jeito que uma pessoa
 * falaria. A tela mostra o símbolo; a voz fala a palavra.
 *
 * As chaves casam com os nomes das Sequences em Reels.tsx.
 */
export const narracao: { id: string; texto: string }[] = [
  {
    id: "gancho",
    texto:
      "Quatro empresas pagam dividendo em agosto. Só uma já tem data fechada.",
  },
  {
    id: "cxse3",
    texto:
      "A Caixa Seguridade é a única com tudo definido: trinta e cinco centavos por ação. " +
      "Data com em três de agosto, pagamento em dezessete.",
  },
  {
    id: "bbse3",
    texto:
      "A BB Seguridade aprovou três vírgula oito e cinco bilhões do primeiro semestre, " +
      "mas ainda não disse quanto vai por ação. O número sai com o resultado do segundo tri, em três de agosto.",
  },
  {
    id: "bbas3",
    texto:
      "O Banco do Brasil não anunciou nada. " +
      "Paga a cada trimestre, e o do segundo tri costuma cair em agosto, depois do balanço.",
  },
  {
    id: "petr4",
    texto:
      "A Petrobras é previsão pelo histórico. Em dois mil e vinte e cinco, o provento do segundo tri saiu em sete de agosto. " +
      "O de dois mil e vinte e seis ainda não existe.",
  },
  {
    id: "fecho",
    texto: "Isto é calendário, não recomendação. Quem decide é você.",
  },
  {
    id: "cta",
    texto:
      "No Carteira Inteligente, as datas dos seus ativos aparecem sozinhas. " +
      "Importa o extrato da B três e o radar se monta. É de graça.",
  },
];

export const VOZ = "Luciana";

/**
 * 190 é acima do padrão do `say` (175). A leitura fica no ritmo de Reels sem
 * atropelar os números, que é onde a voz sintética escorrega.
 */
export const PALAVRAS_POR_MINUTO = 190;
