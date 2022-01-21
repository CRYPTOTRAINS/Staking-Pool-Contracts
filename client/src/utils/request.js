import axios from 'axios';

/**
 * Axios basic configuration
 */

const request = axios.create({
  baseURL: 'http//localhost:3000/',
});

request.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: { 'Content-Type': 'application/json' },
  };
});

export default request;