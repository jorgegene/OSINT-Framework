import {
        RETRIEVE_TWEETS_FAIL,
        RETRIEVE_TWEETS_SUCCESS,
  } from "../actions/types";
  

const initialState =  { tweets: null };

export default function tweet_reducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(type, payload)

    switch (type) {
        case RETRIEVE_TWEETS_SUCCESS:
        return {
            ...state,
            tweets: payload,
        };
        case RETRIEVE_TWEETS_FAIL:
        return {
            ...state,
            tweets: null,
        };
        default:
            return state;
    }
}