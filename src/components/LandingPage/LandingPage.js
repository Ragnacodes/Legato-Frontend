import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Theme";
import Header from "./Header";
export const LandingPage = ({}) => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="landing-page">
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
