const { validateNote } = require("./noteUtils");
const { getAllNotes, createNote } = require("./notesStore");

function getNotes(req, res) {
  return res.status(200).json(getAllNotes());
}

function addNote(req, res) {
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
}

module.exports = {
  getNotes,
  addNote
};