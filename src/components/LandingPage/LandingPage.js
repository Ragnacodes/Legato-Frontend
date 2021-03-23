import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../Theme";
import "../../styles/landing-page.scss";
import "../../styles/notification.scss";
import Header from "./Header";
export const LandingPage = ({ isAuthenticated }) => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="landing-page">
        <Header />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(LandingPage);
