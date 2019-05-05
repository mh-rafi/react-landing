import React, { Component } from "react";
// import { Route, Switch, NavLink } from "react-router-dom";
import Intro1 from "./sections/Intro1";
import TopBar from "./sections/TopBar";
import Services1 from "./sections/services1";
import Portfolio1 from "./sections/protfolio1";

class Landing1 extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <TopBar />
        <Intro1 />
        <Portfolio1 />
        <Services1 />
      </div>
    );
  }
}

export default Landing1;
