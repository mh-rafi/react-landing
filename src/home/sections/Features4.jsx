import React from "react";

import { makeStyles } from '@mui/styles';

import { Grid, useMediaQuery } from "@mui/material";

import Feature4IconCreator from "../common/icons/Feature4IconCreator";
import CubeIcon from "../common/icons/CubeIcon";
import RetinaIcon from "../common/icons/RetinaIcon";
import DesktopIcon from "../common/icons/DesktopIcon";
import CheckedIcon from "../common/icons/CheckedIcon";
import PcMobileIcon from "../common/icons/PcMobileIcon";
import HeartIcon from "../common/icons/HeartIcon";

const useStyles = makeStyles((theme) => ({
  feature: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center !important",
    },
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  musicImageWrapper: {
    position: "relative",
    textAlign: "right",

    // marginLeft: "100px",
    "&::before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: "72%",
      top: "14%",
      left: 0,
      right: 0,
      margin: "0 -2000px 0 -80px",
      borderRadius: "300px",
      background: theme.palette.primary.main,
      zIndex: -1,
      opacity: 0.1,

      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },

    "&::after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 36,
      width: "80%",
      marginTop: 32,
      left: "calc(10% + 20px)",
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

const Feature4 = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <section className="section" id="feature4">
      <div className="container">
        <Grid container spacing={isMobile ? 3 : 10} alignItems="center">
          <Grid item lg={8} md={6} sm={6} xs={12}>
            <div className="max-w-400 mb-16">
              <h1 className="mt-0 font-normal text-44">App Features</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </p>
            </div>

            <Grid container spacing={isMobile ? 5 : 8}>
              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={classes.feature}
              >
                <div className="relative mx-4">
                  <Feature4IconCreator>
                    <DesktopIcon color="primary" className="text-54" />
                  </Feature4IconCreator>
                </div>
                <div>
                  <h4 className="mt-6 font-normal mb-0">Use on Any Device</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </Grid>

              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={classes.feature}
              >
                <div className="relative mx-4">
                  <Feature4IconCreator>
                    <CubeIcon color="primary" className="text-54" />
                  </Feature4IconCreator>
                </div>
                <div>
                  <h4 className="mt-6 font-normal mb-0">
                    Material Design Icon
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </Grid>

              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={classes.feature}
              >
                <div className="relative mx-4">
                  <Feature4IconCreator>
                    <RetinaIcon color="primary" className="text-54" />
                  </Feature4IconCreator>
                </div>
                <div>
                  <h4 className="mt-6 font-normal mb-0">Retina Ready</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </Grid>

              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={classes.feature}
              >
                <div className="relative mx-4">
                  <Feature4IconCreator>
                    <CheckedIcon color="primary" className="text-54" />
                  </Feature4IconCreator>
                </div>
                <div>
                  <h4 className="mt-6 font-normal mb-0">W3c Valid Code</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </Grid>

              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={classes.feature}
              >
                <div className="relative mx-4">
                  <Feature4IconCreator>
                    <PcMobileIcon color="primary" className="text-54" />
                  </Feature4IconCreator>
                </div>
                <div>
                  <h4 className="mt-6 font-normal mb-0">Fully Responsive</h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </Grid>

              <Grid
                item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                className={classes.feature}
              >
                <div className="relative mx-4">
                  <Feature4IconCreator>
                    <HeartIcon color="primary" className="text-54" />
                  </Feature4IconCreator>
                </div>
                <div>
                  <h4 className="mt-6 font-normal mb-0">
                    Browser Compatibility
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12} className={classes.feature}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/mobile-2.svg"
                alt="mobile-1"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Feature4;
