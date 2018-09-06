import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import LoginSuccess from "./LoginSuccess";
import LoginPage from "./LoginPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/loginsuccess" component={LoginSuccess} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
