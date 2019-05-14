import React, { Component } from "react";
import { Grid, Icon } from "@material-ui/core";

class Service6 extends Component {
  state = {};
  render() {
    return (
      <div className="section section-service6 light-gray">
        <div className="container">
          <h2>Grow your Business</h2>
          <p>Access integrations and new features in a matter of seconds</p>

          <Grid container justify="center" alignItems="center" spacing={32}>
            <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
              <div className="sevice6__circle service__card p-24">
                <Icon className="card__icon-64">account_balance</Icon>
              </div>
              <p>Sell everywhere</p>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
              <div className="sevice6__circle service__card p-24">
                <Icon className="card__icon-64">security</Icon>
              </div>
              <p>Secured payments</p>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
              <div className="sevice6__circle service__card p-24">
                <Icon className="card__icon-64">language</Icon>
              </div>
              <p>Smart pricing</p>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service6;
