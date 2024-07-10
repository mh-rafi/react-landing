import React, { useState, useEffect } from "react";
import { debounce, classList } from "../../utils";
import { Icon, IconButton, useMediaQuery, Fab } from "@mui/material";

import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";

import { useTheme } from '@mui/material/styles';

const TopBar3 = (props) => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let scrollableElement = document.querySelector(".scrollable-content");
  if (!scrollableElement) scrollableElement = window;

  let handleScrollRef = null;
  let toggleIcon = isClosed ? "menu" : "close";

  const handleScroll = () => {
    return debounce(({ target: { scrollTop } }) => {
      let isCurrentTop = scrollTop < 100 || scrollableElement.scrollY < 100;
      setIsTop(isCurrentTop);
    }, 20);
  };

  handleScrollRef = handleScroll();

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  return (
    <section
      className={classList({
        header: true,
        "bg-transparent": isTop && !isMobile,
        "header-fixed": !isTop,
        closed: isClosed,
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="./assets/images/react-logo.svg" alt="" />
        </div>
        <ul className="navigation">
          <li>
            <NavLink to="/demos">Demos</NavLink>
          </li>
          <li>
            <ScrollTo to="intro3" onScroll={close}>
              Home
            </ScrollTo>
          </li>

          <li>
            <ScrollTo to="service3" onScroll={close}>
              Service
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="service5" onScroll={close}>
              Features
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="pricing1" onScroll={close}>
              Pricing
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="contact1" onScroll={close}>
              Contact
            </ScrollTo>
          </li>
        </ul>
        <div className="m-auto" />
        <Fab
          variant="extended"
          size="medium"
          color="secondary"
          aria-label="Buy"
          className=""
        >
          <Icon className="mr-4">flight_takeoff</Icon>
          Sign Up
        </Fab>
        <IconButton
          className="header__toggle"
          onClick={() => {
            setIsClosed(!isClosed);
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar3;
