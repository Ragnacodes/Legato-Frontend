import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://localhost:8080/api'
});

instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');

export default instance;