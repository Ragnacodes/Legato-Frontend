import Axios from '../utils/axiosConfig';

export const ActionTypes = {
  SET_DISCORD_CHANNELS: 'SET_DISCORD_CHANNELS',
  SET_DISCORD_MESSAGES: 'SET_DISCORD_MESSAGES',
};

export const setChannels = (channels) => {
  return {
    type: ActionTypes.SET_DISCORD_CHANNELS,
    payload: {
      channels,
    },
  };
};

export const startGetChannels = (guildId) => {
  return (dispatch) => {
    return Axios.get(`services/discord/guilds/${guildId}/channels/text`)
      .then((res) => {
        dispatch(setChannels(res.data.channels));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setMessages = (messages) => {
  return {
    type: ActionTypes.SET_DISCORD_MESSAGES,
    payload: {
      messages,
    },
  };
};

export const startGetMessages = (channelId) => {
  return (dispatch) => {
    return Axios.get(`services/discord/channels/${channelId}/messages`)
      .then((res) => {
        dispatch(setMessages(res.data.messages));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
