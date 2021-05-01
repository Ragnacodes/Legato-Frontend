import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/signup';
import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { successNotification, errorNotification } from '../Layout/Notification';

export function SignUpForm({
  info,
  errors,
  updateInfo,
  validateInfo,
  closeDialog,
  Signup,
}) {
  const signupForm = useRef(null);
  const [touched, setTouched] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const noError = () => {
    for (const [, value] of Object.entries(errors)) {
      if (value) return false;
    }
    return true;
  };

  const sendData = () => {
    setLoading(true);
    Signup(info)
      .then(() => {
        setLoading(false);
        // closeDialog();
        signupForm.current.reset();
        successNotification('You have created your account. Please log in.');
      })
      .catch((err) => {
        console.log('errirrr');
        setLoading(false);
        errorNotification(err.message);
      });
  };

  const onChange = (e) => {
    setTouched((p) => {
      return [...p, e.target.name];
    });
    updateInfo(e.target.name, e.target.value.trim());
    validateInfo(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendData();
  };

  return (
    <div>
      <Backdrop className="signup-backdrop" open={loading}>
        {loading && <CircularProgress color="secondary" />}
      </Backdrop>

      <form
        ref={signupForm}
        noValidate
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
        className="signup-form"
      >
        <TextField
          className="text-field"
          required
          onChange={onChange}
          name="username"
          error={!!errors['username']}
          label="Username"
          helperText={errors['username']}
          variant="outlined"
          size="small"
        />

        <TextField
          className="text-field"
          required
          onChange={onChange}
          name="email"
          error={!!errors['email']}
          label="Email"
          helperText={errors['email']}
          variant="outlined"
          size="small"
        />

        <TextField
          type={showPassword ? 'text' : 'password'}
          autoComplete="false"
          className="text-field"
          required
          onChange={onChange}
          name="password"
          error={!!errors['password']}
          label="Password"
          helperText={errors['password']}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          size="small"
        />

        <TextField
          type={showPasswordConfirm ? 'text' : 'password'}
          className="text-field"
          required
          onChange={onChange}
          name="confirm"
          error={!!errors['confirm']}
          label="Confirm Password"
          helperText={errors['confirm']}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPasswordConfirm((prev) => !prev)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          size="small"
        />

        <Button
          disabled={loading || !noError() || touched.length < 4}
          type="submit"
          fullWidth
          variant="contained"
          className="form-button"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  info: state.signup.signup_info,
  errors: state.signup.signup_errors,
});

const mapDispatchToProps = (dispatch) => ({
  updateInfo: (type, data) => dispatch(actions.updateInfo(type, data)),
  validateInfo: (type, data) => dispatch(actions.validateInfo(type, data)),
  Signup: (info) => dispatch(actions.startSignup(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
