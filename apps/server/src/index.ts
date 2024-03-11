import { createServer } from "http";
import { Server } from "socket.io";
import { setupListeners } from "./setupListeners";
import express from "express";

const PORT = process.env.PORT || 9876;

const app = express();

app.get("/", (req, res) =>
  res.status(200).json({ message: `Server is running on ${PORT}` })
);

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

setupListeners(io);

httpServer.listen(PORT, () => console.log(`Server is 🚀 on port ${PORT}`));
