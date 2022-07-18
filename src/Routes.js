import React, { useEffect, useState } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import Landing from "./containers/Landing";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import NotFound from "./containers/NotFound";

const Routes = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    function handleResize() {
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);

      if (window.innerWidth >= 769 && window.innerWidth <= 1024) {
        console.log("Laptop Screen");
        setDeviceType("laptop");
      } else if (window.innerWidth >= 481 && window.innerWidth <= 768) {
        console.log("Tablet Screen");
        setDeviceType("tablet");
      } else if (window.innerWidth >= 320 && window.innerWidth <= 480) {
        console.log("Mobile Screen");
        setDeviceType("mobile");
      } else if (window.innerWidth >= 1025) {
        console.log("Desktop Screen");
        setDeviceType("desktop");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/projects' component={Projects} />
        {/* <Route exact path='/contact' component={Contact} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer deviceType={deviceType} />
    </main>
  );
};

export default withRouter(connect(null, null)(Routes));
