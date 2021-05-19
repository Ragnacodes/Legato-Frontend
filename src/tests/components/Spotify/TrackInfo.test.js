import React from 'react';
import { shallow } from 'enzyme';
import { TrackInfo } from '../../../components/Services/Spotify/SaveToPlaylist/TrackInfo';
import { Typography } from '@material-ui/core';

let wrapper, track;

beforeEach(() => {
  track = {
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
  wrapper = shallow(<TrackInfo track={track} />);
});

test('should render track info correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render track album cover', () => {
  expect(wrapper.find('img').length).toBe(1);
});

test('should render track name, artists, album', () => {
  expect(wrapper.find(Typography).length).toBe(3);
});

test('should render track name correctly', () => {
  const trackName = wrapper.find(Typography).find({ className: 'name' });
  expect(trackName.text()).toMatch(track.name);
});

test('should render track artists correctly', () => {
  const trackArtists = wrapper.find(Typography).find({ className: 'artists' });
  expect(trackArtists.text()).toMatch(
    `${track.artists[0].name}, ${track.artists[1].name}`
  );
});

test('should render track album correctly', () => {
  const trackAlbum = wrapper.find(Typography).find({ className: 'album' });
  expect(trackAlbum.text()).toMatch(track.album.name);
});

test('should render track album cover correctly', () => {
  const trackAlbumCover = wrapper.find('img');
  expect(trackAlbumCover.prop('src')).toMatch(track.album.images[0].url);
});
