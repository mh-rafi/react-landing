import React from "react";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import TopBar7 from "./sections/TopBar7";
import Intro7 from "./sections/Intro7";
import Subscription1 from "./sections/Subscription1";
import Testimonial4 from "./sections/Testimonial4";
import Services9 from "./sections/Services9";

const Landing7 = () => {
  return (
    <div className="landing">
      <TopBar7 />
      <Intro7 />
      <Services9 />
      <Testimonial4 />
      <Subscription1 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing7;
