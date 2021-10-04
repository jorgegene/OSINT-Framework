import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/searches/";

const get_usernames = async (username) => {
  
  const res = await axios.get(API_URL + "get_usernames/", { params: { username }, headers: authHeader() }

  );
  console.log("searches res", res);
  const usernames = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("search", JSON.stringify(usernames));
    message = "Search retrieved sucessfully";
  }
  else {
    message = "Error retrieving search";

  }
  return { usernames, message };
};




export default {
  get_usernames,

};