import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";

const register = (username, email, password) => {
  return axios.post(API_URL + "users/", {
    username,
    email,
    password,
  }).then(function (res){
    const token = res.data.access
    const refresh_token = res.data.refresh

    const user = res.config.data
    let message = "error"

    if (res.data.token) {
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
        localStorage.setItem("user", JSON.stringify(user));
        message = "Register sucess"
      }

      return {token, refresh_token, user, message};
    })
};

const refreshToken = (refresh) => {
  return axios
    .post(API_URL + "token/refresh/", {
      refresh,
    })
    .then((res) => {
        const token = res.data.access
        let message = "refreshToken error"

      if (token) {
        localStorage.setItem("token", JSON.stringify(token));
        message = "refreshToken sucess"

      }

      return {token, message};
    });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "token/", {
      username,
      password,
    })
    .then((res) => {
        const token = res.data.access
        const refresh_token = res.data.refresh

        const user = res.config.data
        let message = "error"

      if (token) {
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
        localStorage.setItem("user", JSON.stringify(user));
        message = "LogIn sucess"

      }

      return {token, refresh_token, user, message};
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");

};

export default {
  register,
  login,
  logout,
  refreshToken,
};