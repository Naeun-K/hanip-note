import React, { useState } from "react";
import PinIcon from "./PinIcon";
import { CardStyle } from "../styles/CardStyle";
import DeleteModal from "./DeleteModal";

export default function NoteCard({
  title,
  body,
  pinned,
  onTogglePin,
  onDelete,
}) {
  const [isOpen, SetIsOpen] = useState(false);
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
          onClick={() => SetIsOpen(true)}
        >
          삭제
        </button>
      </header>
      <p>{body}</p>
      {isOpen && (
        <DeleteModal onDelete={onDelete} onClose={() => SetIsOpen(false)} />
      )}
    </CardStyle>
  );
}
