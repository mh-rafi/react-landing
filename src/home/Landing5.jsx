import React, { useEffect } from "react";
import { scrollTo } from "utils";
import TopBar4 from "./sections/TopBar4";
import Feature5 from "./sections/Features5";
import Pricing2 from "./sections/Pricing2";
import Testimonial5 from "./sections/Testimonial5";
import CallToAction3 from "./sections/CallToAction3";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import Intro5 from "./sections/Intro5";
import About1 from "./sections/About1";
import Gallery1 from "./sections/Gallery1";
import WorkProcess1 from "./sections/WorkProcess1";

const Landing5 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar4 />
      <Intro5 />
      <About1 />
      <Gallery1 />
      <WorkProcess1 />
      <Testimonial5 />
      <Feature5 />
      <Pricing2 />
      <CallToAction3 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing5;
