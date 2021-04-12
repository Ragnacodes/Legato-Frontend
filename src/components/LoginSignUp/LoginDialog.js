import React from 'react';
import AbstractDialog from './AbstractDialog';
import LoginForm from './LoginForm';

const LoginDialog = ({ loginOpen, setLoginOpen }) => {
    return (
        <AbstractDialog 
            open={loginOpen}
            onClick={setLoginOpen}
            title={'Sign In'}
            description={'Welcome Back!'}
            form={<LoginForm />}
        />
    );
};

export default LoginDialog;