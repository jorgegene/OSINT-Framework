import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/searches/";

const get_usernames = async (username) => {
  
  const res = await axios.get(API_URL + "get_usernames/", { params: { username }, headers: authHeader() }
  );
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

const get_search_list = async (username) => {
  
  const res = await axios.get(API_URL + "get_serach_list/", { headers: authHeader() }
  );

  const searches = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("search", JSON.stringify(searches));
    message = "Search retrieved sucessfully";
  }
  else {
    message = "Error retrieving search";

  }
  return { searches, message };
};



export default {
  get_usernames,
  get_search_list,
};