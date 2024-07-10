import React from "react";
import { Avatar, Icon, useMediaQuery } from "@mui/material";

import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { lighten } from "@mui/material";

import Carousel from "../common/Carousel";
import TwitterIcon from "../common/icons/TwitterIcon";
import FacebookIcon from "../common/icons/FacebookIcon";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: `linear-gradient(45deg, ${palette.primary.main} 0%,${palette.primary.light} 100%)`,
  },
  card: {
    maxWidth: 700,
  },
  review: {
    transform: "skewY(0.75deg)",
    transformOrigin: "bottom left",
  },
}));

const Testimonial6 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

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
    <div className={clsx("section", classes.section)} id="testimonial6">
      <div className="container text-center">
        <h1 className="font-normal text-44 mt-0 text-white mx-auto mb-16">
          What our customers say
        </h1>
        <Carousel
          bulletColor={lighten(theme.palette.primary.main, 0.54)}
          slidesPerView={1}
          spacing={0}
          navigation={false}
          paginationClass="mt-16"
          carouselId="swiper-6"
        >
          {testimonialList.map((testimonial, index) => (
            <div className={clsx("mx-auto", classes.card)} key={index}>
              <div
                className={clsx({
                  "flex justify-center": true,
                  "flex-wrap": isMobile,
                })}
              >
                <Avatar
                  className="w-108 h-108"
                  src={testimonial.user.imageUrl}
                  alt="user"
                />
                <p
                  className={clsx({
                    "text-white": true,
                    "text-left my-0 ml-8": !isMobile,
                    [classes.review]: true,
                  })}
                >
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est"
                </p>
              </div>
              <div className="flex flex-wrap mt-4 justify-center mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon
                    key={i}
                    className="mx-1"
                    fontSize="small"
                    color="secondary"
                  >
                    start
                  </Icon>
                ))}
              </div>
              <h5 className="inline-block m-0 font-medium text-white">
                {testimonial.user.name}, {testimonial.user.designation}
              </h5>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial6;
