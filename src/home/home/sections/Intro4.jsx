import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Button, Icon } from "@mui/material";
import AppleIcon from "../common/icons/AppleIcon";

const useStyles = makeStyles((theme) => ({
  themeText: {
    color: theme.palette.text.primary,
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "80%",
      left: 0,
      right: 0,
      margin: "0 180px -50px -2000px",
      bottom: 0,
      borderRadius: "300px",
      background: theme.palette.primary.main,
      transformOrigin: "right bottom",
      transform: "rotate(45deg)",
      zIndex: -1,
      opacity: 0.1,
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "10%",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);",
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      "&::after": {
        display: "none",
      },
      "&::before": {
        display: "none",
      },
    },
  },
}));

const Intro4 = () => {
  const classes = useStyles();

  return (
    <section className="section section-intro" id="intro4">
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/mobile-1.svg"
                alt="mobile-1"
              />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div>
              <p className="text-primary m-0 mb-4 text-20">Evalynn Music</p>
              <h1 className="font-normal text-44 mt-0">Best Music App 2020</h1>
              <p className="max-w-400 mb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
              </p>
              <Button
                className={classes.themeText + " rounded px-12 text-black"}
                variant="outlined"
                color="primary"
              >
                CLICK TO WATCH A VIDEO
              </Button>

              <div className="mt-25 flex flex-wrap">
                <Button
                  className="mr-6 px-6 mb-4 rounded py-3"
                  variant="contained"
                  color="primary"
                >
                  <Icon fontSize="small" className="mr-3">
                    android
                  </Icon>
                  Play Store
                </Button>
                <Button
                  className="px-6 mb-4 rounded py-3"
                  variant="contained"
                  color="primary"
                >
                  <AppleIcon fontSize="small" className="mr-3" />
                  App Store
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro4;
