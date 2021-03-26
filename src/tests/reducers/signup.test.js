import signupReducer from "../../reducers/signup";
import { ActionTypes } from "../../actions/signup";

test("should set default state for signup", () => {
  const action = {
    type: "@@INIT",
  };
  const state = signupReducer(undefined, action);
  expect(state).toEqual({
    signup_info: {},
    signup_errors: {},
  });
});

test("should set email for signup", () => {
  const data = "email@email.com";
  const action = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "email",
      data,
    },
  };
  const state = signupReducer({}, action);
  expect(state.signup_info).toHaveProperty("email", data);
});

test("should set password for signup", () => {
  const data = "11111111";
  const action = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "password",
      data,
    },
  };
  const state = signupReducer({}, action);
  expect(state.signup_info).toHaveProperty("password", data);
});

test("should set confirm password for signup", () => {
  const data = "11111111";
  const action = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "confirm",
      data,
    },
  };
  const state = signupReducer({}, action);
  expect(state.signup_info).toHaveProperty("confirm", data);
});

test("should set username for signup", () => {
  const data = "user";
  const action = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "username",
      data,
    },
  };
  const state = signupReducer({}, action);
  expect(state.signup_info).toHaveProperty("username", data);
});

test("should set email error for signup", () => {
  const err = "Error";
  const action = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: {
      type: "email",
      err,
    },
  };
  const state = signupReducer({}, action);
  expect(state.signup_errors).toHaveProperty("email", err);
});

test("should validate (valid) passwords for signup", () => {
  const data = "11111111";
  const action1 = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "password",
      data,
    },
  };
  const state1 = signupReducer({}, action1);
  const action2 = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "confirm",
      data,
    },
  };
  const state2 = signupReducer(state1, action2);

  const action3 = {
    type: ActionTypes.VALIDATE_SIGNUP_PASSWORDS,
  };
  const state3 = signupReducer(state2, action3);

  expect(state3.signup_errors).toHaveProperty("confirm", "");
});

test("should validate (invalid) passwords for signup", () => {
  const data = "11111111";
  const action1 = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "password",
      data,
    },
  };
  const state1 = signupReducer({}, action1);
  const action2 = {
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: {
      type: "confirm",
      data: data + "1",
    },
  };
  const state2 = signupReducer(state1, action2);
  const err = "Your passwords do not match.";
  const action3 = {
    type: ActionTypes.VALIDATE_SIGNUP_PASSWORDS,
    payload: {
      err,
    },
  };
  const state3 = signupReducer(state2, action3);

  expect(state3.signup_errors).toHaveProperty("confirm", err);
});
