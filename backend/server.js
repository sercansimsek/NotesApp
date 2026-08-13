import express from "express";

const PORT = 5001;
const app = express();

app.get("/api/notes", (req, res) => {
  res.send("you got 5 notes");
});

app.listen(PORT, () => console.log(`Server is running on the PORT: ${PORT}`));
