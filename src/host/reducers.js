const defaultState = {
    hasRaisedHand: null,
    results: [],
};

export function app(state=defaultState, action) {
    switch (action.type) {
        case `RAISE_HAND`:
            return { ...state, hasRaisedHand: action.name };
        case `CLIENT_RESPONSE`:
            return { ...state, results: [...state.results, action.response] };
        default:
            return state;
    }
}
