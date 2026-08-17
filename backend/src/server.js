import express from "express";
import { notesRouter } from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}
app.use(express.json());

app.use("/api/notes", notesRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on the PORT: ${PORT}`));
});
