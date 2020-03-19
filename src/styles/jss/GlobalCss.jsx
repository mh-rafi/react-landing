import React from "react";
import { positioningStyles } from "./utilities/_positionings";
import { spacingStyles } from "./utilities/_spacing";

const GlobalCss = ({ children }) => {
  positioningStyles();
  spacingStyles();

  return children;
};

export default GlobalCss;
