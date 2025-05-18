import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000", "http://localhost:3001"],
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/chatapp";

// MongoDB connection with better error handling
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
