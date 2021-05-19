import * as actions from '../../actions/webhooks';
import { ActionTypes } from '../../actions/webhooks';

test('should setup set webhooks action object', () => {
  const webhooks = [];
  const action = actions.setWebhooks(webhooks);
  expect(action).toEqual({
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks,
    },
  });
});

test('should setup add webhook action object', () => {
  const webhook = { name: 'three', isEnable: false, url: 'url/3', id: 3 };
  const action = actions.addWebhook(webhook);
  expect(action).toEqual({
    type: ActionTypes.ADD_WEBHOOK,
    payload: {
      webhook,
    },
  });
});

test('should setup update webhooks action object', () => {
  const id = '123';
  const data = { name: 'newname' };
  const action = actions.updateWebhook(id, data);
  expect(action).toEqual({
    type: ActionTypes.UPDATE_WEBHOOK,
    payload: {
      id,
      data,
    },
  });
});

test('should setup delete webhook action object', () => {
  const id = '123';
  const action = actions.deleteWebhook(id);
  expect(action).toEqual({
    type: ActionTypes.DELETE_WEBHOOK,
    payload: {
      id,
    },
  });
});
