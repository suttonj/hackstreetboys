import io from 'socket.io-client';
const socket = io();

export const emit = data => socket.emit(`EMIT`, data);

export const respondToHost = response => {
    emit({ type: `CLIENT_RESPONSE`, response });
    return { type: `SET_POLL`, activePoll: null };
};
