import styled from "@emotion/styled";

export const CardStyle = styled.article(({ pinned, theme }) => ({
  minHeight: "210px",
  padding: theme.space.card,
  display: "flex",
  gap: "50px",
  flexDirection: "column",
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radius.card,
  background: theme.colors.surface,
  boxShadow: pinned
    ? `inset 0 5px 0 ${theme.colors.accent},
         0 12px 30px rgb(102 77 111 / 9%)`
    : "0 12px 30px rgb(102 77 111 / 9%)",
  color: theme.colors.text,
  "& h2": {
    margin: 0,
    color: theme.colors.text,
    fontSize: "2.15rem",
    letterSpacing: "-0.025em",
  },
  "& p": {
    margin: "15px 0 24px",
    color: theme.colors.body,
    lineHeight: 1.75,
  },
  "& .card-header": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: theme.space.content,
  },
  "& .btn-style": {
    width: "38px",
    height: "38px",
    padding: 0,
    display: "grid",
    placeItems: "center",
    flex: "0 0 auto",
    border: 0,
    borderRadius: theme.radius.control,
    background: "rgb(255 255 255 / 62%)",
    color: theme.colors.pin,
    cursor: "pointer",
    transition: "background 0.5s",
    '&[aria-pressed="true"]': {
      background: theme.colors.accent,
      color: theme.colors.accentText,
    },
  },
  "& .btn-style:hover": {
    background: `
          radial-gradient(circle at 8% 4%,
            rgb(246 205 221 / 62%), transparent 24rem),
          radial-gradient(circle at 92% 12%,
            rgb(204 236 223 / 68%), transparent 22rem),
          ${theme.colors.page}
        `,
  },
}));
