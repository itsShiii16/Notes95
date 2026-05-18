import React from "react";
import NoteForm from "./NoteForm";
import StickyNote from "./StickyNote";

function Desktop({
  notes,
  showForm,
  editingNote,
  confirmDeleteId,
  onNewNote,
  onEditNote,
  onSave,
  onFormClose,
  onDeleteRequest,
  onConfirmDelete,
  onCancelDelete,
}) {
  return (
    <div className="desktop-canvas">
      <div className="desktop-toolbar">
        <button
          data-testid="new-note-button"
          className="new-note-btn"
          onClick={onNewNote}
        >
          + New Note
        </button>
      </div>

      <div className="notes-grid">
        {notes.map((note) => (
          <StickyNote
            key={note.id}
            note={note}
            onEdit={onEditNote}
            onDelete={onDeleteRequest}
          />
        ))}
      </div>

      {showForm && (
        <div className="overlay">
          <div className="window">
            <div className="window-titlebar">
              <span>{editingNote ? "Edit Note" : "New Note"}</span>
              <button className="window-close" onClick={onFormClose}>
                &times;
              </button>
            </div>
            <NoteForm note={editingNote} onSubmit={onSave} />
          </div>
        </div>
      )}

      {confirmDeleteId !== null && (
        <div className="overlay">
          <div className="window confirm-dialog">
            <p>Delete this note?</p>
            <div className="confirm-actions">
              <button
                data-testid="confirm-delete-button"
                className="btn"
                onClick={onConfirmDelete}
              >
                Yes
              </button>
              <button className="btn" onClick={onCancelDelete}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Desktop;
