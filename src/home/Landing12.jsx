import React from "react";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import TopBar12 from "./sections/TopBar12";
import Intro12 from "./sections/Intro12";
import Clients1 from "./sections/Clients1";
import Features12 from "./sections/Features12";
import Marketing3 from "./sections/Marketing3";
import Testimonial10 from "./sections/Testimonial10";
import Services11 from "./sections/Services11";
import FAQ1 from "./sections/FAQ1";
import Subscription2 from "./sections/Subscription2";
import Services12 from "./sections/Services12";
import Services13 from "./sections/Services13";
import Contact4 from "./sections/Contact4";

const Landing12 = () => {
  return (
    <div className="landing">
      <TopBar12 />
      <Intro12 />
      <Services12 />
      <Features12 />
      <Services13 />
      <Testimonial10 />
      <Contact4 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing12;
