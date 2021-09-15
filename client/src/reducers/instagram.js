import {
        RETRIEVE_INSTA_POSTS_FAIL,
        RETRIEVE_INSTA_POSTS_SUCCESS,
  } from "../actions/types";
  

const initialState =  { insta_posts: null };

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
        default:
            return state;
    }
}