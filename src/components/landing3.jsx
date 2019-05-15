import React, { Component } from "react";
import Service3 from "./sections/services3";
import Service4 from "./sections/services4";
import Service5 from "./sections/services5";
import Service6 from "./sections/services6";
import Service7 from "./sections/services7";
import Testimonial3 from "./sections/testimonial3";

class Landing3 extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Service7 />
        <Testimonial3 />
      </div>
    );
  }
}

export default Landing3;
