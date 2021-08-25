export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = JSON.parse(localStorage.getItem('token'));
    console.log("header", user, token)


    if (token) {
      return { Authorization: 'Bearer ' + token };
    } else {
      return {};
    }
  }