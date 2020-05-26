import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Sub from "./sub/Sub";
import Detail from "./sub/Detail";
import Login from "./sub/Login";
import Join from "./sub/Join";
import Mypage from "./sub/Mypage";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/magency" render={() => <Main />} />
        <Route path="/main" render={() => <Sub />} />
        <Route path="/detail" render={() => <Detail />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/join" render={() => <Join />} />
        <Route path="/mypage" render={() => <Mypage />} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
