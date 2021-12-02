import React from "react";
import { styled } from "@mui/system";
import { IconButton, Icon } from "@mui/material";

const Section = styled("section")(() => ({
  backgroundImage: `linear-gradient(rgba(0,0,0, 0.67), rgba(0,0,0, 0.67)), 
       url('./assets/images/scene-1.jpg')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  padding: "160px 0px !important",
  marginTop: "4.25rem",
  "& .intro": {
    padding: "2rem 0px 1.5rem",
    textAlign: "center",
    position: "relative",
    zIndex: 5,
    "&:after": {
      content: '" "',
      position: "absolute",
      background: "rgba(255,255,255,0.17)",
      right: -2000,
      left: -2000,
      bottom: 0,
      top: 0,
      zIndex: -1,
    },
  },
}));

const HotelTour = () => {
  return (
    <Section className="section" id="hotel-tour">
      <div className="container">
        <div className="intro">
          <h1 className="font-normal text-center text-36 text-white mt-0 mb-8">
            Take a Virtual Tour !
          </h1>
          <IconButton className="bg-white">
            <Icon color="primary">play_arrow</Icon>
          </IconButton>
        </div>
      </div>
    </Section>
  );
};

export default HotelTour;
