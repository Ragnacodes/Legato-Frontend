import Axios from '../utils/axiosConfig';

// Token already in local storage
export const setUser = (user) => {
  return {
    type: 'LOGIN',
    user,
  };
};

export const startSetUser = () => {
  return (dispatch) => {
    return Axios.get('/auth/user')
      .then((res) => {
        const user = {
          token: localStorage.getItem('token'),
          email: res.data.user.email,
          username: res.data.user.username,
        };
        dispatch(setUser(user));
      })
      .catch((err) => {
        localStorage.setItem('token', '');
        dispatch(setUser({}));
      });
  };
};

// No token
export const login = (user) => {
  localStorage.setItem('token', user.token);
  return {
    type: 'LOGIN',
    user,
  };
};

export const startLogin = (info) => {
  return (dispatch, getState) => {
    return Axios.post('/auth/login', {
      ...info,
    })
      .then((res) => {
        dispatch(
          login({
            token: res.data.access_token,
            username: info.username,
          })
        );
      })
      .catch((err) => {
        if (err.response) {
          let str = err.response.data.message;
          throw new Error(str.charAt(0).toUpperCase() + str.slice(1) + '.');
        } else {
          throw err;
        }
      });
  };
};

export const logout = () => {
  localStorage.setItem('token', '');
  return {
    type: 'LOGOUT',
  };
};
