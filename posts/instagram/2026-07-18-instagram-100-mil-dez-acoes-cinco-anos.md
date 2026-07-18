---
canal: instagram
formato: estático
status: publicado
data_publicacao: 2026-07-18
---

R$ 100 mil, cinco anos atrás, divididos igualmente entre dez pagadoras de dividendos conhecidas. R$ 10 mil em cada uma, todo provento recebido comprando mais ação do mesmo papel. Como esses dez se comportaram até 18/07/2026?

O total foi de R$ 262.703. Mas o total é a parte menos interessante da conta.

A dispersão é que chama atenção. PETR4 acumulou 428,60% no período e transformou R$ 10 mil em R$ 52,8 mil sozinha. EGIE3, na outra ponta, fez 40,80%: os mesmos R$ 10 mil viraram R$ 14.080. Dez vezes de diferença entre a primeira e a última, com o mesmo aporte, na mesma bolsa, no mesmo período.

Entre as duas pontas cabe tudo. ITUB3 com 239,12%, CXSE3 com 209,43%, BBSE3 com 193,28%. E BBAS3, que muita gente carrega justamente pelo dividendo, veio com 82,79%, atrás de SAPR11, VIVT3 e LEVE3.

Uma observação sobre esses números: eles já embutem o reinvestimento dos proventos. Ou seja, não é só o preço da ação que subiu. É o preço mais cada dividendo que voltou pra dentro da posição e passou a render junto. Quanto maior o dividend yield do papel, maior o peso dessa parte no resultado final.

E o recorte importa mais do que parece. Esta janela específica, julho de 2021 a julho de 2026, pegou um ciclo particularmente bom para petróleo e para banco. Bastaria mover o mês de início para a tabela mudar de cara, inclusive com papel fechando no vermelho.

Números apurados no Investidor10 em 18/07/2026, considerando reinvestimento de dividendos. Rentabilidade passada não diz nada sobre o que vem pela frente.

Isto é um levantamento histórico, não recomendação de compra ou venda. Nenhum desses papéis é sugestão nossa.

No Carteira Inteligente você não precisa montar essa planilha. Importa o extrato da B3 e vê quanto cada ativo seu rendeu, com os proventos que já caíram.

Entrar com o Google, no link da bio. É de graça.

## A arte

Imagem única, 1080x1350, em `campanhas/2026-07-18/100-mil-dez-acoes.png`, gerada de `100-mil-dez-acoes.html` (Chrome headless, `--window-size=1080,1350`).

O slide inteiro é a tabela. Cabeçalho com a marca e a janela apurada (5 anos, jul/21 a jul/26), título em duas linhas com "reinvestido" em dourado, as dez linhas ordenadas do maior para o menor, e o total da carteira fechando embaixo.

Conteúdo da tabela:

| Ativo | Acumulado em 5 anos | Virou |
|---|---|---|
| PETR4 · Petrobras | +428,60% | R$ 52.860 |
| ITUB3 · Itaú Unibanco | +239,12% | R$ 33.912 |
| CXSE3 · Caixa Seguridade | +209,43% | R$ 30.943 |
| BBSE3 · BB Seguridade | +193,28% | R$ 29.328 |
| SAPR11 · Sanepar | +136,23% | R$ 23.623 |
| VIVT3 · Vivo | +131,36% | R$ 23.136 |
| LEVE3 · Mahle Metal Leve | +99,57% | R$ 19.957 |
| BBAS3 · Banco do Brasil | +82,79% | R$ 18.279 |
| TAEE11 · Taesa | +65,85% | R$ 16.585 |
| EGIE3 · Engie Brasil | +40,80% | R$ 14.080 |

Total: R$ 100.000 viraram R$ 262.703, +162,70%.

## Briefing de arte

Tema claro, que passa a ser o padrão de toda arte deste repositório: fundo `#f6f8fa`, card `#ffffff`, borda `#d0d7de`, texto `#1f2328`, secundário `#656d76`. Símbolo do logo em `#C9A84C` no topo, com um halo dourado discreto no canto superior direito como única textura de fundo.

O dourado da marca não passa em texto sobre fundo claro. `#C9A84C` dá 2,15:1 contra o `#f6f8fa`, abaixo dos 3:1 exigidos até para texto grande. Por isso a palavra "reinvestido" do título usa `#8a6b1f` (4,69:1) e a régua acima do total usa `#a8842f`. O `#C9A84C` fica só no símbolo do logo, onde é grafismo e não precisa ser lido.

O número principal (R$ 262.703) é `#1f2328`, não dourado. Numa arte clara o destaque vem do corpo do texto, e 57px em texto de máximo contraste (14,8:1) puxa o olho melhor que qualquer cor de marca.

A coluna "valor investido" não existe na arte. São R$ 10.000 em todas as dez linhas, então repetir dez vezes gastaria largura sem informar nada. O valor aparece uma vez, em destaque, na linha de apoio abaixo do título ("R$ 10.000 em cada papel"). O espaço economizado foi para os números que de fato variam.

Cada linha traz a bandeirinha da empresa (logo 150x150 da base do Investidor10, embutido como data URI para a arte não depender de imagem externa no render), o ticker em Space Grotesk, o nome da companhia em corpo menor, e os dois números em DM Mono com `tabular-nums`, para as casas decimais alinharem em coluna. O logo identifica a companhia, não é endosso.

Percentual positivo em `#1a7f4b`, que é o token de positivo do tema claro. Vale lembrar do `BRAND.md`: no claro, positivo e acento são o mesmo hex, então a cor sozinha não diz que o número subiu. Quem diz é o sinal de mais e o contexto da coluna.

Dois cuidados de render que já cobraram preço aqui. A tabela estourou os 1350px na primeira tentativa e cortou as duas últimas linhas sem avisar, então confira o corte sempre que um número mudar de largura. E o gerador ordena as linhas por rentabilidade antes de montar o HTML, porque numa troca de ticker é fácil deixar a lista fora de ordem.

## Fonte dos dados

Todos os percentuais vêm da seção de rentabilidade acumulada do Investidor10, consultada em 18/07/2026, que calcula o retorno de 5 anos considerando o reinvestimento dos dividendos. Usar uma fonte só para os dez é deliberado: metodologia e janela iguais para todo mundo, senão a tabela compara coisas diferentes.

[BBAS3](https://investidor10.com.br/acoes/bbas3/) 82,79% · [ITUB3](https://investidor10.com.br/acoes/itub3/) 239,12% · [BBSE3](https://investidor10.com.br/acoes/bbse3/) 193,28% · [CXSE3](https://investidor10.com.br/acoes/cxse3/) 209,43% · [SAPR11](https://investidor10.com.br/acoes/sapr11/) 136,23% · [EGIE3](https://investidor10.com.br/acoes/egie3/) 40,80% · [TAEE11](https://investidor10.com.br/acoes/taee11/) 65,85% · [LEVE3](https://investidor10.com.br/acoes/leve3/) 99,57% · [PETR4](https://investidor10.com.br/acoes/petr4/) 428,60% · [VIVT3](https://investidor10.com.br/acoes/vivt3/) 131,36%

Três ressalvas antes de publicar.

**As dez posições fecharam no positivo.** Isso mudou quando a BRAP4 saiu da lista: ela era a única linha negativa (-44,47%) e funcionava como âncora de credibilidade, porque tabela de rentabilidade em que tudo sobe lê como propaganda, não como levantamento. Sem ela, o piso da tabela é EGIE3 com +40,80%. O texto compensa dizendo que a janela pegou um ciclo bom e que outro recorte traria papel no vermelho, mas isso é uma frase na legenda contra dez linhas verdes na imagem. Vale pesar se a peça ainda passa no filtro de não sugerir rentabilidade.

**A coluna de valorização sem dividendos ficou de fora.** O pedido original previa comparar valorização pura contra valorização com proventos, que é o argumento mais forte do post. O Investidor10 publica só o acumulado com reinvestimento. Para montar a outra coluna é preciso o preço de fechamento de julho/2021 de cada papel, de outra fonte, com o cuidado de ajustar desdobramentos e bonificações. Fica como próximo passo.

**CXSE3 mal completa a janela.** A Caixa Seguridade abriu capital em abril de 2021, então os "5 anos" dela têm alguns meses a menos que os dos outros nove, e o ponto de partida é preço de IPO. Não invalida o dado, mas é assimetria que convém saber que existe.

Os tickers do pedido original traziam `SANP11`, que não existe na B3. Assumi `SAPR11` (Sanepar). `ITUB3` foi mantido como pedido, embora a ON do Itaú seja bem menos líquida que a ITUB4. VALE3 saiu para BRAP4 e depois BRAP4 saiu para LEVE3 (Mahle Metal Leve), a pedido do Fábio.
