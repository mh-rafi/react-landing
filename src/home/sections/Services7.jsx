import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

class Service7 extends Component {
  itemList = [
    {
      icon: "store_mall_directory",
      text: "Online stores"
    },
    {
      icon: "account_balance",
      text: "Finance services"
    },
    {
      icon: "home",
      text: "Industry"
    },
    {
      icon: "fastfood",
      text: "Churches"
    },
    {
      icon: "category",
      text: "Logistics"
    }
  ];
  state = {};
  render() {
    return (
      <div className="section section-service7 light-gray" id="service7">
        <div className="container">
          <Grid container alignItems="center" spacing={5}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="service7__card__description">
                <h2>Every business matters. We give you tools to succeed.</h2>
                <p>{`Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
              \nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.`}</p>

                <Button variant="contained" color="secondary" className="mt-16">
                  Try it free
                </Button>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <img src="./assets/images/illustrations/1.svg" alt="analyze" />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service7;
