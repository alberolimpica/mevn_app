import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BACKEND_URL;
export default {
  getAuth() {
    return axios.get(`${BASE_URL}/user-auth`);
  },
  login(authData) {
    return axios.post(`${BASE_URL}/user-auth/login`, { authData });
  },
  register(authData) {
    return axios.post(`${BASE_URL}/user-auth/register`, { authData });
  },
};
