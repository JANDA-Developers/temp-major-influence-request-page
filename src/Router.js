import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Sub from "./sub/Sub";

function MainRouter() {
  return (
    <Router>
      <Route path="/" render={() => <Main />} />
      {/* <Route path="/" render={() => <Sub />} /> */}
    </Router>
  );
}

export default MainRouter;
