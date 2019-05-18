import React, { Component } from "react";
// import { Route, Switch, NavLink } from "react-router-dom";
import Intro1 from "./sections/Intro1";
import TopBar from "./sections/TopBar";
import Services1 from "./sections/services1";
import Portfolio1 from "./sections/protfolio1";
import Testimonial1 from "./sections/testimonial1";
import CallToAction1 from "./sections/call-to-action1";
import Pricing1 from "./sections/pricing1";
import Contact1 from "./sections/contact1";
import Footer1 from "./footer1";

class Landing1 extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <TopBar />
        <Intro1 />
        <Portfolio1 />
        <Services1 />
        <Testimonial1 />
        <CallToAction1 />
        <Pricing1 />
        <Contact1 />
        <Footer1 />
      </div>
    );
  }
}

export default Landing1;
