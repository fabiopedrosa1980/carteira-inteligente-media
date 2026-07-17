/**
 * Roteiro de narração do Reels de tour do app.
 *
 * Rode com:  cd reels && node gera-narracao.ts tour-app
 *
 * Por que o texto aqui não bate com o da tela: TTS lê símbolo mal. "B3" sai como
 * "bê três" com sorte, "R$ 52.475,00" vira sopa, e "preço-teto" tropeça no
 * hífen. Tudo que é número ou símbolo vai por extenso, do jeito que uma pessoa
 * falaria. A tela mostra o símbolo; a voz fala a palavra.
 *
 * O que a voz NÃO faz: comemorar o ganho da carteira. O número está na tela
 * porque o card existe no app, não porque é resultado a vender — carteira
 * fictícia com lucro narrado vira promessa de rentabilidade (CLAUDE.md).
 *
 * As chaves casam com os nomes das Sequences em Reels.tsx.
 */
export const narracao: { id: string; texto: string }[] = [
  {
    id: "gancho",
    texto: "Esta carteira tem seis ativos. Nenhum deles foi digitado à mão.",
  },
  {
    id: "carteira",
    texto:
      "Esta é a tela de Carteira. Patrimônio total, o quanto você investiu, " +
      "e os proventos que já caíram na conta. Tudo somado sozinho, direto do extrato da B três.",
  },
  {
    id: "radar",
    texto:
      "Aqui é o radar de proventos: os doze meses do ano, e o que cada ativo seu paga em cada um. " +
      "Nesta carteira, agosto é o mês mais cheio.",
  },
  {
    id: "analise",
    texto:
      "Na Análise, o preço teto é o seu. Você define o critério, e o app marca quando o preço passa dele. " +
      "Não é recomendação. A decisão é sua.",
  },
  {
    id: "cta",
    texto:
      "Entra com o Google, importa o extrato da B três, e a carteira se monta. É de graça.",
  },
];

export const VOZ = "Luciana";

/**
 * 190 é acima do padrão do `say` (175). A leitura fica no ritmo de Reels sem
 * atropelar os números, que é onde a voz sintética escorrega.
 */
export const PALAVRAS_POR_MINUTO = 190;
