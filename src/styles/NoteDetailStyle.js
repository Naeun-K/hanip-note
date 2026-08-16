import styled from "@emotion/styled";

export const NoteDetailStyle = styled.main(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "80px",
  "& .svg-container": {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.body,
  },
  "& .detail-desc": { display: "flex", flexDirection: "column", gap: "8px" },
  "& .desc-container": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    border: `3px solid ${theme.colors.border}`,
    padding: "10px 30px",
    paddingBottom: "40px",
    borderRadius: theme.radius.card,
    transition: "background 0.5s, transform 0.5s",
  },
  "& .desc-container:hover": {
    transform: "scale(1.1)",
    background: `
          radial-gradient(circle at 8% 4%,
            rgb(246 205 221 / 62%), transparent 24rem),
          radial-gradient(circle at 92% 12%,
            rgb(204 236 223 / 68%), transparent 22rem),
          ${theme.colors.page}
        `,
  },
  "& a": {
    color: theme.colors.text,
    textDecoration: "none",
    transition: "color 0.3s, font-weight 0.3s",
  },
  "& a:hover": { color: "#9a667c", fontWeight: "600" },
}));
