import React from "react";
import Footer2 from "./sections/Footer2";
import { FooterTheme } from "../theme";
import { ThemeProvider } from "@material-ui/core";
import TopBar10 from "./sections/TopBar10";
import Intro10 from "./sections/Intro10";
import Contact2 from "./sections/Contact2";
import Booking1 from "./sections/Booking1";
import Gallery2 from "./sections/Gallery2";
import HotelTour from "./sections/HotelTour";
import Services10 from "./sections/Services10";
import Blog1 from "./sections/Blog1";
import Testimonial8 from "./sections/Testimonial8";
import Conference1 from "./sections/Conference1";

const Landing10 = () => {
  return (
    <div className="landing">
      <TopBar10 />
      <Intro10 />
      <Conference1 />
      <Booking1 />
      <Gallery2 />
      <HotelTour />
      <Services10 />
      <Blog1 />
      <Testimonial8 />
      <Contact2 />
      <ThemeProvider theme={FooterTheme}>
        <Footer2 />
      </ThemeProvider>
    </div>
  );
};

export default Landing10;
