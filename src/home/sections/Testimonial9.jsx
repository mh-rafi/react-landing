import React from "react";
import { Avatar, Icon, useMediaQuery } from "@mui/material";
import { makeStyles } from '@mui/styles';
// import {  lighten } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Carousel from "../common/Carousel";
import TwitterIcon from "../common/icons/TwitterIcon";
import FacebookIcon from "../common/icons/FacebookIcon";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    maxWidth: 700,
    "& .image-border": {
      border: "3px solid rgba(var(--primary),0.3)",
      background: palette.primary.contrastText,
    },

    "&:after": {
      content: '" "',
      position: "absolute",
      display: "block",
      top: 0,
      bottom: 0,
      left: "calc(50% - 120px)",
      right: "calc(50% - 175px)",
      background: "rgba(var(--primary),0.15)",
      clipPath: "polygon(35% 0%, 100% 0%, 65% 100%, 0% 100%)",
      zIndex: -1,
      [theme.breakpoints.down("xs")]: {
        right: 0,
        left: 0,
        clipPath: "none",
      },
    },
  },
}));

const Testimonial9 = () => {
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
    <div className="section" id="testimonial9">
      <div className="container text-center">
        <h1 className="font-normal text-44 mt-0 mx-auto mb-16">Event Review</h1>
        <Carousel
          bulletColor={theme.palette.primary.main}
          slidesPerView={1}
          spacing={0}
          navigation={false}
          paginationClass="mt-16"
          carouselId="carousel-9"
        >
          {testimonialList.map((testimonial, index) => (
            <div className={clsx("mx-auto pt-8", classes.card)} key={index}>
              <div
                className={clsx({
                  "flex justify-center items-center": true,
                  "flex-wrap": isMobile,
                })}
              >
                <Avatar
                  className="w-108 h-108 image-border p-3px"
                  src={testimonial.user.imageUrl}
                  alt="user"
                />
                <p
                  className={clsx({
                    "text-left my-0 ml-8": !isMobile,
                  })}
                >
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="flex flex-wrap mt-4 justify-center mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icon
                    key={i}
                    className="mx-1"
                    fontSize="small"
                    color="primary"
                  >
                    star
                  </Icon>
                ))}
              </div>
              <h5 className="inline-block m-0 font-medium">
                {testimonial.user.name}, {testimonial.user.designation}
              </h5>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial9;
