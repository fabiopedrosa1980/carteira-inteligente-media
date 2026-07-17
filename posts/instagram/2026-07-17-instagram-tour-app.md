---
canal: instagram
formato: reels
status: aprovado
data_publicacao: 2026-07-17
---

6 ativos na carteira. Nenhum digitado à mão.

Esse é o app em 40 segundos, nas três telas que você abre mais.

A Carteira soma tudo sozinha depois que você importa o extrato da B3: patrimônio, o quanto entrou, e os proventos que já caíram na conta.

Em Dividendos fica o radar. São os 12 meses do ano com o que cada ativo seu paga em cada um, então dá pra ver o mês mais cheio antes dele chegar.

Na Análise, o preço-teto é seu. Você define o critério e o app avisa quando o preço passa dele. Só isso. Quem decide o que fazer com a informação é você.

A carteira do vídeo não é de ninguém: os valores são ilustrativos, e os tickers estão ali só pra tela não ficar vazia.

A Carteira Inteligente não é analista registrada na CVM e não recomenda compra nem venda. Os números saem dos critérios que você definiu, aplicados a dados públicos. A decisão é sua.

Entra com o Google e importa o extrato, no link da bio. É de graça.

## Roteiro cena a cena

O vídeo tem 41s. Cada cena dura o tempo da narração dela mais meio segundo de respiro, calculado no render.

**Cena 1 — gancho (4s)**
Tela: "6 ativos." em preto, "Zero digitados." em verde, e os seis tickers entrando um a um. Abaixo, "Importados do extrato da B3."
Narração: "Esta carteira tem seis ativos. Nenhum deles foi digitado à mão."

**Cena 2 — Carteira (11s)**
Tela: a aba Carteira do app. Patrimônio Total contando até R$ 52.475,00, depois Investido, Ganho, Variação, Div. Recebidos e Div. a receber. A lista dos seis ativos entra por último.
Narração: "Esta é a tela de Carteira. Patrimônio total, o quanto você investiu, e os proventos que já caíram na conta. Tudo somado sozinho, direto do extrato da B3."

**Cena 3 — Dividendos, aba Radar (9s)**
Tela: o radar de proventos, Jan a Dez, com os chips de ticker em cada mês. Agosto marcado com a estrela de melhor mês e o alerta de oportunidade. Mês sem provento mostra "-".
Narração: "Aqui é o radar de proventos: os doze meses do ano, e o que cada ativo seu paga em cada um. Nesta carteira, agosto é o mês mais cheio."

**Cena 4 — Análise, aba Decisão (10s)**
Tela: dois cards de preço-teto. ITSA4 abaixo do teto (verde), TAEE11 acima (âmbar), cada um com a régua e o risco do teto. Abaixo, o aviso legal do próprio app.
Narração: "Na Análise, o preço teto é o seu. Você define o critério, e o app marca quando o preço passa dele. Não é recomendação. A decisão é sua."

**Cena 5 — CTA (6s)**
Tela: logo, "A sua carteira da B3, sem planilha", e o botão "Entrar com o Google".
Narração: "Entra com o Google, importa o extrato da B3, e a carteira se monta. É de graça."

## Briefing de arte

Vídeo em `campanhas/2026-07-17/tour-app.mp4`, 1080x1920, 41s, gerado pela composição `tour-app` do Remotion (`reels/src/tour-app/`).

**As telas são recriação, não print.** O app real só abre logado (`/app/*` está atrás do `authGuard`) e com dado de gente de verdade vindo do backend, que não pode entrar numa peça. Então cada tela foi remontada em Remotion a partir do código do site: os rótulos das quatro abas e os `iconPath` saem do `dashboard.ts`, os seis cards de resumo saem do `portfolio-summary`, as sub-abas de Dividendos (Radar, Histórico, Recebidos, Projetados) e de Análise (Decisão, Composição, Alocação) saem dos respectivos componentes, e o Radar abre na sub-aba padrão do app.

Tema claro do sistema, como as peças desde 15/07: fundo `#f6f8fa`, card `#ffffff`, texto `#1f2328`, verde de acento `#1a7f4b`. O botão do CTA é `#2f855a`, o verde de botão do site, porque o de acento reprova AA com texto branco.

O selo "Carteira fictícia · valores ilustrativos" fica em toda cena que mostra número, acima da faixa que a UI do Instagram cobre. Ele não é decorativo: os tickers são reais e os valores não, e a peça precisa dizer isso sozinha, sem depender da legenda.

Narração com a voz Luciana do macOS, gerada por `node gera-narracao.ts tour-app`. Sem trilha embutida: a música entra pela biblioteca do Instagram ao postar.

## Sobre os dados

Nenhum número aqui veio do mercado, e por isso não há data de consulta: não existe o que datar quando nada é cotação. A carteira é inventada em `reels/src/tour-app/data.ts`, com seis posições, e os totais são calculados a partir delas. Patrimônio (R$ 52.475,00) é a soma das posições, Ganho (R$ 4.470,00) é patrimônio menos investido, e Variação (+9,3%) é o ganho sobre o investido. Mudar uma linha reajusta os cards sozinho.

Os tickers são reais porque uma carteira de demonstração com papéis inventados não parece um app de B3. Eles são ilustrativos: `precoAtual` é o preço de uma carteira que não existe, não a cotação do papel.

O radar é derivado das posições e filtrado por classe, como no app. A cena mostra a classe Ações, então só aparecem os quatro papéis de ação. Agosto é o mês mais cheio dessa carteira fictícia e também é o próximo mês, então leva as duas marcas.

A narração não comemora o ganho da carteira em nenhum momento. O número está na tela porque o card existe no app, não porque seja resultado a vender: carteira fictícia com lucro narrado vira promessa de rentabilidade.

## A conferir antes de publicar

O `status` está como `rascunho`, então o script não publica. A data (17/07) é o próximo dia livre: 16/07 já saiu o carrossel da calculadora. Se for outro dia, mova a pasta em `campanhas/` junto.

A arte precisa estar na `main` antes de publicar, porque a Graph API busca o arquivo por URL. Push primeiro, publica depois, e sobrescreva `BASE_URL` e `PREFIXO_SLIDES` com a campanha de 17/07.
