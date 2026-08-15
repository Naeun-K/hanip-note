import "./App.css";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import Home from "./pages/Home";
import MemoList from "./pages/MemoList";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { Route, Routes } from "react-router";
import { useNotes } from "./hooks/useNotes";

function App() {
  const { notes, addNote, deleteNote, togglePin } = useNotes();

  return (
    <>
      <Header />
      <Routes className="note-app">
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NoteForm onAdd={addNote} />} />
        <Route
          path="/memos"
          element={
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
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
