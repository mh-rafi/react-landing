import React, { Component } from 'react';
// import { Route, Switch, NavLink } from "react-router-dom";
import Intro1 from './sections/Intro1';
import TopBar from './sections/TopBar';

class Landing1 extends Component {
  state = {  }
  render() { 
    return (
      <div className="landing">
        <TopBar></TopBar>
        <Intro1></Intro1>
      </div>
    );
  }
}
 
export default Landing1;