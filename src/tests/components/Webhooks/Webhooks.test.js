import React from 'react';
import { shallow } from 'enzyme';
import { Webhooks } from '../../../components/Webhooks/Webhooks';
let wrapper, props, webhooks, getWebhooks, addWebhook;
beforeEach(() => {
  webhooks = [];
  getWebhooks = jest.fn();
  addWebhook = jest.fn();
  props = {
    webhooks,
    getWebhooks,
    addWebhook,
  };
  wrapper = shallow(<Webhooks {...props} />);
});

test('should render Webhooks Page correctly with no webhook', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render Webhooks Page correctly with onr webhook', () => {
  webhooks = [
    {
      name: 'name',
      id: 1,
      url: 'url',
      isEnable: true,
    },
  ];
  wrapper = shallow(<Webhooks {...props} webhooks={webhooks} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Webhooks Page correctly with more than one webhook', () => {
  webhooks = [
    {
      name: 'name',
      id: 1,
      url: 'url',
      isEnable: true,
    },
    {
      name: 'name two',
      id: 2,
      url: 'url/22',
      isEnable: false,
    },
  ];
  wrapper = shallow(<Webhooks {...props} webhooks={webhooks} />);
  expect(wrapper).toMatchSnapshot();
});
