import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import Sub from "./sub/Sub";
import Detail from "./sub/Detail";
import Login from "./sub/Login";
import Join from "./sub/Join";
import MypageEdit from "./sub/MypageEdit";
import MypageScrap from "./sub/MypageScrap";
import Search from "./sub/Search";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Main />} />
        <Route path="/main" render={() => <Sub />} />
        <Route path="/detail" render={() => <Detail />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/join" render={() => <Join />} />
        <Route path="/edit" render={() => <MypageEdit />} />
        <Route path="/scrap" render={() => <MypageScrap />} />
        <Route path="/search" render={() => <Search />} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
