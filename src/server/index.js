import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);
const db = { messages: [] };

app.get(`/client`, (req, res) => res.sendFile(`${__dirname}/client.html`));
app.get(`/host`, (req, res) => res.sendFile(`${__dirname}/host.html`));

io.on(`connection`, socket => {
    console.log(`a user connected`);
    db.messages.forEach(msg => socket.emit(`chat message`, msg));
    socket.on(`disconnect`, () => console.log(`user disconnected`));
    socket.on(`chat message`, msg => {
        db.messages.push(msg);
        // socket.broadcast.emit(`chat message`, msg); // send to everyone except sender
        io.emit(`chat message`, msg);
    });
});

httpServer.listen(3001, () => console.log('listening on *:3001'));
