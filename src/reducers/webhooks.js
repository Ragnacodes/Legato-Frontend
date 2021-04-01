import { ActionTypes } from "../actions/webhooks";

const initialState = {
  webhooks: [
    {
      id: 1,
      address: "https://google.com",
      name: "webhook1",
      toggle: true,
      queueNumber: 0,
    },
    {
      id: 2,
      address: "http",
      name: "webhook2",
      toggle: true,
      queueNumber: 1,
    },
    {
      id: 3,
      address: "http",
      name: "webhook3",
      toggle: true,
      queueNumber: 2,
    },
  ],
};
const webhookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WEBHOOKS:
      return {
        ...state,
        webhooks: action.payload.webhooks,
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
                toggle: !w.toggle,
              }
            : w;
        }),
      };

    case ActionTypes.EDIT_WEBHOOK:
      return {
        ...state,
        webhooks: state.webhooks.map((w, i) => {
          return w.id === action.payload.id
            ? {
                ...w,
                [action.payload.type]: action.payload.data,
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
