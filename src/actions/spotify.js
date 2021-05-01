import Axios from '../utils/axiosConfig';

export const ActionTypes = {
  SET_PLAYLISTS: 'SET_PLAYLISTS',
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