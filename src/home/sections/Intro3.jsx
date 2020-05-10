import React from "react";
import { Grid, Icon, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  button: {
    position: "absolute",
    right: 3,
    zIndex: 2,
  },
}));

const Intro3 = () => {
  const classes = useStyles();

  return (
    <section className="section section-intro1 section-intro3" id="intro3">
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
              <div className="section-intro1__list__item text-muted">
                <Icon color="secondary">check</Icon> Unlimited Projects.
              </div>
              <div className="section-intro1__list__item text-muted">
                <Icon color="secondary">check</Icon> Unlimited Team Members.
              </div>
              <div className="section-intro1__list__item text-muted">
                <Icon color="secondary">check</Icon> Unlimited Disk Space.
              </div>
            </div>

            <TextField
              className="max-w-450"
              variant="outlined"
              size="small"
              placeholder="Your Email:"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: 300,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: "0.75rem",
                  background: "rgba(255,255,255,0.87)",
                },
                endAdornment: (
                  <Button
                    className={clsx(
                      "bg-secondary rounded text-13 px-7 py-11px",
                      classes.button
                    )}
                  >
                    <Icon fontSize="small">flight_takeoff</Icon>
                    <span className="ml-2">SUBSCRIBE</span>
                  </Button>
                ),
              }}
            />
          </Grid>
          <Grid item md={6}>
            <div className="intro3__product">
              <img src="./assets/images/illustrations/2.svg" alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro3;
