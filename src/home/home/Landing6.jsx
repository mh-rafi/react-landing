import React, { useEffect } from "react";
import { scrollTo } from "utils";
import Footer2 from "./sections/Footer2";
import Intro6 from "./sections/Intro6";
import Blog1 from "./sections/Blog1";
import TopBar6 from "./sections/TopBar6";
import Services8 from "./sections/Services8";
import Marketing1 from "./sections/Marketing1";
import Testimonial6 from "./sections/Testimonial6";
import Pricing2 from "./sections/Pricing2";
import Subscription1 from "./sections/Subscription1";

const Landing6 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar6 />
      <Intro6 />
      <Services8 />
      <Marketing1 />
      <Testimonial6 />
      <Pricing2 />
      <Blog1 />
      <Subscription1 />
      <Footer2 />
    </div>
  );
};

export default Landing6;
