import axios from 'axios';

import { API_CONFIG } from '../constants/api';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default api;
