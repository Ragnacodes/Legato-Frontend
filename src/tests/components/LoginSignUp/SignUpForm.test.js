import React from "react";
import { shallow } from "enzyme";
import { SignUpForm } from "../../../components/LoginSignUp/SignUpForm";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

jest.mock("axios");

let wrapper, props, validateInfo, updateInfo, info, errors;
beforeEach(() => {
  info = {
    username: "",
    password: "",
    email: "",
    confirm: "",
  };
  errors = {
    username: "",
    password: "",
    email: "",
    confirm: "",
  };

  validateInfo = jest.fn();
  updateInfo = jest.fn();
  props = {
    info,
    errors,
    validateInfo,
    updateInfo,
  };
  wrapper = shallow(<SignUpForm {...props} />);
});

test("should render SignUpForm correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render Text Fields correctly", () => {
  expect(wrapper.find(TextField).length).toBe(4);
});

test("should render Button correctly", () => {
  expect(wrapper.find(Button).length).toBe(1);
});

test("should write validate correctly (username and password empty)", () => {
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(validateInfo).toHaveBeenCalledWith("username", "");
  expect(validateInfo).toHaveBeenCalledWith("password", "");
});

test("should update data correctly(password)", () => {
  const password = "11111111";
  const field = wrapper.find(TextField).find({ name: "password" });
  field.simulate("change", {
    target: {
      name: field.prop("name"),
      value: password,
    },
  });
  expect(updateInfo).toHaveBeenCalledWith("password", password);
  expect(validateInfo).toHaveBeenCalledWith("password", password);
});

test("should update data correctly(username)", () => {
  const username = "username";
  const field = wrapper.find(TextField).find({ name: "username" });
  field.simulate("change", {
    target: {
      name: field.prop("name"),
      value: username,
    },
  });
  expect(updateInfo).toHaveBeenCalledWith("username", username);
  expect(validateInfo).toHaveBeenCalledWith("username", username);
});

test("should update data correctly(email)", () => {
  const email = "email";
  const field = wrapper.find(TextField).find({ name: "email" });
  field.simulate("change", {
    target: {
      name: field.prop("name"),
      value: email,
    },
  });
  expect(updateInfo).toHaveBeenCalledWith("email", email);
  expect(validateInfo).toHaveBeenCalledWith("email", email);
});

test("should login", (done) => {
  const username = "i";
  const password = "iiiiiiii";
  const email = "email@email.com";
  const confirm = password;
  info = {
    username: username,
    password: password,
    email,
  };
  axios.post.mockImplementationOnce(
    (...info) => Promise.resolve({}) //promise
  );

  wrapper = shallow(<SignUpForm {...props} info={info} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  setTimeout(() => {
    done();
  }, 0);
});
