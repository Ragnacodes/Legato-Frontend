import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import LoginForm from "../LoginSignUp/LoginForm";
import SignUpForm from "../LoginSignUp/SignUpForm";

import MenuIcon from "@material-ui/icons/Menu";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Tooltip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Link } from "react-router-dom";
export const Header = ({ isAuthenticated }) => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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

      <AppBar className="app-bar" position="static">
        <Toolbar>
          <h1>Legato</h1>
          <div className="buttons">
            <Button color="secondary" className="about-button">
              About Us
            </Button>
            {isAuthenticated ? (
              <Tooltip title="Dashboard">
                <Link to="/dashboard">
                  <IconButton color="secondary">
                    <MenuIcon className="dashboard-icon" />
                  </IconButton>
                </Link>
              </Tooltip>
            ) : (
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
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(Header);
