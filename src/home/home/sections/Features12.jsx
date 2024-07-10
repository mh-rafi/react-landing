import React from "react";
import { makeStyles } from '@mui/styles';
import {  lighten } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  buttonGroupBG: {
    background: lighten(palette.primary.light, 0.9),
    "&>div": {
      transition: "all 250ms",
      "&:hover": {
        background: palette.primary.main,
        color: palette.primary.contrastText,
        borderRadius: 8,
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        width: "100%",
      },
    },
  },
}));

const Features12 = () => {
  const classes = useStyles();

  return (
    <section className="section bg-light-primary" id="features12">
      <div className="container text-center">
        <h1 className="font-normal text-primary text-48 mb-4">Our Features</h1>
        <p className="max-w-400 m-auto mb-14">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et
        </p>

        <div
          className={`flex flex-wrap items-center border-radius-8 max-w-400 mx-auto ${classes.buttonGroupBG}`}
        >
          <div className="px-6 py-2 box-shadow-none flex-grow">Community</div>
          <div className="px-6 py-2 box-shadow-none flex-grow">
            Self Service
          </div>
          <div className="px-6 py-2 box-shadow-none flex-grow">Teamwork</div>
        </div>
      </div>
    </section>
  );
};

export default Features12;
