import React from "react";
import { Grid, Icon, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import {
  Wifi,
  Spa,
  SportsHandball,
  RestaurantMenu,
  AirlineSeatIndividualSuite,
  BeachAccess,
} from "@mui/icons-material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  iconWrapper: {
    position: "relative",
    display: "inline-block",
    zIndex: 2,
    "&::before": {
      content: '" "',
      position: "absolute",
      height: "78px",
      width: "42px",
      borderRadius: "300px",
      transform: "rotate(40deg)",
      top: "calc(50% - 42px)",
      left: 10,
      background: "rgba(var(--primary),0.15)",
      zIndex: -1,
    },
  },
  doneIcon: {
    position: "absolute",
    bottom: 0,
    right: "calc(50% - 32px)",
    zIndex: 3,
  },
}));

const Services10 = () => {
  const classes = useStyles();
  const serviceList = [
    {
      icon: Wifi,
      title: "Free WiFi",
    },
    {
      icon: SportsHandball,
      title: "Sports",
    },
    {
      icon: RestaurantMenu,
      title: "Restaurant",
    },
    {
      icon: AirlineSeatIndividualSuite,
      title: "Bedrooms",
    },
    {
      icon: Spa,
      title: "Spa",
    },
    {
      icon: BeachAccess,
      title: "Relaxation",
    },
  ];

  return (
    <section className="section" id="services10">
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="font-normal text-44 mt-0">Services for you</h1>
          <p className="max-w-400 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
        </div>
        <Grid container spacing={6} justify="space-between" alignItems="center">
          {serviceList.map((item, ind) => (
            <Grid key={ind} item md={4} sm={2} xs={12}>
              <div className="text-center max-w-252 mx-auto">
                <div className="relative mb-8">
                  <div className={classes.iconWrapper}>
                    <item.icon className="text-62" />
                  </div>
                  <IconButton
                    size="small"
                    className={clsx("bg-primary p-1", classes.doneIcon)}
                  >
                    <Icon className="text-20 text-white">done</Icon>
                  </IconButton>
                </div>
                <h1 className="font-normal inline-block">{item.title}</h1>
                <p className="text-center m-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services10;
