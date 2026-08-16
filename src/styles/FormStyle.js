import styled from "@emotion/styled";

export const FormStyle = styled.form(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .form-heading": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  "& .form-heading-wrpper": {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "flex-end",
    color: theme.colors.body,
    lineHeight: 1.75,
  },
  " & .form-desc": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  "& h2": {
    margin: 0,
    color: theme.colors.text,
    fontSize: "2rem",
    letterSpacing: "-0.025em",
  },
  "& .form-desc-style": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "start",
  },
  "& .input-label": {
    fontSize: "1.15rem",
  },
  "& .deco": {
    margin: "0px",
    width: "100%",
    borderRadius: theme.radius.control,
    padding: "8px 15px",
    fontSize: "1.2rem",
    border: `1px solid ${theme.colors.border}`,
    boxSizing: "border-box",
  },
  "& .input-style": {
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
  },
  "& .input-style:focus": {
    border: "0.8px solid #fcc7fe",
    boxShadow: "0 0 0 3px rgba(249, 125, 253, 0.4)",
  },
  "& .button-style": {
    cursor: "pointer",
    backgroundColor: "#fcf1f5",
    transition: "background-color 0.5s, transform 0.5s",
  },
  "& .button-style:hover": {
    backgroundColor: "#fcc7fe",
    transform: "translateY(-5px)",
  },
}));
