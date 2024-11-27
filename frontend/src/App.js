import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/notes");
      const result = await response.json();
      setNotes(result);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  const handleAddNote = async (note) => {
    try {
      const response = await fetch("http://localhost:8080/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      const result = await response.json();
      setNotes(result);
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/notes/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      setNotes(result);
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
      <div>
        <h1>Менедржер нотатків</h1>
        <NoteForm onAddNote={handleAddNote} />
        <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      </div>
  );
}

export default App;
