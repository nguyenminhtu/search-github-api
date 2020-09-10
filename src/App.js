import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DetailPage from "./containers/Detail";
import HomePage from "./containers/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail">
          <DetailPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
