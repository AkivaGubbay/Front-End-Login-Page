import axios from "axios";

const BASE_URL = "http://localhost:3005/api/users/";

export function login(email, password) {
  return axios.get(BASE_URL + this.state.userName);
  //return axios.post( config.api_root + 'users/login', { email: email, password: password });
}
