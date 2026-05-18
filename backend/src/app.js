const express = require("express");
const cors = require("cors");

const { getNotes, addNote, editNote, removeNote } = require("./notesController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/notes", getNotes);
app.post("/api/notes", addNote);
app.put("/api/notes/:id", editNote);
app.delete("/api/notes/:id", removeNote);

module.exports = app;