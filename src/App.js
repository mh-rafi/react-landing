import React from "react";
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";
import Demo from "./home/Demo";
import Landing1 from "./home/Landing1";
import Landing2 from "./home/Landing2";
import Landing3 from "./home/Landing3";
import Landing4 from "./home/Landing4";
import Landing5 from "./home/Landing5";
import Landing6 from "./home/Landing6";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalCss>
        {/* <Router basename="/react-landing"> */}
        <Router basename="/">
          <Switch>
            <Route path="/" component={Demo} exact />
            <Route path="/landing1" component={Landing1} />
            <Route path="/landing2" component={Landing2} />
            <Route path="/landing3" component={Landing3} />
            <Route path="/landing4" component={Landing4} />
            <Route path="/landing5" component={Landing5} />
            <Route path="/landing6" component={Landing6} />
            {/* <Route component={Error} /> */}
          </Switch>
        </Router>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
