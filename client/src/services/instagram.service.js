import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/insta_posts/";

const get_insta_posts_user = (username) => {
  
  return axios.get(API_URL + "get_post_data/", {params: {username} ,  headers: authHeader()}
   
   ).then( (res) => {
     console.log("insta res", res)
    const posts = res.data
    let message = ""

    if (res.data) {
        localStorage.setItem("posts", JSON.stringify(posts));
        message = "Insta-posts retrieved sucessfully"
      }
      else {
        message = "Error retrieving posts"

      }
      console.log("postRes",message)

      return {posts,  message};
    })
};




export default {
  get_insta_posts_user,

};