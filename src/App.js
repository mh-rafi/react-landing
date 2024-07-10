import React from "react";
import {
  Route,
  Routes,
  HashRouter as Router,
  Navigate
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";

import { typographyStyles } from './styles/jss/utilities/_typography'
import { animationStyles } from './styles/jss/utilities/_animations'
import { borderStyles } from './styles/jss/utilities/_border'
import { commonStyles } from './styles/jss/utilities/_common'
import { colorStyles } from './styles/jss/utilities/_color'
import { landingStyles } from './styles/jss/utilities/_landing'
import { positioningStyles } from './styles/jss/utilities/_positionings'
import { shadowStyles } from './styles/jss/utilities/_shadows'
import { spacingStyles } from './styles/jss/utilities/_spacing'
import { variableStyles } from './styles/jss/_variables'

import "react-perfect-scrollbar/dist/css/styles.css";
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
    <ThemeProvider theme={Theme}>
      {variableStyles()}
      {typographyStyles}
      {animationStyles}
      {borderStyles}
      {commonStyles}
      {colorStyles}
      {landingStyles}
      {positioningStyles}
      {shadowStyles}
      {spacingStyles}
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
          <Router basename="/">
            <Routes>
              <Route path="/demos" element={<Demo />} />
              <Route path="/landing1" element={<Landing1 />} />
              <Route path="/landing2" element={<Landing2 />} />
              <Route path="/landing3" element={<Landing3 />} />
              <Route path="/landing4" element={<Landing4 />} />
              <Route path="/landing5" element={<Landing5 />} />
              <Route path="/landing6" element={<Landing6 />} />
              <Route path="/landing7" element={<Landing7 />} />
              <Route path="/landing8" element={<Landing8 />} />
              <Route path="/landing9" element={<Landing9 />} />
              <Route path="/landing10" element={<Landing10 />} />
              <Route path="/landing11" element={<Landing11 />} />
              <Route path="/landing12" element={<Landing12 />} />
              <Route path="/" element={<Navigate to="/demos" />} />
              {/* <Route component={Error} /> */}
            </Routes>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </ThemeProvider>
  );
}

export default App;
