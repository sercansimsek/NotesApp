import express from "express";
import { notesRouter } from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT;
const app = express();

connectDB();

app.use(express.json());

app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`Server is running on the PORT: ${PORT}`));
