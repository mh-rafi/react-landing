import React, { Component } from "react";
import Swiper from "swiper";

import { Card, CardContent, Fab, IconButton } from "@material-ui/core";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";

class Testimonial1 extends Component {
  state = {};

  swiperOptions = {
    direction: "horizontal",
    loop: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    slidesPerView: 3,
    spaceBetween: 32,
    // autoplay: {
    //   delay: 5000
    // },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".section-testimonial1__button-next",
      prevEl: ".section-testimonial1__button-prev"
    }
  };

  initializeSwiper = () => {
    let mySwiper = new Swiper(".swiper-container", this.swiperOptions);
  };

  componentDidMount() {
    this.initializeSwiper();
  }

  render() {
    return (
      <div className="section section-testimonial1" id="testimonial1">
        <div className="container">
          <div className="section__header">
            <h2>Our Works</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>

          <div className="position-relative w-100">
            {/* swiper */}
            <div className="swiper-container m-28">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5].map(card => (
                  <div className="swiper-slide p-4 pb-24" key={card}>
                    <Card className="h-100 px-24 card">
                      <CardContent className="section-testimonial1__card-content">
                        <div>
                          <img
                            className="p-0 m-0 pb-24"
                            src="/assets/images/mock-logo-2.png"
                            alt="logo"
                          />
                          <p className="m-0">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit modi voluptas vero iusto fuga quos totam
                            eius, atis magnam tempora doloribus ducimus dolorem
                            culpa animi beatae tenetur! Sapiente, quia tempora."
                          </p>
                        </div>

                        <div className="card-content__user-detail">
                          <img
                            className="p-0 m-0"
                            src="/assets/images/face-2.jpg"
                            alt="user"
                          />
                          <div className="pl-16">
                            <p className="m-0">
                              <strong>John Doe</strong>
                            </p>
                            <p className="m-0">Product Manager</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* pagination */}
              <div className="swiper-pagination position-relative mt-24" />
            </div>

            {/* navigation */}
            <Fab className="section-testimonial1__button-prev bg-white">
              <NavigateBefore />
            </Fab>
            <Fab className="section-testimonial1__button-next bg-white">
              <NavigateNext />
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial1;
