import {LOADING_USERS, SAVE_CURRENT_USER, SAVE_USERS} from "./types";

export const DEFAULT_STATE = {
    users: [],
    loading: false,
    currentUser: null,
}

export default function reducer(
    state = DEFAULT_STATE,
    action
) {
    switch (action.type) {
        case SAVE_CURRENT_USER:
            return {...state, currentUser: action.payload};
        case LOADING_USERS:
            return {...state, loading: action.payload};
        case SAVE_USERS:
            console.log('action.payload}', action.payload)
            return {...state, users: [...state.users,...action.payload]};
        default:
            return state;
    }
}