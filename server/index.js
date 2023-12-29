import { Server } from 'socket.io';
import http from 'http';

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });


// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('message', (message) => {
//     console.log(message);
//     io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
//   });
// });



io.on('connection', (socket) => {
  console.log('Client connected to server(upgraded to websocket): ', socket.id);
  socket.on('msg', (msg) => {
    io.emit('msg', `${socket.id} said ${msg}`);
  });
});

server.listen(3000, () => {
  console.log(`HTTP server starting on port ${3000}`);
});
