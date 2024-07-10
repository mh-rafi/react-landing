import React from "react";
import { Grid, Icon, Card } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import ProcessorIcon from "../common/icons/ProcessorIcon";
import SpeedIcon from "../common/icons/SpeedIcon";
// import RAMIcon from "../common/icons/RAMIcon";

const tubeStyle = {
  height: 64,
  width: 14,
  borderRadius: 300,
  marginTop: 12,
  marginRight: 6,
  transform: "rotate(28deg)",
  transformOrigin: "center center",
};

const useStyles = makeStyles(({ palette, ...theme }) => ({
  featureTitle: {},
  tube1: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.1)",
  },
  tube2: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.18)",
  },
  tube3: {
    ...tubeStyle,
    background: "rgba(var(--primary),0.25)",
  },
  card: {
    border: "1px solid rgba(0,0,0,0.1)",

    "& .icon-wrapper": {
      position: "relative",
      zIndex: 3,
      marginRight: 80,
      "&:after": {
        content: '" "',
        position: "absolute",
        height: 210,
        width: 203,
        left: -112,
        top: -83,
        background: "rgba(var(--primary), 0.1)",
        transform: "rotate(-30deg)",
        transformOrigin: "center center",
        borderRadius: 32,
        zIndex: -1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      margin: 0,
    },
  },
}));

const Features9 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="feature9">
      <div className="container">
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <div className="flex items-center">
              <h1 className="font-normal text-48 m-0 relative inline-bock text-primary">
                Best Processor
              </h1>
              <div className="flex ml--4">
                <div className={classes.tube1}></div>
                <div className={classes.tube2}></div>
                <div className={classes.tube3}></div>
              </div>
            </div>

            <p className="my-10 max-w-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div>
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <Icon className="mr-4" color="primary">
                    done
                  </Icon>
                  <p className="my-2 max-w-400">
                    Lorem ipsum dolor sit amet, consetetur sadipscing
                  </p>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card
              elevation={0}
              className={clsx(
                "border-radius-8 p-6 mb-4 flex items-center",
                classes.card
              )}
            >
              <div className="icon-wrapper my-4">
                <ProcessorIcon color="primary" className="text-72" />
              </div>
              <div className="max-w-400">
                <h4 className="mt-0 mb-4 font-medium">2.0GHz 8Core x64</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </Card>
            <Card
              elevation={0}
              className={clsx(
                "border-radius-8 p-6 flex items-center",
                classes.card
              )}
            >
              <div className="icon-wrapper my-4">
                <SpeedIcon color="primary" className="text-72" />
              </div>
              <div className="max-w-400">
                <h4 className="mt-0 mb-4 font-medium">1600bs Speed</h4>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Features9;
