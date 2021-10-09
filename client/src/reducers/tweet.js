import {
        RETRIEVE_TWEETS_FAIL,
        RETRIEVE_TWEETS_SUCCESS,
        RETRIEVE_TWITTER_PROFILE_SUCCESS,
        RETRIEVE_TWITTER_PROFILE_FAIL,
  } from "../actions/types";
  

const initialState =  { tweets: null, twitter_profile: null };

export default function tweet_reducer(state = initialState, action) {
    const { type, payload } = action;

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
        case RETRIEVE_TWITTER_PROFILE_SUCCESS:
            return {
                ...state,
                twitter_profile: payload,
            };
        case RETRIEVE_TWITTER_PROFILE_FAIL:
            return {
                ...state,
                twitter_profile: null,
            };

        default:
            return state;
    }
}