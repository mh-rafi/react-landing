import "swiper/dist/css/swiper.min.css";
import React, { useEffect } from "react";
import Swiper from "swiper";
import PropTypes from "prop-types";

import { Fab } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { useTheme } from "@mui/system";

import clsx from "clsx";

const Carousel = (props) => {
  const theme = useTheme();
  const {
    slidesPerView = 3,
    spacing = 32,
    allowSlideNext = true,
    allowSlidePrev = true,
    delay = 5000,
    navigation = true,
    bulletColor = theme.palette.primary.main,
    paginationClass = "mt-6",
    carouselId = "swiper-1",
    children,
  } = props;

  const bulletClass = {
    opacity: 1,
    background: bulletColor,
    transition: "transform 400ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
    width: 8,
    height: 8,
    display: "inline-block",
    borderRadius: "100%",
    cursor: "pointer",
    margin: "0 4px",
  };

  const bulletActiveClass = {
    transform: "scale(1.8)",
  };

  const navButton = {
    position: "absolute",
    top: "50%",
    transform: "translateY(calc(-50% - 50px))",
    zIndex: 1,
  };

  const prevButton = {
    ...navButton,
    left: 0,
    marginLeft: "-24px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  };

  const nextButton = {
    ...navButton,
    right: 0,
    marginRight: "-24px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  };

  const swiperOptions = {
    direction: "horizontal",
    allowSlideNext,
    allowSlidePrev,
    slidesPerView,
    spaceBetween: spacing,
    autoplay: {
      delay,
      disableOnInteraction: false,
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass: "swiper-pagination-bullet",
      bulletActiveClass: "swiper-pagination-bullet-active",
      clickable: true,
    },
    navigation: {
      nextEl: ".carousel__button-next",
      prevEl: ".carousel__button-prev",
    },
  };

  useEffect(() => {
    new Swiper(`#${carouselId}`, swiperOptions);
  }, [swiperOptions, carouselId]);

  return (
    <div className="relative w-full">
      <div className="swiper-container" id={carouselId}>
        <div className="swiper-wrapper">
          {React.Children.map(children, (child) => (
            <div className="swiper-slide h-auto p-1 pb-6">{child}</div>
          ))}
        </div>

        <div className={clsx("swiper-pagination relative", paginationClass)} />
      </div>

      {navigation && (
        <Fab className={clsx("carousel__button-prev bg-white", prevButton)}>
          <NavigateBefore />
        </Fab>
      )}
      {navigation && (
        <Fab className={clsx("carousel__button-next bg-white", nextButton)}>
          <NavigateNext />
        </Fab>
      )}
    </div>
  );
};

Carousel.propTypes = {
  carouselId: PropTypes.string.isRequired,
};

export default Carousel;
