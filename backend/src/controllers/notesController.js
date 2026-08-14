export const getAllNotes = (req, res) => {
  res.send("you got 10 notes");
};

export const createNote = (req, res) => {
  res.statusCode = 201;
  res.json({ message: "Note created successfully!" });
};

export const updateNote = (req, res) => {
  res.statusCode = 200;
  res.json({ message: "Note updated successfully!" });
};

export const deleteNote = (req, res) => {
  res.statusCode = 200;
  res.json({ message: "Note deleted successfully!" });
};
