import React from "react";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import TopBar7 from "./sections/TopBar7";
import Intro7 from "./sections/Intro7";
import Subscription1 from "./sections/Subscription1";
import Testimonial4 from "./sections/Testimonial4";
import Services9 from "./sections/Services9";
import Story1 from "./sections/Story1";
import OnlineClass1 from "./sections/OnlineClass1";
import CourseList1 from "./sections/CourseList1";
import Speakers1 from "./sections/Speakers1";
import Marketing2 from "./sections/Marketing2";

const Landing7 = () => {
  return (
    <div className="landing">
      <TopBar7 />
      <Intro7 />
      <Services9 />
      <Story1 />
      <OnlineClass1 />
      <CourseList1 />
      <Speakers1 />
      <Marketing2 />
      <Testimonial4 />
      <Subscription1 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing7;
