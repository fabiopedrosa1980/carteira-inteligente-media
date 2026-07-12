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

### `posts/` — os textos

Um post por arquivo Markdown, nomeado `AAAA-MM-DD-canal-slug.md` (ex.: `2026-07-14-instagram-radar-proventos.md`), organizado em `posts/<canal>/`. A data casa com a pasta correspondente em `campanhas/`, ligando texto e arte.

Cada arquivo abre com frontmatter declarando `canal`, `formato` (carrossel, reels, estático, texto), `status` (rascunho, aprovado, publicado) e `data_publicacao`. Abaixo do frontmatter vem a legenda final, e depois — quando o formato exigir — o roteiro slide a slide ou o briefing de arte, cada um sob seu próprio heading.

Escreva a legenda como ela será publicada: sem marcadores de edição, sem colchetes de placeholder. Se faltar uma informação, pergunte em vez de deixar `[preencher]` no texto.

## A confirmar com o Fábio

Estes pontos foram inferidos do site, não informados: o handle exato do LinkedIn, se há outros canais além de Instagram e LinkedIn, e se a convenção de pastas acima corresponde a algum fluxo já existente (ferramenta de agendamento, planilha editorial). Ajuste este arquivo assim que forem definidos.
