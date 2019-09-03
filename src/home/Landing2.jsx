import React, { Component } from "react";
import { scrollTo } from "utils";
import Intro2 from "./sections/Intro2";
import Portfolio2 from "./sections/Portfolio2";
import Testimonial2 from "./sections/Testimonial2";
import Services2 from "./sections/Services2";
import CallToAction1 from "./sections/CallToAction1";
import Pricing1 from "./sections/Pricing1";
import Contact1 from "./sections/Contact1";
import Footer1 from "./sections/Footer1";
import TopBar2 from "./sections/TopBar2";

class Landing2 extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo("root");
  }
  render() {
    return (
      <div className="landing">
        <TopBar2 />
        <Intro2 />
        <Portfolio2 />
        <Testimonial2 />
        <Services2 />
        <CallToAction1 bg="./assets/images/home-bg-black.png" />
        <Pricing1 />
        <Contact1 />
        <Footer1 />
      </div>
    );
  }
}

export default Landing2;
