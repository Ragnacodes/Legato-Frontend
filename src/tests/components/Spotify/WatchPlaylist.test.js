import React from 'react';
import { shallow } from 'enzyme';
import { Form } from '../../../components/Services/Spotify/WatchPlaylist/Form';
import { IconButton, TextField } from '@material-ui/core';

let wrapper,
  props,
  id,
  data,
  connections,
  playlists,
  editElement,
  setAnchorEl,
  getPlaylists;

beforeEach(() => {
  id = 'node_id';
  data = {};
  connections = [];
  playlists = [];
  editElement = jest.fn();
  setAnchorEl = jest.fn();
  getPlaylists = jest.fn();
  props = {
    id,
    data,
    connections,
    playlists,
    editElement,
    setAnchorEl,
    getPlaylists,
  };
  wrapper = shallow(<Form {...props} />);
});

test('should render watch playlist form correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should have 1 textfield for playlist', () => {
  expect(wrapper.find(TextField).find({ name: 'playlist' }).length).toBe(1);
});
