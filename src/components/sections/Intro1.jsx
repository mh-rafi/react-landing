import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

class Intro1 extends Component {
  state = { };
  render() {
    return (
      <section className="section section-intro1">
        <div className="container">
          <Grid container spacing={24}>
            <Grid item md={6}>
              <h1 className="intro-title">
                Your complete React App Development kit
              </h1>
              <div className="intro-subtitle">
                Egret implements the official Angular Material Design components
                and built with Angular CLI. <br />
                No Bootstrap!, No jQuery! and Only TypeScript!{" "}
              </div>

              <div className="intro-list">
                <div className="intro-list-item">
                  <Icon color="secondary">check</Icon> Lorem ipsum dolor sit.
                </div>
                <div className="intro-list-item">
                  <Icon color="secondary">check</Icon> Lorem ipsum dolor sit.
                </div>
                <div className="intro-list-item">
                  <Icon color="secondary">check</Icon> Lorem ipsum dolor sit.
                </div>
              </div>

              <div>
                <Fab
                  variant="extended"
                  size="large"
                  color="primary"
                  aria-label="Buy"
                  className="btn-action"
                >
                  <Icon className="mr-16">add_shopping_cart</Icon>
                  Buy Egret
                </Fab>

                <Fab
                  variant="extended"
                  size="large"
                  aria-label="Download"
                  className="btn-action btn-white mx-16"
                >
                  <Icon className="mr-16">get_app</Icon>
                  React Landing
                </Fab>
              </div>
            </Grid>
            <Grid item md={6} >
              <div className="intro-product">
                <a href="" className="intro-product-link">
                  <div className="price">$24</div>
                  <span className="price-text">Buy On ThemeForest</span>
                </a>
                <img src="/assets/images/egret-screen.png" alt=""/>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Intro1;
