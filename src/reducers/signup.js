import {ActionTypes} from "../actions/signup";

const initialState = {
    info : {},
    errors: {}
}
const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case ActionTypes.UPDATE_INFO:
        return {
          ...state,
          info : {
            ...state.info,
            [action.payload.type] : action.payload.data,
          }
        };

      case ActionTypes.SET_ERROR:
        return {
          ...state,
          errors : {
            ...state.errors,
            [action.payload.type] : action.payload.err,
          }
        };

        case ActionTypes.VALIDATE_PASSWORDS:
          return {
            ...state,
            errors : {
              ...state.errors,
              confirm : state.info["confirm"]? (state.info["confirm"] !== state.info["password"] && action.payload.err) : "",
            }
        };
      
      default:
        return state;
    }
  };
  
  export default signupReducer;