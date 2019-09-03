import React, { Component } from "react";

import { Card, CardContent, Grid, Button } from "@material-ui/core";

class Testimonial2 extends Component {
  state = {};

  testimonialList = [
    {
      companyLogoUrl: "./assets/images/mock-logo-1.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
      user: {
        imageUrl: "./assets/images/face-1.jpg",
        name: "John Doe",
        designation: "Product Manager"
      }
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-2.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
      user: {
        imageUrl: "./assets/images/face-2.jpg",
        name: "Adam Smith",
        designation: "CEO"
      }
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-3.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
      user: {
        imageUrl: "./assets/images/face-3.jpg",
        name: "John White",
        designation: "Software Engineer"
      }
    }
  ];

  render() {
    return (
      <div className="section section-testimonial1" id="testimonial2">
        <div className="container">
          <div className="section__header">
            <h2>What our customers says</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>

          <Grid container spacing={3}>
            {this.testimonialList.map((testimonial, index) => (
              <Grid item md={4} sm={4} key={index}>
                <Card className="h-100 px-24 card">
                  <CardContent className="testimonial1__card-content">
                    <div className="pb-16">
                      <img
                        className="p-0 m-0 pb-24 pt-16"
                        src={testimonial.companyLogoUrl}
                        alt="logo"
                      />
                      <p className="m-0">{testimonial.comment}</p>
                    </div>

                    <div className="card__user">
                      <img
                        className="p-0 m-0"
                        src={testimonial.user.imageUrl}
                        alt="user"
                      />
                      <div className="pl-16">
                        <p className="m-0">
                          <strong>{testimonial.user.name}</strong>
                        </p>
                        <p className="m-0">{testimonial.user.designation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div className="text-center pt-40">
            <Button variant="contained" size="large" color="secondary">
              load more
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial2;
