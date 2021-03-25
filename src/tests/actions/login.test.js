import * as actions from "../../actions/login";
import { ActionTypes } from "../../actions/login";

test("should setup reset login form action object", () => {
  const action = actions.resetLoginForm();
  expect(action).toEqual({
    type: ActionTypes.RESET_LOGIN_FORM,
  });
});

test("should setup update login info action object", () => {
  const type = "email";
  const data = "email@email.com";
  const action = actions.updateLoginInfo(type, data);
  expect(action).toEqual({
    type: ActionTypes.UPDATE_LOGIN_INFO,
    payload: { type, data },
  });
});
