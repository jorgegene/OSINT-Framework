import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/tweets/";
const API_URL2 = "http://localhost:8000/api/v1/twitter_profile/";

const get_tweets_user = async (username) => {
  
  const res = await axios.get(API_URL + "get_tweet_data/", { params: { username }, headers: authHeader() }

  );
  const tweets = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("tweets", JSON.stringify(tweets));
    message = "Tweets retrieved sucessfully";
  }
  else {
    message = "Error retrieving tweets";

  }
  console.log("tweetRes", message);
  return { tweets, message };
};

const get_twitter_profile = async (username) => {
  
  const res = await axios.get(API_URL2 + "get_twitter_profile/", { params: { username }, headers: authHeader() }

  );
  const twitter_profile = res.data;
  let message = "";
  if (res.data) {
    localStorage.setItem("twitter_profile", JSON.stringify(twitter_profile));
    message = "twitter_profile retrieved sucessfully";
  }
  else {
    message = "Error retrieving twitter_profile";

  }
  return { twitter_profile, message };
};


export default {
  get_tweets_user,
  get_twitter_profile,
};