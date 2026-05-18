let notes = [];
let nextId = 1;

function getAllNotes() {
  return notes;
}

function createNote(noteData) {
  const note = {
    id: nextId,
    title: noteData.title,
    content: noteData.content,
    color: noteData.color,
    x: noteData.x ?? 0,
    y: noteData.y ?? 0
  };

  notes.push(note);
  nextId += 1;

  return note;
}

function clearNotes() {
  notes = [];
  nextId = 1;
}

function updateNote(id, data) {
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return null;

  notes[index] = { ...notes[index], ...data, id: notes[index].id };
  return notes[index];
}

function deleteNote(id) {
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return false;

  notes.splice(index, 1);
  return true;
}

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  clearNotes,
};