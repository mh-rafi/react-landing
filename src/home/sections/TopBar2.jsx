import React, { useState, useEffect } from "react";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";

const TopBar2 = () => {
  let handleScrollRef;
  let scrollableElement;

  const [state, setState] = useState({
    isTop: true,
    isClosed: true,
  });

  useEffect(() => {
    scrollableElement = document.querySelector(".scrollable-content");
    if (!scrollableElement) scrollableElement = window;
    if (scrollableElement) {
      handleScrollRef = handleScroll();
      scrollableElement.addEventListener("scroll", handleScrollRef);
    }
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScrollRef);
      }
    };
  }, [scrollableElement, handleScrollRef]);

  const handleScroll = () => {
    return debounce(() => {
      if (scrollableElement) {
        let isTop = scrollableElement.scrollY < 100;
        setState({ ...state, isTop });
      }
    }, 20);
  };

  const close = () => {
    setState({ isClosed: true });
  };

  let toggleIcon = state.isClosed ? "menu" : "close";

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": !state.isTop,
        closed: state.isClosed,
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="./assets/images/react-logo.svg" alt="" />
        </div>
        <ul className="navigation">
          <li>
            <NavLink to="/">Demos</NavLink>
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
            setState({ isClosed: !state.isClosed });
          }}
        >
          <Icon>{toggleIcon}</Icon>
        </IconButton>
      </div>
    </section>
  );
};

export default TopBar2;
