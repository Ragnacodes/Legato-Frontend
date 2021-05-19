import spotifyReducer from '../../reducers/spotify';
import { ActionTypes } from '../../actions/spotify';

const playlists = [
  {
    name: 'playlist1',
    id: 1,
  },
  {
    name: 'playlist2',
    id: 2,
  },
];

const track = {
  name: 'track name',
  artists: [{ name: 'artist1' }, { name: 'artist2' }],
  album: {
    name: 'album name',
    images: [
      {
        url: 'image url',
      },
    ],
  },
};

test('should set default state for spotify', () => {
  const action = {
    type: '@@INIT',
  };
  const state = spotifyReducer(undefined, action);
  expect(state).toEqual({
    playlists: [],
    track: '',
  });
});

test('should set playlists for spotify', () => {
  const action = {
    type: ActionTypes.SET_PLAYLISTS,
    payload: {
      playlists,
    },
  };
  const state = spotifyReducer({ track }, action);
  expect(state).toEqual({
    playlists,
    track,
  });
});

test('should set track for spotify', () => {
  const action = {
    type: ActionTypes.SET_TRACK_INFO,
    payload: {
      track,
    },
  };
  const state = spotifyReducer({ playlists }, action);
  expect(state).toEqual({
    playlists,
    track,
  });
});
