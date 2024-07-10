import React from "react";
import { GlobalStyles } from "@mui/material";

const generateShadows = (theme) => {
  let classList = {};
  theme.shadows.map((shadow, ind) => {
    classList[`.elevation-z${ind}`] = {
      boxShadow: `${shadow} !important`,
    };
  });
  return classList;
};

export const shadowStyles = (
  <GlobalStyles
    styles={({ palette, ...theme }) => ({
        ...generateShadows(theme),
    })}
  />
);
