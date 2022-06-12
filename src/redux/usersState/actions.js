import {LOADING_USERS, SAVE_CURRENT_USER, SAVE_USERS} from "./types";

const saveAllUsers = (users) => ({type: SAVE_USERS, payload: users});
const saveUser = (user) => ({type: SAVE_CURRENT_USER, payload: user});
const setLoading = (loading) => ({type: LOADING_USERS, payload: loading});

const getAllUsers = (per_page, since) => dispatch => {
    dispatch(setLoading(true));
    fetch(`https://api.github.com/users?per_page=${per_page}&since=${since}`)
        .then(res => res.json())
        .then((data) => {
            dispatch(saveAllUsers(data));
            dispatch(setLoading(false));
        })
};

const getUser = (userName) => dispatch => {
    dispatch(setLoading(true));
    fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then((data) => {
            dispatch(saveUser(data));
            dispatch(setLoading(false));
        })
};

export default {
    getAllUsers,
    getUser
}