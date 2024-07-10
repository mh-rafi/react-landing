import React from "react";

import { makeStyles } from '@mui/styles';
import { Fab, Icon } from "@mui/material";

import AppleIcon from "../common/icons/TwitterIcon";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  wrapper: {
    position: "relative",
    "&::after": {
      content: '" "',
      display: "block",
      position: "absolute",
      height: "100%",
      width: "100vw",
      top: 0,
      left: "calc(-100vw + 50% - 300px)",
      background: palette.primary.main,
      opacity: 0.1,
      borderTopRightRadius: 300,
      borderBottomRightRadius: 300,
      zIndex: -1,
    },
    "&::before": {
      content: '" "',
      display: "block",
      position: "absolute",
      height: "100%",
      width: "100vw",
      top: 0,
      right: "calc(-100vw + 50% - 300px)",
      background: palette.primary.main,
      opacity: 0.1,
      borderTopLeftRadius: 300,
      borderBottomLeftRadius: 300,
      zIndex: -1,
    },
  },
}));

const CallToAction3 = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <div className="container">
        <div className={clsx("text-center mx-auto", classes.wrapper)}>
          <h1 className="mt-0 mb-7 font-normal text-44">Download Now !</h1>
          <p className="max-w-400 mx-auto mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
          <div className="flex justify-center flex-wrap">
            <Fab className="mr-6 px-6" variant="extended" color="primary">
              <Icon fontSize="small" className="mr-3">
                android
              </Icon>
              Play Store
            </Fab>
            <Fab className="px-6" variant="extended" color="primary">
              <AppleIcon fontSize="small" className="mr-3" />
              App Store
            </Fab>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction3;
