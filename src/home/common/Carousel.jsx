import React, { Children, useEffect } from "react";
import Swiper from "swiper";

import { Fab } from "@material-ui/core";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";

const Carousel = ({
  slidesPerView = 3,
  spacing = 32,
  allowSlideNext = true,
  allowSlidePrev = true,
  delay = 5000,
  navigation = true,
  children
}) => {
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
      bulletActiveClass: "bullet-active",
      clickable: true
    },

    navigation: {
      nextEl: ".carousel__button-next",
      prevEl: ".carousel__button-prev"
    }
  };

  useEffect(() => {
    new Swiper(".swiper-container", swiperOptions);
  });

  return (
    <div className="relative w-full">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {Children.map(children, (child, index) => (
            <div className="swiper-slide p-1 pb-6">{child}</div>
          ))}
        </div>

        {/* pagination */}
        <div className="swiper-pagination relative mt-6" />
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
