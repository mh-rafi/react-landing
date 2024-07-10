import React from "react";
import { Grid,  Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import {  lighten } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    "&:hover $cardOverlay": {
      opacity: 1,
    },
  },
  cardOverlay: {
    padding: "0px 1rem",
    transition: "all 250ms ease-in-out",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    borderRadius: 8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    color: palette.primary.contrastText,
    background: "rgba(0,0,0,0.67)",
    zIndex: 5,
  },
  cardTitle: {
    borderBottom: "1px solid rgba(255,255,255,0.87)",
  },
}));

const Gallery2 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="gallery2">
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="font-normal text-44 mt-0">Rooms & Suits</h1>
          <p className="max-w-400 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
        </div>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, ind) => (
            <Grid key={ind} item lg={4} md={4} sm={4} xs={12}>
              <div className={classes.cardHolder}>
                <img
                  className="w-full block"
                  src={`/assets/images/room-${item}.jpg`}
                  alt="random"
                />
                <div className={classes.cardOverlay}>
                  <div>
                    <h5
                      className={clsx(
                        "m-0 mb-2 pb-2 font-medium inline-block",
                        classes.cardTitle
                      )}
                    >
                      Regular Room
                    </h5>
                  </div>
                  <div className="flex items-center mb-2">
                    <Icon className="text-inherit">king_bed</Icon>
                    <span className="ml-2 mr-4">1 Bedroom</span>

                    <Icon className="text-inherit">bathtub</Icon>
                    <span className="ml-2 mr-4">1 Bathroom</span>
                  </div>
                  <span className="mb-3">$200/Night</span>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Gallery2;
