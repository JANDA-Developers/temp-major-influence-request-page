import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
// import Sub from "./sub/Sub";
// import Detail from "./sub/Detail";
// import Login from "./sub/Login";
// import Join from "./sub/Join";
// import MypageEdit from "./sub/MypageEdit";
// import MypageScrap from "./sub/MypageScrap";
// import Search from "./sub/Search";
// import Faq from "./sub/Faq";
// import Notice from "./sub/Notice";
// import Clause from "./sub/Clause";
// import Policy from "./sub/Policy";
// import Agency from "./sub/Agency";
// import Event from "./sub/Event";
// import EventDetail from "./sub/EventDetail";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Main />} />
        {/* <Route path="/main" render={() => <Sub />} />
        <Route path="/detail" render={() => <Detail />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/join" render={() => <Join />} />
        <Route path="/edit" render={() => <MypageEdit />} />
        <Route path="/scrap" render={() => <MypageScrap />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/faq" render={() => <Faq />} />
        <Route path="/notice" render={() => <Notice />} />
        <Route path="/clause" render={() => <Clause />} />
        <Route path="/policy" render={() => <Policy />} />
        <Route path="/agency" render={() => <Agency />} />
        <Route path="/event" render={() => <Event />} />
        <Route path="/eventdetail" render={() => <EventDetail />} /> */}
      </Switch>
    </Router>
  );
}

export default MainRouter;
