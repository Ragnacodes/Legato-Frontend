import loginReducer from "../../reducers/login";
import { ActionTypes } from "../../actions/login";

test("should set default state for login", () => {
  const action = {
    type: "@@INIT",
  };
  const state = loginReducer(undefined, action);
  expect(state).toEqual({
    login_info: {},
  });
});

test("should update username for login", () => {
  const data = "user";
  const action = {
    type: ActionTypes.UPDATE_LOGIN_INFO,
    payload: {
      type: "username",
      data,
    },
  };
  const state = loginReducer({}, action);
  expect(state.login_info).toHaveProperty("username", data);
});

test("should update password for login", () => {
  const data = "11111111";
  const action = {
    type: ActionTypes.UPDATE_LOGIN_INFO,
    payload: {
      type: "password",
      data,
    },
  };
  const state = loginReducer({}, action);
  expect(state.login_info).toHaveProperty("password", data);
});

test("should reset form for login", () => {
  const action = {
    type: ActionTypes.RESET_LOGIN_FORM,
  };
  const state = loginReducer({}, action);
  expect(state).toHaveProperty("login_info", {});
});
