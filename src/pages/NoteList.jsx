import Footer from "./Footer";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router";
import styled from "@emotion/styled";

const FooterContainer = styled.div(({ theme }) => ({
  padding: "30px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: theme.colors.border,
  },
}));

const NoteApp = styled.main(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "80px",
  "& .note-intro": {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  },
}));

const NoteHeader = styled.header(({ theme }) => ({
  "& h": {
    margin: 0,
    color: theme.colors.text,
    fontSize: "2.8rem",
    letterSpacing: "-0.025em",
  },
  "& p": {
    fontSize: "1.1rem",
    letterSpacing: "-0.025em",
    color: theme.colors.body,
    lineHeight: 1.75,
  },
}));

const NoteLogo = styled.div(({ theme }) => ({
  color: theme.colors.body,
  display: "flex",
  gap: "5px",
  justifyContent: "center",
  alignItems: "center",
}));

export default function NoteList({ notes, addNote, deleteNote, togglePin }) {
  return (
    <NoteApp className="note-app">
      <div className="note-intro">
        <NoteHeader className="note-header">
          <NoteLogo className="note-logo" aria-hidden="true">
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
            <span>REACT MINI PROJECT</span>
          </NoteLogo>
          <h1>한입노트</h1>
          <p>배운 개념을 한입씩 정리하는 나만의 메모장</p>
        </NoteHeader>
        <NoteForm onAdd={addNote} />
      </div>
      <section className="note-section">
        <div className="section-title">
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-open-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l3.235 1.94a2.8 2.8 0 0 0-.233 1.027L1 7.384v5.733l3.479-2.087q.224.414.558.83l-4.002 2.402A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738l-4.002-2.401q.334-.418.558-.831L15 13.117V7.383l-3.002 1.801a2.8 2.8 0 0 0-.233-1.026L15 6.217V5.4a1 1 0 0 0-.53-.882zM7.06.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                />
              </svg>
              <span>MY NOTES</span>
            </div>
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
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </NoteApp>
  );
}
