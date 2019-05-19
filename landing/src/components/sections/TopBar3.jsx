import React, { Component } from "react";
import { debounce, classList } from "../../Utils";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";

class TopBar3 extends Component {
  state = {
    isTop: true,
    isClosed: true
  };
  handleScrollRef;

  componentDidMount() {
    if (window) {
      this.handleScrollRef = this.handleScroll();
      window.addEventListener("scroll", this.handleScrollRef);
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener("scroll", this.handleScrollRef);
    }
  }

  handleScroll() {
    return debounce(() => {
      if (window) {
        let isTop = window.scrollY < 100;
        if (isTop !== this.state.isTop) {
          this.setState({ isTop });
        }
      }
    }, 20);
  }

  close = () => {
    this.setState({ isClosed: true });
  };
  render() {
    let toggleIcon = this.state.isClosed ? "menu" : "close";
    return (
      <section
        className={classList({
          header: true,
          "header-fixed": !this.state.isTop,
          closed: this.state.isClosed
        })}
      >
        <div className="container header-container">
          <div className="brand">
            <img src="/assets/images/logo-full.png" alt="" />
          </div>
          <ul className="navigation">
            <li>
              <NavLink to="/">Demos</NavLink>
            </li>
            <li>
              <ScrollTo to="intro3" onScroll={this.close}>
                Home
              </ScrollTo>
            </li>
            
            <li>
              <ScrollTo to="service3" onScroll={this.close}>
                Service
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="service5" onScroll={this.close}>
                Features
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="pricing1" onScroll={this.close}>
                Pricing
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="contact1" onScroll={this.close}>
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
                  <Icon className="mr-16">flight_takeoff</Icon>
                  Sign Up
                </Fab>
          <IconButton
            className="header__toggle"
            onClick={() => {
              this.setState({ isClosed: !this.state.isClosed });
            }}
          >
            <Icon>{toggleIcon}</Icon>
          </IconButton>
        </div>
      </section>
    );
  }
}

export default TopBar3;
