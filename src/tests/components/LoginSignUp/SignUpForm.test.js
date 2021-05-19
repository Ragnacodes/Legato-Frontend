import React from 'react';
import { shallow } from 'enzyme';
import { SignUpForm } from '../../../components/LoginSignUp/SignUpForm';
import { TextField, Button } from '@material-ui/core';
import axios from '../__mocks__/axios';

let wrapper, props, validateInfo, updateInfo, info, errors, Signup;
beforeEach(() => {
  info = {
    username: '',
    password: '',
    email: '',
    confirm: '',
  };
  errors = {
    username: '',
    password: '',
    email: '',
    confirm: '',
  };

  validateInfo = jest.fn();
  updateInfo = jest.fn();
  Signup = jest.fn();
  props = {
    info,
    errors,
    validateInfo,
    updateInfo,
    Signup,
  };
  wrapper = shallow(<SignUpForm {...props} />);
});

test('should render SignUpForm correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render Text Fields correctly', () => {
  expect(wrapper.find(TextField).length).toBe(4);
});

test('should render Button correctly', () => {
  expect(wrapper.find(Button).length).toBe(1);
});

test('should diable button (username and password empty)', () => {
  const button = wrapper.find(Button);
  expect(button).toBeDisabled;
});

test('should update data correctly(password)', () => {
  const password = '11111111';
  const field = wrapper.find(TextField).find({ name: 'password' });
  field.simulate('change', {
    target: {
      name: field.prop('name'),
      value: password,
    },
  });
  expect(updateInfo).toHaveBeenCalledWith('password', password);
  expect(validateInfo).toHaveBeenCalledWith('password', password);
});

test('should update data correctly(username)', () => {
  const username = 'username';
  const field = wrapper.find(TextField).find({ name: 'username' });
  field.simulate('change', {
    target: {
      name: field.prop('name'),
      value: username,
    },
  });
  expect(updateInfo).toHaveBeenCalledWith('username', username);
  expect(validateInfo).toHaveBeenCalledWith('username', username);
});

test('should update data correctly(email)', () => {
  const email = 'email';
  const field = wrapper.find(TextField).find({ name: 'email' });
  field.simulate('change', {
    target: {
      name: field.prop('name'),
      value: email,
    },
  });
  expect(updateInfo).toHaveBeenCalledWith('email', email);
  expect(validateInfo).toHaveBeenCalledWith('email', email);
});

test('should login', (done) => {
  debugger;
  const username = 'i';
  const password = 'iiiiiiii';
  const email = 'email@email.com';
  const confirm = password;
  info = {
    username,
    password,
    email,
    confirm,
  };
  Signup.mockImplementationOnce(() => Promise.resolve());
  wrapper = shallow(<SignUpForm {...props} info={info} />);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });

  setTimeout(() => {
    expect(Signup).toHaveBeenCalled();
    done();
  }, 0);
});
