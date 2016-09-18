import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);
const db = { emitted: [] };

app.get(`/client`, (req, res) => res.sendFile(`${__dirname}/client.html`));
app.get(`/host`, (req, res) => res.sendFile(`${__dirname}/host.html`));

io.on(`connection`, socket => {
    console.log(`a user connected`);
    db.emitted.forEach(data => socket.emit(`EMITTED`, data));
    socket.on(`disconnect`, () => console.log(`user disconnected`));
    socket.on(`EMIT`, data => {
        console.log(`emitted: ${data.type} ${data}`);
        db.emitted.push(data);
        // socket.broadcast.emit(`CHAT_MESSAGE`, data); // send to everyone except sender
        io.emit(`EMITTED`, data);
    });
});

httpServer.listen(3001, () => console.log('listening on *:3001'));
