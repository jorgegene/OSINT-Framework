import {
  SET_MESSAGE,
  RETRIEVE_LINKEDIN_PROFILE_FAIL,
  RETRIEVE_LINKEDIN_PROFILE_SUCCESS,
  UNVALID_TOKEN,
} from "./types";

import LinkedIn from "../services/linkedin.service";

export const get_linkedin_profile_user = (username) => (dispatch) => {
  return LinkedIn.get_linkedin_profile_user(username).then(
    (data) => {
      console.log("LunkiedIn data", data)
      dispatch({
        type: RETRIEVE_LINKEDIN_PROFILE_FAIL,
      });

      dispatch({
        type: RETRIEVE_LINKEDIN_PROFILE_SUCCESS,
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
      
      if (error.response !== undefined && error.response.status === 403){
        dispatch({
          type: UNVALID_TOKEN,
        });
      }

      dispatch({
        type: RETRIEVE_LINKEDIN_PROFILE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject(error);
    }
  );
};
