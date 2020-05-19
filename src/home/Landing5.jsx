import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar5 from "./sections/TopBar5";
import Testimonial5 from "./sections/Testimonial5";
import Footer2 from "./sections/Footer2";
import Intro5 from "./sections/Intro5";
import About1 from "./sections/About1";
import Gallery1 from "./sections/Gallery1";
import WorkProcess1 from "./sections/WorkProcess1";
import Blog1 from "./sections/Blog1";
import Contact2 from "./sections/Contact2";

const Landing5 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar5 />
      <Intro5 />
      <About1 />
      <Gallery1 />
      <WorkProcess1 />
      <Testimonial5 />
      <Blog1 />
      <Contact2 />
      <Footer2 />
    </div>
  );
};

export default Landing5;
