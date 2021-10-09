import {
  SET_MESSAGE,
  RETRIEVE_TWEETS_FAIL,
  RETRIEVE_TWEETS_SUCCESS,
  UNVALID_TOKEN,

  RETRIEVE_TWITTER_PROFILE_FAIL,
  RETRIEVE_TWITTER_PROFILE_SUCCESS,

} from "./types";

import Tweets from "../services/twitter.service";

export const get_tweets_user = (username) => (dispatch) => {
  return Tweets.get_tweets_user(username).then(
    (data) => {
      dispatch({
        type: RETRIEVE_TWEETS_FAIL,
      });
      dispatch({
        type: RETRIEVE_TWEETS_SUCCESS,
        payload: data.tweets ,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      
      if (error.response.status === 403){
        dispatch({
          type: UNVALID_TOKEN,
        });
      }

      dispatch({
        type: RETRIEVE_TWEETS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const get_twitter_profile = (username) => (dispatch) => {
  return Tweets.get_twitter_profile(username).then(
    (data) => {
      dispatch({
        type: RETRIEVE_TWITTER_PROFILE_FAIL,
      });
      dispatch({
        type: RETRIEVE_TWITTER_PROFILE_SUCCESS,
        payload: data.twitter_profile ,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      
      if (error.response.status === 403){
        dispatch({
          type: UNVALID_TOKEN,
        });
      }

      dispatch({
        type: RETRIEVE_TWITTER_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};