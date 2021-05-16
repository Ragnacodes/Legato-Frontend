import { ActionTypes } from '../actions/spotify';

const initialState = {
  playlists: [],
  track: '',
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    case ActionTypes.SET_TRACK_INFO:
      return {
        ...state,
        track: action.payload.track,
      };

    default:
      return state;
  }
};

export default loginReducer;
