import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  classname: props => ({
    color: theme
  })
}));

const Intro4 = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 768px");

  return (
    <section className="section" id="intro4">
      <div className="container">
        <Grid
          container
          spacing={isMobile ? 3 : 0}
          justify="space-between"
          alignItems="center"
        >
          <Grid item lg={6} md={6} sm={12}>
            <img src="/assets/images/mobile-1.png" alt="mobile-1" />
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <div>
              <p className="text-primary m-0 mb-1 text-24">Evalynn Music</p>
              <h1 className="font-normal text-64 mt-0">Best Music App 2020</h1>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro4;
