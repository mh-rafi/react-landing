import React from "react";
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    background:
      "url(./assets/images/event-1.jpg) center center/cover no-repeat",
    height: "100%",
    overflow: "hidden",
  },
  intro: {
    padding: "7.5rem 0rem",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      padding: "2.5rem 0rem",
    },
    zIndex: 5,
  },
  lightWhiteBG: {
    position: "absolute",
    display: "block",
    top: 0,
    bottom: 0,
    left: "calc(50% - 500px)",
    right: "calc(50% - 500px)",
    background: "rgba(255,255,255,0.75)",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",

    [theme.breakpoints.down("xs")]: {
      right: 0,
      left: 0,
      clipPath: "none",
      background: "rgba(255,255,255,0.7)",
    },
  },
}));

const Intro10 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro10">
      <div className={classes.introWrapper}>
        <div className="container">
          <div
            className={clsx(
              "relative mx-auto text-center flex-column justify-center items-center",
              classes.intro
            )}
          >
            <h4 className="font-normal m-0 mb-4 text-black">
              30th April, 2020
            </h4>
            <h1 className="font-medium text-44 text-primary m-0">
              Digital Conference 2020
            </h1>
            <p className="mb-6 max-w-400 mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <div className="flex max-w-400 mx-auto flex-wrap mb-2">
              <div className="text-center mr-8 mb-8">
                <div className="m-0 text-28">032</div>
                <div className="m-0">Days</div>
              </div>
              <div className="text-center mr-8 mb-8">
                <div className="m-0 text-28">19</div>
                <div className="m-0">Hours</div>
              </div>
              <div className="text-center mr-8 mb-8">
                <div className="m-0 text-28">24</div>
                <div className="m-0">Minutes</div>
              </div>
              <div className="text-center mb-8">
                <div className="m-0 text-28">51</div>
                <div className="m-0">Seconds</div>
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="rounded px-6"
            >
              Book Ticket
            </Button>
          </div>
          <div className={classes.lightWhiteBG}></div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <p>Next Event : 30th May, 2020</p>
      </div>
    </section>
  );
};

export default Intro10;
