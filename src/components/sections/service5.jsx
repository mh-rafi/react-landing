import React, { Component } from "react";
import {
  Tabs,
  Tab,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";

class Service5 extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="section section-service5">
        <div className="container">
          <h2>Key features</h2>
          <p>Access integrations and new features in a matter of seconds</p>

          {/* tab view */}
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="standard"
            scrollButtons="auto"
            centered
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>

          {value === 0 && <div>Item One</div>}
          {value === 1 && <div>Item Two</div>}
          {value === 2 && <div>Item Three</div>}
          {value === 3 && <div>Item Four</div>}
          {value === 4 && <div>Item Five</div>}
          {value === 5 && <div>Item Six</div>}

          {/* button group */}
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
          >
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
          </BottomNavigation>
        </div>
      </div>
    );
  }
}

export default Service5;
