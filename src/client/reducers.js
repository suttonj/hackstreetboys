export function app(state={ isConnecting: true, isModalOpen: false }, action) {
    switch (action.type) {
        case `CONNECT_TO_MEETING`:
            return { ...state, isConnecting: false };
        case `TOGGLE_MODAL`:
            return { ...state, isModalOpen: action.isModalOpen };
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
            messages.push(action.message);
            return { ...state, messages };
        default:
            return state;
    }
}

const profileInitialState = {
    background: 'https://secure.join.me/Common/Images/Background/Socks.jpg',
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/238777/joinmoji-11.png',
    name: null,
};

export function profile(state=profileInitialState, action) {
    switch (action.type) {
         case `SET_AVATAR`:
            return { ...state, avatar: action.avatar };
        case `SET_NAME`:
            return { ...state,  name: action.name };
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
