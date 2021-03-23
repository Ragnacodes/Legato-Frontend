import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../../actions/login";
import { login } from "../../actions/auth";

import { TextField, Button } from "@material-ui/core";
import "../../styles/login-signup.scss";

import { successNotification, errorNotification } from "../Notification";

function LoginForm({ info, updateInfo, saveToken, closeDialog }) {
  const sendData = () => {
    axios
      .post("http://localhost:8080/api/auth/login", {
        ...info,
      })
      .then((response) => {
        console.log(response);
        successNotification("You are logged in!");
        saveToken(response.data.access_token);
        closeDialog();
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          errorNotification(error.response.data.message);
        } else {
          errorNotification(error.message);
        }
      });
  };

  const onChange = (e) => {
    updateInfo(e.target.name, e.target.value.trim());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(info);
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
        />

        <TextField
          type="password"
          className="text-field"
          onChange={onChange}
          name="password"
          label="Password"
          variant="outlined"
          size="small"
        />

        <Button
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
});

const mapDispatchToProps = (dispatch) => ({
  updateInfo: (type, data) => dispatch(actions.updateLoginInfo(type, data)),
  saveToken: (token) => dispatch(login(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);