import React from "react";
import { connect } from 'react-redux';
import Appbar from '../Layout/Appbar';
import AuthButtons from '../LoginSignUp/AuthButtons';
import LandingButtons from './LandingButtons';

const LandingPage = ({ isAuthenticated }) => {

  const rightChildren = isAuthenticated ? <LandingButtons /> : <AuthButtons />
  const leftChildren = <h1 className="legato">Legato</h1>
  
  return (
    <div className="landing-page">
      <Appbar leftChildren={leftChildren} rightChildren={rightChildren} noDrawer={true} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      isAuthenticated: !!state.auth.token
  };
};

export default connect(mapStateToProps)(LandingPage);
