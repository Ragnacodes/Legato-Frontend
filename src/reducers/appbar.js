import { ActionTypes } from "../actions/appbar";

const initialState = {
  right_children: [],
  left_children: [],
};
const appbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_APPBAR:
      return {
        ...state,
        [action.payload.type]: action.payload.data,
      };
    case ActionTypes.ADD_TO_LEFT_CHILDREN:
      return {
        ...state,
        left_children: state.left_children.append(action.payload.data),
      };
    case ActionTypes.ADD_TO_RIGHT_CHILDREN:
      return {
        ...state,
        right_children: state.right_children.append(action.payload.data),
      };

    default:
      return state;
  }
};

export default appbarReducer;
