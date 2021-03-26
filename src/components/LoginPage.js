import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

import {Card, CardContent} from '@material-ui/core'

import LoginForm from './LoginSignUp/LoginForm';
import SignUpForm from './LoginSignUp/SignUpForm';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <Card>
      <CardContent>
        <LoginForm/>
        <SignUpForm/>
    </CardContent>
    </Card>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
