import React from "react";
import { Theme } from "./theme";
import GlobalCss from "./styles/jss/GlobalCss";
import Scrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
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
            <Route path="/" element={<Navigate to="demos" />} />
          </Routes>
        </Scrollbar>
      </GlobalCss>
    </ThemeProvider>
  );
}

export default App;
