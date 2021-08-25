import { combineReducers } from "redux";
import auth_reducer from "./auth";
import message_reducer from "./message";
import sidebar_reducer from "./sidebar";
import tweet_reducer from "./tweet";

export default combineReducers({
    auth_reducer,
  message_reducer,
  sidebar_reducer,
  tweet_reducer,
});