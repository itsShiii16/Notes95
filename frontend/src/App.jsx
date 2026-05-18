import React, { useState, useEffect, useCallback } from "react";
import { getNotes, createNote, updateNote, deleteNote } from "./api";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";

function App() {
  const [notes, setNotes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [saveError, setSaveError] = useState(null);

  const loadNotes = useCallback(async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (err) {
      console.error("Failed to load notes", err);
    }
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const handleNewNote = () => {
    setEditingNote(null);
    setShowForm(true);
    setSaveError(null);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowForm(true);
    setSaveError(null);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingNote(null);
    setSaveError(null);
  };

  const handleSave = async (noteData) => {
    try {
      setSaveError(null);
      if (editingNote) {
        await updateNote(editingNote.id, noteData);
      } else {
        await createNote(noteData);
      }
      setShowForm(false);
      setEditingNote(null);
      await loadNotes();
    } catch (err) {
      setSaveError(err.message);
    }
  };

  const handleDeleteRequest = (id) => {
    setConfirmDeleteId(id);
  };

  const handleConfirmDelete = async () => {
    if (confirmDeleteId === null) return;
    try {
      await deleteNote(confirmDeleteId);
      setConfirmDeleteId(null);
      await loadNotes();
    } catch (err) {
      console.error("Failed to delete note", err);
    }
  };

  const handleCancelDelete = () => {
    setConfirmDeleteId(null);
  };

  return (
    <div className="app">
      <Desktop
        notes={notes}
        showForm={showForm}
        editingNote={editingNote}
        confirmDeleteId={confirmDeleteId}
        saveError={saveError}
        onNewNote={handleNewNote}
        onEditNote={handleEditNote}
        onSave={handleSave}
        onFormClose={handleFormClose}
        onDeleteRequest={handleDeleteRequest}
        onConfirmDelete={handleConfirmDelete}
        onCancelDelete={handleCancelDelete}
      />
      <Taskbar />
    </div>
  );
}

export default App;
