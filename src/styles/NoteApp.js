import styled from "@emotion/styled";

export const NoteApp = styled.main(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "80px",
  "& .note-intro": {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
  "& .note-header": {
    "& h1": {
      padding: "5px",
      color: theme.colors.text,
      fontSize: "2.8rem",
    },
    "& p": {
      fontSize: "1.1rem",
      letterSpacing: "-0.025em",
      color: theme.colors.body,
      lineHeight: 1.75,
    },
  },
  "& .note-logo": {
    color: theme.colors.body,
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .note-list": { display: "flex", flexDirection: "column", gap: "30px" },
  "& .note-item": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    "& a": {
      color: theme.colors.text,
      textDecoration: "none",
      transition: "color 0.3s, font-weight 0.3s",
    },
    "& a:hover": { color: "#9a667c", fontWeight: "600" },
  },
  "& .note-section": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    "& .section-title": {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
    "& .svg-wrapper": {
      display: "flex",
      gap: "5px",
      justifyContent: "center",
      alignItems: "center",
      color: theme.colors.body,
    },
    "& h2": {
      margin: 0,
      color: theme.colors.text,
      fontSize: "2rem",
      letterSpacing: "-0.025em",
    },
    "& .note-count": { color: theme.colors.body },
  },
  "& .footer-container": { padding: "30px", position: "relative" },
  "& .footer-container::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: theme.colors.border,
  },
}));
