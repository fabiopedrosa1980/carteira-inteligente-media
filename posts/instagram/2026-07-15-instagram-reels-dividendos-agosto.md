---
canal: instagram
formato: reels
status: publicado
data_publicacao: 2026-07-15
permalink: https://www.instagram.com/reel/Da33wOKABG_/
---

Quatro empresas pagam dividendo em agosto. Só uma já tem data fechada.

A CXSE3 é essa. R$ 0,35 por ação, data-com em 03/08, pagamento em 17/08. Quem não tiver a ação até o fim do pregão de 03/08 fica de fora dessa rodada.

A BBSE3 aprovou R$ 3,85 bi em dividendos do primeiro semestre, mas ainda não disse quanto vai por ação nem quando fecha a posição. Os dois números saem junto com o resultado do 2º tri, previsto pra 03/08.

BBAS3 não anunciou nada. O banco paga a cada trimestre e o provento do 2º tri costuma cair em agosto, depois do balanço. Por enquanto é expectativa.

PETR4 também. Em 2025 o provento do 2º tri saiu em 07/08, pago em duas parcelas. O de 2026 ainda não existe, então o R$ 0,67 que aparece no vídeo é o do ano passado, não uma previsão nossa.

Datas conferidas em 15/07/2026 nos comunicados das empresas. Empresa muda data, então confirme no RI antes de contar com o dinheiro.

Isto é calendário, não recomendação. Se algum desses papéis faz sentido pra sua carteira, quem decide é você.

No Carteira Inteligente as datas com direito dos seus ativos aparecem sozinhas. Importa o extrato da B3 e o radar se monta.

Entrar com o Google, no link da bio. É de graça.

#investimentos #investimentosinteligentes

## Roteiro

Vídeo de 60s, 1080x1920, 30fps, **com narração**. Sete cenas, na ordem do calendário: do provento fechado ao que ainda nem foi anunciado.

O tempo de cada cena não foi escolhido: é a duração da narração dela mais meio segundo de respiro. Por isso os números abaixo têm decimal quebrado.

**Gancho (0s–5,4s)**
"Quatro pagam dividendo em agosto." / "Só uma já tem data." A segunda linha entra em verde, depois de uma batida. Embaixo, os quatro tickers em lista, cada um com o ponto colorido do seu estágio: CXSE3 verde, os outros três âmbar. Quem parar aqui já leva a informação inteira.

**CXSE3 (5,4s–14,7s)**
Selo verde "dividendo confirmado". R$ 0,35 por ação em DM Mono gigante. Três células: data-com 03/08, ex 04/08, pagamento 17/08. Nota: precisa ter a ação até o fim do pregão de 03/08.

**BBSE3 (14,7s–26,9s)**
Selo âmbar "total aprovado · valor por ação a sair". R$ 3,85 bi no destaque, em âmbar, porque o número que interessa ao investidor (por ação) não é esse. Duas células "a definir" e a data do 2T26.

**BBAS3 (26,9s–35,3s)**
Selo âmbar "ainda não anunciado". Sem número: o destaque é a própria palavra "A anunciar".

**PETR4 (35,3s–46,5s)**
Selo âmbar "previsão pelo histórico". Destaque textual "Início de agosto". O R$ 0,67 aparece rotulado como "Ref. 2T25" numa célula pequena, nunca como destaque, e a nota diz na cara que o valor de 2026 não existe ainda.

**Fecho (46,5s–51s)**
"Isto é calendário, não recomendação." em corpo de título, não em letra miúda de rodapé. Abaixo, a data de conferência e o lembrete de checar o RI.

**CTA (51s–60,3s)**
Logo, "As datas com direito dos seus ativos, sem planilha", e o botão "Entrar com o Google" no verde de botão do site.

## Narração

Voz **Luciana**, a sintética pt-BR nativa do macOS, a 190 palavras por minuto. O texto vive em `reels/narracao.ts` e o áudio é gerado por:

```bash
cd reels && node gera-narracao.ts
```

O script escreve `reels/public/narracao/<cena>.wav` e imprime a duração de cada uma. WAV, não AIFF: o ffmpeg embutido no Remotion é compilado sem o demuxer de aiff, que é o formato padrão do `say`.

O texto falado **não repete o texto da tela**, por dois motivos. TTS lê símbolo mal ("R$ 0,35" vira "erre cifrão zero vírgula trinta e cinco"), então na narração tudo que é número vai por extenso. E o que já está escrito grande na tela não precisa ser lido em voz alta: a primeira versão da narração tinha 79s de fala para 30s de vídeo, e encolheu para 57s ao cortar o que a imagem já dizia.

**Sem trilha embutida.** A música entra pela biblioteca do Instagram na hora de postar: é licenciada pela Meta, vira áudio nomeável (o que ajuda alcance) e não corre risco de o vídeo ser mutado por direito autoral. Não embuta faixa de terceiros no MP4.

## Briefing de arte

Feito em **Remotion** (React), projeto em `reels/`, composição `dividendos-agosto`. O MP4 sai em `campanhas/2026-07-15/reels-dividendos-agosto.mp4`.

```bash
cd reels && npx remotion render src/index.ts dividendos-agosto \
  ../campanhas/2026-07-15/reels-dividendos-agosto.mp4
```

O conteúdo dos quatro papéis vive em `reels/src/dividendos-agosto/data.ts`, separado do layout. Quando a BBSE3 divulgar o valor por ação, ou a Petrobras anunciar o provento, é esse arquivo que muda: troca o `status` de `wait` pra `ok` e a cena inteira reage, inclusive a cor. Não mexa no componente.

Mudou o dado, mude também `reels/narracao.ts` e rode `node gera-narracao.ts` de novo. A duração das cenas sai da duração do áudio via `calculateMetadata`, então a timeline se reajusta sozinha. O que não se ajusta sozinho é a voz continuar falando o número velho.

Tema **claro**, seguindo o `BRAND.md`: fundo `#f6f8fa`, card `#ffffff`, verde de acento `#1a7f4b`, âmbar de atenção `#b45c0a`. Logo dourado no topo. Mesma escolha do carrossel de 15/07, com que este vídeo faz par.

A cor do selo carrega o significado, como no carrossel: verde é provento fechado, âmbar é o que ainda falta sair. Num Reels isso importa mais que no carrossel, porque ninguém pausa pra ler: a cor entrega o estágio antes do texto.

Os logos das empresas vieram dos data URIs do HTML do carrossel, extraídos pra `reels/public/logos/`. São ilustrativos de quem paga o provento, não endosso.

### Faixa segura

O conteúdo respeita 150px no topo, 80px nas laterais e **330px embaixo**, que é onde a UI do Reels põe legenda e botões. O rodapé com a data e o "não é recomendação" fica acima dessa faixa de propósito: aviso coberto pela interface não cumpre o papel.

### Contraste

O âmbar `#b45c0a` sobre o fundo `#f6f8fa` dá 4,4:1, que reprova AA para texto normal e passa só como texto grande (≥24px). Todo âmbar do vídeo está em corpo de 26px ou mais. Se alguém reduzir esses tamanhos, remede antes.

## Fonte dos dados

Os mesmos dados do carrossel de 15/07, conferidos na mesma data. As fontes por ticker, com links, estão em `posts/instagram/2026-07-15-instagram-dividendos-agosto.md` e não se repetem aqui.

O vídeo carrega os números na imagem, então vale o mesmo alerta do carrossel: antes de publicar, confira o RI de cada empresa. BBSE3, BBAS3 e PETR4 devem divulgar justamente no começo de agosto, e um Reels publicado com número velho não tem legenda que conserte.
