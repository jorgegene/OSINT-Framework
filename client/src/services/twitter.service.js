import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/tweets/";

const get_tweets_user = (username) => {
  
  return axios.get(API_URL + "get_tweet_data/", {params: {username} ,  headers: authHeader()}
   
   ).then( (res) => {
     console.log("twett res", res)
    const tweets = res.data
    let message = ""

    if (res.data) {
        localStorage.setItem("tweets", JSON.stringify(tweets));
        message = "Tweets retrieved sucessfully"
      }
      else {
        message = "Error retrieving tweets"

      }
      console.log("tweetRes",message)

      return {tweets,  message};
    })
};




export default {
  get_tweets_user,

};