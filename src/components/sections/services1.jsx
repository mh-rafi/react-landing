import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { Button, Icon } from "@material-ui/core";
import Dashboard from "@material-ui/icons/Dashboard";
import PermDataSetting from "@material-ui/icons/PermDataSetting";
import Storage from "@material-ui/icons/Storage";
import StayPrimaryPortrait from "@material-ui/icons/StayPrimaryPortrait";

class Services1 extends Component {
  state = {};

  serviceList = [
    {
      icon: <Dashboard fontSize="inherit" />,
      title: "Business Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: <PermDataSetting fontSize="inherit" />,
      title: "Custom System Integration",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: <Storage fontSize="inherit" />,
      title: "Database Administration",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: <StayPrimaryPortrait fontSize="inherit" />,
      title: "Custom Mobile Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    }
  ];

  render() {
    return (
      <section className="section section-service1 light-gray">
        <div className="container">
          <div className="section__header">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>

          <Grid container spacing={24} alignContent="stretch">
            {this.serviceList.map(service => (
              <Grid item md={3} sm={6} key={service.title}>
                <Card className="service1__card card">
                  <CardContent className="service1__card__content">
                    <div>
                      <div className="text-center">
                        <Icon className="service1__card__icon">
                          {service.icon}
                        </Icon>
                      </div>
                      <h3 className="font-light">{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                    <div className="pt-16">
                      <Button>READ MORE</Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    );
  }
}

export default Services1;
