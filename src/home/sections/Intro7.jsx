import React from "react";
import { makeStyles } from '@mui/styles';
// import clsx from "clsx";
import { Button, Icon, Avatar } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    backgroundImage: `linear-gradient(rgba(var(--primary), 0.3), rgba(var(--primary), 0.3)), 
       url('./assets/images/study-1.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "10rem 0px !important",
  },
  intro: {
    padding: "2rem 0px 1.5rem",
    textAlign: "center",
    position: "relative",
    zIndex: 5,
    "&:after": {
      content: '" "',
      position: "absolute",
      background: "rgba(255,255,255,0.8)",
      right: -2000,
      left: -2000,
      bottom: 0,
      top: 0,
      zIndex: -1,
    },
  },
}));

const Intro7 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro7">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className={classes.intro}>
            <h1 className="font-normal text-center text-44 mt-0 mb-4">
              Find the best courses online
            </h1>
            <h3 className="font-normal text-primary mb-0">All in one place</h3>
            <p className="my-12 max-w-550 mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
            <div className="flex flex-wrap justify-center">
              <Button
                variant="outlined"
                color="primary"
                className="rounded px-2px py-2px mr-4 mb-4"
              >
                <span className="pl-5 pr-3">Watch Video</span>
                <Avatar className="h-32 w-32 bg-primary">
                  <Icon>play_arrow</Icon>
                </Avatar>
              </Button>
              <Button className="px-7 text-white bg-primary rounded mb-4">
                GET ADMITTED
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro7;
