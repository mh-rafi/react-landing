import React from "react";

import { Button, Icon, Card, CardContent } from "@mui/material";
import { makeStyles } from '@mui/styles';

import Carousel from "../common/Carousel";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderTop: "2px solid black",
    "& .icon": {
      fontSize: 64,
    },

    "&:hover": {
      borderTop: "2px solid rgba(var(--primary), 1)",
      "& .icon": {
        color: "rgba(var(--primary),1)",
      },
    },
  },
}));

const Services2 = () => {
  const classes = useStyles();

  const serviceList = [
    {
      icon: "dashboard",
      title: "Business Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
    },
    {
      icon: "perm_data_setting",
      title: "Custom System Integration",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
    },
    {
      icon: "storage",
      title: "Database Administration",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
    },
    {
      icon: "stay_primary_portrait",
      title: "Custom Mobile Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
    },
    {
      icon: "person",
      title: "Management Application",
      text:
        "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
    },
  ];

  return (
    <section className="section bg-light-gray" id="service2">
      <div className="container">
        <div className="section__header">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            unde inventore molestias ab adipisci eius nisi placeat at.
          </p>
        </div>

        <Carousel carouselId="services-2">
          {serviceList.map((service, index) => (
            <Card key={index} className={clsx("card h-full", classes.card)}>
              <CardContent className="flex-column justify-between min-h-full">
                <div className="flex-grow">
                  <div className="text-center mb-4">
                    <Icon className="icon">{service.icon}</Icon>
                  </div>
                  <h3 className="font-light text-24">{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className="pt-4">
                  <Button>READ MORE</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Services2;
