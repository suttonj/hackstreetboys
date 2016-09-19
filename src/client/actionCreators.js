import io from 'socket.io-client';
const socket = io();

export const emit = data => socket.emit(`EMIT`, data);

export const respondToHost = response => {
    emit({ type: `CLIENT_RESPONSE`, response });
    return { type: `TOGGLE_MODAL`, isModalOpen: false };
};

export const setAvatar = imageUrl => {
	return { type: `SET_AVATAR`, avatar: imageUrl };
};

export const setName = name => {
	return { type: `SET_NAME`, name: name };
}