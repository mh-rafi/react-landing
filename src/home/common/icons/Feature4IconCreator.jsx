import React from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  iconWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      height: "78px",
      width: "48px",
      borderRadius: "300px",
      transform: "rotate(45deg)",
      top: "calc(50% - 42px)",
      left: -8,
      background: lighten(theme.palette.primary.light, 0.9),
      zIndex: -2
    },
    "&::after": {
      content: '" "',
      position: "absolute",
      height: "78px",
      width: "48px",
      top: "calc(50% - 42px)",
      left: 12,
      borderRadius: "300px",
      transform: "rotate(45deg)",
      background: lighten(theme.palette.primary.light, 0.6),
      zIndex: -1
    }
  }
}));

const Feature4IconCreator = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.iconWrapper}>{children}</div>;
};

export default Feature4IconCreator;
