import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/login';
import { startLogin } from '../../actions/auth';
import { TextField, Button } from '@material-ui/core';
import { successNotification, errorNotification } from '../Layout/Notification';

export function LoginForm({ errors, info, updateInfo, validateInfo, Login }) {
  const sendData = () => {
    Login(info)
      .then(() => {
        successNotification('Welcome Back!');
      })
      .catch((err) => {
        errorNotification(err.message);
      });
  };

  const onChange = (e) => {
    updateInfo(e.target.name, e.target.value.trim());
    validateInfo(e.target.name, e.target.value.trim());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <div className="App">
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
        className="login-form"
      >
        <TextField
          className="text-field"
          onChange={onChange}
          name="username"
          label="Username"
          variant="outlined"
          size="small"
          error={!!errors['username']}
          helperText={errors['username']}
        />

        <TextField
          type="password"
          className="text-field"
          onChange={onChange}
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          error={!!errors['password']}
          helperText={errors['password']}
        />

        <Button
          disabled={!info['username'] || !info['password']}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="form-button"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  info: state.login.login_info,
  errors: state.login.login_errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateInfo: (type, data) => dispatch(actions.updateLoginInfo(type, data)),
  validateInfo: (type, data) => dispatch(actions.validateLoginInfo(type, data)),
  Login: (info) => dispatch(startLogin(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
