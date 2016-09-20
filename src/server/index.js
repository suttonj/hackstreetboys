import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const chatLog = [
    { messageType: `meetingState`, text: `Welcome to join.me/join.kyle` },
    { messageType: `status`, text: `Kyle Silberbauer started a meeting.` },
    { messageType: `status`, text: `Ryan Bigelow joined.` },
    { messageType: `status`, text: `William Humphreys-Cloutier joined.` },
    { messageType: `status`, text: `Jeremy Sutton joined.` },
    { messageType: `status`, text: `Tim Hicks joined.` },
    { messageType: `message`, text: `Is everyone ready to start?`, name: `Kyle`, role: `presenter` },
    { messageType: `message`, text: `Yes`, name: `William`, role: `participant` },
    { messageType: `message`, text: `Of course`, name: `Ryan`, role: `participant` },
    { messageType: `status`, text: `Kyle Silberbauer started sharing their screen` },
].map(msg => { 
    msg.type = `CHAT_MESSAGE`;
    return msg;
});

const app = express();
const httpServer = http.Server(app);
const io = socketIo(httpServer);
const db = { emitted: chatLog };

app.get(`/client`, (req, res) => res.sendFile(`${__dirname}/client.html`));
app.get(`/host`, (req, res) => res.sendFile(`${__dirname}/host.html`));
app.get(`/host-dropdown`, (req, res) => res.sendFile(`${__dirname}/hostDropdown.html`));

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
