import React from "react";
import "./styles/sass/app.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Landing1 from "./components/Landing1";
import Landing2 from "./components/Landing2";
import Demo from "./components/Demo";
import Theme from "./Theme";
import Landing3 from "./components/landing3";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route path="/" component={Demo} exact />
          <Route path="/landing1" component={Landing1} />
          <Route path="/landing2" component={Landing2} />
          <Route path="/landing3" component={Landing3} />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
