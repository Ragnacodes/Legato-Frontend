import React from 'react';
import {useState, useRef} from 'react';
import { connect } from 'react-redux';

import LoginForm from '../LoginSignUp/LoginForm';
import SignUpForm from '../LoginSignUp/SignUpForm';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { ThemeProvider } from '@material-ui/core/styles';
import Theme from "../Theme";
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import {Popper, Fade, Card, CardContent, Typography, Tooltip} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import "../../styles/landing-page.scss";
import { Link } from 'react-router-dom';
export const LandingPage = ({ isAuthenticated }) => 
{
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const loginButton = useRef(null)

  const handleClick = (e) =>
  {
    setLoginOpen(
      (prev) => !prev
    )
    setAnchorEl(e.currentTarget)
  }


  return (
  <ThemeProvider theme={Theme}>
    <div className="landing-page">
    <Dialog
    disableBackdropClick
    className="signup-dialog"
    open={signupOpen}
    onClose={() => setSignupOpen(false)}
    aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography={true} id="form-dialog-title">
        <Typography variant="h5">
          Sign Up
          </Typography>
          </DialogTitle>
        <DialogContent>
        <CloseRoundedIcon className="close-icon" onClick={() => setSignupOpen(false)}/>
          <DialogContentText>
            Please fill this form:
            </DialogContentText>
            <SignUpForm/>
         
          
        </DialogContent>
      </Dialog>


      <Dialog
    disableBackdropClick
    className="signup-dialog"
    open={loginOpen}
    onClose={() => setLoginOpen(false)}
    aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography={true} id="form-dialog-title">
        <Typography variant="h5">
        Sign In
          </Typography>
          </DialogTitle>
        <DialogContent>
          
          <CloseRoundedIcon className="close-icon" onClick={() => setLoginOpen(false)}/>
          <DialogContentText>
            Welcome Back!
            </DialogContentText>
            <LoginForm/>
          
          
        </DialogContent>
      </Dialog>

    {/* <Popper open={loginOpen} anchorEl={loginButton.current} placement='bottom-end' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card className="login-card">
              <CardContent>
                <CloseRoundedIcon className="close-icon" onClick={() => setLoginOpen(false)}/>
                <Typography variant="h6">
        
      </Typography>
              <LoginForm/>
              </CardContent>
            </Card>
          </Fade>
        )}
      </Popper> */}



      <AppBar className="app-bar" position="static">
          <Toolbar >
  
            <h1>
              <FiberManualRecordRoundedIcon className="icon"/>
              Legato
              
            </h1>
            <div className="buttons">
            <Button color="secondary" className="about-button">About Us</Button>
            {isAuthenticated?
            <Tooltip title="Dashboard" >
              
              <Link to="/dashboard">
            <MenuIcon className="dashboard-icon" color="secondary"/>
            </Link>
            </Tooltip>
            :
            <div>
              <Button color="secondary" ref={loginButton} onClick={handleClick} className="login-button">Sign In</Button>
            <Button onClick={()=>setSignupOpen(true)} variant="contained" color="secondary" className="signup-button">Sign Up</Button>
              </div>
            }
            
            </div>
          </Toolbar>
        </AppBar>
      {/* <Card>
        <CardContent>
          <LoginForm/>
          <SignUpForm/>
      </CardContent>
      </Card> */}
    </div>
    </ThemeProvider>
    )

  
}

;

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(LandingPage);
