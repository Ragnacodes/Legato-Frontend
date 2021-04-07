export const ActionTypes = {
  UPDATE_APPBAR: "UPDATE_APPBAR",
  ADD_TO_RIGHT_CHILDREN: "ADD_TO_RIGHT_CHILDREN",
  ADD_TO_LEFT_CHILDREN: "ADD_TO_LEFT_CHILDREN",
};

export const updateAppBar = (type, data) => ({
  type: ActionTypes.UPDATE_APPBAR,
  payload: { type, data },
});
