---
canal: instagram
formato: carrossel
status: aprovado
data_publicacao: 2026-07-16
---

Quanto custa parar de trabalhar?

Quase todo mundo tem uma idade na cabeça. Bem menos gente tem o número que essa idade exige.

A calculadora de aposentadoria do Carteira Inteligente pede oito informações: sua idade, a idade em que você quer parar, o que já tem guardado, quanto consegue aportar por mês, a rentabilidade e a inflação que você assume, o imposto sobre os rendimentos e a renda que quer receber.

Repare que a rentabilidade e a inflação são chutes seus. A gente não adivinha nenhuma das duas, e não promete nenhuma das duas.

Com as premissas do exemplo (45 anos, R$ 140 mil já guardados, R$ 5 mil de aporte por mês e uma renda desejada de R$ 15 mil), a conta devolve o capital necessário, a idade em que esse ritmo chega lá e o aporte que faria fechar exatamente na idade escolhida. Muda um campo, muda tudo. É essa a graça.

Números ilustrativos, carteira fictícia. Nada aqui é recomendação de investimento.

Pra rodar com os seus números: entre com o Google, importe o extrato da B3 e a calculadora já sai com o que você tem hoje.

www.carteira-inteligente.com

#investimentos #aposentadoria #b3 #financaspessoais #independenciafinanceira #vivaderenda #dividendos #bolsadevalores

## Roteiro dos slides

**Slide 1 — capa**
Gancho: "Quanto custa parar de trabalhar?"
Apoio, em verde: "A conta leva um minuto."

**Slide 2 — as premissas**
Gancho: "Depende de oito números que só você sabe."
Os oito campos da tela reconstruídos em corpo grande: idade atual (45), idade em que quero me aposentar (70), patrimônio que já tenho (R$ 140.000,00), aporte mensal (R$ 5.000,00), rentabilidade anual (12), inflação anual (5), imposto sobre os rendimentos (10) e renda mensal desejada (R$ 15.000,00), esta última em destaque verde.
Rodapé da arte: tudo em reais de hoje; rentabilidade e inflação são premissas do usuário, não projeções nossas.

**Slide 3 — as respostas**
Gancho: "Nesse exemplo, R$ 3,2 milhões."
Os três cards de resposta: capital necessário (R$ 3.258.621), idade que o aporte atual alcança (68 anos) e aporte mensal para fechar aos 70 (R$ 4.311).
Fecho: "Muda um campo, muda tudo. Os oito números são seus."
Sem botão na arte. A chamada fica na legenda e na URL do rodapé.

## Briefing de arte

Arte pronta em `campanhas/2026-07-16/calculadora-aposentadoria.html`, 1080x1350, três PNGs renderizados a partir dele.

A tela da calculadora foi **redesenhada em HTML** com os tokens da marca, não recortada do print. O print original (`calculadora.png`) tem 2950px de largura: reduzido para 1080, o texto da interface cairia para cerca de 10px e ficaria ilegível no celular. Redesenhado, os mesmos campos e os mesmos números aparecem em corpo grande.

Tokens do `BRAND.md`: fundo `#0d1117`, card `#161b22`, borda `#21262d`, acento `#2ea043`, positivo `#68d391`, logo em `#c9a84c`. Space Grotesk nos títulos, Inter no corpo, DM Mono nos números e rótulos. O rodapé com a URL fecha os três slides na mesma base.

Pra regerar os PNGs depois de mexer no HTML:

```bash
cd campanhas/2026-07-16
for i in 1 2 3; do
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
    --hide-scrollbars --force-device-scale-factor=1 --window-size=1080,1350 \
    --virtual-time-budget=4000 \
    --screenshot="calculadora-aposentadoria-slide-$i.png" \
    "file://$PWD/calculadora-aposentadoria.html?s=$i"
done
```
