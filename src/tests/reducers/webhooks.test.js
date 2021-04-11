import webhookReducer from "../../reducers/webhooks";
import { ActionTypes } from "../../actions/webhooks";

test("should set default state for login", () => {
  const action = {
    type: "@@INIT",
  };
  const state = webhookReducer(undefined, action);
  expect(state).toEqual({
    webhooks: [],
  });
});

test("should set webhooks", () => {
  const data = [
    {
      name: "one",
      active: true,
      url: "url/1",
    },
    {
      name: "two",
      active: false,
      url: "url/2",
    },
  ];
  const action = {
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks: data,
    },
  };
  const state = webhookReducer({}, action);

  expect(state.webhooks).toEqual(
    data.map((wh) => {
      return {
        ...wh,
        id: wh.url.split("/").reverse()[0],
        ip_restrictions: "",
        get_request_headers: false,
        get_request_http: false,
        json_passthrough: false,
      };
    })
  );
});

test("should update webhook's name", () => {
  const id = "1";
  const webhooks = [
    {
      name: "one",
      active: true,
      url: "url/1",
    },
    {
      name: "two",
      active: false,
      url: "url/2",
    },
  ];
  const data = {
    name: "new one",
  };
  const action = {
    type: ActionTypes.UPDATE_WEBHOOK,
    payload: {
      id: id,
      data: data,
    },
  };
  const state = webhookReducer({ webhooks }, action);
  expect(state.webhooks).toEqual(
    webhooks.map((w) => {
      return w.id === id
        ? {
            ...w,
            ...data,
          }
        : w;
    })
  );
});
