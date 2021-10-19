import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000/");
socket.on("connect", () => {
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
