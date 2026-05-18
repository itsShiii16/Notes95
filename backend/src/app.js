const express = require("express");
const cors = require("cors");

const {
  getNotes,
  addNote
} = require("./notesController");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/notes", getNotes);
app.post("/api/notes", addNote);

module.exports = app;