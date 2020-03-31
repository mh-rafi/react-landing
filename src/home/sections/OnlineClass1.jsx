import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { IconButton, Icon } from "@material-ui/core";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundImage: `linear-gradient(rgba(var(--primary), 0.75), rgba(var(--primary), 0.75)), 
       url('./assets/images/home-work.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  buttonBorder: {
    border: "1px solid white"
  }
}));

const OnlineClass1 = () => {
  const classes = useStyles();

  return (
    <section className={clsx("section", classes.section)}>
      <div className="container">
        <div className="text-center text-white">
          <h1 className="mt-0 text-48 font-normal inline-block mx-auto">
            We Bring More Online Courses
          </h1>
          <p className="my-8 max-w-400 mx-auto">
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
