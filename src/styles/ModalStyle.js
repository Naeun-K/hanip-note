import styled from "@emotion/styled";

export const ModalStyle = styled.div(({ theme }) => ({
  overflow: "hidden",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: " rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
  "& .modal-content": {
    background: `
          radial-gradient(circle at 8% 4%,
            rgb(246 205 221 / 62%), transparent 24rem),
          radial-gradient(circle at 92% 12%,
            rgb(204 236 223 / 68%), transparent 22rem),
          ${theme.colors.page}
        `,
    borderRadius: theme.radius.card,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "30px 50px",
  },
  "& .form-heading": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .form-heading-wrpper": {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "flex-end",
    color: theme.colors.body,
    lineHeight: 1.75,
  },
  " & .modal-desc": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  "& h2": {
    margin: 0,
    color: theme.colors.text,
    fontSize: "1.5rem",
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
    fontSize: "0.9rem",
  },
  "& .deco": {
    margin: "0px",
    width: "100%",
    borderRadius: theme.radius.control,
    padding: "8px 15px",
    fontSize: "1rem",
    border: `1px solid ${theme.colors.border}`,
    boxSizing: "border-box",
  },
  "& .input-style": {
    outline: "none",
    minWidth: "300px",
    transition: "border 0.2s, box-shadow 0.2s",
  },
  "& .input-style:focus": {
    border: "0.8px solid #fcc7fe",
    boxShadow: "0 0 0 3px rgba(249, 125, 253, 0.4)",
  },
  "& .button-style": {
    cursor: "pointer",
    transition: "background-color 0.5s, transform 0.5s",
  },
  "& .button-style:hover": {
    backgroundColor: "#fcc7fe",
    transform: "translateY(5px)",
  },
  "& .btn-container": {
    display: "flex",
    gap: "10px",
  },
  "& .cancel-btn": { backgroundColor: "#f6f3f3" },
  "& .submit-btn": { backgroundColor: theme.colors.button },
  "& textarea": {
    resize: "vertical",
    minHeight: "180px",
  },
}));
