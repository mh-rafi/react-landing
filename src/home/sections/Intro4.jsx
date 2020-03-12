import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery, Button, Fab, Icon } from "@material-ui/core";
import AppleIcon from "../common/AppleIcon";

const useStyles = makeStyles(theme => ({
  description: props => ({
    maxWidth: "420px",
    paddingBottom: "12px"
  }),
  themeText: {
    color: theme.palette.text.primary
  },

  musicImage: {
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: 26,
    maxHeight: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },

  dropShadow: {
    marginTop: 32,
    height: 36,
    opacity: 0.75,
    background:
      "radial-gradient(ellipse at center,  rgba(0,0,0,0.65) -25%,rgba(0,0,0,0) 55%);"
  },

  test: {
    position: "relative",
    display: "inline-block",
    marginLeft: "100px",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "50%",
      left: 0,
      right: 0,
      margin: "0 100px 0 -2000px",
      bottom: 0,
      borderRadius: "300px",
      background: theme.palette.primary.main,
      transformOrigin: "right bottom",
      transform: "rotate(45deg)",
      zIndex: -1,
      opacity: 0.1,

      [theme.breakpoints.only("sm")]: {
        // transform: "rotateX(155deg)"
      },

      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    }
  }
}));

const Intro4 = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <section className="section" id="intro4">
      <div className="relative w-full">
        <div className="container pt-10">
          <Grid
            container
            spacing={isMobile ? 3 : 0}
            // justify="space-between"
            alignItems="center"
          >
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className={classes.test}>
                <img
                  className={classes.musicImage}
                  src="/assets/images/mobile-1.png"
                  alt="mobile-1"
                />
                <div className={classes.dropShadow}></div>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div>
                <p className="text-primary m-0 mb-2 text-20">Evalynn Music</p>
                <h1 className="font-normal text-48 mt-0">
                  Best Music App 2020
                </h1>
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
                    <Icon className="mr-3" fontSize="small">
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
      </div>
    </section>
  );
};

export default Intro4;
