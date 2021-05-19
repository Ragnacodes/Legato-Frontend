import * as actions from '../../actions/spotify';
import { ActionTypes } from '../../actions/spotify';

test('should setup set playlists action object', () => {
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
  const action = actions.setPlaylists(playlists);
  expect(action).toEqual({
    type: ActionTypes.SET_PLAYLISTS,
    payload: {
      playlists,
    },
  });
});

test('should setup set playlists action object', () => {
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
  const action = actions.setTrackInfo(track);
  expect(action).toEqual({
    type: ActionTypes.SET_TRACK_INFO,
    payload: {
      track,
    },
  });
});
