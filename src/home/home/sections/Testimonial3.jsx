import React, { Component } from "react";
import { Grid, Card, Avatar } from "@mui/material";

const Testimonial3 = () => {
  const cardList = [
    {
      title: "Amazed by the product",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.",
      user: {
        imageUrl: "./assets/images/face-1.jpg",
        name: "Dan Shwartz",
        position: "Software engineer",
      },
    },
    {
      title: "Very nice support",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.",
      user: {
        imageUrl: "./assets/images/face-4.jpg",
        name: "Hellen Miller",
        position: "Accountant",
      },
    },
    {
      title: "My tasks are now painless",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.",
      user: {
        imageUrl: "./assets/images/face-3.jpg",
        name: "Jane Guzmann",
        position: "CEO",
      },
    },
    {
      title: "My income has doubled",
      text:
        "Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.",
      user: {
        imageUrl: "./assets/images/face-2.jpg",
        name: "Anthony Leblanc",
        position: "ounder at Hereby",
      },
    },
  ];

  return (
    <div className="section" id="testimonial3">
      <div className="container">
        <div className="section__header">
          <h2>We Are Trusted</h2>
          <p>Access integrations and new features in a matter of seconds</p>
        </div>
        <Grid container spacing={4}>
          {cardList.map((card, index) => (
            <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
              <Card className="py-8 px-6 card">
                <h4 className="text-gray">{card.title}</h4>
                <p>{card.text}</p>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar className="h-48 w-48" src={card.user.imageUrl} />
                  </Grid>
                  <Grid item>
                    <strong>{card.user.name}</strong>
                    <p className="m-0"> {card.user.position} </p>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Testimonial3;
