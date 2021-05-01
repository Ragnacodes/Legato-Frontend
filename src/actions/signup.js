import Axios from '../utils/axiosConfig';

export const ActionTypes = {
  UPDATE_SIGNUP_INFO: 'UPDATE_SIGNUP_INFO',
  DELETE_SIGNUP_ERROR: 'DELETE_SIGNUP_ERROR',
  SET_SIGNUP_ERROR: 'SET_SIGNUP_ERROR',
  VALIDATE_SIGNUP_PASSWORDS: 'VALIDATE_SIGNUP_PASSWORDS',
  RESET_SIGNUP_FORM: 'RESET_SIGNUP_FORM',
};

export const startSignup = (info) => {
  return (dispatch, getState) => {
    return Axios.post('/auth/signup', info)
      .then((res) => {
        dispatch(resetSignupForm());
        return res;
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          let str = err.response.data.message;
          throw new Error(str.charAt(0).toUpperCase() + str.slice(1) + '.');
        } else {
          throw err;
        }
      });
  };
};

export const resetSignupForm = () => ({
  type: ActionTypes.RESET_SIGNUP_FORM,
});

export const updateInfo = (type, data) => ({
  type: ActionTypes.UPDATE_SIGNUP_INFO,
  payload: { type, data },
});

export const deleteError = (type) => {
  return (dispatch) => {
    dispatch(setError(type, ''));
  };
};

export const setError = (type, err) => ({
  type: ActionTypes.SET_SIGNUP_ERROR,
  payload: { type, err },
});

export const validateConfirmPassword = () => ({
  type: ActionTypes.VALIDATE_SIGNUP_PASSWORDS,
  payload: { err: 'Your passwords do not match.' },
});

export const validateUsername = (data) => {
  return (dispatch) => {
    const usernameRegex = /^[a-z]+.*$/i;
    if (usernameRegex.test(data)) {
      dispatch(deleteError('username'));
    } else {
      dispatch(setError('username', 'Username should start with letter.'));
    }
  };
};

export const validateEmail = (data) => {
  return (dispatch) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(data)) {
      dispatch(deleteError('email'));
    } else {
      dispatch(setError('email', 'Please enter a valid email.'));
    }
  };
};

export const validatePassword = (data) => {
  return (dispatch) => {
    if (data.length >= 8) {
      dispatch(deleteError('password'));
    } else {
      dispatch(setError('password', 'Password is too short.'));
    }
  };
};

export const validateInfo = (type, data) => {
  return (dispatch) => {
    if (!data) {
      // console
      dispatch(setError(type, 'Required.'));
    } else {
      if (type === 'password') {
        dispatch(validatePassword(data));
        dispatch(validateConfirmPassword());
      } else if (type === 'email') dispatch(validateEmail(data));
      else if (type === 'username') dispatch(validateUsername(data));
      else if (type === 'confirm') dispatch(validateConfirmPassword());
    }
  };
};
