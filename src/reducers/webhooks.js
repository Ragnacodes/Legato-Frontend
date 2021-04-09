import { ActionTypes } from "../actions/webhooks";
const mockQueue = [
  {
    type: "Text",
    created_at: "Fri Apr 09 2021 22:44:31",
    size: "1B",
    scenarios: "12345",
  },
  {
    type: "Text",
    created_at: "Fri Apr 09 2021 22:44:31",
    size: "1B",
    scenarios: "12345",
  },
  {
    type: "Text",
    created_at: "Fri Apr 09 2021 22:44:31",
    size: "1B",
    scenarios: "12345",
  },
];
const initialState = {
  webhooks: [],
};
const webhookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WEBHOOKS:
      return {
        ...state,
        webhooks: action.payload.webhooks.map((wh) => {
          return {
            ...wh,
            queue: mockQueue,
            id: wh.url.split("/").reverse()[0],
            ip_restrictions: "",
            get_request_headers: false,
            get_request_http: false,
            json_passthrough: false,
          };
        }),
      };

    case ActionTypes.ADD_WEBHOOK:
      return {
        ...state,
        webhooks: state.webhooks.push(action.payload.webhook),
      };

    case ActionTypes.TOGGLE_WEBHOOK_STATE:
      return {
        ...state,
        webhooks: state.webhooks.map((w, i) => {
          return w.id === action.payload.id
            ? {
                ...w,
                active: !w.active,
              }
            : w;
        }),
      };

    case ActionTypes.UPDATE_WEBHOOK:
      console.log(action);
      return {
        ...state,
        webhooks: state.webhooks.map((w, i) => {
          return w.id === action.payload.id
            ? {
                ...w,
                ...action.payload.data,
              }
            : w;
        }),
      };

    case ActionTypes.REMOVE_WEBHOOK:
      return {
        ...state,
        webhooks: state.webhooks.filter((w, i) => w.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default webhookReducer;
