import React from "react";
import { makeStyles } from '@mui/styles';
import { Button, Icon } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    background:
      "url(./assets/images/scene-3.jpg) center center/cover no-repeat",
    padding: "2.5rem 0rem",
  },
  lightWhiteBG: {
    position: "absolute",
    display: "block",
    top: 0,
    bottom: 0,
    left: 0,
    right: "calc(50% - 395px)", // 1170*(1-5/7)
    minWidth: 800,
    background: "rgba(255,255,255,0.25)",
    clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",

    "&:before": {
      content: '" "',
      position: "absolute",
      display: "block",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      marginRight: 100,
      minWidth: 800,
      background: "rgba(255,255,255,0.75)",
      clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
      zIndex: -1,
    },

    [theme.breakpoints.down("xs")]: {
      right: 0,
      clipPath: "none",
      background: "rgba(255,255,255,0.7)",
    },
  },
  intro: {
    position: "relative",
    padding: "5rem 0rem",
    maxWidth: 500,
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem",
    },
    zIndex: 5,
  },
}));

const Intro9 = () => {
  const classes = useStyles();

  return (
    <section className="section pb-0" id="intro9">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className={classes.intro}>
            <h4 className="font-normal m-0 mb-6">
              Enjoy the best relaxation space with
            </h4>
            <h1 className="font-medium text-48 text-primary mt-0">
              Evelynn Resort
            </h1>
            <p className="mb-16">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum, et ratione, labore corrupti
              facilis ab tempore nobis qui assumenda repellendus voluptatum
              tenetur! Sequi a fugiat libero officiis velit amet. Harum.
            </p>
            <div className="flex flex-wrap">
              <Button
                variant="outlined"
                color="primary"
                className="mr-4 border-radius-8 text-inherit"
              >
                Watch Video
                <Icon className="ml-2" color="primary">
                  play_arrow
                </Icon>
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="mr-4 border-radius-8"
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className={classes.lightWhiteBG}></div>
        </div>
      </div>
    </section>
  );
};

export default Intro9;
