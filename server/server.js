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

let peers = [];

io.on("connection", (socket) => {
  console.log(`user connected with id ${socket.id}`);

  socket.on("register-new-user", (user) => {
    const hasThisUser = peers.find((peer) => peer.socketId === user.socketId);
    if (!hasThisUser) peers.push(user);
    console.log(peers);

    socket.broadcast.emit("peers-updated", peers);
  });

  socket.on("call-invitation", (calee) => {
    console.log("inviting to call");
    const caller = peers.find((peer) => peer.socketId === socket.id);
    io.to(calee.socketId).emit("call-invitation", caller);
  });

  socket.on("disconnect", () => {
    console.log(`user with id ${socket.id} disconnected`);
    peers = peers.filter((peer) => peer.socketId !== socket.id);
    console.log(peers);
  });
});

server.listen(8000, () => {
  console.log("listening on port 8000");
});
