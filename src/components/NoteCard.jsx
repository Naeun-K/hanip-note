import React from "react";
import PinIcon from "./PinIcon";
import { CardStyle } from "../styles/CardStyle";

export default function NoteCard({
  title,
  body,
  pinned,
  onTogglePin,
  onDelete,
}) {
  return (
    <CardStyle pinned={pinned}>
      <header className="card-header">
        <button
          type="button"
          aria-pressed={pinned}
          className="btn-style toggle-button"
          onClick={onTogglePin}
        >
          <PinIcon />
        </button>
        <h2>{title}</h2>
        <button
          type="button"
          className="btn-style delete-button"
          onClick={onDelete}
        >
          삭제
        </button>
      </header>
      <p>{body}</p>
    </CardStyle>
  );
}
