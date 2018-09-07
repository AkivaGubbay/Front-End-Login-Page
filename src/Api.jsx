import axios from "axios";

const BASE_URL = "http://localhost:3005/api/users/";

export function login(email, password) {
  console.log("printing password so it's used (in api - login):", password);
  return axios.get(BASE_URL + email);
  //return axios.post( config.api_root + 'users/login', { email: email, password: password });
}
