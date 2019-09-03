import React, { Component } from "react";
import { Grid, Card, Icon, Button } from "@material-ui/core";

class Service4 extends Component {
  state = {};
  cardList = [
    {
      icon: "alarm",
      title: "Choose Technology",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."
    },
    {
      icon: "settings",
      title: "Setup Workflows",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."
    },
    {
      icon: "dvr",
      title: "Learn from Data",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."
    },
    {
      icon: "multiline_chart",
      title: "Scale Up",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte."
    }
  ];
  render() {
    return (
      <div className="section section-service4" id="service4">
        <div className="container">
          <div className="section__header">
            <h2>Integrate Your Process</h2>
            <p>Access integrations and new features in a matter of seconds</p>
          </div>
          <div className="text-center">
            <Grid container spacing={5}>
              {this.cardList.map((card, index) => (
                <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                  <Card className="service4__card card">
                    <Icon className="service4__card__icon">{card.icon}</Icon>
                    <div className="service4__card__description">
                      <h3>{card.title}</h3>
                      <p className="m-0">{card.text}</p>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Button
              className="mt-32"
              size="large"
              variant="contained"
              color="secondary"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Service4;
