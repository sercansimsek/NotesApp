import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

export const notesRouter = express.Router();

notesRouter.get("/", getAllNotes);

notesRouter.post("/", createNote);

notesRouter.put("/:id", updateNote);

notesRouter.delete("/:id", deleteNote);
