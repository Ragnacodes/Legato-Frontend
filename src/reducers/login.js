import {ActionTypes} from "../actions/signup";

const initialState = {
    info : {},
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
      
      default:
        return state;
    }
  };
  
  export default signupReducer;