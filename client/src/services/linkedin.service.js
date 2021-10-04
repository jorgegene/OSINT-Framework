import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/linkedin/";

const get_linkedin_profile_user = async (username) => {
  
  const res = await axios.get(API_URL + "get_linkedin_profile_data/", { params: { username }, headers: authHeader() }

  );
  console.log("linkedin res", res);
  const profile = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("profile", JSON.stringify(profile));
    message = "linkedin-profile retrieved sucessfully";
  }
  else {
    message = "Error retrieving linkedin profile ";

  }
  return { profile, message };
};




export default {
  get_linkedin_profile_user,

};