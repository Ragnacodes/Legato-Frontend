import webhookReducer from '../../reducers/webhooks';
import { ActionTypes } from '../../actions/webhooks';

test('should set default state for webhooks', () => {
  const action = {
    type: '@@INIT',
  };
  const state = webhookReducer(undefined, action);
  expect(state).toEqual({
    webhooks: [],
  });
});

test('should set webhooks', () => {
  const data = [
    {
      name: 'one',
      isEnable: true,
      url: 'url/1',
      id: 1,
    },
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ];
  const action = {
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks: data,
    },
  };
  const state = webhookReducer({}, action);

  expect(state.webhooks).toEqual(data);
});

test('should add webhook', () => {
  const webhooks = [
    {
      name: 'one',
      isEnable: true,
      url: 'url/1',
      id: 1,
    },
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ];
  const newWebhook = {
    name: 'three',
    isEnable: false,
    url: 'url/3',
    id: 3,
  };
  const action = {
    type: ActionTypes.ADD_WEBHOOK,
    payload: {
      webhook: newWebhook,
    },
  };
  const state = webhookReducer({ webhooks }, action);
  expect(state.webhooks).toEqual([
    {
      name: 'three',
      isEnable: false,
      url: 'url/3',
      id: 3,
    },
    {
      name: 'one',
      isEnable: true,
      url: 'url/1',
      id: 1,
    },
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ]);
});

test("should update webhook's name", () => {
  const id = 1;
  const webhooks = [
    {
      name: 'one',
      isEnable: true,
      url: 'url/1',
      id: 1,
    },
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ];
  const data = {
    name: 'new one',
  };
  const action = {
    type: ActionTypes.UPDATE_WEBHOOK,
    payload: {
      id: id,
      data: data,
    },
  };
  const state = webhookReducer({ webhooks }, action);
  expect(state.webhooks).toEqual([
    {
      name: 'new one',
      isEnable: true,
      url: 'url/1',
      id: 1,
    },
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ]);
});

test('should delete webhook by id', () => {
  const id = 1;
  const webhooks = [
    {
      name: 'one',
      isEnable: true,
      url: 'url/1',
      id: 1,
    },
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ];

  const action = {
    type: ActionTypes.DELETE_WEBHOOK,
    payload: {
      id: id,
    },
  };

  const state = webhookReducer({ webhooks }, action);
  expect(state.webhooks).toEqual([
    {
      name: 'two',
      isEnable: false,
      url: 'url/2',
      id: 2,
    },
  ]);
});
