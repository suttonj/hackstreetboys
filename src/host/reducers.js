const defaultState = {
    hasRaisedHand: null,
    pollResults: {
        yes: 0,
        no: 0,
    },
};

export function app(state=defaultState, action) {
    switch (action.type) {
        case `RAISE_HAND`:
            return { ...state, hasRaisedHand: action.name };
        case `CLIENT_RESPONSE`:
            return { ...state, 
                pollResults: {...state.pollResults, 
                    [action.response]: state.pollResults[action.response] + 1  
                }
            };
        default:
            return state;
    }
}
