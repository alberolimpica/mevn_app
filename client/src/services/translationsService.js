import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default {
  getTranslations(tranlsationsData) {
    return axios.post(`${BASE_URL}/translations`, tranlsationsData);
  },
};
