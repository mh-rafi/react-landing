import React, { Component } from "react";
import { Grid, Card, Icon, Button } from "@material-ui/core";

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
      <div className="section section-service7">
        <div className="container">
          <h2>We got you covered</h2>
          <p>Every business matters, learn how we handle it.</p>

          <Grid container alignItems="center" spacing="40">
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="service7__card__description">
                <h3 className="text-brand">
                  Every business matters. We give you tools to succeed.
                </h3>
                <p>{`Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
              \nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.`}</p>

                <Button variant="contained" color="secondary" className="mt-16">
                  Try it free
                </Button>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Card className="service7__card card p-32">
                {this.itemList.map((item, index) => (
                  <Grid container alignItems="center" spacing={32} key={index}>
                    <Grid item>
                      <Icon className="service7__card__icon">{item.icon}</Icon>
                    </Grid>
                    <Grid item>{item.text}</Grid>
                  </Grid>
                ))}
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service7;
