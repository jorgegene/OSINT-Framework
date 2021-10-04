import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/facebook/";

const get_facebook_profile_user = async (username) => {
  
  const res = await axios.get(API_URL + "get_face_profile_data/", { params: { username }, headers: authHeader() }

  );
  console.log("facebook res", res);
  const profile = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("profile", JSON.stringify(profile));
    message = "Facebook-profile retrieved sucessfully";
  }
  else {
    message = "Error retrieving profile";

  }
  console.log("postRes", message);
  return { profile, message };
};




export default {
  get_facebook_profile_user,

};