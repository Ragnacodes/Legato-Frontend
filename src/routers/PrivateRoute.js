import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Appbar from '../components/Layout/Appbar';
import Main from '../components/Layout/Main';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <div className="app">
          <Appbar {...props} />
          <Main component={Component} {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
});

export default connect(mapStateToProps)(PrivateRoute);
