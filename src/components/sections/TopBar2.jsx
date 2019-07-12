import React, { Component } from "react";
import { debounce, classList } from "../../Utils";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import ScrollTo from "../common/ScrollTo";

class TopBar2 extends Component {
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
            <img src="./assets/images/logo-full.png" alt="" />
          </div>
          <ul className="navigation">
            <li>
              <NavLink to="/">Demos</NavLink>
            </li>
            <li>
              <ScrollTo to="intro2" onScroll={this.close}>
                Home
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="portfoli2" onScroll={this.close}>
                Works
              </ScrollTo>
            </li>
            <li>
              <ScrollTo to="service2" onScroll={this.close}>
                Service
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
          <ul className="navigation">
            <li>
              <a href="/dashboard">
                <Icon className="mr-16">person</Icon> My Account
              </a>
            </li>
          </ul>
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

export default TopBar2;
