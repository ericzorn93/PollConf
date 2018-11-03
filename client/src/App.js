import React, { Component } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SinglePoll from "./pages/SinglePoll";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/:id"} component={SinglePoll} />
      </Switch>
    );
  }
}

export default App;
