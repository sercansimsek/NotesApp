import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionStr = process.env.MONGODB_CONNECTION;

if (!connectionStr) {
  throw new Error("MONGODB_CONNECTION is not defined in the .env file");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionStr);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
