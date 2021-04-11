export const ActionTypes = {
  SET_WEBHOOKS: "SET_WEBHOOKS",
  ADD_WEBHOOK: "ADD_WEBHOOK",
  REMOVE_WEBHOOK: "REMOVE_WEBHOOK",
  UPDATE_WEBHOOK: "UPDATE_WEBHOOK",
};

export const setWebhooks = (webhooks) => {
  return {
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks,
    },
  };
};

// export const removeWebhook = (id) => {
//   return {
//     type: ActionTypes.REMOVE_WEBHOOK,
//     payload: {
//       id,
//     },
//   };
// };

export const updateWebhook = (id, data) => {
  return {
    type: ActionTypes.UPDATE_WEBHOOK,
    payload: {
      id,
      data,
    },
  };
};
