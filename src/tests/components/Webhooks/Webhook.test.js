import React from 'react';
import { shallow } from 'enzyme';
import { Webhook } from '../../../components/Webhooks/Webhook';
import { ListItem } from '@material-ui/core';
let wrapper, props, webhook, updateWebhook, deleteWebhook;
beforeEach(() => {
  webhook = { name: 'name', id: 1, url: 'url', isEnable: true };
  updateWebhook = jest.fn();
  deleteWebhook = jest.fn();
  props = {
    webhook,
    updateWebhook,
    deleteWebhook,
  };
  wrapper = shallow(<Webhook {...props} />);
});

test('should render Webhook component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render only one list item', () => {
  expect(wrapper.find(ListItem).length).toBe(1);
});
