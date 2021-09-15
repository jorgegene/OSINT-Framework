import {
  SET_MESSAGE,
  RETRIEVE_FACEBOOK_PROFILE_FAIL,
  RETRIEVE_FACEBOOK_PROFILE_SUCCESS,
  UNVALID_TOKEN,
} from "./types";

import Facebook from "../services/facebook.service";

export const get_facebook_profile_user = (username) => (dispatch) => {
  return Facebook.get_facebook_profile_user(username).then(
    (data) => {
      console.log("data", data)
      dispatch({
        type: RETRIEVE_FACEBOOK_PROFILE_FAIL,
      });
      
      dispatch({
        type: RETRIEVE_FACEBOOK_PROFILE_SUCCESS,
        payload: data.profile ,
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
        type: RETRIEVE_FACEBOOK_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};
