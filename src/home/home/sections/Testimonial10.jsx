import React from "react";

import { Card, Avatar, Divider, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {  lighten } from "@mui/material";
import Carousel from "../common/Carousel";
import TwitterIcon from "../common/icons/TwitterIcon";
import FacebookIcon from "../common/icons/FacebookIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    border: `1px solid ${palette.primary.contrastText}`,
    "& [class^='MuiAvatar-root']": {
      border: `1px solid ${palette.primary.main}`,
      background: palette.primary.contrastText,
    },
    "&:hover": {
      border: `1px solid ${palette.primary.main}`,
      "& [class^='MuiAvatar-']": {
        background: lighten(palette.primary.main, 0.75),
      },
      "& [class^='MuiSvgIcon-']": {
        color: `${palette.primary.main} !important`,
      },
    },
  },
}));

const Testimonial10 = () => {
  const classes = useStyles();

  const testimonialList = [
    {
      companyLogoUrl: "./assets/images/mock-logo-1.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: TwitterIcon,
      user: {
        imageUrl: "./assets/images/face-1.png",
        name: "John Doe",
        designation: "Product Manager",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-2.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: FacebookIcon,
      user: {
        imageUrl: "./assets/images/face-2.png",
        name: "Adam Smith",
        designation: "CEO",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-3.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: TwitterIcon,
      user: {
        imageUrl: "./assets/images/face-3.png",
        name: "John White",
        designation: "Software Engineer",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-2.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: FacebookIcon,
      user: {
        imageUrl: "./assets/images/face-2.png",
        name: "Adam Smith",
        designation: "CEO",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-3.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: TwitterIcon,
      user: {
        imageUrl: "./assets/images/face-3.png",
        name: "John White",
        designation: "Software Engineer",
      },
    },
    {
      companyLogoUrl: "./assets/images/mock-logo-4.png",
      comment: `"Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit modi voluptas vero iusto fuga quos totam
          eius, atis magnam tempora doloribus ducimus dolorem
          culpa animi beatae tenetur! Sapiente, quia tempora."`,
      icon: FacebookIcon,
      user: {
        imageUrl: "./assets/images/face-4.png",
        name: "Jessica Hiche",
        designation: "CEO",
      },
    },
  ];

  return (
    <div className="section" id="testimonial10">
      <div className="container">
        <div className="mb-16 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">
            What our Customers Have to Say
          </h1>
          <p className="max-w-400 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <Carousel
          carouselId="swiper-10"
          paginationClass="mt-16"
          slidesPerView={4}
          spacing={16}
          navigation={false}
        >
          {testimonialList.map((testimonial, index) => (
            <div className="pt-13" key={index}>
              <Card
                className={
                  classes.card +
                  " h-full card px-6 overflow-visible border-radius-8"
                }
                elevation={3}
              >
                <Avatar
                  className="w-108 h-108 mt--13 inline-block p-1"
                  src={testimonial.user.imageUrl}
                  alt="user"
                />
                <p className="my-6">
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore"
                </p>

                <Divider className="mb-4"></Divider>

                <div className="flex flex-wrap mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} fontSize="small" color="primary">
                      start
                    </Icon>
                  ))}
                </div>

                <div className="flex flex-wrap justify-between items-end pb-4">
                  <div>
                    <h5 className="m-0 font-medium">{testimonial.user.name}</h5>
                    <small className="text-muted">
                      {testimonial.user.designation}
                    </small>
                  </div>
                  <testimonial.icon
                    className="mb-5px text-muted text-14 cursor-pointer"
                    fontSize="small"
                  />
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial10;
