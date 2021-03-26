export const ActionTypes = {
  UPDATE_LOGIN_INFO: "UPDATE_LOGIN_INFO",
  RESET_LOGIN_FORM: "RESET_LOGIN_FORM",
  SET_LOGIN_ERROR: "SET_LOGIN_ERROR",
};

export const updateLoginInfo = (type, data) => ({
  type: ActionTypes.UPDATE_LOGIN_INFO,
  payload: { type, data },
});

export const validateLoginInfo = (type, data) => {
  return (dispatch) => {
    if (data) {
      dispatch(setLoginError(type, ""));
    } else {
      dispatch(setLoginError(type, "Required."));
    }
  };
};

export const setLoginError = (type, err) => {
  return {
    type: ActionTypes.SET_LOGIN_ERROR,
    payload: {
      type,
      err,
    },
  };
};

export const resetLoginForm = () => ({
  type: ActionTypes.RESET_LOGIN_FORM,
});
