import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: `linear-gradient(45deg, ${palette.primary.main} 0%,${palette.primary.light} 100%)`
  },
  container: {
    paddingTop: "2rem !important",
    paddingBottom: "2rem !important",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0 !important",
      paddingBottom: "0 !important"
    }
  }
}));

const Intro6 = () => {
  const classes = useStyles();

  return (
    <section
      className={clsx("section section-intro1", classes.section)}
      id="intro6"
    >
      <div
        className={clsx(
          "container flex-column justify-center items-center text-white",
          classes.container
        )}
      >
        <h1 className="font-normal text-center text-48 mt-0">
          Evelynn Enterprise
        </h1>
        <h2 className="font-normal mb-8">Start in style</h2>
        <p className="max-w-550 text-center mb-12">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem
        </p>
        <Button variant="contained" color="primary" className="rounded px-6">
          LEARN MORE
        </Button>
      </div>
    </section>
  );
};

export default Intro6;
