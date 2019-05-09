import React, { Component, Children } from "react";
import Swiper from "swiper";

import { Fab } from "@material-ui/core";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";

class Carousel extends Component {
  swiperOptions = {
    direction: "horizontal",
    allowSlideNext: true,
    allowSlidePrev: true,
    slidesPerView: 3,
    spaceBetween: 32,

    autoplay: {
      delay: 5000,
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

  componentDidMount() {
    new Swiper(".swiper-container", this.swiperOptions);
  }

  render() {
    let { children } = this.props;

    return (
      <div className="relative w-100">
        <div className="swiper-container mx-28">
          <div className="swiper-wrapper">
            {Children.map(children, (child, index) => (
              <div className="swiper-slide p-4 pb-24">{child}</div>
            ))}
          </div>

          {/* pagination */}
          <div className="swiper-pagination relative mt-24" />
        </div>

        {/* navigation */}
        <Fab className="carousel__button-prev bg-white">
          <NavigateBefore />
        </Fab>
        <Fab className="carousel__button-next bg-white">
          <NavigateNext />
        </Fab>
      </div>
    );
  }
}

export default Carousel;
