import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../../components/Services/Spotify/SaveToPlaylist/Form';
import { IconButton, TextField } from '@material-ui/core';

let wrapper,
  props,
  id,
  data,
  track,
  connections,
  editElement,
  playlists,
  setAnchorEl,
  getPlaylists,
  getTrackInfo,
  setTrackInfo;
beforeEach(() => {
  id = 'node_id';
  data = {};
  track = {};
  connections = [];
  playlists = [];
  editElement = jest.fn();
  setAnchorEl = jest.fn();
  getPlaylists = jest.fn();
  getTrackInfo = jest.fn();
  setTrackInfo = jest.fn();
  props = {
    id,
    data,
    track,
    connections,
    editElement,
    playlists,
    setAnchorEl,
    getPlaylists,
    getTrackInfo,
    setTrackInfo,
  };
  wrapper = shallow(<Form {...props} />);
});

test('should render save to playlist form correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should have 1 textfield for playlist', () => {
  expect(wrapper.find(TextField).find({ name: 'PlaylistId' }).length).toBe(1);
});

test('should have 1 textfield for track url', () => {
  expect(wrapper.find(TextField).find({ name: 'trackUrl' }).length).toBe(1);
});

test('should disable search button if there is no track url', () => {
  const searchButton = wrapper
    .find(IconButton)
    .find({ name: 'searchForTrack' });
  expect(searchButton.prop('disabled')).toBe(true);
});

test('should enable search button if there is no track url', () => {
  const trackUrlField = wrapper.find(TextField).find({ name: 'trackUrl' });
  trackUrlField.simulate('change', {
    target: {
      name: trackUrlField.prop('name'),
      value: 'trackUrl',
    },
  });
  const searchButton = wrapper
    .find(IconButton)
    .find({ name: 'searchForTrack' });
  expect(searchButton.prop('disabled')).toBe(false);
});

test('should call getTrackInfo if track url is valid', () => {
  const trackUrl = 'https://spotify.com/track/trackId?playlist';
  const trackUrlField = wrapper.find(TextField).find({ name: 'trackUrl' });
  trackUrlField.simulate('change', {
    target: {
      name: trackUrlField.prop('name'),
      value: trackUrl,
    },
  });
  const searchButton = wrapper
    .find(IconButton)
    .find({ name: 'searchForTrack' });
  searchButton.simulate('click');
  expect(getTrackInfo).toBeCalledTimes(1);
  expect(getTrackInfo).toBeCalledWith('trackId');
});

test('should reset with setTrackInfo if track url is valid', () => {
  const trackUrl = 'https://spotify.comtrack/trackId?playlist';
  const trackUrlField = wrapper.find(TextField).find({ name: 'trackUrl' });
  trackUrlField.simulate('change', {
    target: {
      name: trackUrlField.prop('name'),
      value: trackUrl,
    },
  });
  const searchButton = wrapper
    .find(IconButton)
    .find({ name: 'searchForTrack' });
  expect(searchButton.prop('disabled')).toBe(false);
  searchButton.simulate('click');
  expect(setTrackInfo).toBeCalledTimes(1);
  expect(setTrackInfo).toBeCalledWith('');
});
