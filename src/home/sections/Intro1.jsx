import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { makeStyles, darken } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  title: {
    margin: "0 0 24px",
    fontSize: "48px",
    fontWeight: "900",
    lineHeight: "52px",
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
  subTitle: {
    margin: "0 0 40px",
    fontSize: "22px",
    fontWeight: "400",
    lineHeight: "32px",
  },
  whiteButton: {
    background: "#fff !important",
    color: "rgba(var(--body)) !important",
    "&:hover": {
      background: `${darken("#ffffff", 0.1)} !important`,
    },
  },
  product: {
    position: "relative",
    top: "100px",
    "& img": {
      width: "100%",
      borderRadius: "0.5rem",
      boxShadow:
        "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    },
    [theme.breakpoints.down("md")]: {
      left: 0,
      top: 0,
    },
  },
  productLink: {
    position: "absolute",
    top: "-100px",
    left: "-30px",
    textAlign: "center",
    display: "block",
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    background: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "37px 20px",
    boxSizing: "border-box",
    overflow: "hidden",
    boxShadow: "0 14px 32px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",

    "&:hover": { boxShadow: "0 19px 32px rgba(0, 0, 0, 0.4)" },

    [theme.breakpoints.down("md")]: {
      display: "none !important",
    },
  },
}));

const Intro1 = () => {
  const classes = useStyles();

  return (
    <section
      className="section section-intro1"
      id="intro1"
      style={{
        background:
          "url(./assets/images/home-bg.jpg) center center/cover no-repeat",
      }}
    >
      <div className="container">
        <Grid container spacing={3} justify="center">
          <Grid item md={6}>
            <h1 className={classes.title}>Better Management; Less Expense</h1>
            <div className={classes.subTitle}>
              Not sure about Pro? Try trial first!
            </div>

            <div className="mb-10">
              <div className="flex items-center mb-4">
                <Icon color="secondary" className="mr-2">
                  check
                </Icon>
                Unlimited Projects.
              </div>
              <div className="flex items-center mb-4">
                <Icon color="secondary" className="mr-2">
                  check
                </Icon>
                Unlimited Team Members.
              </div>
              <div className="flex items-center mb-4">
                <Icon color="secondary" className="mr-2">
                  check
                </Icon>
                Unlimited Disk Space.
              </div>
            </div>

            <div>
              <Fab
                variant="extended"
                size="large"
                color="primary"
                aria-label="Buy"
                className="px-6 text-18 m-2"
              >
                <Icon className="mr-4">flight_takeoff</Icon>
                Take off
              </Fab>

              <Fab
                variant="extended"
                size="large"
                aria-label="Download"
                className={clsx("px-6 text-18 m-2", classes.whiteButton)}
              >
                <Icon className="mr-4">alarm_on</Icon>
                14 days free trial
              </Fab>
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.product}>
              <a
                href="https://themeforest.net/user/mh_rafi/portfolio"
                className={classes.productLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-32 font-bold">$16</div>
                <span className="text-14">Buy On ThemeForest</span>
              </a>
              <img src="./assets/images/screenshots/landing-intro.png" alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro1;
