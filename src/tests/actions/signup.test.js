import * as actions from "../../actions/signup";
import { ActionTypes } from "../../actions/signup";
test("should setup reset signup form action object", () => {
  const action = actions.resetSignupForm();
  expect(action).toEqual({
    type: ActionTypes.RESET_SIGNUP_FORM,
  });
});

test("should setup update signup info action object", () => {
  const type = "email";
  const data = "email@email.com";
  const action = actions.updateInfo(type, data);
  expect(action).toEqual({
    type: ActionTypes.UPDATE_SIGNUP_INFO,
    payload: { type, data },
  });
});

test("should setup delete error action object", () => {
  const type = "email";
  const returnedAction = actions.deleteError(type);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type, err: "" },
  };

  returnedAction((receivedAction) =>
    expect(receivedAction).toEqual(expectedAction)
  );
});

test("should setup set error action object", () => {
  const type = "email";
  const err = "Required.";
  const action = actions.setError(type, err);
  expect(action).toEqual({
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type, err },
  });
});

test("should setup validate confirm password action object", () => {
  const action = actions.validateConfirmPassword();
  expect(action).toEqual({
    type: ActionTypes.VALIDATE_SIGNUP_PASSWORDS,
    payload: { err: "Your passwords do not match." },
  });
});

test("should setup validate (valid) username action object", () => {
  const data = "username";
  const returnedAction = actions.validateUsername(data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type: "username", err: "" },
  };
  returnedAction((ra1) => (ra2) => expect(ra2).toEqual(expectedAction));
});

test("should setup validate (invalid) username action object", () => {
  const data = "1username";
  const returnedAction = actions.validateUsername(data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type: "username", err: "Username should start with letter." },
  };
  returnedAction((ra1) => (ra2) => expect(ra2).toEqual(expectedAction));
});

test("should setup validate (valid) email action object", () => {
  const data = "email@email.com";
  const returnedAction = actions.validateEmail(data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type: "email", err: "" },
  };
  returnedAction((ra1) => (ra2) => expect(ra2).toEqual(expectedAction));
});

test("should setup validate (invalid) email action object", () => {
  const data = "email";
  const returnedAction = actions.validateEmail(data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type: "email", err: "Please enter a valid email." },
  };
  returnedAction((ra1) => (ra2) => expect(ra2).toEqual(expectedAction));
});

test("should setup validate (valid) password action object", () => {
  const data = "11111111";
  const returnedAction = actions.validatePassword(data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type: "password", err: "" },
  };
  returnedAction((ra1) => (ra2) => expect(ra2).toEqual(expectedAction));
});

test("should setup validate (invalid) password action object", () => {
  const data = "11";
  const returnedAction = actions.validatePassword(data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type: "password", err: "Password is too short." },
  };
  returnedAction((ra1) => (ra2) => expect(ra2).toEqual(expectedAction));
});

test("should setup validate (empty) info action object", () => {
  const type = "email";
  const data = "";
  const returnedAction = actions.validateInfo(type, data);
  const expectedAction = {
    type: ActionTypes.SET_SIGNUP_ERROR,
    payload: { type, err: "Required." },
  };
  returnedAction((ra) => expect(ra).toEqual(expectedAction));
});
