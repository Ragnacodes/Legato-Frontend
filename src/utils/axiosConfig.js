import Axios from 'axios';
import { host } from './host';

const instance = Axios.create({
    baseURL: `${host}/api`
});

instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.authorization = token;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

export default instance;