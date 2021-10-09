import {
  SET_MESSAGE,
  RETRIEVE_TWEETS_FAIL,
  RETRIEVE_FACEBOOK_PROFILE_FAIL,
  RETRIEVE_INSTA_POSTS_FAIL,
  RETRIEVE_LINKEDIN_PROFILE_FAIL,
  RETRIEVE_SEARCH_SUCCESS,
  RETRIEVE_SEARCH_FAIL,
  RETRIEVE_INSTA_PROFILE_FAIL,
  RETRIEVE_TWITTER_PROFILE_FAIL,
  RETRIEVE_SEARCH_LIST_FAIL,
  RETRIEVE_SEARCH_LIST_SUCCESS,
  UNVALID_TOKEN,
} from "./types";

import Search from "../services/search.service";

export const reset_search = () => (dispatch) => {
  dispatch({
    type: RETRIEVE_TWEETS_FAIL,
  });
  dispatch({
    type: RETRIEVE_FACEBOOK_PROFILE_FAIL,
  });
  dispatch({
    type: RETRIEVE_INSTA_POSTS_FAIL,
  });
  dispatch({
    type: RETRIEVE_LINKEDIN_PROFILE_FAIL,
  });
  dispatch({
    type: RETRIEVE_INSTA_PROFILE_FAIL,
  });
  dispatch({
    type: RETRIEVE_TWITTER_PROFILE_FAIL,
  });
  dispatch({
    type: RETRIEVE_SEARCH_FAIL,
  });
  dispatch({
    type: RETRIEVE_SEARCH_LIST_FAIL,
  });
  return Promise.resolve();
   
};

export const get_search_list = (username) => (dispatch) => {
  return Search.get_search_list().then(
    (data) => {

      dispatch({
        type: RETRIEVE_SEARCH_LIST_SUCCESS,
        payload: data.searches,
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
        type: RETRIEVE_SEARCH_LIST_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const get_usernames = (username) => (dispatch) => {
  return Search.get_usernames(username).then(
    (data) => {

      dispatch({
        type: RETRIEVE_SEARCH_SUCCESS,
        payload: data.usernames,
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
        type: RETRIEVE_SEARCH_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};