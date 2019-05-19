import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Icon } from "@material-ui/core";
import Carousel from "../common/Carousel";

class Services2 extends Component {
  state = {};

  serviceList = [
    {
      icon: "dashboard",
      title: "Business Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: "perm_data_setting",
      title: "Custom System Integration",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: "storage",
      title: "Database Administration",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: "stay_primary_portrait",
      title: "Custom Mobile Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    },
    {
      icon: "person",
      title: "Management Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."
    }
  ];

  render() {
    return (
      <section className="section section-service1 light-gray" id="service2">
        <div className="container">
          <div className="section__header">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>

          <Carousel>
            {this.serviceList.map((service, index) => (
              <Card
                className="service1__card service__card px-24 card"
                key={index}
              >
                <CardContent className="service1__card__content">
                  <div>
                    <div className="text-center">
                      <Icon className="card__icon-64">{service.icon}</Icon>
                    </div>
                    <h3 className="font-light">{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <div className="pt-16">
                    <Button>READ MORE</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }
}

export default Services2;
