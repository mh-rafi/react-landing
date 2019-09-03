import React, { Component } from "react";
import { Grid, Icon } from "@material-ui/core";

class Service6 extends Component {
  cardList = [
    {
      icon: "account_balance",
      text: "Sell everywhere"
    },
    {
      icon: "security",
      text: "Secured payments"
    },
    {
      icon: "language",
      text: "Smart pricing"
    },
    {
      icon: "fastfood",
      text: "Go beyond"
    }
  ];
  state = {};
  render() {
    return (
      <div className="section section-service6" id="service6">
        <div className="container">
          <div className="section__header mb-48">
            <h2>Grow Your Business</h2>
            <p>Access integrations and new features in a matter of seconds</p>
          </div>
          <Grid container justify="center" alignItems="center" spacing={4}>
            {this.cardList.map((card, index) => (
              <Grid
                item
                lg={3}
                md={3}
                sm={12}
                xs={12}
                key={index}
                className="text-center"
              >
                <div className="sevice6__circle service__card p-24 card">
                  <Icon className="card__icon-64"> {card.icon} </Icon>
                </div>
                <p className="text-uppercase">{card.text}</p>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service6;
