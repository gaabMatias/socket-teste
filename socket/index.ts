import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const PORT = 8000

io.on("connection", (socket: any) => {
  console.log(socket.id)
});

httpServer.listen(PORT, () => {
  console.log('SERVER RUNNING ON PORT:', PORT)
});


app.get('/', (req, res) => {
  return res.status(200).json({message: 'Hello World!!!'});
})

app.get('/test', (req, res) => {
  return res.status(200).json({socket: io})
})