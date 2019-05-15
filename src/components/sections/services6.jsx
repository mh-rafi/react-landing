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
      <div className="section section-service6 light-gray">
        <div className="container">
          <div className="section__header">
            <h2>Grow Your Business</h2>
            <p>Access integrations and new features in a matter of seconds</p>
          </div>
          <Grid container justify="center" alignItems="center" spacing={32}>
            {this.cardList.map((card, index) => (
              <Grid item lg={3} md={3} sm={12} xs={12} className="text-center">
                <div className="sevice6__circle service__card p-24 card">
                  <Icon className="card__icon-64"> {card.icon} </Icon>
                </div>
                <p>{card.text}</p>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service6;
