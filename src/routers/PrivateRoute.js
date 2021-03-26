import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Main from '../components/Layout/Main';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      !isAuthenticated ? (
        <div className="app">
          <Layout {...props} />
          <Main component={Component} {...props} />
        </div>
      ) : (
          <Redirect to="/" />
        )
    )} />
  );
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
