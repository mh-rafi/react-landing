import React from "react";
import { Grid, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  sectionBG: ({ bg }) => ({
    background: `url(${
      bg || "./assets/images/home-bg.jpg"
    }) center center/cover no-repeat`,
  }),
}));

const CallToAction1 = ({ bg }) => {
  const classes = useStyles({ bg });

  return (
    <div className={clsx("section text-white", classes.sectionBG)} id="cta1">
      <div className="container">
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="flex-start"
        >
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <h2>Dont miss the best management tool of the world</h2>
            <p className="text-inherit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam,
              illum et quis officiis beatae.
            </p>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
            <Button size="large" color="secondary" variant="contained">
              Start 14 days Trial
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CallToAction1;
