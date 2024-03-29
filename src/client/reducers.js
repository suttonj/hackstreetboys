const name = window.localStorage.getItem(`name`) || ``;

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

const activeTab = name ? `chat` : `profile`;
export function tabs(state={ active: activeTab }, action) {
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

const profileInitialState = {
    background: 'https://secure.join.me/Common/Images/Background/Bicycle.jpg',
    avatar: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/238777/joinmoji-8.png',
    name,
    email: null,
    doShowReg: !!name,
};

export function profile(state=profileInitialState, action) {
    switch (action.type) {
        case `SET_AVATAR`:
            return { ...state, avatar: action.avatar };
        case `SET_NAME`:
            window.localStorage.setItem('name', action.name);
            return { ...state, name: action.name };
        case `UPDATE_PROFILE`:
            window.localStorage.setItem('name', action.name);
            return { ...state, name: action.name, email: action.email };
        case `SET_TAB`:
            if (action.tab === `profile` && state.name) {
                state.doShowReg = true;
            }
            return state;
        default:
            return state;
    }
}

import Bingo from './components/tools/Bingo';
const toolComponents = {
    bingo: { component: Bingo, properties: {} },
};
const toolDescriptors = [
    { id: `bingo`, iconUrl: `https://logo.clearbit.com/logmein.com`, title: `LogMeIn All-Staff Bingo`, description: `A fun twist on classic BINGO!`, real:true },
    { id: `trello`, iconUrl: `https://logo.clearbit.com/trello.com`, title: `Trello`, description: `Share tasks instantly`},
    { id: `slack`, iconUrl: `https://logo.clearbit.com/slack.com`, title: `Slack`, description: `View status and invite teammates`},
    { id: `JIRA`, iconUrl: `https://logo.clearbit.com/jira.atlassian.com`, title: `JIRA`, description: `Integrated planning poker`},
    { id: `drop-paper`, iconUrl: `https://logo.clearbit.com/dropbox.com`, title: `Dropbox Paper`, description: `Collaborative Meeting Notes`},
    { id: `invision`, iconUrl: `https://logo.clearbit.com/invisionapp.com`, title: `InVision`, description: `Share designs with commenting`},
    { id: `googlemaps`, iconUrl: `https://logo.clearbit.com/maps.google.com`, title: `Google Maps`, description: `Share ETAs and location`},
    { id: `mashery`, iconUrl: `https://logo.clearbit.com/mashery.com`, title: `Mashery`, description: `Add APIs via API`},
];

export function tools(state={ activeTool: null, tools: toolDescriptors }, action) {
    switch (action.type) {
        case `SET_TOOL`:
            return { ...state, activeTool: toolComponents[action.tool] };
        default:
            return state;
    }
}
