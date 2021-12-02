import React from "react";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const Section = styled("section")(({ theme }) => ({
  padding: "180px 0 0 !important",
  overflow: "visible !important",
  background:
    "url(./assets/images/home-bg-black.png) center center/cover no-repeat",
  [theme.breakpoints.down("sm")]: {
    padding: "100px 0 0 !important",
  },
  "& .product": {
    textAlign: "center",
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    margin: "auto",
    bottom: -80,
    maxWidth: 780,
    marginBottom: "5rem",
    "& img": {
      borderRadius: "0.5rem",
      boxShadow: "0 10px 16px rgba(0, 0, 0, 0.2)",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: -63,
    },
    [theme.breakpoints.down("xs")]: {
      bottom: -39,
    },
  },
  "& .title": {
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
}));

const Intro2 = () => {
  return (
    <Section id="intro2" className="section text-white">
      <div className="container">
        <div className="text-center">
          <div className="text-22 mb-6 text-secondary">
            Build More; Sell More;
          </div>
          <h1 className="text-48 mb-6 title">Marketing Automation Redefined</h1>
          <p className="max-w-550 mx-auto mb-6 text-inherit">
            The most poerfull marketing automation platform you have ever used.
            No hidden charge, pay as you use!
          </p>
          <div>
            <Button
              className="bg-white text-black"
              variant="contained"
              size="large"
              aria-label="Buy"
            >
              <Icon className="mr-4">flight_takeoff</Icon>
              Start 7 day trial
            </Button>
          </div>
        </div>
        <div className="product">
          <img
            className="w-full"
            src="./assets/images/screenshots/landing-intro.png"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
};

export default Intro2;
