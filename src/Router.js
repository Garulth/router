import React, { Component } from "react";
import Home from "./Home";
import Setting from "./Setting";
import { Provider } from "react-redux";
import store from "./store";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import logo from "./logo.svg";
import "./App.css";

const Main = props => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    {props.children}
  </div>
);
const history = syncHistoryWithStore(browserHistory, store);
class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="setting" component={Setting} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
