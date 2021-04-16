import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import LoginDialog from './LoginDialog';
import SignupDialog from './SignupDialog';

const AppbarButtons = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    return (
        <>
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

            <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
            <SignupDialog signupOpen={signupOpen} setSignupOpen={setSignupOpen} />
        </>
    );
};

export default AppbarButtons;