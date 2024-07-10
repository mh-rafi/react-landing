import React from "react";
import { Grid, IconButton, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {
  FilterCenterFocus,
  CameraAlt,
  FlipCameraIos,
} from "@mui/icons-material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  gridWrapper: {
    position: "relative",
    margin: "2rem 0",
    "&:after": {
      content: '" "',
      position: "absolute",
      right: "20%",
      top: 0,
      height: 550,
      width: 650,
      background: "rgba(var(--primary), 0.1)",
      transform: "rotate(-15deg)",
      transformOrigin: "center top",
      borderRadius: "20%",
      zIndex: -1,
    },
    [theme.breakpoints.down("sm")]: {
      right: 0,
    },
  },
  image: {
    float: "right",
    width: "120%",
    [theme.breakpoints.down("xs")]: {
      float: "unset",
      width: "100%",
    },
  },
}));

const Features7 = () => {
  const classes = useStyles();
  const featureList = [
    {
      icon: CameraAlt,
      title: "24mp",
      subtitle: "Rear",
    },
    {
      icon: FlipCameraIos,
      title: "12mp",
      subtitle: "Front",
    },
    {
      icon: FilterCenterFocus,
      title: "Auto Focus",
      subtitle: "Continuous",
    },
  ];

  return (
    <section className="section" id="features7">
      <div className="container">
        <div className={classes.gridWrapper}>
          <Grid container spacing={6} alignItems="center">
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
              <h1 className="m-0 text-primary font-normal text-44 max-w-200">
                Best Camera
              </h1>
              <p className="my-8 max-w-340">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores
              </p>
              <Button className="px-6 text-white bg-primary rounded">
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
