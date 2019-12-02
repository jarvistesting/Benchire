import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import Router from "./Router";
//import Layout from "./components/Layout";
//import adminPage from "./page/adminPage";
//import userPage from "./page/userPage";
//import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
