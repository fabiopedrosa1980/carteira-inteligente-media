/**
 * Tokens do design system do site (body.light-theme), via BRAND.md.
 * Tema claro é o padrão de arte desde 15/07/2026.
 *
 * Armadilha medida: `attention` sobre `bg` dá 4,4:1 — reprova AA para texto
 * normal. Aqui ele só aparece em corpo grande (≥26px) e sobre pílula tingida,
 * onde AA grande (3:1) é o que vale. Não reduza esses tamanhos sem remedir.
 */
export const c = {
  bg: "#f6f8fa",
  card: "#ffffff",
  border: "#d0d7de",
  accent: "#1a7f4b", // verde de acento (claro)
  text: "#1f2328",
  secondary: "#656d76",
  attention: "#b45c0a", // atenção — status pendente
  gold: "#c9a84c",
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
