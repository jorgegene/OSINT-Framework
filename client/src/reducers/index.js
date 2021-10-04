import { combineReducers } from "redux";
import auth_reducer from "./auth";
import message_reducer from "./message";
import sidebar_reducer from "./sidebar";
import tweet_reducer from "./tweet";
import instagram_reducer from "./instagram";
import facebook_reducer from "./facebook";
import linkedin_reducer from "./linkedin";

import search_reducer from "./search";

export default combineReducers({
    auth_reducer,
  message_reducer,
  sidebar_reducer,
  tweet_reducer,
  instagram_reducer,
  facebook_reducer,
  linkedin_reducer,
  search_reducer,
});