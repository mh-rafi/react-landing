import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";
import Demo from "./home/Demo";
import Landing1 from "./home/Landing1";
import Landing2 from "./home/Landing2";
import Landing3 from "./home/Landing3";
import Landing4 from "./home/Landing4";
import Landing5 from "./home/Landing5";
import Landing6 from "./home/Landing6";
import Landing7 from "./home/Landing7";
import Landing8 from "./home/Landing8";
import Landing9 from "./home/Landing9";
import Landing10 from "./home/Landing10";
import Landing11 from "./home/Landing11";
import Landing12 from "./home/Landing12";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
          <Router basename="/">
            <Switch>
              <Route path="/demos" component={Demo} exact />
              <Route path="/landing1" component={Landing1} />
              <Route path="/landing2" component={Landing2} />
              <Route path="/landing3" component={Landing3} />
              <Route path="/landing4" component={Landing4} />
              <Route path="/landing5" component={Landing5} />
              <Route path="/landing6" component={Landing6} />
              <Route path="/landing7" component={Landing7} />
              <Route path="/landing8" component={Landing8} />
              <Route path="/landing9" component={Landing9} />
              <Route path="/landing10" component={Landing10} />
              <Route path="/landing11" component={Landing11} />
              <Route path="/landing12" component={Landing12} />
              <Redirect path="/" exact to="demos" />
              {/* <Route component={Error} /> */}
            </Switch>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </MuiThemeProvider>
  );
}

export default App;
