/**
 * As três famílias do sistema (BRAND.md): Space Grotesk para título,
 * Inter para corpo, DM Mono sempre que o número for protagonista.
 */
import { loadFont as loadDisplay } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadBody } from "@remotion/google-fonts/Inter";
import { loadFont as loadMono } from "@remotion/google-fonts/DMMono";

export const { fontFamily: fontDisplay } = loadDisplay("normal", {
  weights: ["500", "600"],
  subsets: ["latin", "latin-ext"],
});

export const { fontFamily: fontBody } = loadBody("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"],
});

export const { fontFamily: fontMono } = loadMono("normal", {
  weights: ["400", "500"],
  subsets: ["latin", "latin-ext"],
});
