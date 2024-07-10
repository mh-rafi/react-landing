import React, { useState, useEffect } from "react";

import { debounce, classList } from "../../utils";

import { Icon, IconButton } from "@mui/material";

import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";

const TopBar2 = () => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

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
            <ScrollTo to="intro2" onScroll={close}>
              Home
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="portfoli2" onScroll={close}>
              Works
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="service2" onScroll={close}>
              Service
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
        <ul className="navigation">
          <li>
            <a href="/dashboard">
              <Icon className="mr-4">person</Icon> My Account
            </a>
          </li>
        </ul>
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

export default TopBar2;
