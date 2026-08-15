import React from "react";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router";

export default function NoteList({ notes, addNote, deleteNote, togglePin }) {
  return (
    <main className="note-app">
      <div className="note-intro">
        <header className="note-header">
          <div className="note-logo" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-heart"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 5.384v5.721l3.453-2.124q.219.416.55.835l-3.97 2.443A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741l-3.968-2.442q.33-.421.55-.836L15 11.105V5.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 4.217V4a1 1 0 0 0-1-1zm6 2.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
              />
            </svg>
          </div>
          <p>REACT MINI PROJECT</p>
          <h1>한입노트</h1>
          <p>배운 개념을 한입씩 정리하는 나만의 메모장</p>
        </header>
        <NoteForm onAdd={addNote} />
      </div>
      <section className="note-section">
        <div className="section-title">
          <div>
            <p>MY NOTES</p>
            <h2>배운 개념</h2>
          </div>
          <span>{notes.length}개의 메모</span>
        </div>
        <div className="note-list">
          {notes.map((note) => (
            <div className="note-item" key={note.id}>
              <NoteCard
                {...note}
                onTogglePin={() => togglePin(note.id)}
                onDelete={() => deleteNote(note.id)}
              />
              <Link className="detail-link" to={`/notes/${note.id}`}>
                자세히보기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
