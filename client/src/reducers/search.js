import {
        RETRIEVE_SEARCH_FAIL,
        RETRIEVE_SEARCH_SUCCESS,
        RETRIEVE_SEARCH_LIST_FAIL,
        RETRIEVE_SEARCH_LIST_SUCCESS,
  } from "../actions/types";
  

const initialState =  { usernames: null, searches: null };

export default function search_reducer(state = initialState, action) {
    const { type, payload } = action;

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
        case RETRIEVE_SEARCH_LIST_SUCCESS:
        return {
            ...state,
            searches: payload,
        };
        case RETRIEVE_SEARCH_LIST_FAIL:
        return {
            ...state,
            searches: null,
        };        
        default:
            return state;
    }
}