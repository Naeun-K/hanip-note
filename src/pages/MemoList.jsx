import React from "react";

export default function MemoList({ notes, togglePin, deleteNote }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          {...note}
          onTogglePin={() => togglePin(note.id)}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
    </div>
  );
}
