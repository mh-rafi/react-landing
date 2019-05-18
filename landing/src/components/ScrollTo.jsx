import React, { Component } from "react";
import { scrollTo } from "../Utils";

class ScrollTo extends Component {
  state = {};
  render() {
    let { to, onScroll } = this.props;
    return (
      <a
        href={`#`}
        onClick={e => {
          scrollTo(to);
          if (onScroll) {
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
