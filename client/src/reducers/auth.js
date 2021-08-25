import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REFRESH_TOKEN_FAIL,
    REFRESH_TOKEN_SUCCESS,
    UNVALID_TOKEN,
  } from "../actions/types";
  
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));
const refresh_token = JSON.parse(localStorage.getItem("refresh_token"));

const initialState = user
? { isLoggedIn: true, user, token, refresh_token }
: { isLoggedIn: false, user: null, token: null, refresh_token: null};

export default function auth_reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
        return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
            token: payload.token,
            refresh_token: payload.refresh_token
        };
        case REGISTER_FAIL:
        return {
            ...state,
            isLoggedIn: false,
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
            token: payload.token,
            refresh_token: payload.refresh_token

        };
        case LOGIN_FAIL:
        return {
            ...state,
            isLoggedIn: false,
            user: null,
            token: null,
            refresh_token: null,

        };

        case REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                token: payload.token,
            };
        case REFRESH_TOKEN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
                token: null,
                refresh_token: null,
    
            };
        case LOGOUT:
        return {
            ...state,
            isLoggedIn: false,
            user: null,
            token: null,
            refresh_token: null,

        };
        case UNVALID_TOKEN:
        return {
            ...state,
            isLoggedIn: false,
            user: null,
            token: null,
            refresh_token: null,
        };
        default:
        return state;
    }
}