const express = require("express");
const { getNote, createNote, deleteNote, updateNote } = require("../Controllers/noteController");
const auth =require("../middleware/auth");

const noteRoter = express.Router();

noteRoter.get("/", auth, getNote);

noteRoter.post("/", auth, createNote);

noteRoter.delete("/:id", auth, deleteNote);

noteRoter.put("/:id", auth, updateNote);

module.exports = noteRoter;