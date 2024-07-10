import React from "react";
import { Grid, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    "& .card-icon": {
      fontSize: 64,
      transition: "all 250ms ease-in-out",
    },
    "&:hover": {
      "& .card-icon": {
        color: palette.primary.main,
      },
    },
  },
}));

const Service6 = () => {
  const classes = useStyles();

  const cardList = [
    {
      icon: "account_balance",
      text: "Sell everywhere",
    },
    {
      icon: "security",
      text: "Secured payments",
    },
    {
      icon: "language",
      text: "Smart pricing",
    },
    {
      icon: "fastfood",
      text: "Go beyond",
    },
  ];

  return (
    <div className="section" id="service6">
      <div className="container">
        <div className="section__header mb-48">
          <h2>Grow Your Business</h2>
          <p>Access integrations and new features in a matter of seconds</p>
        </div>
        <Grid container justify="center" alignItems="center" spacing={4}>
          {cardList.map((card, index) => (
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
              key={index}
              className="text-center"
            >
              <div
                className={clsx(
                  "h-112 w-112 rounded overflow-hidden mx-auto p-6 card",
                  classes.card
                )}
              >
                <Icon className="card-icon"> {card.icon} </Icon>
              </div>
              <p className="uppercase">{card.text}</p>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Service6;
