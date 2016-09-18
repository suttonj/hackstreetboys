export function app(state={ results: [] }, action) {
    switch (action.type) {
        case `CLIENT_RESPONSE`:
            return { ...state, results: [...state.results, action.response] };
        default:
            return state;
    }
}
