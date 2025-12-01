const WebSocket = require("ws");

const port = process.env.PORT || 10000;
const wss = new WebSocket.Server({ port });

console.log("Servidor WebSocket activo en puerto:", port);

wss.on("connection", (ws) => {
  console.log("Cliente conectado:", wss.clients.size);

  ws.on("message", (msg) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Cliente desconectado:", wss.clients.size);
  });
});
