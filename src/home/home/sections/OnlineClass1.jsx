import React from "react";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { IconButton, Icon } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "url(./assets/images/home-work.jpg) rgba(0,0,0, 0.67)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
  },
  buttonBorder: {
    border: "1px solid white",
  },
}));

const OnlineClass1 = () => {
  const classes = useStyles();

  return (
    <section className={clsx("section", classes.section)}>
      <div className="container">
        <div className="text-center text-white">
          <h1 className="m-0 text-44 font-normal inline-block mx-auto">
            We Bring More Online Courses
          </h1>
          <p className="my-10 max-w-400 mx-auto text-inherit">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore nonumy eirmod tempor
            invidunt ut labore
          </p>
          <IconButton className={classes.buttonBorder}>
            <Icon className="text-white">play_arrow</Icon>
          </IconButton>
        </div>
      </div>
    </section>
  );
};

export default OnlineClass1;
