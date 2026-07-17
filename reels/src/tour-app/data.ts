/**
 * Carteira FICTÍCIA para o tour do app. Nenhum dado de usuário real (CLAUDE.md).
 *
 * Os tickers são reais porque uma carteira de demonstração com papéis inventados
 * não parece um app de B3 — mas os valores são ilustrativos, e por isso o selo
 * "Carteira fictícia" fica na tela em toda cena que mostra número. Não há
 * cotação de mercado aqui: `precoAtual` é preço de uma carteira que não existe,
 * não a cotação do papel. Por isso este arquivo não tem data de consulta: não há
 * o que datar quando nada veio do mercado.
 *
 * Os totais são CALCULADOS, não digitados. Patrimônio, ganho e variação saem das
 * posições. Editar uma linha reajusta os cards sozinho — e evita o clássico de
 * mudar uma posição e deixar o "Patrimônio Total" mentindo no frame.
 */

export type Classe = "Ações" | "FIIs";

export const MESES = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
] as const;

export type Mes = (typeof MESES)[number];

export type Posicao = {
  ticker: string;
  nome: string;
  classe: Classe;
  qtd: number;
  precoMedio: number;
  precoAtual: number;
  /** Meses em que o ativo paga provento. FII paga todo mês; ação segue a empresa. */
  meses: Mes[];
};

const TODO_MES = [...MESES] as Mes[];

export const posicoes: Posicao[] = [
  { ticker: "BBAS3", nome: "Banco do Brasil", classe: "Ações", qtd: 400, precoMedio: 21.5, precoAtual: 24.8, meses: ["Mar", "Jun", "Set", "Dez"] },
  { ticker: "PETR4", nome: "Petrobras", classe: "Ações", qtd: 300, precoMedio: 34.2, precoAtual: 38.6, meses: ["Mai", "Ago", "Nov"] },
  { ticker: "ITSA4", nome: "Itaúsa", classe: "Ações", qtd: 600, precoMedio: 10.1, precoAtual: 11.4, meses: ["Fev", "Ago"] },
  { ticker: "TAEE11", nome: "Taesa", classe: "Ações", qtd: 150, precoMedio: 33.9, precoAtual: 36.2, meses: ["Mar", "Ago", "Dez"] },
  { ticker: "MXRF11", nome: "Maxi Renda", classe: "FIIs", qtd: 900, precoMedio: 10.0, precoAtual: 10.25, meses: TODO_MES },
  { ticker: "HGLG11", nome: "CSHG Logística", classe: "FIIs", qtd: 60, precoMedio: 150.0, precoAtual: 158.0, meses: TODO_MES },
];

const soma = (f: (p: Posicao) => number) => posicoes.reduce((t, p) => t + f(p), 0);

export const valorAtual = (p: Posicao) => p.qtd * p.precoAtual;

export const patrimonioTotal = soma(valorAtual);
export const valorInvestido = soma((p) => p.qtd * p.precoMedio);
export const ganhoTotal = patrimonioTotal - valorInvestido;
export const variacaoPercent = (ganhoTotal / valorInvestido) * 100;

/** Proventos da carteira fictícia. Números da demo, não projeção de retorno. */
export const dividendosRecebidos = 2180.45;
export const dividendosAReceber = 386.2;

/**
 * Radar de proventos, derivado das posições — não digitado.
 *
 * No app o radar é FILTRADO por classe (o toggle Ações/FIIs da tela), então ele
 * é uma função da classe, não uma lista fixa: chip de FII sob a aba "Ações"
 * seria uma tela que o app nunca mostra.
 */
export const radarDe = (classe: Classe) =>
  MESES.map((mes) => ({
    mes,
    tickers: posicoes.filter((p) => p.classe === classe && p.meses.includes(mes)).map((p) => p.ticker),
  }));

/** Mês com mais ativos pagando, dentro da classe. Empate fica com o primeiro. */
export const melhorMes = (classe: Classe) =>
  radarDe(classe).reduce((a, b) => (b.tickers.length > a.tickers.length ? b : a)).mes;

/** O tour é gravado em julho de 2026, então o próximo mês é agosto. */
export const PROXIMO_MES: Mes = "Ago";

/**
 * Preço-teto na aba Decisão.
 *
 * `teto` é o critério do USUÁRIO, não um alvo nosso, e o rótulo diz só onde o
 * preço está em relação a ele. Nada aqui vira "compre" ou "venda": o app mostra
 * a régua, quem lê é o investidor (CLAUDE.md, CVM Res. 20).
 */
export const precoTeto: { ticker: string; preco: number; teto: number }[] = [
  { ticker: "ITSA4", preco: 11.4, teto: 12.0 },
  { ticker: "TAEE11", preco: 36.2, teto: 34.0 },
];

/** Formata no padrão pt-BR (1.234,56). O símbolo entra no componente. */
export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
