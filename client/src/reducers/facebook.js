import {
        RETRIEVE_FACEBOOK_PROFILE_SUCCESS,
        RETRIEVE_FACEBOOK_PROFILE_FAIL,
  } from "../actions/types";
  

const initialState =  { profile: null };

export default function facebook_reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(type, payload)

    switch (type) {
        case RETRIEVE_FACEBOOK_PROFILE_SUCCESS:
        return {
            ...state,
            profile: payload,
        };
        case RETRIEVE_FACEBOOK_PROFILE_FAIL:
        return {
            ...state,
            profile: null,
        };
        default:
            return state;
    }
}