import React, { Component } from "react";
import { Tabs, Tab, Grid, Icon } from "@material-ui/core";

class Service5 extends Component {
  state = {
    value: 0
  };

  featureList = [
    {
      imageUrl: "./assets/images/screenshots/login.jpg",
      title: "Clean & minimal login UI",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."
    },
    {
      imageUrl: "./assets/images/screenshots/dashboard.jpg",
      title: "Minimal & smart dashboard",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."
    },
    {
      imageUrl: "./assets/images/screenshots/calendar.jpg",
      title: "Manage your tasks & project efficiently",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."
    }
  ];

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    let feature = this.featureList[value];

    return (
      <div className="section section-service5 light-gray" id="service5">
        <div className="container">
          {/* tab view */}
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
            scrollButtons="auto"
          >
            <Tab label="Login" />
            <Tab label="Dashboard" />
            <Tab label="Calendar" />
          </Tabs>

          <Grid
            container
            spacing={4}
            className="mt-16 fade-in"
            alignItems="center"
          >
            <Grid item lg={5} md={7} sm={12} xs={12}>
              <div className="service5__image-holder">
                <img
                  className="elevation-3"
                  src={feature.imageUrl}
                  alt="building"
                />
              </div>
            </Grid>
            <Grid item lg={5} md={7} sm={12} xs={12}>
              <div className="service5__details">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>

                <a className="text-brand" href="#details">
                  View details
                  <Icon className="service5__link-icon">navigate_next</Icon>
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Service5;
