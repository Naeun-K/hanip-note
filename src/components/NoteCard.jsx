import React from "react";
import PinIcon from "./PinIcon";

export default function NoteCard({
  title,
  body,
  pinned,
  onTogglePin,
  onDelete,
}) {
  return (
    <article className="note-card">
      <h2>{title}</h2>
      <span>{pinned ? "고정" : "해제"}</span>
      <button type="button" className="btn toggle-button" onClick={onTogglePin}>
        <PinIcon />
      </button>
      <button type="button" className="btn delete-button" onClick={onDelete}>
        삭제
      </button>
      <p>{body}</p>
    </article>
  );
}
