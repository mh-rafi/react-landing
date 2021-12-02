import React from "react";
import { styled } from "@mui/material";
import { variableStyles } from "./_variables";
import { positioningStyles } from "./utilities/_positionings";
import { spacingStyles } from "./utilities/_spacing";
import { borderStyles } from "./utilities/_border";
import { shadowStyles } from "./utilities/_shadows";
import { colorStyles } from "./utilities/_color";
import { typographyStyles } from "./utilities/_typography";
import { commonStyles } from "./utilities/_common";
import { animationStyles } from "./utilities/_animations";
import { landingStyles } from "./utilities/_landing";

const GlobalStyle = styled("html")(({ theme }) => ({
  ...variableStyles(theme),
  ...positioningStyles(theme),
  ...spacingStyles(theme),
  ...borderStyles(theme),
  ...shadowStyles(theme),
  ...colorStyles(theme),
  ...typographyStyles(theme),
  ...commonStyles(theme),
  ...animationStyles(theme),
  ...landingStyles(theme),
}));

const GlobalCss = ({ children }) => {
  return <GlobalStyle>{children}</GlobalStyle>;
};

export default GlobalCss;
