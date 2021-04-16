import { ActionTypes } from '../actions/webhooks';
const initialState = {
  webhooks: [],
};
const webhookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WEBHOOKS:
      return {
        ...state,
        webhooks: action.payload.webhooks
          .filter(
            (wh) =>
              wh.url.split("/").reverse()[0] !==
              "00000000-0000-0000-0000-000000000000"
          )
          .map((wh) => {
            return {
              ...wh,
              active: wh.isEnable,
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
        webhooks: state.webhooks.concat({
          ...action.payload.webhook,
          active: action.payload.webhook.isEnable,
          id: action.payload.webhook.url.split("/").reverse()[0],
          ip_restrictions: "",
          get_request_headers: false,
          get_request_http: false,
          json_passthrough: false,
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
