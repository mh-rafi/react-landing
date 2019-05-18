import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Fab from "@material-ui/core/Fab";

class CallToAction2 extends Component {
  state = {};
  render() {
    return (
      <section className="section section-cta2 light-gray" id="cta2">
        <div className="container text-center">
          <h2 className="mb-32">Subscribe & Request a demo</h2>
          <div className="subscribe-input">
            <input
              className="email-input"
              type="text"
              placeholder="Your email"
            />
            <Fab
              variant="extended"
              size="large"
              color="primary"
              aria-label="Buy"
              className="btn-action m-8"
            >
              <Icon className="mr-16">flight_takeoff</Icon>
              Subscribe
            </Fab>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToAction2;
