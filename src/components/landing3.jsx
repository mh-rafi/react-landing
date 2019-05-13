import React, { Component } from "react";
import Service3 from "./sections/services3";
import Service4 from "./sections/services4";
import Service5 from "./sections/service5";

class Landing3 extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <Service3 />
        <Service4 />
        <Service5 />
      </div>
    );
  }
}

export default Landing3;