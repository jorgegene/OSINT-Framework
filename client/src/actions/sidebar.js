import { SET_SIDEBAR } from "./types";

export const sidebarShow = (show) => ({
  type: SET_SIDEBAR,
  payload: {show: show},
});

