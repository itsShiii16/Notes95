import React, { useState, useEffect } from "react";

const COLORS = [
  { name: "yellow", hex: "#fff9c4" },
  { name: "blue", hex: "#bbdefb" },
  { name: "green", hex: "#c8e6c9" },
  { name: "pink", hex: "#f8bbd0" },
];

function NoteForm({ note, onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    if (note) {
      setTitle(note.title || "");
      setContent(note.content || "");
      setColor(note.color || "yellow");
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit({ title: title.trim(), content: content.trim(), color });
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <label className="field">
        Title
        <input
          data-testid="note-title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
        />
      </label>

      <label className="field">
        Content
        <textarea
          data-testid="note-content-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
          rows={4}
        />
      </label>

      <div className="color-picker">
        <span>Color:</span>
        {COLORS.map((c) => (
          <button
            key={c.name}
            data-testid={`note-color-${c.name}`}
            type="button"
            className={`color-btn ${color === c.name ? "selected" : ""}`}
            style={{ backgroundColor: c.hex }}
            onClick={() => setColor(c.name)}
            aria-label={c.name}
          />
        ))}
      </div>

      <button
        data-testid="note-submit-button"
        className="btn btn-primary"
        type="submit"
      >
        {note ? "Update" : "Save"}
      </button>
    </form>
  );
}

export default NoteForm;
