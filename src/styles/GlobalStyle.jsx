import { css, Global } from "@emotion/react";

export default function GlobalStyle() {
  return (
    <Global
      styles={(theme) =>
        css({
          body: {
            minWidth: "320px",
            minHeight: "100vh",
            background: `
          radial-gradient(circle at 8% 4%,
            rgb(246 205 221 / 62%), transparent 24rem),
          radial-gradient(circle at 92% 12%,
            rgb(204 236 223 / 68%), transparent 22rem),
          ${theme.colors.page}
        `,
            color: theme.colors.text,
          },
        })
      }
    />
  );
}
