/**
 * Tokens do design system do site (body.light-theme), via BRAND.md.
 * Tema claro é o padrão de arte desde 15/07/2026.
 *
 * Cópia por campanha, como manda a convenção de `reels/src/<slug>/`: a arte de
 * uma peça pode divergir sem quebrar as anteriores. Se divergir do BRAND.md,
 * o BRAND.md é quem manda.
 *
 * Armadilha medida (BRAND.md): `attention` sobre `bg` dá 4,4:1 — reprova AA
 * para texto normal. Aqui ele só aparece em corpo grande (≥26px) e sobre pílula
 * tingida, onde AA grande (3:1) é o que vale. Não reduza esses tamanhos sem
 * remedir. O ciano de FII tem o mesmo problema e não serve para texto.
 */
export const c = {
  bg: "#f6f8fa",
  card: "#ffffff",
  border: "#d0d7de",
  accent: "#1a7f4b", // verde de acento (claro)
  text: "#1f2328",
  secondary: "#656d76",
  attention: "#b45c0a", // atenção — destaque de oportunidade
  gold: "#c9a84c",
  /* Botão primário do site (--btn-add-bg). Não muda entre os temas, e é este o
     verde de um CTA: o de acento reprova AA com texto branco. */
  botao: "#2f855a",
  classeAcoes: "#1a7f4b",
  classeFii: "#0e9aa7",
} as const;

/**
 * Reels tem 1080x1920, mas a UI do Instagram come as bordas: o rodapé some atrás
 * da legenda e dos botões. Todo conteúdo legível vive dentro desta faixa.
 */
export const safe = {
  x: 80,
  top: 150,
  bottom: 330,
} as const;
