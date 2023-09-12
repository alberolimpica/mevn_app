import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BACKEND_URL;
export default {
  getTranslations(tranlsationsData) {
    return axios.post(`${BASE_URL}/translations`, tranlsationsData);
  },
};
