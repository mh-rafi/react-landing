import "swiper/dist/css/swiper.min.css";
import React, { Children, useEffect } from "react";
import Swiper from "swiper";
import PropTypes from "prop-types";
import { Fab } from "@material-ui/core";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import clsx from "clsx";

let globalBulletColor = "red";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  bulletClass: {
    opacity: 1,
    background: globalBulletColor,
    transition: "transform 400ms cubic-bezier(0.17, 0.67, 0.83, 0.67)",
    width: 8,
    height: 8,
    display: "inline-block",
    borderRadius: "100%",
    cursor: "pointer",
    margin: "0 4px",
  },
  bulletActiveClass: {
    transform: "scale(1.8)",
  },
  prevButton: {
    left: 0,
    marginLeft: "-24px !important",
  },
  nextButton: {
    right: 0,
    marginRight: "-24px !important",
  },
  navButton: {
    position: "absolute !important",
    top: "50%",
    transform: "translateY(calc(-50% - 50px))",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Carousel = (props) => {
  let theme = useTheme();
  let {
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

  globalBulletColor = bulletColor;

  let {
    bulletClass,
    bulletActiveClass,
    nextButton,
    prevButton,
    navButton,
  } = useStyles();

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
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 2,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass,
      bulletActiveClass,
      clickable: true,
    },

    navigation: {
      nextEl: ".carousel__button-next",
      prevEl: ".carousel__button-prev",
    },
  };

  useEffect(() => {
    new Swiper(`#${carouselId}`, swiperOptions);
  }, [swiperOptions]);

  return (
    <div className="relative w-full">
      <div className="swiper-container" id={carouselId}>
        <div className="swiper-wrapper">
          {Children.map(children, (child, index) => (
            <div className="swiper-slide h-auto p-1 pb-6">{child}</div>
          ))}
        </div>

        {/* pagination */}
        <div className={clsx("swiper-pagination relative", paginationClass)} />
      </div>

      {/* navigation */}
      {navigation && (
        <Fab
          className={clsx(
            "carousel__button-prev bg-white",
            prevButton,
            navButton
          )}
        >
          <NavigateBefore />
        </Fab>
      )}
      {navigation && (
        <Fab
          className={clsx(
            "carousel__button-next bg-white",
            nextButton,
            navButton
          )}
        >
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
