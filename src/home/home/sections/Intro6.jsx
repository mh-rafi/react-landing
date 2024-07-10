import React from "react";
import { makeStyles } from '@mui/styles';
import { Button } from "@mui/material";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  containerHolder: {
    background: `linear-gradient(45deg, ${palette.primary.main} 0%,${palette.primary.light} 100%)`,
  },
  container: {
    paddingTop: "6rem !important",
    paddingBottom: "6rem !important",
  },
}));

const Intro6 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro6">
      <div className={classes.containerHolder}>
        <div
          className={clsx(
            "container flex-column justify-center items-center text-white",
            classes.container
          )}
        >
          <h1 className="font-normal text-center text-48 mb-4 mt-0">
            Evelynn Enterprise
          </h1>
          <h2 className="font-normal">Start in style</h2>
          <p className="max-w-550 text-center text-inherit my-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem
          </p>
          <Button variant="contained" color="primary" className="rounded px-6">
            LEARN MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Intro6;
