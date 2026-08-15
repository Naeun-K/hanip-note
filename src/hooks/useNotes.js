import { useEffect, useReducer } from "react";

const STORAGE_KEY = "hanip-notes";

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

function loadInitialNotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    saved && console.log(saved);
    return saved ? JSON.parse(saved) : initalNotes;
  } catch {
    return initalNotes;
  }
}

function notesReducer(notes, action) {
  switch (action.type) {
    case "ADD":
      return [action.note, ...notes];
    case "DELETE":
      return notes.filter((note) => note.id !== action.id);
    case "PINTOGGLE":
      return notes.map((note) =>
        note.id === action.id ? { ...note, pinned: !note.pinned } : note,
      );
    default:
      return notes;
  }
}

export function useNotes() {
  const [notes, dispatch] = useReducer(
    notesReducer,
    undefined,
    loadInitialNotes,
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function addNote(newNote) {
    dispatch({ type: "ADD", note: newNote });
  }

  function deleteNote(id) {
    dispatch({ type: "DELETE", id });
  }

  function togglePin(id) {
    dispatch({ type: "PINTOGGLE", id });
  }

  return { notes, addNote, deleteNote, togglePin };
}
