/**
 * Conteúdo conferido em 15/07/2026, idêntico ao carrossel de
 * campanhas/2026-07-15 e às fontes citadas em
 * posts/instagram/2026-07-15-instagram-dividendos-agosto.md.
 *
 * `status: "ok"` é provento com valor e data fechados; `"wait"` é o que ainda
 * não saiu. A cor do slide vem daqui — o espectador entende o estágio sem ler.
 * Nenhum campo aqui é previsão apresentada como número: o que é expectativa
 * está rotulado como tal.
 */
export type Estagio = "ok" | "wait";

export type Ticker = {
  ticker: string;
  empresa: string;
  logo: string;
  status: Estagio;
  rotulo: string;
  hero: string;
  heroUnidade: string;
  celulas: { k: string; v: string }[];
  nota: string;
};

export const tickers: Ticker[] = [
  {
    ticker: "CXSE3",
    empresa: "Caixa Seguridade",
    logo: "logos/cxse3.jpeg",
    status: "ok",
    rotulo: "Dividendo confirmado",
    hero: "R$ 0,35",
    heroUnidade: "por ação",
    celulas: [
      { k: "Data-com", v: "03/08" },
      { k: "Ex", v: "04/08" },
      { k: "Pagamento", v: "17/08" },
    ],
    nota: "Precisa ter a ação até o fim do pregão de 03/08.",
  },
  {
    ticker: "BBSE3",
    empresa: "BB Seguridade",
    logo: "logos/bbse3.jpeg",
    status: "wait",
    rotulo: "Total aprovado · valor por ação a sair",
    hero: "R$ 3,85 bi",
    heroUnidade: "no total · dividendos do 1º semestre",
    celulas: [
      { k: "Por ação", v: "a definir" },
      { k: "Data-com", v: "a definir" },
      { k: "Sai com o 2T26", v: "03/08" },
    ],
    nota: "O total foi aprovado. O valor por ação sai com o resultado do 2º tri.",
  },
  {
    ticker: "BBAS3",
    empresa: "Banco do Brasil",
    logo: "logos/bbas3.jpeg",
    status: "wait",
    rotulo: "Ainda não anunciado",
    hero: "A anunciar",
    heroUnidade: "provento do 2º trimestre",
    celulas: [
      { k: "Valor", v: "a divulgar" },
      { k: "Data-com", v: "a divulgar" },
      { k: "Ritmo", v: "trimestral" },
    ],
    nota: "O BB paga a cada trimestre. O do 2º tri costuma sair em agosto, depois do balanço.",
  },
  {
    ticker: "PETR4",
    empresa: "Petrobras",
    logo: "logos/petr4.jpeg",
    status: "wait",
    rotulo: "Previsão pelo histórico",
    hero: "Início de agosto",
    heroUnidade: "provento do 2º tri, junto com o balanço",
    celulas: [
      { k: "Ref. 2T25", v: "R$ 0,67" },
      { k: "Como paga", v: "2 parcelas" },
      { k: "Política", v: "45% do FCL" },
    ],
    nota: "O R$ 0,67 é o que a empresa pagou em 2025. O valor de 2026 ainda não existe.",
  },
];

export const DATA_CONSULTA = "15/07/2026";
