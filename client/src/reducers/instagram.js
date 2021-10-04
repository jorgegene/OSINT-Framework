import {
        RETRIEVE_INSTA_POSTS_FAIL,
        RETRIEVE_INSTA_POSTS_SUCCESS,
        RETRIEVE_INSTA_PROFILE_SUCCESS,
        RETRIEVE_INSTA_PROFILE_FAIL
  } from "../actions/types";
  

const initialState =  { insta_posts: null, insta_profile: null };

export default function instagram_reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(type, payload)

    switch (type) {
        case RETRIEVE_INSTA_POSTS_SUCCESS:
        return {
            ...state,
            insta_posts: payload,
        };
        case RETRIEVE_INSTA_POSTS_FAIL:
        return {
            ...state,
            insta_posts: null,
        };
        case RETRIEVE_INSTA_PROFILE_SUCCESS:
        return {
            ...state,
            insta_profile: payload,
        };
        case RETRIEVE_INSTA_PROFILE_FAIL:
        return {
            ...state,
            insta_profile: null,
        };
        default:
            return state;
    }
}