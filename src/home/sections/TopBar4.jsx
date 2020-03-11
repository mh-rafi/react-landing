import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { debounce, classList } from "utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  className: props => ({
    //   color: theme
  })
}));

const TopBar4 = props => {
  const [isTop, setIsTop] = useState(true);
  const [isClosed, setIsClosed] = useState(true);

  let scrollableElement = useRef(null);
  let handleScrollRef = useRef(null);

  let toggleIcon = isClosed ? "menu" : "close";

  const classes = useStyles(props);

  const setTopBar = () => {
    if (scrollableElement) {
      let isCurrentTop = scrollableElement.scrollY < 100;
      if (isCurrentTop !== isTop) {
        setIsTop({ isTop: isCurrentTop });
      }
    }
  };

  const handleScroll = () => {
    return debounce(() => {
      console.log("scrolling");

      setTopBar();
    }, 20);
  };

  const close = () => {
    setIsClosed(false);
  };

  useEffect(() => {
    scrollableElement.current = document.querySelector(".scrollable-content");

    if (!scrollableElement.current) scrollableElement.current = window;

    if (scrollableElement.current) {
      handleScrollRef.current = handleScroll();
      scrollableElement.current.addEventListener(
        "scroll",
        handleScrollRef.current
      );
    }

    return () => {
      if (scrollableElement.current) {
        scrollableElement.current.removeEventListener(
          "scroll",
          handleScrollRef.current
        );
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    setTopBar();
  }, []);

  return (
    <section
      className={classList({
        header: true,
        "header-fixed": isTop,
        closed: isClosed
      })}
    >
      <div className="container header-container">
        <div className="brand">
          <img src="./assets/images/logo-full.png" alt="" />
        </div>
        <ul className="navigation">
          <li>
            <NavLink to="/">Demos</NavLink>
          </li>
          <li>
            <ScrollTo to="intro1" onScroll={close}>
              Home
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="portfolio1" onScroll={close}>
              Works
            </ScrollTo>
          </li>
          <li>
            <ScrollTo to="service1" onScroll={close}>
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
        <div className="navigation flex">
          <NavLink to="/login" className="mr-1">
            <Button
              className="box-shadow-none px-8 rounded-l hover-bg-primary"
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
            <Button
              className="box-shadow-none px-8 rounded-r hover-bg-primary"
              variant="outlined"
              color="primary"
            >
              Signup
            </Button>
          </NavLink>
        </div>
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

export default TopBar4;
