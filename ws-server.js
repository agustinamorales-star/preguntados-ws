import { WebSocketServer } from "ws";
import http from "http";

const PORT = process.env.PORT || 10000;

// Servidor HTTP básico (necesario para Render)
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server running");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  ws.on("message", (msg) => {
    console.log("Mensaje recibido:", msg.toString());
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});

server.listen(PORT, () => {
  console.log("Servidor WebSocket activo en puerto:", PORT);
});
