import React, { Component } from "react";
import { Tabs, Tab, Grid, Icon } from "@material-ui/core";

class Service5 extends Component {
  state = {
    value: 0
  };

  featureList = [
    {
      imageUrl: "/assets/images/sq-1.jpg",
      title: "Create an incredible user and customer experience",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."
    },
    {
      imageUrl: "/assets/images/sq-9.jpg",
      title: "Create invoices seamlessly and get paid incredibly fast",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.\n\nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per."
    },
    {
      imageUrl: "/assets/images/sq-13.jpg",
      title: "Get insight on your data and take managed decisions",
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
      <div className="section section-service5">
        <div className="container">
          <h2>Key features</h2>
          <p>Access integrations and new features in a matter of seconds</p>

          {/* tab view */}
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
            scrollButtons="auto"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>

          <Grid
            container
            spacing={32}
            className="mt-16 fade-in"
            alignItems="center"
          >
            <Grid item lg={5} md={7} sm={12} xs={12}>
              <div className="service5__image-holder">
                <img src={feature.imageUrl} alt="building" />
              </div>
            </Grid>
            <Grid item lg={5} md={7} sm={12} xs={12}>
              <div className="service5__details">
                <h3 className="text-brand">{feature.title}</h3>
                <p>{feature.text}</p>

                <a className="text-brand" href="#">
                  Learn more about reporting{" "}
                  <Icon className="service5__link-icon">navigate_next</Icon>
                </a>
              </div>
            </Grid>
          </Grid>

          {/* {value === 0 && <div>Item One</div>}
          {value === 1 && <div>Item Two</div>}
          {value === 2 && <div>Item Three</div>}
          {value === 3 && <div>Item Four</div>}
          {value === 4 && <div>Item Five</div>}
          {value === 5 && <div>Item Six</div>} */}
        </div>
      </div>
    );
  }
}

export default Service5;
