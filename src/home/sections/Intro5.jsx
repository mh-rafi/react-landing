import React from "react";
import { Grid, Icon } from "@mui/material";

import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    position: "relative",
    background:
      "url(./assets/images/happy-face-1.png) center center/cover no-repeat",
    height: "100%",
  },
  lightWhiteBG: {
    position: "absolute",
    display: "block",
    top: 0,
    bottom: 0,
    left: 0,
    right: "calc(50% - 95px)", // 1170*(1-5/7)
    [theme.breakpoints.down("xs")]: {
      right: 0,
    },
    background: "rgba(255,255,255,0.95)",
  },
  intro: {
    position: "relative",
    padding: "5rem 0rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem",
    },
    zIndex: 5,
  },
}));

const Intro5 = () => {
  const classes = useStyles();
  const imageList = ["random-1", "random-2", "random-3"];

  return (
    <section className="section" id="intro5">
      <div className={classes.introWrapper}>
        <div className="container">
          <Grid container spacing={0} alignItems="center">
            <Grid item sm={7} xs={12}>
              <div className={classes.intro}>
                <h1 className="font-bold text-48 mt-0">Evelynn Designs</h1>
                <p className="max-w-400 text-18 my-6">
                  Looking for a{" "}
                  <span className="text-primary">
                    world class graphics designer ?
                  </span>
                </p>
                <p className="max-w-400 mb-15">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et
                </p>
                <p className="mb-6">FEATURED PHOTOS</p>
                <div className="max-w-550 mb-6">
                  <Grid container spacing={3}>
                    {imageList.map((item, ind) => (
                      <Grid key={ind} item sm={4} xs={12}>
                        <div className="boder-radius-4">
                          <img
                            className="w-full"
                            src={`/assets/images/${item}.png`}
                            alt={item}
                          />
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <Button
                  className={clsx(
                    "rounded pl-6 pr-4 text-black mb-15",
                    classes.themeText
                  )}
                  variant="outlined"
                  color="primary"
                >
                  CLICK TO VIEW MORE{" "}
                  <Icon color="primary" fontSize="small">
                    navigate_next
                  </Icon>
                </Button>

                <div className="flex flex-wrap">
                  <Button
                    className="rounded px-10"
                    variant="contained"
                    color="primary"
                  >
                    HIRE ME
                  </Button>
                </div>
              </div>
              <div className={classes.lightWhiteBG}></div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Intro5;
