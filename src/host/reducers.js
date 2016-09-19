const defaultState = {
    isHandRaised: false,
    results: [],
};

export function app(state=defaultState, action) {
    switch (action.type) {
        case `RAISE_HAND`:
            return { ...state, isHandRaised: true };
        case `CLIENT_RESPONSE`:
            return { ...state, results: [...state.results, action.response] };
        default:
            return state;
    }
}
