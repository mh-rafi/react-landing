import React, { useEffect } from "react";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { scrollTo } from "utils";
import TopBar4 from "./sections/TopBar4";
import Intro4 from "./sections/Intro4";
import Feature4 from "./sections/Feature4";
import ProductAnalytics from "./sections/ProductAnalytics";
import Feature5 from "./sections/Features5";
import Pricing2 from "./sections/Pricing2";
import Testimonial4 from "./sections/Testimonial4";
import CallToAction3 from "./sections/CallToAction3";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";

const Landing4 = () => {
  useEffect(() => {
    scrollTo("root");
  });

  return (
    <div className="landing">
      <TopBar4 />
      <Intro4 />
      <Feature4 />
      <ProductAnalytics />
      <Feature5 />
      <Pricing2 />
      <Testimonial4 />
      <CallToAction3 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing4;