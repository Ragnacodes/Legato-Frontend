import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const user = {
    token: "123",
    email: "email",
    username: "username",
  };
  const action = {
    type: "LOGIN",
    user,
  };
  const state = authReducer({}, action);
  expect(state).toBe(action.user);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "anything" }, action);
  expect(state).toEqual({});
});
