import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./components/Footer";
import Landing from "./containers/Landing";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import NotFound from "./containers/NotFound";

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/projects' component={Projects} />
        {/* <Route exact path='/contact' component={Contact} /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </main>
  );
};

export default withRouter(connect(null, null)(Routes));
