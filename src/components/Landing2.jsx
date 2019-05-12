import React, { Component } from "react";
import Intro2 from "./sections/intro2";
import TopBar from "./sections/TopBar";
import Portfolio2 from "./sections/portfolio2";
import Testimonial2 from "./sections/testimonial2";
import Services2 from "./sections/services2";
import CallToAction1 from "./sections/call-to-action1";
import Pricing1 from "./sections/pricing1";
import Contact1 from "./sections/contact1";
import Footer1 from "./footer1";
import TopBar2 from "./sections/topbar2";

class Landing2 extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <TopBar2 />
        <Intro2 />
        <Portfolio2 />
        <Testimonial2 />
        <Services2 />
        <CallToAction1 />
        <Pricing1 />
        <Contact1 />
        <Footer1 />
      </div>
    );
  }
}

export default Landing2;
