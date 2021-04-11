import Axios from '../utils/axiosConfig';

// Token already in local storage
export const setUser = (user) => {
    return {
        type: 'LOGIN',
        user
    };
};

export const startSetUser = () => {
    return (dispatch) => {
        return Axios.get('/auth/user')
        .then(res => {
            const user = {
                token: localStorage.getItem('token'),
                email: res.data.user.email,
                username: res.data.user.username
            };
            dispatch(setUser(user));
        })
        .catch(err => {
            localStorage.setItem('token', '');
            dispatch(setUser({}));
        })
    };
};

// No token
export const login = (user) => {
    localStorage.setItem('token', user.token);
    return {
        type: 'LOGIN',
        user
    };
};

export const logout = () => {
    localStorage.setItem('token', '');
    return {
        type: 'LOGOUT'
    };
};