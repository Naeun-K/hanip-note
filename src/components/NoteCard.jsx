import React from "react";
import PinIcon from "./PinIcon";
import styled from "@emotion/styled";

const Card = styled.article(({ pinned, theme }) => ({
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
}));

const CardHeader = styled.header(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.space.content,
}));

const PinButton = styled.button(({ theme }) => ({
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
  '&[aria-pressed="true"]': {
    background: theme.colors.accent,
    color: theme.colors.accentText,
  },
}));

export default function NoteCard({
  title,
  body,
  pinned,
  onTogglePin,
  onDelete,
}) {
  return (
    // <li>
    <Card pinned={pinned}>
      <CardHeader>
        <PinButton
          type="button"
          aria-pressed={pinned}
          className="btn toggle-button"
          onClick={onTogglePin}
        >
          <PinIcon />
        </PinButton>
        <h2>{title}</h2>
        <PinButton
          type="button"
          className="btn delete-button"
          onClick={onDelete}
        >
          삭제
        </PinButton>
      </CardHeader>
      <p>{body}</p>
    </Card>
    // {/* </li> */}
  );
}
