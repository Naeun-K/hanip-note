import React from "react";
import NoteForm from "../components/NoteForm";

export default function NewMemo({ addNote }) {
  return <NoteForm onAdd={addNote} />;
}
