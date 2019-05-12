import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";

class Intro2 extends Component {
  state = {};
  render() {
    return (
      <section className="section section-intro1 section-intro2" id="intro2">
        <div className="container">
          <div className="text-center">
            <div className="section-intro1__subtitle mb-24">
              Angular Landing + Egret Admin
            </div>
            <h1 className="section-intro1__title">
              Your complete React App Development kit
            </h1>
            <p className="intro1__description">
              Egret implements the official Angular Material Design components
              and built with Angular CLI. No Bootstrap!, No jQuery! and Only
              TypeScript!
            </p>
            <div>
              <Button
                className="bg-white"
                variant="contained"
                size="large"
                aria-label="Buy"
              >
                <Icon className="mr-16">add_shopping_cart</Icon>
                Buy Egret
              </Button>
            </div>
          </div>
          <div className="section-intro2__product text-center">
            <img src="/assets/images/egret-screen.png" alt="" />
          </div>
        </div>
      </section>
    );
  }
}

export default Intro2;
