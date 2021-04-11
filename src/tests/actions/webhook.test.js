import * as actions from "../../actions/webhooks";
import { ActionTypes } from "../../actions/webhooks";

test("should setup set webhooks action object", () => {
  const webhooks = [];
  const action = actions.setWebhooks(webhooks);
  expect(action).toEqual({
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks,
    },
  });
});

test("should setup update webhooks action object", () => {
  const id = "123";
  const data = { name: "newname" };
  const action = actions.updateWebhook(id, data);
  expect(action).toEqual({
    type: ActionTypes.UPDATE_WEBHOOK,
    payload: {
      id,
      data,
    },
  });
});
