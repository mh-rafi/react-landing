import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Fab, Icon } from "@material-ui/core";
import AppleIcon from "../common/icons/AppleIcon";

const useStyles = makeStyles(theme => ({
  description: props => ({
    maxWidth: "420px",
    paddingBottom: "12px"
  }),
  themeText: {
    color: theme.palette.text.primary
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },

  musicImageWrapper: {
    position: "relative",
    display: "inline-block",
    // marginLeft: "100px",
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
      opacity: 0.1
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "75%",
      marginTop: 32,
      left: "15%",
      opacity: 0.75,
      background:
        "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);"
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      "&::after": {
        display: "none"
      },
      "&::before": {
        display: "none"
      }
    }
  }
}));

const Intro4 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro4">
      <div className="container pt-10">
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
              <p className="text-primary m-0 mb-2 text-20">Evalynn Music</p>
              <h1 className="font-normal text-48 mt-0">Best Music App 2020</h1>
              <p className={classes.description}>
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
                <Fab
                  className="mr-6 px-6 mb-4"
                  variant="extended"
                  color="primary"
                >
                  <Icon fontSize="small" className="mr-3">
                    android
                  </Icon>
                  Play Store
                </Fab>
                <Fab className="px-6 mb-4" variant="extended" color="primary">
                  <AppleIcon fontSize="small" className="mr-3" />
                  App Store
                </Fab>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro4;
