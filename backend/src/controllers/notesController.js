import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.statusCode = 200;
    res.json(notes);
  } catch (error) {
    console.error("Error to get getAllNotes controller", error.message);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(note);
  } catch (error) {
    console.error("Error to get getNoteById controller", error.message);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.statusCode = 201;
    res.json(savedNote);
  } catch (error) {
    console.error("Error to get createNote controller", error.message);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.statusCode = 200;
    res.json(updatedNote);
  } catch (error) {
    console.error("Error to get updateNote controller", error.message);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.statusCode = 200;
    res.json(deletedNote);
  } catch (error) {
    console.error("Error to get deleteNote controller", error.message);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};
