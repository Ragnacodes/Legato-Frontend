import React, { useState } from "react";
import Header from './Header';
import IntroSection from './IntroSection';
import FeaturesSection from './FeaturesSection';
import ServicesSection from './ServicesSection';
import JoinSection from './JoinSection';
import Footer from './Footer';
import LoginDialog from '../LoginSignUp/LoginDialog';
import SignupDialog from '../LoginSignUp/SignupDialog';

const LandingPage = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const onScroll = () => {
    if (document.getElementById('landing-page').scrollTop > 30) {
      document.getElementById('header').classList.add('header--sticky');
    }
    else {
      document.getElementById('header').classList.remove('header--sticky');
    }
  };

  return (
    <main className="main">
      <div
        onScroll={onScroll}
        id="landing-page"
        className="landing-page"
      >
        <Header
          setLoginOpen={setLoginOpen}
          setSignupOpen={setSignupOpen} 
        />
        <IntroSection setSignupOpen={setSignupOpen} />
        <FeaturesSection />
        <ServicesSection />
        <JoinSection setSignupOpen={setSignupOpen} />
        <Footer />
      </div>

      <LoginDialog
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen} 
      />
      <SignupDialog
        signupOpen={signupOpen}
        setSignupOpen={setSignupOpen}
      />
    </main>
  );
};

export default LandingPage;
