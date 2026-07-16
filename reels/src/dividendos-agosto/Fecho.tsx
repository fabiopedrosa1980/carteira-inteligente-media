import React from "react";
import { AbsoluteFill, Easing, interpolate, Sequence, useCurrentFrame } from "remotion";
import { c, safe } from "./theme";
import { fontBody, fontDisplay, fontMono } from "./fonts";
import { Brand, Footer, Logo } from "./Chrome";
import { DATA_CONSULTA } from "./data";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const surge = (frame: number, delay: number) => ({
  opacity: interpolate(frame, [delay, delay + 14], [0, 1], {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
    easing: ease,
  }),
  translate: `0px ${interpolate(frame, [delay, delay + 18], [24, 0], {
    extrapolateLeft: "clamp" as const,
    extrapolateRight: "clamp" as const,
    easing: ease,
  })}px`,
});

/**
 * O disclaimer não é rodapé de letra miúda aqui: é a mensagem da cena.
 * O post inteiro é calendário de datas, e quem decide o que fazer com elas
 * é o investidor — não a marca (CLAUDE.md, CVM Res. 20).
 */
export const Fecho: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: c.bg,
        padding: `${safe.top}px ${safe.x}px ${safe.bottom}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Brand />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: fontDisplay,
            fontWeight: 600,
            fontSize: 96,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: c.text,
            ...surge(frame, 0),
          }}
        >
          Isto é calendário,
          <br />
          não recomendação.
        </div>
        <div
          style={{
            fontFamily: fontBody,
            fontSize: 44,
            lineHeight: 1.45,
            color: c.secondary,
            marginTop: 40,
            ...surge(frame, 12),
          }}
        >
          Se algum desses papéis faz sentido
          <br />
          pra sua carteira, quem decide é você.
        </div>
        <div
          style={{
            fontFamily: fontMono,
            fontSize: 30,
            lineHeight: 1.5,
            color: c.secondary,
            marginTop: 56,
            borderLeft: `4px solid ${c.border}`,
            paddingLeft: 26,
            ...surge(frame, 22),
          }}
        >
          Datas conferidas em {DATA_CONSULTA} nos comunicados
          <br />
          das empresas. Empresa muda data, confirme no RI.
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** CTA. O produto é gratuito e o botão do site é "Entrar com o Google". */
export const Cta: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: c.bg,
        padding: `${safe.top}px ${safe.x}px ${safe.bottom}px`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(900px 780px at 50% 74%, rgba(26,127,75,.10), transparent 62%)`,
        }}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ ...surge(frame, 0) }}>
          <Logo size={104} />
        </div>
        <div
          style={{
            fontFamily: fontDisplay,
            fontWeight: 600,
            fontSize: 86,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: c.text,
            marginTop: 40,
            ...surge(frame, 8),
          }}
        >
          As datas com direito
          <br />
          dos <em style={{ fontStyle: "normal", color: c.accent }}>seus</em> ativos,
          <br />
          sem planilha.
        </div>
        <div
          style={{
            fontFamily: fontBody,
            fontSize: 42,
            lineHeight: 1.45,
            color: c.secondary,
            marginTop: 36,
            ...surge(frame, 18),
          }}
        >
          Importa o extrato da B3
          <br />e o radar se monta sozinho.
        </div>

        <Sequence from={28} layout="none">
          <Botao />
        </Sequence>
      </div>
      <Footer>
        <div style={{ textAlign: "center" }}>www.carteira-inteligente.com · é de graça</div>
      </Footer>
    </AbsoluteFill>
  );
};

const Botao: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        marginTop: 56,
        display: "inline-flex",
        alignItems: "center",
        gap: 18,
        /* Verde de botão do site. O verde de acento reprova AA com texto branco. */
        backgroundColor: "#2f855a",
        color: "#ffffff",
        fontFamily: fontBody,
        fontWeight: 600,
        fontSize: 44,
        padding: "30px 52px",
        borderRadius: 16,
        opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp", easing: ease }),
        scale: interpolate(frame, [0, 16], [0.9, 1], { extrapolateRight: "clamp", easing: ease }),
      }}
    >
      <GoogleG />
      Entrar com o Google
    </div>
  );
};

const GoogleG: React.FC = () => (
  <svg width={44} height={44} viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);
