import express from "express";
import { notesRouter } from "./routes/notesRoutes.js";

const PORT = 5001;
const app = express();

app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`Server is running on the PORT: ${PORT}`));
