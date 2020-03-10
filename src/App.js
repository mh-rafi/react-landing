import React from "react";
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Landing1 from "./home/Landing1";
import Landing2 from "./home/Landing2";
import Landing3 from "./home/Landing3";
import Demo from "./home/Demo";
import Theme from "./theme";
import CssVars from "./home/common/CssVars";
import Landing4 from "./home/Landing4";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssVars>
        {/* <Router basename="/react-landing"> */}
        <Router basename="/">
          <Switch>
            <Route path="/" component={Demo} exact />
            <Route path="/landing1" component={Landing1} />
            <Route path="/landing2" component={Landing2} />
            <Route path="/landing3" component={Landing3} />
            <Route path="/landing4" component={Landing4} />
            {/* <Route component={Error} /> */}
          </Switch>
        </Router>
      </CssVars>
    </MuiThemeProvider>
  );
}

export default App;
