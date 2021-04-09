import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../actions/signup";
import url from '../../utils/api-url';

import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { successNotification, errorNotification } from "../Notification";

export function SignUpForm({
  info,
  errors,
  updateInfo,
  validateInfo,
  closeDialog,
  resetForm,
}) {
  const signupForm = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  const noError = () => {
    for (const [, value] of Object.entries(errors)) {
      if (value) return false;
    }
    return true;
  };

  useEffect(() => {
    if (send) {
      if (noError()) {
        sendData();
        console.log("send");
      } else {
        errorNotification("PLease enter valid data.");
      }
    }
    return () => {
      setSend(false);
    };
  });

  const sendData = () => {
    setLoading(true);
    axios
      .post(`${url()}/auth/signup`, {
        ...info,
        confirm: "",
      })
      .then((response) => {
        setLoading(false);
        closeDialog();
        console.log("response", response);
        signupForm.current.reset();
        resetForm();
        successNotification("You have created your account. Please log in.");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          let str = error.response.data.message;
          errorNotification(str.charAt(0).toUpperCase() + str.slice(1) + ".");
        } else {
          errorNotification(error.message);
        }
        console.log("error", error.message);
      });
  };

  const validateAll = () => {
    validateInfo("email", info["email"]);
    validateInfo("password", info["password"]);
    validateInfo("confirm", info["confirm"]);
    validateInfo("username", info["username"]);
  };

  const onChange = (e) => {
    updateInfo(e.target.name, e.target.value.trim());
    validateInfo(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    validateAll();
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
          error={!!errors["username"]}
          label="Username"
          helperText={errors["username"]}
          variant="outlined"
          size="small"
        />

        <TextField
          className="text-field"
          required
          onChange={onChange}
          name="email"
          error={!!errors["email"]}
          label="Email"
          helperText={errors["email"]}
          variant="outlined"
          size="small"
        />

        <TextField
          type={showPassword ? "text" : "password"}
          autoComplete="false"
          className="text-field"
          required
          onChange={onChange}
          name="password"
          error={!!errors["password"]}
          label="Password"
          helperText={errors["password"]}
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
          type={showPasswordConfirm ? "text" : "password"}
          className="text-field"
          required
          onChange={onChange}
          name="confirm"
          error={!!errors["confirm"]}
          label="Confirm Password"
          helperText={errors["confirm"]}
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
          disabled={loading}
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
  resetForm: () => dispatch(actions.resetSignupForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
