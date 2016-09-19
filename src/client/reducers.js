export function app(state={ isConnecting: true, isModalOpen: false }, action) {
    switch (action.type) {
        case `CONNECT_TO_MEETING`:
            return { ...state, isConnecting: false };
        case `SET_POLL`:
            return { ...state, activePoll: action.activePoll };
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
            messages.push(action);
            return { ...state, messages };
        default:
            return state;
    }
}

export function profile(state={name: '', email: ''}, action) {
    switch (action.type) {
        case `UPDATE_PROFILE`:
            return { ...state, name: action.name, email: action.email };
        default:
            return state;
    }
}

import Bingo from './components/tools/Bingo';
const toolComponents = {
    bingo: { component: Bingo, properties: {} },
};
const toolDescriptors = [
    { id: `bingo`, iconUrl: ``, title: `Bingo`, description: `A fun twist on classic BINGO!` },
];

export function tools(state={ activeTool: null, tools: toolDescriptors }, action) {
    switch (action.type) {
        case `SET_TOOL`:
            return { ...state, activeTool: toolComponents[action.tool] };
        default:
            return state;
    }
}
