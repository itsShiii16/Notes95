const express = require("express");
const cors = require("cors");

const { validateNote } = require("./noteUtils");
const { getAllNotes, createNote } = require("./notesStore");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/notes", (req, res) => {
  return res.status(200).json(getAllNotes());
});

app.post("/api/notes", (req, res) => {
  const { title, content, color, x, y } = req.body;

  const validation = validateNote(title, content, color);

  if (!validation.isValid) {
    return res.status(400).json({
      errors: validation.errors
    });
  }

  const note = createNote({
    title,
    content,
    color,
    x,
    y
  });

  return res.status(201).json(note);
});

module.exports = app;