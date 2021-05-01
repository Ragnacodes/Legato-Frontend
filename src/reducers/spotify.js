import { ActionTypes } from '../actions/spotify';

const initialState = {
  playlists: []
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.playlists
      };

    
    default:
      return state;
  }
};

export default loginReducer;
