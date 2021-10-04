import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/insta_posts/";
const API_URL2 = "http://localhost:8000/api/v1/insta_profile/";


const get_insta_posts_user = async (username) => {
  
  const res = await axios.get(API_URL + "get_post_data/", { params: { username }, headers: authHeader() }

  );
  const posts = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("posts", JSON.stringify(posts));
    message = "Insta-posts retrieved sucessfully";
  }
  else {
    message = "Error retrieving posts";

  }
  return { posts, message };
};

const get_insta_profile = async (username) => {
  
  const res = await axios.get(API_URL2 + "get_insta_profile/", { params: { username }, headers: authHeader() }
  );
  console.log("get_insta_profile",res.data)

  const insta_profile = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("insta_profile", JSON.stringify(insta_profile));
    message = "Insta-profile retrieved sucessfully";
  }
  else {
    message = "Error retrieving Insta-profile";

  }
  return { insta_profile, message };
};


export default {
  get_insta_posts_user,
  get_insta_profile,
};