# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## O que é este repositório

Repositório de **conteúdo de mídia social** do Carteira Inteligente (www.carteira-inteligente.com). Não é um projeto de software: não há build, testes, dependências ou deploy. Os artefatos são textos de posts, roteiros de carrossel e Reels, e briefings de arte — todos em português do Brasil.

Consequência prática: quando pedirem "cria um post", o resultado é um arquivo de texto, não código.

## O produto (contexto para escrever qualquer conteúdo)

Plataforma web **gratuita** de acompanhamento de carteira de investimentos da B3 — ações, FIIs e ETFs. O público é o investidor pessoa física que já investe e quer acompanhar proventos e alocação sem planilha.

O diferencial central é a ausência de fricção no onboarding: **login com Google → importar o extrato da B3 → pronto.** Sem digitação manual de operações e sem Open Finance.

Funcionalidades que podem ser citadas:

- Importação automática do extrato da B3
- Radar de proventos por mês
- Preço-teto com indicador de compra/venda
- Alocação por classe de ativo, com desvios em relação à meta
- Oportunidades de rotação setorial
- Rastreamento de datas com direito
- Metas de patrimônio

Dados de mercado vêm do Yahoo Finance. CTA padrão do site: **"Entrar com o Google"**.

## Canais

- Instagram: `@carteirainteligente_oficial`
- LinkedIn: mesma marca

Instagram e LinkedIn pedem registros diferentes: no Instagram o texto é curto, quebrado em linhas, e o peso está no visual (carrossel/Reels); no LinkedIn cabe um texto mais longo e analítico, com o gancho nas duas primeiras linhas antes do corte do "ver mais".

## Identidade visual

A paleta, a tipografia e as regras de aplicação em arte estão no `BRAND.md`, extraídas do código do site (`../carteira-inteligente`, `src/styles.scss`) — não são escolhas deste repositório. Leia antes de escrever qualquer briefing de arte: o logo é dourado e não verde, e o verde de acento não é cor de botão.

**Toda arte usa o tema claro.** Fundo `#f6f8fa`, card `#ffffff`, borda `#d0d7de`, texto `#1f2328`, secundário `#656d76`, positivo/acento `#1a7f4b`, negativo `#cf222e`, atenção `#b45c0a`. Isto vale para carrossel, imagem única e Reels, e independe de o site tratar o escuro como padrão: nas peças de mídia a decisão é do Fábio, tomada em 18/07/2026. Nenhuma das duas pontas é pura — o fundo é `#f6f8fa`, não `#ffffff`, senão o card branco some.

O dourado tem duas versões no claro, e trocar uma pela outra quebra a legibilidade. `#C9A84C` é a cor do símbolo do logo e serve como grafismo, mas dá só 2,15:1 sobre o fundo claro: reprova até como texto grande, que exige 3:1. Quando o dourado for texto ou régua, use `#8a6b1f` (4,69:1) ou `#a8842f` (3,28:1, só para elemento grande). E não use dourado no número principal de uma arte clara — o contraste vem do corpo do texto, então `#1f2328` (14,8:1) é a escolha certa para o dado que precisa ser lido primeiro.

## Tom de voz

Direto, coloquial e descontraído — o site brinca com o "café esfriar" enquanto o investidor atualiza planilha. A promessa é **praticidade**, não sofisticação financeira.

- Fale com quem já investe, mas não com jargão de mesa de operações. Explique o termo na primeira vez que usar.
- Prefira o concreto ("veja quanto cai de dividendo em março") ao abstrato ("otimize seu fluxo de proventos").
- Sem emoji em excesso, sem tom de guru, sem "faça como os ricos fazem".

## Regras de conteúdo — não negociáveis

**Nunca recomende a compra ou venda de um ativo específico.** Isto não é uma preferência de estilo: recomendação de investimento no Brasil é atividade regulada (CVM, Resolução 20), e a marca não é analista credenciada. O indicador de preço-teto é uma **ferramenta que o usuário usa com os critérios dele** — descreva sempre como funcionalidade do produto, nunca como um sinal nosso de compra. "O app mostra quando o preço passa do teto que você definiu" é aceitável; "PETR4 está barata" não é.

**Nunca prometa ou sugira rentabilidade.** Nada de "rendimento garantido", "dobre seu patrimônio", nem projeções de retorno.

**Nunca use dados de usuários reais.** Prints e exemplos devem usar uma carteira fictícia. Se um ticker real aparecer numa imagem, ele é ilustrativo — e o post precisa deixar isso claro.

**Datar números de mercado.** Cotação, dividend yield ou qualquer número que muda precisa vir com a data de referência, porque o post sobrevive à data em que foi escrito.

## Convenções de arquivo

### `campanhas/` — as imagens

As artes ficam em `campanhas/AAAA-MM-DD/`, uma pasta por dia de publicação, no formato ISO (`campanhas/2026-07-12/`). O formato ISO é deliberado: é o único que faz as pastas ordenarem em ordem cronológica no Finder e no terminal.

Dê às imagens nomes descritivos e sem espaços (`radar-proventos-slide-1.png`, não `ChatGPT Image 11 de jul. de 2026, 22_21_39.png`). Nome de export de ferramenta não diz o que a arte é, e espaços quebram comandos de shell.

### `reels/` — os vídeos

Projeto **Remotion** (React) que gera os Reels. É a única parte do repositório que é código de verdade: tem `package.json`, `node_modules` e build. Uma composição por campanha, registrada em `reels/src/Root.tsx`, com o código em `reels/src/<slug>/`.

```bash
cd reels && npm i                      # primeira vez
npx remotion studio                    # preview interativo
npx remotion render src/index.ts <id> ../campanhas/AAAA-MM-DD/<nome>.mp4
```

O MP4 **não** fica aqui: sai para `campanhas/AAAA-MM-DD/`, junto das imagens daquele dia. `reels/` guarda a receita, `campanhas/` guarda o artefato.

Separe conteúdo de layout num `data.ts`. Número de mercado envelhece, e num vídeo ele está queimado no frame — quando o dado muda, você quer trocar uma linha de dados e re-renderizar, não caçar string dentro de componente.

Remotion é gratuito para times de até 3 pessoas. Acima disso a licença é paga (remotion.pro/license).

### `posts/` — os textos

Um post por arquivo Markdown, nomeado `AAAA-MM-DD-canal-slug.md` (ex.: `2026-07-14-instagram-radar-proventos.md`), organizado em `posts/<canal>/`. A data casa com a pasta correspondente em `campanhas/`, ligando texto e arte.

Cada arquivo abre com frontmatter declarando `canal`, `formato` (carrossel, reels, estático, texto), `status` (rascunho, aprovado, publicado) e `data_publicacao`. Abaixo do frontmatter vem a legenda final, e depois — quando o formato exigir — o roteiro slide a slide ou o briefing de arte, cada um sob seu próprio heading.

Escreva a legenda como ela será publicada: sem marcadores de edição, sem colchetes de placeholder. Se faltar uma informação, pergunte em vez de deixar `[preencher]` no texto.

## Publicação no Instagram

As credenciais **sempre** vêm de `~/.carteira-ig.env`, nunca de variáveis já exportadas na sessão nem de valores digitados na conversa. Carregue com `set -a; source ~/.carteira-ig.env; set +a` antes de rodar `scripts/publicar-instagram.py`. O arquivo mora fora do repositório de propósito: token de publicação não entra em commit.

Uma ressalva sobre o `BASE_URL` que vem de lá: ele aponta para a pasta de uma campanha específica e envelhece a cada post. **Sobrescreva-o** com a pasta da campanha do dia antes de publicar, senão a Meta busca a arte de outra data. O mesmo vale para `PREFIXO_SLIDES`, que é o prefixo dos PNGs daquela campanha.

A Graph API não faz upload de arquivo: ela busca cada imagem por URL pública. Então a arte precisa estar na `main` **antes** da publicação, servida pelo `raw.githubusercontent.com`. Push primeiro, publica depois.

O script decide o formato pelo nome dos arquivos, não por parâmetro: `<prefixo>.mp4` é Reels, `<prefixo>-slide-N.png` é carrossel, `<prefixo>.png` é imagem única. O MP4 é checado primeiro — campanha com vídeo e imagem de mesmo prefixo publica o vídeo. Sem `--publicar` ele apenas simula, e só publica o que estiver com `status: aprovado`.

Reels é o único formato em que a Meta **baixa e recodifica** o arquivo, em vez de só referenciar. O container leva minutos para sair de `IN_PROGRESS`, e por isso o script espera até 5 minutos nesse caminho contra 90s nos outros. Se estourar o tempo, **não republique de cara**: o container pode terminar sozinho depois e você acaba com o Reels no ar duas vezes. Confira o feed antes.

O `raw.githubusercontent.com` serve `.mp4` como `application/octet-stream`, não `video/mp4`, e ainda manda `X-Content-Type-Options: nosniff`. Parece que deveria quebrar, mas a Meta engole numa boa — o Reels de 15/07 foi publicado assim. Não vá procurar outro host por causa disso.

## A confirmar com o Fábio

Estes pontos foram inferidos do site, não informados: o handle exato do LinkedIn, se há outros canais além de Instagram e LinkedIn, e se a convenção de pastas acima corresponde a algum fluxo já existente (ferramenta de agendamento, planilha editorial). Ajuste este arquivo assim que forem definidos.
