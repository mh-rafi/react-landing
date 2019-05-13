import React, { Component } from "react";
import { Grid, Card, Icon, Typography, Button } from "@material-ui/core";

class Service3 extends Component {
  state = {};
  cardList = [
    {
      icon: "account_balance",
      text: "Invoicing"
    },
    {
      icon: "payment",
      text: "Payment Gateway"
    },
    {
      icon: "receipt",
      text: "Customer Records"
    },
    {
      icon: "cloud_done",
      text: "Cloud Sync"
    }
  ];

  render() {
    return (
      <div className="section section-service3">
        <div className="container">
          <h2>Sales just got Simple</h2>
          <p>Access integrations and new features in a matter of seconds</p>

          <Grid container spacing={40} alignItems="center">
            <Grid item lg={6} md={6} sm={12}>
              <Grid container spacing={32}>
                {this.cardList.map((card, index) => (
                  <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                    <Card className="service__card p-16 card text-center h-100">
                      <Icon className="card__icon-64">{card.icon}</Icon>
                      <p>{card.text}</p>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <h3 className="color-brand">
                Made by business people for business people
              </h3>
              <p>
                Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no,
                has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,
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
  }
}

export default Service3;
