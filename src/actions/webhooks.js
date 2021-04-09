export const ActionTypes = {
  SET_WEBHOOKS: "SET_WEBHOOKS",
  ADD_WEBHOOK: "ADD_WEBHOOK",
  REMOVE_WEBHOOK: "REMOVE_WEBHOOK",
  TOGGLE_WEBHOOK_STATE: "TOGGLE_WEBHOOK_STATE",
  EDIT_WEBHOOK: "EDIT_WEBHOOK",
};

export const setWebhooks = (webhooks) => {
  return {
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks,
    },
  };
};

export const renameWebhook = (id, data) => {
  return (dispatch) => {
    dispatch(editWebhook(id, "name", data));
  };
};

export const toggleWebhookState = (id) => {
  return {
    type: ActionTypes.TOGGLE_WEBHOOK_STATE,
    payload: {
      id,
    },
  };
};

export const removeWebhook = (id) => {
  return {
    type: ActionTypes.REMOVE_WEBHOOK,
    payload: {
      id,
    },
  };
};

export const editWebhook = (id, type, data) => {
  return {
    type: ActionTypes.EDIT_WEBHOOK,
    payload: {
      id,
      type,
      data,
    },
  };
};
