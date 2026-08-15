import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import Home from "./pages/Home";
import NewMemo from "./pages/NewMemo";
import MemoList from "./pages/MemoList";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router";

const initalNotes = [
  {
    id: 1,
    title: "JSX",
    body: "JS 안에서 화면구조를 표현한다!",
    pinned: false,
  },
  {
    id: 2,
    title: "props",
    body: "부모가 자식에게 값을 전달한다!",
    pinned: false,
  },
  {
    id: 3,
    title: "useState",
    body: "화면이 기억할 값은 state로 관리한다!",
    pinned: false,
  },
];

const STORAGE_KEY = "hanip-notes";

function loadInitialNotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    saved && console.log(saved);
    return saved ? JSON.parse(saved) : initalNotes;
  } catch {
    return initalNotes;
  }
}

function App() {
  const [notes, setNotes] = useState(loadInitialNotes);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function togglePin(id) {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note,
      ),
    );
  }

  function addNote(newNote) {
    setNotes((currentNotes) => [...currentNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes((currentNotes) => currentNotes.filter((note) => note.id !== id));
  }
  return (
    <>
      <Header />
      <Routes className="note-app">
        {/* <main > */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewMemo addNote={addNote} />} />
        <Route
          path="/memos"
          element={
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
          }
        />
        {/* </main> */}
      </Routes>
      <Footer />
    </>
  );
}
//  <MemoList
//               notes={notes}
//               togglePin={togglePin}
//               deleteNote={deleteNote}
//             />
export default App;
