import React from "react";

import { Card, CardContent, Avatar } from "@mui/material";

import Carousel from "../common/Carousel";

const Testimonial1 = () => {
  const testimonialList = [
    {
      companyLogoUrl: "./assets/images/mock-logo-1.png",
      user: {
        imageUrl: "./assets/images/face-1.jpg",
        name: "John Doe",
        designation: "Product Manager",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-2.png",
      user: {
        imageUrl: "./assets/images/face-2.jpg",
        name: "Adam Smith",
        designation: "CEO",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-3.png",
      user: {
        imageUrl: "./assets/images/face-3.jpg",
        name: "John White",
        designation: "Software Engineer",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-4.png",
      user: {
        imageUrl: "./assets/images/face-4.jpg",
        name: "Jessica Hiche",
        designation: "CEO",
      },
    },
  ];

  return (
    <div className="section" id="testimonial2">
      <div className="container">
        <div className="section__header">
          <h2>What our customers says</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            unde inventore molestias ab adipisci eius nisi placeat at.
          </p>
        </div>

        <Carousel carouselId="testimonial-2">
          {testimonialList.map((testimonial, index) => (
            <Card className="px-6 card w-full h-full" key={index}>
              <CardContent className="flex-column justify-between min-h-full">
                <div className="mb-6 mt-4">
                  <img src={testimonial.companyLogoUrl} alt="logo" />
                </div>

                <p className="mt-0 mb-16 text-16">
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit modi voluptas vero iusto fuga quos totam eius, atis
                  magnam tempora doloribus ducimus dolorem elit. Fugit modi
                  voluptas vero iusto fuga quos totam eius Sapiente, quia
                  tempora."
                </p>

                <div className="flex flex-wrap items-center">
                  <Avatar
                    className="w-48 h-48"
                    src={testimonial.user.imageUrl}
                  />
                  <div className="pl-4">
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
};

export default Testimonial1;
