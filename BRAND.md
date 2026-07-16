# Brand Kit — Carteira Inteligente

Referência visual para toda arte de post. As regras de **conteúdo** (o que pode ser dito) estão no `CLAUDE.md`; aqui está a forma.

## Fonte da verdade

O padrão é o site. O código vive no repositório `carteira-inteligente` (irmão deste, em `../carteira-inteligente`), mas **ele nem sempre está clonado na máquina** — nesse caso, a fonte é o CSS publicado, que é o mesmo `styles.scss` compilado.

Última conferência: **16/07/2026**, contra `https://www.carteira-inteligente.com/styles-FXTELN5M.css`. O hash no nome do arquivo muda a cada deploy; se ele não responder mais, o site mudou e este documento está velho. Pegue o novo em:

```bash
curl -s https://www.carteira-inteligente.com | grep -o 'styles-[A-Z0-9]*\.css'
```

### Qual tema usar

**Arte de mídia social usa o tema claro** — decisão do Fábio, valendo desde 15/07/2026 (o carrossel de dividendos de agosto foi a primeira peça, e o Reels do mesmo tema veio depois). Não é o que o código do site faz.

**No código, o padrão continua sendo o escuro**: no CSS publicado o tema escuro é o `:root` e o claro é a variante `body.light-theme`. Isso importa quando a peça for um print de tela — um print sai escuro por padrão, e uma arte clara em volta dele briga com a imagem. Se a peça carregar print, ou o print vai no tema claro do app, ou a peça inteira vai no escuro.

As duas colunas seguem documentadas abaixo. A coluna clara é a de uso corrente; a escura permanece porque é o que o produto mostra.

## Cores

### Superfícies e texto

A coluna **clara é a de uso corrente em arte**; a escura é o que o app mostra.

| Papel | Claro (arte) | Escuro (app) | Variável |
|---|---|---|---|
| Fundo | `#f6f8fa` | `#0d1117` | `--bg` |
| Card | `#ffffff` | `#161b22` | `--card-bg` |
| Cabeçalho | `#ffffff` | `#0d1117` | `--header-bg` |
| Borda | `#d0d7de` | `#21262d` | `--border` |
| Texto principal | `#1f2328` | `#e6edf3` | `--text-primary` |
| Texto secundário | `#656d76` | `#7d8590` | `--text-secondary` |
| Campo | `#f6f8fa` | `#0d1117` | `--input-bg` |

Nenhuma das duas pontas é pura: o fundo claro é `#f6f8fa`, não `#ffffff`, e o escuro é `#0d1117`, não `#000000`. Branco puro de fundo tira o card de `#ffffff` do lugar — sem a diferença entre os dois, o card some. `#000000` ou `#ffffff` chapados numa arte já denunciam que a peça não saiu deste sistema.

### Acento e sinal

| Papel | Claro (arte) | Escuro (app) | Variável |
|---|---|---|---|
| Acento (verde) | `#1a7f4b` | `#2ea043` | `--accent` |
| Positivo | `#1a7f4b` | `#68d391` | `--color-pos` |
| Negativo | `#cf222e` | `#fc8181` | `--color-neg` |
| Atenção | `#b45c0a` | `#f6ad55` | `--color-warning` |

No tema claro, positivo e acento são **o mesmo hex** (`#1a7f4b`). Então o verde não distingue "é um acento" de "é um número que subiu" — quem distingue é a tipografia (DM Mono para número) e o contexto. Não conte com a cor sozinha para dizer que um valor é positivo.

O verde de acento é **reservado a acentos** — borda, link, valor positivo. Não é a cor de botão. O botão primário é `#2f855a` (`--btn-add-bg`), com texto `#ffffff` (`--btn-accent-text`), e é esse o verde de um CTA desenhado numa arte. O `#2f855a` **não muda entre os temas**: o site não sobrescreve `--btn-add-bg` no claro, então o botão é o mesmo nos dois.

### Classes de ativo

| Classe | Claro (arte) | Escuro (app) | Variável |
|---|---|---|---|
| Ações | `#1a7f4b` | `#2ea043` | `--class-acoes` |
| FIIs | `#0e9aa7` | `#22d3ee` | `--class-fii` |
| ETFs | `#8b2fd6` | `#b26bf6` | `--class-etf` |
| BDRs | `#b45309` | `#f0883e` | `--class-bdr` |

São **quatro**, não três — o site tem BDR. As matizes foram afastadas no círculo de propósito, para continuar distinguíveis em pontos de 9px. Qualquer gráfico de alocação numa arte usa exatamente essas cores: o leitor que já usa o app reconhece a leitura sem legenda.

Cuidado com o BDR no claro: `#b45309` fica perto do laranja de atenção `#b45c0a` — a dois dígitos de distância. Num gráfico que misture classe de ativo e estado, os dois se confundem.

### Setores

O app colore rotação setorial com uma paleta própria, sem nome semântico — a ordem é o que importa.

| Variável | Claro (arte) | Escuro (app) |
|---|---|---|
| `--sector-1` | `#2a78d6` | `#3987e5` |
| `--sector-2` | `#1baf7a` | `#199e70` |
| `--sector-3` | `#eda100` | `#c98500` |
| `--sector-4` | `#4a3aa7` | `#9085e9` |
| `--sector-5` | `#e34948` | `#e66767` |
| `--sector-6` | `#e87ba4` | `#d55181` |
| `--sector-outros` | `#6e7681` | `#6e7681` |

`--sector-outros` é o único hex idêntico nos dois temas. Uma arte sobre setores usa esta paleta na ordem, e o que sobrar é `outros` — não invente uma sétima cor.

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

Os papéis valem nos dois temas; o hex sai da coluna do tema em uso.

1. **Eyebrow** — DM Mono, caixa alta, texto secundário. Diz a seção ("RADAR DE PROVENTOS").
2. **Título** — Space Grotesk 600, texto principal. Uma ideia só.
3. **Número/destaque** — DM Mono, no acento ou no laranja de atenção, conforme o sentido.
4. **Corpo** — Inter 400, texto principal; apoio em texto secundário.

### Raios

O app arredonda com uma escala fixa, e uma arte que empilha card sobre card fica mais próxima do produto se seguir: card `12px` (`--radius-card`), item `14px` (`--radius-item`), chip `10px` (`--radius-chip`), pílula `999px` (`--radius-pill`).

Arte de social é ampliada em relação à tela — um card de 1080px de largura com `12px` de raio parece quase reto. Escale o raio junto com a peça em vez de copiar o valor: a proporção é o que se reconhece, não o pixel.

## Contraste (medido, WCAG)

Medido em 16/07/2026 sobre os hexes acima. AA pede 4,5:1 para texto normal e 3:1 para texto grande, que na régua do WCAG começa em 24px regular ou 18,7px bold. Numa arte de 1080px quase todo texto passa desse piso, então a linha "só AA grande" abaixo raramente incomoda — o rodapé é a exceção, e é justamente onde mora o aviso de "não é recomendação".

### Tema claro (o de arte)

| Combinação | Razão | Veredito |
|---|---|---|
| Texto `#1f2328` sobre fundo `#f6f8fa` | 14,8:1 | AAA |
| Texto `#1f2328` sobre card `#ffffff` | 15,8:1 | AAA |
| Secundário `#656d76` sobre fundo `#f6f8fa` | 4,9:1 | AA |
| Acento `#1a7f4b` sobre fundo `#f6f8fa` | 4,7:1 | AA |
| Negativo `#cf222e` sobre fundo `#f6f8fa` | 5,0:1 | AA |
| Branco `#ffffff` sobre botão `#2f855a` | 4,5:1 | AA (no limite) |
| Branco `#ffffff` sobre acento `#1a7f4b` | 5,0:1 | AA |
| **Atenção `#b45c0a` sobre fundo `#f6f8fa`** | **4,4:1** | **só AA grande** |
| **FII `#0e9aa7` sobre fundo `#f6f8fa`** | **3,2:1** | **só AA grande** |

Duas armadilhas do tema claro, as duas nas últimas linhas:

O **laranja de atenção falha por pouco** (4,4:1) sobre o fundo — mas passa sobre o card branco (4,7:1). Como no sistema o laranja marca justamente o estado "ainda não saiu", ele tende a aparecer em selo e rótulo pequeno, que é onde o problema morde. Se o texto for pequeno, ponha o laranja sobre card branco, não sobre o fundo.

O **ciano de FII é o pior caso da paleta** (3,2:1). Serve para preencher área — fatia de gráfico, barra, ponto — e não para texto. Rótulo de FII escrito em `#0e9aa7` sobre o fundo claro não é legível no feed.

Note que **`#ffffff` sobre o acento `#1a7f4b` passa** (5,0:1). Isso é específico do tema claro e inverte a armadilha antiga: no escuro, branco sobre `#2ea043` reprova.

### Tema escuro (o do app)

| Combinação | Razão | Veredito |
|---|---|---|
| Texto `#e6edf3` sobre fundo `#0d1117` | 16,0:1 | AAA |
| Verde `#2ea043` sobre fundo `#0d1117` | 5,6:1 | AA |
| Secundário `#7d8590` sobre fundo `#0d1117` | 5,1:1 | AA |
| **Branco `#ffffff` sobre verde `#2ea043`** | **3,4:1** | **reprova AA** |

A armadilha do escuro: texto branco sobre o verde de acento **não passa** para texto normal. Num selo, use texto escuro (`#0d1117`) sobre o verde. O botão `#2f855a` com branco continua valendo, porque é mais profundo.

## O que a arte não pode mostrar

Isto não é preferência estética — é o `CLAUDE.md` aplicado à imagem, e a razão é regulatória (CVM) ou de veracidade.

- **Nenhum sinal de compra ou venda.** Nada de selo "ATIVO BARATO", "ATIVO CARO" ou "Preço Justo" como veredito da marca sobre um ticker real. O preço-teto é ferramenta que o usuário parametriza; a arte mostra a funcionalidade, não a conclusão.
- **Nenhuma promessa de rentabilidade.** Nem em copy de arte ("potencialize seus rendimentos"), nem em gráfico de projeção.
- **Carteira fictícia sempre.** Se um ticker real aparecer, a peça diz que é ilustrativo.
- **Número de mercado vem datado.** Cotação e DY mudam; o post não.
- **O produto é gratuito.** Nenhuma arte insinua assinatura, plano ou paywall. O CTA é "Entrar com o Google".

## Estado das artes

`campanhas/2026-07-12/template_carteira_inteligente.png` **não está no padrão e não é publicável como está.** Foi gerada por IA sem briefing e diverge em quase tudo: verde `#62CA3D` e fundo preto puro (em vez de `#2ea043` sobre `#0d1117`), uma sans condensada que não existe no sistema, um menu com "ASSINATURA" num produto gratuito, e um painel com tickers reais recebendo "Preço Justo" e selo "ATIVO BARATO" — exatamente o que a seção acima proíbe. Serve como referência de composição; nada mais.
