import {ActionTypes} from "../actions/login";

const initialState = {
    login_info : {},
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_LOGIN_INFO:
        return {
          ...state,
          login_info : {
            ...state.login_info,
            [action.payload.type] : action.payload.data,
          }
        };
      
      default:
        return state;
    }
  };
  
  export default signupReducer;