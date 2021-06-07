import React from 'react';
import AbstractDialog from './AbstractDialog';
import SignupForm from './SignUpForm';

const SignupDialog = ({ signupOpen, setSignupOpen }) => {
    return (
        <AbstractDialog 
            open={signupOpen}
            onClick={setSignupOpen}
            title={'Sign Up'}
            description={'Please fill this form:'}
            form={<SignupForm />}
        />
    );
};

export default SignupDialog;