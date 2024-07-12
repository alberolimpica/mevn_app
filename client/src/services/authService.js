import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BACKEND_URL;

export default {
  getAuth() {
    return axios.get(`${BASE_URL}/user-auth`);
  },
  login(authData) {
    return axios
      .post(`${BASE_URL}/user-auth/login`, authData)
      .then((response) => {
        if (response.status === 200) {
          return { status: 200, data: response.data };
        }
        return { status: response.status, error: 'Error de autenticación' };
      })
      .catch(() => ({ status: 500, error: 'Error de red' }));
  },
  register(authData) {
    return axios
      .post(`${BASE_URL}/user-auth/register`, authData)
      .then((response) => {
        if (response.status === 200) {
          return { status: 200, data: response.data };
        }
        return { status: response.status, error: 'Error de registro' };
      })
      .catch(() => ({ status: 500, error: 'Error de red' }));
  },
};
