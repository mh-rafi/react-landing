import React, { Component } from "react";

import { Card, CardContent } from "@material-ui/core";
import Carousel from "../common/Carousel";

class Testimonial1 extends Component {
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
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-4.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Fugit modi voluptas vero iusto fuga quos totam
      eius, atis magnam tempora doloribus ducimus dolorem
      culpa animi beatae tenetur! Sapiente, quia tempora."`,
      user: {
        imageUrl: "./assets/images/face-4.jpg",
        name: "Jessica Hiche",
        designation: "CEO"
      }
    }
  ];

  render() {
    return (
      <div className="section section-testimonial1" id="testimonial1">
        <div className="container">
          <div className="section__header">
            <h2>What our customers says</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>

          <Carousel>
            {this.testimonialList.map((testimonial, index) => (
              <Card className="h-100 px-24 card" key={index}>
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
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Testimonial1;
