import React, { Component } from "react";
import { debounce } from "../../Utils";

class TopBar extends Component {
  state = {
    isTop: true
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
        if (isTop != this.state.isTop) {
          this.setState({ isTop });
        }
      }
      // console.log("on scroll", this.state.isTop, window.scrollY);
    }, 20);
  }
  render() {
    return (
      <section className={this.state.isTop ? "header" : "header header-fixed"}>
        <div className="container header-container">
          <div className="brand">
            <img src="/assets/images/logo-full.png" alt=""/>
          </div>
          <div className="navigation"></div>
        </div>
      </section>
    );
  }
}

export default TopBar;
