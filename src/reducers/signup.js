import {ActionTypes} from "../actions/signup";

const initialState = {
  signup_info : {},
  signup_errors: {}
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_INFO:
        return {
          ...state,
          signup_info : {
            ...state.signup_info,
            [action.payload.type] : action.payload.data,
          }
        };

      case ActionTypes.SET_ERROR:
        return {
          ...state,
          signup_errors : {
            ...state.signup_errors,
            [action.payload.type] : action.payload.err,
          }
        };

        case ActionTypes.VALIDATE_PASSWORDS:
          return {
            ...state,
            signup_errors : {
              ...state.signup_errors,
              confirm : state.signup_info["confirm"]? (state.signup_info["confirm"] !== state.signup_info["password"] && action.payload.err) : "",
            }
        };
      
      default:
        return state;
    }
  };
  
  export default signupReducer;