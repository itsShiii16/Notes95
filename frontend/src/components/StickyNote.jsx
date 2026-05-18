import React from "react";

const COLOR_MAP = {
  yellow: "#fff9c4",
  blue: "#bbdefb",
  green: "#c8e6c9",
  pink: "#f8bbd0",
};

function StickyNote({ note, onEdit, onDelete }) {
  return (
    <div
      data-testid="note-card"
      className="sticky-note"
      style={{ backgroundColor: COLOR_MAP[note.color] || "#fff9c4" }}
      onClick={() => onEdit(note)}
    >
      <button
        data-testid="note-delete-button"
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(note.id);
        }}
      >
        &times;
      </button>
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
    </div>
  );
}

export default StickyNote;
