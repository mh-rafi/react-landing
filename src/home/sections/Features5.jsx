import React from "react";
import { makeStyles } from '@mui/styles';
import { lighten } from "@mui/material";
import { Grid, useMediaQuery, Icon, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  feature: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center !important",
    },
  },

  musicImage: {
    width: "362px",
    [theme.breakpoints.down("xs")]: {
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

  buttonGroupBG: {
    background: lighten(theme.palette.primary.light, 0.9),
    "&>div": {
      transition: "all 250ms",
      "&:hover": {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: 8,
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "100%",
      },
    },
  },
}));

const Feature5 = () => {
  const classes = useStyles();

  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <section className="section">
      <div className="container">
        <Grid container spacing={isMobile ? 3 : 10} alignItems="center">
          <Grid item lg={8} md={8} sm={6} xs={12}>
            <div className="max-w-400 mb-16">
              <h1 className="mt-0 font-normal text-44">App Features</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
              </p>
            </div>

            <div className="mb-16 inline-block">
              <div
                className={`flex flex-wrap items-center border-radius-8 ${classes.buttonGroupBG}`}
              >
                <div className="px-6 py-2 box-shadow-none">Community</div>
                <div className="px-6 py-2 box-shadow-none">Self Service</div>
                <div className="px-6 py-2 box-shadow-none">Teamwork</div>
              </div>
            </div>

            <div>
              <h1 className="mt-0 font-normal text-44">
                Great Product Analytics
              </h1>
              <p className="mb-8 mr-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem
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
          <Grid item lg={4} md={4} sm={6} xs={12} className={classes.feature}>
            <div className={classes.musicImageWrapper}>
              <img
                className={classes.musicImage}
                src="/assets/images/mobile-4.svg"
                alt="mobile-1"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Feature5;
