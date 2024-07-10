import React from "react";

import { Grid, Card, Button } from "@mui/material";

import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderRadius: 8,
    "&:hover $cardHeader": {
      background: palette.primary.main,
      color: "white",
    },
    "&:hover $largeText": {
      color: "rgba(var(--primary),0.3)",
    },
  },
  cardHeader: {
    padding: "1.25rem 2rem",
    fontSize: "1rem",
    fontWeight: 500,
    background: "rgba(var(--primary),0.3)",
    transition: "all 250ms ease",
  },
  cardContent: {
    padding: "1.5rem 2rem",
  },
  largeText: {
    textAlign: "right",
    fontSize: "8rem",
    fontWeight: 400,
    lineHeight: 1,
    marginTop: "1.5rem",
    color: "rgba(var(--primary),0.1)",
    transition: "all 250ms ease",
  },
}));

const WorkProcess1 = () => {
  const classes = useStyles();
  const processList = [
    "Discuss The Project",
    "Working on The Project",
    "Revision, Correction & Delivery",
  ];

  return (
    <section className="section" id="work-process1">
      <div className="container">
        <div>
          <h1 className="font-normal text-44 mt-0">My Work Process</h1>
          <p className="max-w-400 mb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </p>
        </div>

        <Grid container spacing={3}>
          {processList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <Card elevation={3} className={clsx(classes.card, "card")}>
                <div className={classes.cardHeader}>{item}</div>
                <div className={classes.cardContent}>
                  <p className="mb-8 mt-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore e dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lore ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur
                  </p>
                  <Button variant="text" color="primary">
                    CLICK TO VIEW MORE
                  </Button>
                  <div className={classes.largeText}>{ind + 1}</div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default WorkProcess1;
