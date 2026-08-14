import express from "express";

const PORT = 5001;
const app = express();

app.get("/api/notes", (req, res) => {
  res.send("you got 10 notes");
});

app.post("/api/notes", (req, res) => {
  res.statusCode = 201;
  res.json({ message: "Note created successfully!" });
});

app.put("/api/notes/:id", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "Note updated successfully!" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.statusCode = 200;
  res.json({ message: "Note deleted successfully!" });
});

app.listen(PORT, () => console.log(`Server is running on the PORT: ${PORT}`));
