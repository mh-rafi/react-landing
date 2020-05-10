import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import { makeStyles, darken } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  whiteButton: {
    background: "#fff !important",
    color: "rgba(var(--body)) !important",
    "&:hover": {
      background: `${darken("#ffffff", 0.1)} !important`,
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
            <h1 className="section-intro1__title">
              Better Management; Less Expense
            </h1>
            <div className="section-intro1__subtitle">
              Not sure about Pro? Try trial first!
            </div>

            <div className="section-intro1__list">
              <div className="section-intro1__list__item">
                <Icon color="secondary">check</Icon> Unlimited Projects.
              </div>
              <div className="section-intro1__list__item">
                <Icon color="secondary">check</Icon> Unlimited Team Members.
              </div>
              <div className="section-intro1__list__item">
                <Icon color="secondary">check</Icon> Unlimited Disk Space.
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
            <div className="section-intro1__product">
              <a
                href="https://themeforest.net/user/mh_rafi/portfolio"
                className="section-intro1__product__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="price">$16</div>
                <span className="price__text">Buy On ThemeForest</span>
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
