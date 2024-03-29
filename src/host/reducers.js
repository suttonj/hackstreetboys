const defaultState = {
    hasRaisedHand: [],
    pollResults: {
        yes: 0,
        no: 0,
    },
    activePoll: null,
};

export function app(state=defaultState, action) {
    switch (action.type) {
        case `RAISE_HAND`:
            return { ...state, hasRaisedHand: [ ...state.hasRaisedHand, action.name ] };
        case `CLIENT_RESPONSE`:
            return { ...state, 
                pollResults: {...state.pollResults, 
                    [action.response]: state.pollResults[action.response] + 1  
                }
            };
        case `SET_POLL`:
            return { ...state, activePoll: action.activePoll };
        case `CLEAR_POLL`:
            return { ...state, activePoll: null, pollResults: { yes: 0, no: 0 } };
        default:
            return state;
    }
}
