import React from "react";
import { Grid, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  FilterCenterFocus,
  CameraAlt,
  FlipCameraIos
} from "@material-ui/icons";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  gridWrapper: {
    position: "relative",
    "&:after": {
      content: '" "',
      position: "absolute",
      height: 550,
      width: 550,
      right: "20%",
      top: "0rem",
      background: "rgba(var(--primary), 0.1)",
      transform: "rotate(63deg)",
      transformOrigin: "center center",
      borderRadius: "20%",
      zIndex: -1
    }
  },
  image: {
    float: "right",
    [theme.breakpoints.down("sm")]: {
      float: "unset",
      width: "100%"
    }
  }
}));

const Features7 = () => {
  const classes = useStyles();
  const featureList = [
    {
      icon: CameraAlt,
      title: "24mp",
      subtitle: "Rear"
    },
    {
      icon: FlipCameraIos,
      title: "12mp",
      subtitle: "Front"
    },
    {
      icon: FilterCenterFocus,
      title: "Auto Focus",
      subtitle: "Continuous"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-400 mb-25 mx-auto text-center">
          <h1 className="mt-0 font-normal text-44">App Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
        </div>

        <div className={classes.gridWrapper}>
          <Grid container spacing={3} alignItems="center">
            <Grid item sm={6} xs={12}>
              <img
                src="/assets/images/laptop-2.png"
                alt="laptop"
                className={classes.image}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className="flex justify-between flex-wrap mb-6 max-w-320">
                {featureList.map((item, ind) => (
                  <div key={ind} className="text-center my-4">
                    <IconButton className="bg-light-primary mb-4">
                      <item.icon color="primary" className="text-54" />
                    </IconButton>
                    <h4 className="font-medium text-primary mt-0 mb-2">
                      {item.title}
                    </h4>
                    <p className="max-w-400 text-center m-0">{item.subtitle}</p>
                  </div>
                ))}
              </div>
              <h1 className="m-0 text-primary font-normal text-48 max-w-400">
                Best Camera
              </h1>
              <p className="my-8 max-w-400">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores
              </p>
              <Button className="px-8 text-white bg-primary rounded">
                EXPERIENCE
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Features7;
