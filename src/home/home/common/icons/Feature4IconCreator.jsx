import React from "react";
import { makeStyles } from '@mui/styles';
import {  lighten } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      height: "78px",
      width: "38px",
      borderRadius: "300px",
      transform: "rotate(45deg)",
      top: "calc(50% - 42px)",
      left: 6,
      background: lighten(theme.palette.primary.light, 0.85),
      zIndex: -2,
    },
    "&::after": {
      content: '" "',
      position: "absolute",
      height: "78px",
      width: "38px",
      top: "calc(50% - 42px)",
      left: 20,
      borderRadius: "300px",
      transform: "rotate(45deg)",
      background: lighten(theme.palette.primary.light, 0.55),
      zIndex: -1,
    },
  },
}));

const Feature4IconCreator = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.iconWrapper}>{children}</div>;
};

export default Feature4IconCreator;
