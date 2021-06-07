import { ActionTypes } from '../actions/login';

const initialState = {
  login_info: {},
  login_errors: {},
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RESET_LOGIN_FORM:
      return {
        ...state,
        login_info: {},
        login_errors: {},
      };

    case ActionTypes.UPDATE_LOGIN_INFO:
      return {
        ...state,
        login_info: {
          ...state.login_info,
          [action.payload.type]: action.payload.data,
        },
      };

    case ActionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        login_errors: {
          ...state.login_errors,
          [action.payload.type]: action.payload.err,
        },
      };

    default:
      return state;
  }
};

export default loginReducer;
