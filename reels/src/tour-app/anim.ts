import { Easing, interpolate } from "remotion";

export const ease = Easing.bezier(0.16, 1, 0.3, 1);

/**
 * Entrada padrão de todo elemento: aparece subindo um pouco.
 *
 * `extrapolate` travado nas duas pontas de propósito — sem isso o elemento
 * continua "subindo" antes do delay e a cena começa com tudo fora do lugar.
 */
export const surge = (frame: number, delay: number, dy = 22) => ({
  opacity: interpolate(frame, [delay, delay + 12], [0, 1], {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
    easing: ease,
  }),
  translate: `0px ${interpolate(frame, [delay, delay + 16], [dy, 0], {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
    easing: ease,
  })}px`,
});

/**
 * Número que conta até o valor. O dinheiro é o que o olho procura na tela de
 * carteira, e um número que se monta prende mais que um que já está lá.
 */
export const contaAte = (frame: number, valor: number, delay: number, dur = 26) =>
  interpolate(frame, [delay, delay + dur], [0, valor], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
