import {
  SET_MESSAGE,
  RETRIEVE_INSTA_POSTS_SUCCESS,
  RETRIEVE_INSTA_POSTS_FAIL,
  UNVALID_TOKEN,
} from "./types";

import Instagram from "../services/instagram.service";

export const get_insta_posts_user = (username) => (dispatch) => {
  return Instagram.get_insta_posts_user(username).then(
    (data) => {
      console.log("data", data)
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

