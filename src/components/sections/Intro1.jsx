import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

class Intro1 extends Component {
  state = { };
  render() {
    return (
      <section className="section section-intro1" id="intro1">
        <div className="container">
          <Grid container spacing={24}>
            <Grid item md={6}>
              <h1 className="section-intro1__title">
                Better Management; Less Expense
              </h1>
              <div className="section-intro1__subtitle">
                Dont wast money! Try free version first.
              </div>

              <div className="section-intro1__list">
                <div className="section-intro1__list__item">
                  <Icon color="secondary">check</Icon> Unlimited Projects.
                </div>
                <div className="section-intro1__list__item">
                  <Icon color="secondary">check</Icon> Unlimited Team Members.
                </div>
                <div className="section-intro1__list__item">
                  <Icon color="secondary">check</Icon> Unlimited Disk Space.
                </div>
              </div>

              <div>
                <Fab
                  variant="extended"
                  size="large"
                  color="primary"
                  aria-label="Buy"
                  className="btn-action m-8"
                >
                  <Icon className="mr-16">flight_takeoff</Icon>
                  Take off
                </Fab>

                <Fab
                  variant="extended"
                  size="large"
                  aria-label="Download"
                  className="btn-action btn-white m-8"
                >
                  <Icon className="mr-16">alarm_on</Icon>
                  14 days free trial
                </Fab>
              </div>
            </Grid>
            <Grid item md={6} >
              <div className="section-intro1__product">
                <a href="#product" className="section-intro1__product__link">
                  <div className="price">$24</div>
                  <span className="price__text">Buy On ThemeForest</span>
                </a>
                <img src="/assets/images/screenshots/gull-dashboard.png" alt=""/>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Intro1;
