import { ActionTypes } from '../actions/discord';

const initialState = {
  channels: [],
  messages: [],
};
const discordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DISCORD_CHANNELS:
      return {
        ...state,
        channels: action.payload.channels,
      };
    case ActionTypes.SET_DISCORD_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
      };

    default:
      return state;
  }
};

export default discordReducer;
