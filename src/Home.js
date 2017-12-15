import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Router, Route, IndexRoute } from "react-router";

class Home extends Component {
  render() {
    return (
      <div>
          <h1 className="App-title">This is home</h1>
      </div>
    );
  }
}

export default Home;
