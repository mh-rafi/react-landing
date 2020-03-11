import React, { Component } from "react";
import { scrollTo } from "utils";

class ScrollTo extends Component {
  state = {};
  appContainer = document.querySelector(".scrollable-content");
  render() {
    let { to, onScroll } = this.props;

    return (
      <a
        href={`#${to}`}
        onClick={e => {
          scrollTo(this.appContainer ? this.appContainer : window, to);
          if (onScroll) {
            e.preventDefault();
            onScroll(e);
          }
        }}
      >
        {this.props.children}
      </a>
    );
  }
}

export default ScrollTo;
