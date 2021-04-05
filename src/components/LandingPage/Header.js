import React from "react";
import { useState, useEffect } from "react";

import { connect } from "react-redux";
import LoginForm from "../LoginSignUp/LoginForm";
import SignUpForm from "../LoginSignUp/SignUpForm";
import * as actions from "../../actions/appbar";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  // AppBar,
  Toolbar,
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AppBar from "../AppBar";
const Header = ({ updateAppBar }) => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  useEffect(() => {
    updateAppBar("right_children", [
      <Button color="secondary" className="about-button">
        About Us
      </Button>,
      <div>
        <Button
          color="secondary"
          onClick={() => setLoginOpen(true)}
          className="login-button"
        >
          Sign In
        </Button>
        <Button
          onClick={() => setSignupOpen(true)}
          variant="contained"
          color="secondary"
          className="signup-button"
        >
          Sign Up
        </Button>
      </div>,
    ]);
    updateAppBar("left_children", <h1>Legato</h1>);
  }, []);
  return (
    <div className="header">
      <Dialog
        disableBackdropClick
        className="signup-dialog"
        open={signupOpen}
        onClose={() => setSignupOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle disableTypography={true} id="form-dialog-title">
          <Typography variant="h5">Sign Up</Typography>
        </DialogTitle>
        <DialogContent>
          <CloseRoundedIcon
            className="close-icon"
            onClick={() => setSignupOpen(false)}
          />
          <DialogContentText>Please fill this form:</DialogContentText>
          <SignUpForm closeDialog={() => setSignupOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog
        disableBackdropClick
        className="login-dialog"
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle disableTypography={true} id="form-dialog-title">
          <Typography variant="h5">Sign In</Typography>
        </DialogTitle>
        <DialogContent>
          <CloseRoundedIcon
            className="close-icon"
            onClick={() => setLoginOpen(false)}
          />
          <DialogContentText>Welcome Back!</DialogContentText>
          <LoginForm closeDialog={() => setLoginOpen(false)} />
        </DialogContent>
      </Dialog>

      <AppBar />
      {/* <AppBar className="app-bar" position="static">
        <Toolbar>
          <h1>Legato</h1>
          <div className="buttons">
            <Button color="secondary" className="about-button">
              About Us
            </Button>
            <div>
            <Button
              color="secondary"
              onClick={() => setLoginOpen(true)}
              className="login-button"
            >
              Sign In
            </Button>
            <Button
              onClick={() => setSignupOpen(true)}
              variant="contained"
              color="secondary"
              className="signup-button"
            >
              Sign Up
            </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  updateAppBar: (type, data) => dispatch(actions.updateAppBar(type, data)),
});

export default connect(null, mapDispatchToProps)(Header);
