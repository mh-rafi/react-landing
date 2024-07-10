import React from "react";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { IconButton, Icon } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundImage: `linear-gradient(rgba(0,0,0, 0.67), rgba(0,0,0, 0.67)), 
       url('./assets/images/study-bg-2.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  card: {
    margin: "2.5rem auto",
    padding: "2.5rem",
    background: "rgba(255,255,255,0.17)",
    maxWidth: 550,
    borderRadius: 32,
  },
  buttonBorder: {
    border: "1px solid white",
  },
}));

const Testimonial7 = () => {
  const classes = useStyles();

  return (
    <section
      className={clsx("section my-20", classes.section)}
      id="testimonial7"
    >
      <div className="container">
        <div className={clsx("text-center text-white", classes.card)}>
          <h1 className="m-0 text-48 font-normal inline-block mx-auto">
            See a review
          </h1>
          <p className="my-8 max-w-400 mx-auto text-inherit">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
          <IconButton className={classes.buttonBorder}>
            <Icon className="text-white">play_arrow</Icon>
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default Testimonial7;
