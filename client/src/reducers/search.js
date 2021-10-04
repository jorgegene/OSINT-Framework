import {
        RETRIEVE_SEARCH_FAIL,
        RETRIEVE_SEARCH_SUCCESS,
  } from "../actions/types";
  

const initialState =  { usernames: null };

export default function search_reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(type, payload)

    switch (type) {
        case RETRIEVE_SEARCH_SUCCESS:
        return {
            ...state,
            usernames: payload,
        };
        case RETRIEVE_SEARCH_FAIL:
        return {
            ...state,
            usernames: null,
        };
        default:
            return state;
    }
}