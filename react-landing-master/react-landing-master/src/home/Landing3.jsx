import React, { Component } from "react";
import { scrollTo } from "utils";
import Service3 from "./sections/Services3";
import Service4 from "./sections/Services4";
import Service5 from "./sections/Services5";
import Service6 from "./sections/Services6";
import Service7 from "./sections/Services7";
import Testimonial3 from "./sections/Testimonial3";
import Intro3 from "./sections/Intro3";
import TopBar3 from "./sections/TopBar3";
import CallToAction2 from "./sections/CallToAction2";
import Pricing1 from "./sections/Pricing1";
import Footer1 from "./sections/Footer1";
import Contact1 from "./sections/Contact1";

class Landing3 extends Component {
  state = {};
  componentWillUnmount() {
    scrollTo("root");
  }

  render() {
    return (
      <div className="landing">
        <TopBar3 />
        <Intro3 />
        <Service3 />
        <Service4 />
        <Service5 />
        <Service6 />
        <Service7 />
        <Testimonial3 />
        <CallToAction2 />
        <Pricing1 />
        <Contact1 />
        <Footer1 />
      </div>
    );
  }
}

export default Landing3;
