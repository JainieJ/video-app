const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.end("connected to signalling server");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log(socket.id);
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
