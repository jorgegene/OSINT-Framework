import {
  SET_MESSAGE,
  RETRIEVE_INSTA_POSTS_SUCCESS,
  RETRIEVE_INSTA_POSTS_FAIL,
  RETRIEVE_INSTA_PROFILE_FAIL,
  RETRIEVE_INSTA_PROFILE_SUCCESS,
  UNVALID_TOKEN,
} from "./types";

import Instagram from "../services/instagram.service";

export const get_insta_posts_user = (username) => (dispatch) => {
  return Instagram.get_insta_posts_user(username).then(
    (data) => {
      dispatch({
        type: RETRIEVE_INSTA_POSTS_FAIL,
      });
      dispatch({
        type: RETRIEVE_INSTA_POSTS_SUCCESS,
        payload: data.posts ,
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
        type: RETRIEVE_INSTA_POSTS_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};

export const get_insta_profile = (username) => (dispatch) => {
  return Instagram.get_insta_profile(username).then(
    (data) => {
      dispatch({
        type: RETRIEVE_INSTA_PROFILE_FAIL,
      });
      dispatch({
        type: RETRIEVE_INSTA_PROFILE_SUCCESS,
        payload: data.insta_profile ,
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
        type: RETRIEVE_INSTA_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};