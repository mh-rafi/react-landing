import React from "react";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { IconButton, Icon } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.67), rgba(0,0,0,0.67)), 
       url('./assets/images/event-2.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  buttonBorder: {
    border: "1px solid white",
  },
}));

const EventDetails1 = () => {
  const classes = useStyles();

  return (
    <section className={clsx("section", classes.section)} id="event-details">
      <div className="container">
        <div className="text-center text-white">
          <h1 className="m-0 text-48 font-normal inline-block mx-auto">
            Know more about the event
          </h1>
          <p className="my-8 max-w-360 mx-auto text-inherit">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr
          </p>
          <IconButton className={classes.buttonBorder}>
            <Icon className="text-white">play_arrow</Icon>
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default EventDetails1;
