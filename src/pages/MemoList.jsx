import React from "react";

export default function MemoList({ notes, togglePin, deleteNote }) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          {...note}
          onTogglePin={() => togglePin(note.id)}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
    </ul>
  );
}
