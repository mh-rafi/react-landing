import React, { Component } from "react";
import { Grid, Card, Icon, Button } from "@material-ui/core";

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
      <div className="section section-service3 light-gray" id="service3">
        <div className="container">
          <Grid container spacing={5} alignItems="center">
            <Grid item lg={6} md={6} sm={12}>
              <Grid container spacing={4}>
                {this.cardList.map((card, index) => (
                  <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                    <Card className="service__card p-24 card text-center h-100">
                      <div className="rounded-icon secondary mb-16">
                        <Icon>{card.icon}</Icon>
                      </div>
                      <p className="m-0 text-uppercase">{card.text} </p>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item lg={6} md={6} sm={12}>
              <h2 className="">Made by business people for business people</h2>
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
