import React from "react";
import { Grid, Card, Icon, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  borderedIcon: {
    border: "2px solid rgba(var(--secondary),0.8)",
  },
}));

const Service3 = () => {
  const classes = useStyles();

  const cardList = [
    {
      icon: "account_balance",
      text: "Invoicing",
    },
    {
      icon: "payment",
      text: "Payment Gateway",
    },
    {
      icon: "receipt",
      text: "Customer Records",
    },
    {
      icon: "cloud_done",
      text: "Cloud Sync",
    },
  ];
  return (
    <div className="section section-service3 bg-light-gray" id="service3">
      <div className="container">
        <Grid container spacing={5} alignItems="center">
          <Grid item lg={6} md={6} sm={12}>
            <Grid container spacing={4}>
              {cardList.map((card, index) => (
                <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                  <Card className="service__card p-6 card text-center h-full">
                    <div
                      className={clsx(
                        "flex justify-center items-center rounded w-56 h-56 text-secondary bg-light-secondary mx-auto mb-4",
                        classes.borderedIcon
                      )}
                    >
                      <Icon>{card.icon}</Icon>
                    </div>
                    <p className="m-0 uppercase">{card.text} </p>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <h2 className="">Made by business people for business people</h2>
            <p>
              Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has
              eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,
              <br />
              <br />
              vim quidam blandit voluptaria no, has eu lorem convenire
              incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu.
              Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam
              nostrum ut per.
            </p>
            <Button variant="contained" color="secondary">
              Try it free
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Service3;
