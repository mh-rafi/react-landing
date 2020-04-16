import React from "react";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import TopBar11 from "./sections/TopBar11";
import Intro11 from "./sections/Intro11";
import Blog1 from "./sections/Blog1";
import Conference1 from "./sections/Conference1";
import EventSchedule1 from "./sections/EventSchedule1";
import Speakers1 from "./sections/Speakers1";
import EventDetails1 from "./sections/EventDetails1";
import Pricing3 from "./sections/Pricing3";
import Testimonial9 from "./sections/Testimonial9";
import Subscription1 from "./sections/Subscription1";
import Clients1 from "./sections/Clients1";
import Features11 from "./sections/Features11";
import Marketing3 from "./sections/Marketing3";
import Testimonial10 from "./sections/Testimonial10";
import Services11 from "./sections/Services11";

const Landing11 = () => {
  return (
    <div className="landing">
      <TopBar11 />
      <Intro11 />
      <Clients1 />
      <Features11 />
      <Marketing3 />
      <Testimonial10 />
      <Services11 />
      <Conference1 />
      <Speakers1 />
      <EventSchedule1 />
      <EventDetails1 />
      <Pricing3 />
      <Testimonial9 />
      <Blog1 />
      <Subscription1 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing11;
