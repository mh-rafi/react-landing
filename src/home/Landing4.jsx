import React, { Component } from "react";
import { scrollTo } from "utils";
import TopBar4 from "./sections/TopBar4";
import Intro4 from "./sections/Intro4";
import Feature4 from "./sections/Feature4";

class Landing4 extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo("root");
  }
  render() {
    return (
      <div className="landing">
        <TopBar4 />
        <Intro4 />
        <Feature4 />
      </div>
    );
  }
}

export default Landing4;
