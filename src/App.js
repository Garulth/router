import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from "./Home";
import Setting from "./Setting";
import { Provider } from "react-redux";
import store from "./store";
import { syncHistoryWithStore } from "react-router-redux";
import AppRouter from "./Router";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
