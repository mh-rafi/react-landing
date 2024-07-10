import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Button, Icon } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  description: (props) => ({
    maxWidth: "420px",
    paddingBottom: "12px",
  }),
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
      height: "72%",
      top: "14%",
      left: 0,
      right: 0,
      margin: "0 -100px 0 -2000px",
      bottom: 0,
      borderRadius: "300px",
      background: theme.palette.primary.main,
      transformOrigin: "right bottom",
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

const ProductAnalytics = () => {
  const classes = useStyles();

  return (
    <section className="section" id="product-analytics">
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/mobile-3.svg"
                alt="mobile-1"
              />
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <div>
              <h1 className="mt-0 font-normal text-44">
                Great Product Analytics
              </h1>
              <p className="mb-8 max-w-400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <Icon className="mr-4" color="primary">
                    done
                  </Icon>
                  <p className="my-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  </p>
                </div>
              ))}
              <Button className="mt-8" variant="text" color="primary">
                CLICK TO VIEW MORE <Icon>navigate_next</Icon>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default ProductAnalytics;
