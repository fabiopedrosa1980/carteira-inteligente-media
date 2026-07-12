# Brand Kit — Carteira Inteligente

Referência visual para toda arte de post. As regras de **conteúdo** (o que pode ser dito) estão no `CLAUDE.md`; aqui está a forma.

## Fonte da verdade

O padrão é o site, cujo código vive no repositório `carteira-inteligente` (irmão deste, em `../carteira-inteligente`). Os valores abaixo foram extraídos de `src/styles.scss` e de `public/favicon.svg`, não escolhidos aqui.

**O tema escuro é o padrão da marca** — no site ele é o `:root`, e o claro é uma variante (`body.light-theme`). Arte de mídia social usa o escuro. O tema claro só entra se a peça for um print de tela clara, e nesse caso segue os valores da coluna correspondente.

Quando o site mudar, este arquivo está desatualizado. Confira `src/styles.scss` antes de tratar um hex daqui como verdade.

## Cores

### Superfícies e texto

| Papel | Escuro (padrão) | Claro |
|---|---|---|
| Fundo | `#0d1117` | `#f6f8fa` |
| Card | `#161b22` | `#ffffff` |
| Borda | `#21262d` | `#d0d7de` |
| Texto principal | `#e6edf3` | `#1f2328` |
| Texto secundário | `#7d8590` | `#656d76` |

O fundo da marca é `#0d1117` — um quase-preto azulado. **Não é preto puro.** `#000000` numa arte já denuncia que a peça não saiu deste sistema.

### Acento e sinal

| Papel | Escuro | Claro |
|---|---|---|
| Acento (verde) | `#2ea043` | `#1a7f4b` |
| Positivo | `#68d391` | `#1a7f4b` |
| Negativo | `#fc8181` | `#cf222e` |
| Atenção | `#f6ad55` | `#b45c0a` |

O verde de acento tem uma regra de uso que vem do próprio código: ele é **reservado a acentos** — borda, link, valor positivo. Não é a cor de botão. O botão primário do site é `#2f855a` (mais profundo), e é esse o verde de um CTA desenhado numa arte.

### Classes de ativo

| Classe | Escuro | Claro |
|---|---|---|
| Ações | `#2ea043` | `#1a7f4b` |
| FIIs | `#22d3ee` | `#0e9aa7` |
| ETFs | `#b26bf6` | `#8b2fd6` |

Esse trio foi afastado no círculo de matiz de propósito, para continuar distinguível em pontos de 9px. Qualquer gráfico de alocação numa arte usa exatamente essas três cores — o leitor que já usa o app reconhece a leitura sem legenda.

### Marca

O logo é **dourado**, não verde: `#C9A84C` sobre `#06090F` (`public/favicon.svg` — um gráfico de barras crescente com uma linha de tendência).

O dourado é a assinatura da marca; o verde é a cor do dado. Não troque os papéis: um post inteiro em dourado descola do produto, e um logo verde não é o logo.

## Tipografia

Três famílias, todas Google Fonts — livres para usar em arte, sem licença a comprar.

**Space Grotesk** (600) — títulos e wordmark. No site ela aparece **só na landing**, ou seja, é a fonte com que a marca fala com quem ainda não é usuário. É a fonte de headline de post.

**Inter** (400/500/600/700) — corpo e interface. Escolhida no site pelos numerais tabulares, que é o que faz uma coluna de valores alinhar.

**DM Mono** (300/400) — números e rótulos: ticker, dividend yield, cotação, data, eyebrow. Sempre que um número for protagonista numa arte, ele é DM Mono. É esse contraste — título humanista, número monoespaçado — que dá o ar de painel à peça.

`Cormorant` e `DM Sans` são carregadas no `index.html` do site mas não são usadas em nenhum componente. Não fazem parte do sistema e não entram em arte nenhuma.

### Hierarquia de uma peça

1. **Eyebrow** — DM Mono, caixa alta, `#7d8590`. Diz a seção ("RADAR DE PROVENTOS").
2. **Título** — Space Grotesk 600, `#e6edf3`. Uma ideia só.
3. **Número/destaque** — DM Mono, no verde de acento ou no positivo, conforme o sentido.
4. **Corpo** — Inter 400, `#e6edf3`; apoio em `#7d8590`.

## Contraste (medido, WCAG)

| Combinação | Razão | Veredito |
|---|---|---|
| Texto `#e6edf3` sobre fundo `#0d1117` | 16,0:1 | AAA |
| Verde `#2ea043` sobre fundo `#0d1117` | 5,6:1 | AA |
| Secundário `#7d8590` sobre fundo `#0d1117` | 5,1:1 | AA |
| **Branco `#ffffff` sobre verde `#2ea043`** | **3,4:1** | **reprova AA** |

A última linha é a armadilha: texto branco sobre o verde de acento **não passa** para texto normal. Num botão ou selo desenhado numa arte, use texto escuro (`#0d1117`) sobre o verde, ou o verde profundo `#2ea043` como texto sobre fundo escuro. Isso vale em dobro no feed, onde a peça é vista pequena.

## O que a arte não pode mostrar

Isto não é preferência estética — é o `CLAUDE.md` aplicado à imagem, e a razão é regulatória (CVM) ou de veracidade.

- **Nenhum sinal de compra ou venda.** Nada de selo "ATIVO BARATO", "ATIVO CARO" ou "Preço Justo" como veredito da marca sobre um ticker real. O preço-teto é ferramenta que o usuário parametriza; a arte mostra a funcionalidade, não a conclusão.
- **Nenhuma promessa de rentabilidade.** Nem em copy de arte ("potencialize seus rendimentos"), nem em gráfico de projeção.
- **Carteira fictícia sempre.** Se um ticker real aparecer, a peça diz que é ilustrativo.
- **Número de mercado vem datado.** Cotação e DY mudam; o post não.
- **O produto é gratuito.** Nenhuma arte insinua assinatura, plano ou paywall. O CTA é "Entrar com o Google".

## Estado das artes

`campanhas/2026-07-12/template_carteira_inteligente.png` **não está no padrão e não é publicável como está.** Foi gerada por IA sem briefing e diverge em quase tudo: verde `#62CA3D` e fundo preto puro (em vez de `#2ea043` sobre `#0d1117`), uma sans condensada que não existe no sistema, um menu com "ASSINATURA" num produto gratuito, e um painel com tickers reais recebendo "Preço Justo" e selo "ATIVO BARATO" — exatamente o que a seção acima proíbe. Serve como referência de composição; nada mais.
