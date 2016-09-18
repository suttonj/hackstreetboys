import io from 'socket.io-client';
const socket = io();

export const emit = data => socket.emit(`EMIT`, data);
