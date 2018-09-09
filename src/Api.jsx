import axios from "axios";

const BASE_URL = "http://localhost:3005/api/users/";

export function login(email, password) {
  return axios.post(BASE_URL + "login", {
    userName: email,
    userPassword: password
  });
}
