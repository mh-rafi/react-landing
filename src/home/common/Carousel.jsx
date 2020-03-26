import React, { Children, useEffect } from "react";
import Swiper from "swiper";

import { Fab } from "@material-ui/core";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
    margin: "0 4px"
  },
  bulletActiveClass: {
    transform: "scale(1.8)"
  }
}));

const Carousel = props => {
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
    children
  } = props;

  globalBulletColor = bulletColor;

  let { bulletClass, bulletActiveClass } = useStyles();

  console.log(bulletClass);

  const swiperOptions = {
    direction: "horizontal",
    allowSlideNext,
    allowSlidePrev,
    slidesPerView,
    spaceBetween: spacing,

    autoplay: {
      delay,
      disableOnInteraction: false
    },

    breakpoints: {
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is <= 640px
      768: {
        slidesPerView: 2
      }
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass,
      bulletActiveClass,
      clickable: true
    },

    navigation: {
      nextEl: ".carousel__button-next",
      prevEl: ".carousel__button-prev"
    }
  };

  useEffect(() => {
    new Swiper(".swiper-container", swiperOptions);
  }, [swiperOptions]);

  return (
    <div className="relative w-full">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {Children.map(children, (child, index) => (
            <div className="swiper-slide p-1 pb-6">{child}</div>
          ))}
        </div>

        {/* pagination */}
        <div className={`swiper-pagination relative ${paginationClass}`} />
      </div>

      {/* navigation */}
      {navigation && (
        <Fab className="carousel__button-prev bg-white">
          <NavigateBefore />
        </Fab>
      )}
      {navigation && (
        <Fab className="carousel__button-next bg-white">
          <NavigateNext />
        </Fab>
      )}
    </div>
  );
};

export default Carousel;
