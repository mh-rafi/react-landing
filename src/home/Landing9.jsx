import React from "react";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import TopBar8 from "./sections/TopBar8";
import Intro8 from "./sections/Intro8";
import Subscription1 from "./sections/Subscription1";
import Testimonial4 from "./sections/Testimonial4";
import Services9 from "./sections/Services9";
import Story1 from "./sections/Story1";
import OnlineClass1 from "./sections/OnlineClass1";
import CourseList1 from "./sections/CourseList1";
import Speakers1 from "./sections/Speakers1";
import Marketing2 from "./sections/Marketing2";
import Features6 from "./sections/Features6";
import Features7 from "./sections/Features7";
import Features8 from "./sections/Features8";
import Testimonial7 from "./sections/Testimonial7";
import Features9 from "./sections/Features9";
import Features10 from "./sections/Features10";
import Contact3 from "./sections/Contact3";

const Landing9 = () => {
  return (
    <div className="landing">
      <TopBar8 />
      <Intro8 />
      <Features6 />
      <Features7 />
      <Testimonial7 />
      <Features8 />
      <Features9 />
      <Features10 />
      <Contact3 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing9;
