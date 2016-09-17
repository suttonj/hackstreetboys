import express from 'express';
import http from 'http';

const app = express();
const httpServer = http.Server(app);

app.get(`/client`, (req, res) => {
    res.sendFile(`${__dirname}/client.html`);
});

app.get(`/host`, (req, res) => {
    res.sendFile(`${__dirname}/host.html`);
});

httpServer.listen(3001, () => console.log('listening on *:3001'));
