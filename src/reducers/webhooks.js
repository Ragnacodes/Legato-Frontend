import { ActionTypes } from '../actions/webhooks';
const initialState = {
  webhooks: [],
};
const webhookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_WEBHOOKS:
      return {
        ...state,
        webhooks: action.payload.webhooks.reverse(),
      };

    case ActionTypes.ADD_WEBHOOK:
      return {
        ...state,
        webhooks: [
          {
            ...action.payload.webhook,
          },
        ].concat(state.webhooks),
      };

    case ActionTypes.UPDATE_WEBHOOK:
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

    case ActionTypes.DELETE_WEBHOOK:
      return {
        ...state,
        webhooks: state.webhooks.filter((w, i) => w.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default webhookReducer;
