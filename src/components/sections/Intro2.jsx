import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";

class Intro2 extends Component {
  state = {};
  render() {
    return (
      <section className="section section-intro1 section-intro2" id="intro2"
      style={{background: 'url(./assets/images/home-bg-black.png) center center/cover no-repeat'}}>
        <div className="container">
          <div className="text-center">
            <div className="section-intro1__subtitle mb-24 text-secondary">
              Build More; Sell More;
            </div>
            <h1 className="section-intro1__title">
              Marketing Automation Redefined
            </h1>
            <p className="intro1__description">
             The most poerfull marketing automation platform you have ever used.
             No hidden charge, pay as you use!
            </p>
            <div>
              <Button
                className="bg-white"
                variant="contained"
                size="large"
                aria-label="Buy"
              >
                <Icon className="mr-16">flight_takeoff</Icon>
                Start 7 day trial
              </Button>
            </div>
          </div>
          <div className="section-intro2__product text-center">
            <img src="./assets/images/screenshots/landing-intro.png" alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default Intro2;
