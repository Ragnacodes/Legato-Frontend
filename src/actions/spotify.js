import Axios from '../utils/axiosConfig';

export const ActionTypes = {
  SET_PLAYLISTS: 'SET_PLAYLISTS',
  SET_TRACK_INFO: 'SET_TRACK_INFO',
}

export const setPlaylists = (playlists) => {
  return {
    type: ActionTypes.SET_PLAYLISTS,
    payload: {
        playlists,
    },
  };
};

export const startGetPlaylists = () => {
  return (dispatch, getState) => {
    const username = getState().auth.username;
    return Axios.get(`/users/${username}/spotify/playlists`)
    .then((res) => {
        dispatch(setPlaylists(res.data));
    })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setTrackInfo = (track) => {
  return {
    type: ActionTypes.SET_TRACK_INFO,
    payload: {
        track,
    },
  };
};

export const startGetTrackInfo = (id) =>{
  return (dispatch) => {
    return Axios.get(`/services/spotify/track/${id}`)
    .then((res) => {
        dispatch(setTrackInfo(res.data));
    })
      .catch((err) => {
        console.log(err);
      });
  };
}