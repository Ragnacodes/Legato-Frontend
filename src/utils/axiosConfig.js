import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8080/api'
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