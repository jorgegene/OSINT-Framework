import {
        RETRIEVE_LINKEDIN_PROFILE_SUCCESS,
        RETRIEVE_LINKEDIN_PROFILE_FAIL,
  } from "../actions/types";
  

const initialState =  { profile: null };

export default function linkedin_reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(type, payload)

    switch (type) {
        case RETRIEVE_LINKEDIN_PROFILE_SUCCESS:
        return {
            ...state,
            profile: payload,
        };
        case RETRIEVE_LINKEDIN_PROFILE_FAIL:
        return {
            ...state,
            profile: null,
        };
        default:
            return state;
    }
}