import React from "react";
import { IconButton, Icon } from "@mui/material";
import { styled } from "@mui/system";

const Section = styled("section")(() => ({
  backgroundImage: `linear-gradient(rgba(0,0,0, 0.67), rgba(0,0,0, 0.67)), 
       url('./assets/images/study-bg-2.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "& .card": {
    margin: "2.5rem auto",
    padding: "2.5rem",
    background: "rgba(255,255,255,0.17)",
    maxWidth: 550,
    borderRadius: 32,
  },
  "& .buttonBorder": {
    border: "1px solid white",
  },
}));

const Testimonial7 = () => {
  return (
    <Section id="testimonial7" className="section my-20">
      <div className="container">
        <div className="text-center text-white card">
          <h1 className="m-0 text-48 font-normal inline-block mx-auto">
            See a review
          </h1>
          <p className="my-8 max-w-400 mx-auto text-inherit">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
          <IconButton className="buttonBorder">
            <Icon className="text-white">play_arrow</Icon>
          </IconButton>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial7;
