import React from "react";
import { Grid, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThicknessIcon from "../common/icons/ThicknessIcon";
import WidthIcon from "../common/icons/WidthIcon";
import WeightIcon from "../common/icons/WeightIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  gridWrapper: {
    position: "relative",
    margin: "5rem auto",
    maxWidth: 800,

    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      background: "rgba(var(--primary), 0.1)",
      transform: "rotate(28deg)",
      transformOrigin: "center center",
      borderRadius: "15%",
      zIndex: -1,
    },
  },
  image: {
    float: "left",
    transform: "rotate(28deg)",
    transformOrigin: "center center",
    [theme.breakpoints.down("sm")]: {
      float: "unset",
      width: "100%",
      transform: "rotate(0deg)",
    },
  },
}));

const Features8 = () => {
  const classes = useStyles();
  const featureList = [
    {
      icon: ThicknessIcon,
      title: "0.4",
      subtitle: "Rear",
    },
    {
      icon: WidthIcon,
      title: "12mp",
      subtitle: "Front",
    },
    {
      icon: WeightIcon,
      title: "Auto Focus",
      subtitle: "Continuous",
    },
  ];

  return (
    <section className="section" id="features7">
      <div className="container">
        <div className={classes.gridWrapper}>
          <Grid container spacing={3} alignItems="center">
            <Grid item sm={6} xs={12}>
              <div className="flex justify-between flex-wrap mb-6 max-w-320">
                <div className="text-center my-4">
                  <IconButton className="bg-light-primary p-4 mb-4">
                    <ThicknessIcon color="primary" className="text-32" />
                  </IconButton>
                  <h4 className="font-medium text-primary mt-0 mb-2">
                    0.4&rdquo;
                  </h4>
                  <p className="max-w-400 text-center m-0">Thickness</p>
                </div>
                <div className="text-center my-4">
                  <IconButton className="bg-light-primary p-4 mb-4">
                    <WidthIcon color="primary" className="text-32" />
                  </IconButton>
                  <h4 className="font-medium text-primary mt-0 mb-2">
                    10&rdquo;
                  </h4>
                  <p className="max-w-400 text-center m-0">Width</p>
                </div>
                <div className="text-center my-4">
                  <IconButton className="bg-light-primary p-4 mb-4">
                    <WeightIcon color="primary" className="text-32" />
                  </IconButton>
                  <h4 className="font-medium text-primary mt-0 mb-2">
                    1.9 lbs
                  </h4>
                  <p className="max-w-400 text-center m-0">Weight</p>
                </div>
              </div>
              <h1 className="m-0 text-primary font-normal text-48 max-w-400">
                Slick Body
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
            <Grid item sm={6} xs={12}>
              <img
                src="/assets/images/laptop-3.png"
                alt="laptop"
                className={classes.image}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Features8;