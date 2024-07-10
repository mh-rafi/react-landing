import React from "react";
import { Grid, Icon, Button, TextField } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0px !important",
    overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0 !important",
      textAlign: "center",
      "& .list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
  title: {
    textShadow: "0 4px 4px rgba(0, 0, 0, 0.22)",
  },
}));

const Intro3 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro3">
      <div className={classes.introWrapper}>
        <div className="container">
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item md={6}>
              <h1 className={clsx("text-48 mb-6 text-primary", classes.title)}>
                Better Management; Less Expense
              </h1>
              <div className="text-22 mb-10">
                Not sure about Pro? Try trial first!
              </div>

              <div className="list mb-10">
                <div className="flex items-center mb-4 text-muted">
                  <Icon className="mr-2" color="secondary">
                    check
                  </Icon>
                  Unlimited Projects.
                </div>
                <div className="flex items-center mb-4 text-muted">
                  <Icon className="mr-2" color="secondary">
                    check
                  </Icon>
                  Unlimited Team Members.
                </div>
                <div className="flex items-center mb-4 text-muted">
                  <Icon className="mr-2" color="secondary">
                    check
                  </Icon>
                  Unlimited Disk Space.
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
                    padding: "2px 3px",
                    paddingLeft: "0.75rem",
                    background: "rgba(255,255,255,0.87)",
                  },
                  endAdornment: (
                    <Button className="bg-secondary rounded text-13 px-7 py-11px">
                      <Icon fontSize="small">flight_takeoff</Icon>
                      <span className="ml-2">SUBSCRIBE</span>
                    </Button>
                  ),
                }}
              />
            </Grid>
            <Grid item md={6}>
              <div className="flex justify-center items-center max-w-360 mx-auto">
                <img
                  className="w-full"
                  src="./assets/images/illustrations/2.svg"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Intro3;
