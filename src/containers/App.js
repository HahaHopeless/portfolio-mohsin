import "./App.css";
import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ReactAnime from "react-animejs";
import { isMobile, isTablet, isDesktop } from "react-device-detect";
import Navbar from "../components/Navbar";
import Routes from "../Routes";
import BackToTop from "../components/BackToTop";

const App = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const renderContent = () => {
    // if (isMobile === true) console.log("Mobile Device");
    // else if (isDesktop === true) console.log("Desktop");
    // else if (isTablet === true) console.log("Tablet");
    console.log("isMobile: ", isMobile);
    console.log("isTablet: ", isTablet);
    console.log("isDesktop: ", isDesktop);
  };

  useEffect(() => {
    window.addEventListener("resize", renderContent);
    return () => {
      window.removeEventListener("resize", renderContent);
    };
  }, []);

  return (
    <IntlProvider messages={require(`../translations/${props.lang}.json`)}>
      <Router>
        <Navbar />
        {scrollPosition > 200 ? (
          <BackToTop
            animation={scrollPosition < 200 ? "slide-bottom" : "slide-top"}
          />
        ) : null}
        <Routes />
      </Router>
    </IntlProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, null)(App);
