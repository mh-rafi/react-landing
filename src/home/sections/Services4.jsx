import React from "react";
import { Grid, Card, Icon, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    transition: "all 400ms ease-in-out",

    "& .card-icon": {
      position: "absolute",
      fontSize: 200,
      height: 200,
      width: 200,
      left: -80,
      bottom: -80,
      zIndex: 1,
      opacity: 0.24,
      transition: "all 400ms ease-in-out",
    },

    "&:hover": {
      transform: "translateY(-8px)",

      "& .card-icon": {
        transform: "translateY(-8px)",
        color: palette.secondary.main,
        opacity: 0.6,
      },
    },
  },
}));

const Service4 = () => {
  const classes = useStyles();

  const cardList = [
    {
      icon: "alarm",
      title: "Choose Technology",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    },
    {
      icon: "settings",
      title: "Setup Workflows",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    },
    {
      icon: "dvr",
      title: "Learn from Data",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    },
    {
      icon: "multiline_chart",
      title: "Scale Up",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.",
    },
  ];

  return (
    <div className="section section-service4" id="service4">
      <div className="container">
        <div className="section__header">
          <h2>Integrate Your Process</h2>
          <p>Access integrations and new features in a matter of seconds</p>
        </div>
        <div className="text-center">
          <Grid container spacing={5}>
            {cardList.map((card, index) => (
              <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                <Card
                  className={clsx(
                    "relative overflow-hidden card",
                    classes.card
                  )}
                >
                  <Icon className="card-icon">{card.icon}</Icon>
                  <div className="max-w-372 text-left p-8 ml-24">
                    <h3>{card.title}</h3>
                    <p className="m-0">{card.text}</p>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Button
            className="mt-8"
            size="large"
            variant="contained"
            color="secondary"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service4;
