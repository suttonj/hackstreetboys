'use strict';

import {
    JOIN_ME_USER,
} from './actions';

const defaultState = {
    joinMe: {
        users: {email:'username@email.com'},
    },
};

export function users(state=defaultState, action) {
    switch (action.type) {
        case JOIN_ME_USER.type:
            return { ...state, joinMe: { ...state.joinMe, users: action.users } };
        default:
            return state;
    }
}
