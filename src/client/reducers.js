export function app(state={ isConnecting: true }, action) {
    switch (action.type) {
        case 'CONNECT_TO_MEETING':
            return { ...state, isConnecting: false };
        default:
            return state;
    }
}

export function tabs(state={ active: `chat` }, action) {
    switch (action.type) {
        case `SET_TAB`:
            return { ...state, active: action.tab };
        default:
            return state;
    }
}

export function chat(state={ messages: [] }, action) {
    switch (action.type) {
        case `CHAT_MESSAGE`:
            const messages = [...state.messages];
            messages.push(action.payload);
            return { ...state, messages };
        default:
            return state;
    }
}
