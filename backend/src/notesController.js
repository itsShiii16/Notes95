const { validateNote, isValidId } = require("./noteUtils");
const {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("./notesStore");

function getNotes(req, res) {
  return res.status(200).json(getAllNotes());
}

function addNote(req, res) {
  const { title, content, color, x, y } = req.body;

  const validation = validateNote(title, content, color);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  const note = createNote({ title, content, color, x, y });

  return res.status(201).json(note);
}

function editNote(req, res) {
  const id = parseInt(req.params.id, 10);

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid note ID." });
  }

  const { title, content, color, x, y } = req.body;

  const validation = validateNote(title, content, color);
  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  const updated = updateNote(id, { title, content, color, x, y });
  if (!updated) {
    return res.status(404).json({ error: "Note not found." });
  }

  return res.status(200).json(updated);
}

function removeNote(req, res) {
  const id = parseInt(req.params.id, 10);

  if (!isValidId(id)) {
    return res.status(400).json({ error: "Invalid note ID." });
  }

  const deleted = deleteNote(id);
  if (!deleted) {
    return res.status(404).json({ error: "Note not found." });
  }

  return res.status(204).send();
}

function clearAllNotes(req, res) {
  const { clearNotes } = require("./notesStore");
  clearNotes();
  return res.status(200).json({ message: "Notes cleared" });
}

module.exports = {
  getNotes,
  addNote,
  editNote,
  removeNote,
  clearAllNotes,
};