import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, IconButton,  Button } from "@mui/material";
import {
  LocalAirport,
  Extension,
  VideoCall,
  EditLocation,
  Settings,
  BarChart,
  Accessibility,
  CameraAlt,
  Alarm,
} from "@mui/icons-material";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  feature: {
    border: "2px solid rgba(var(--primary),0.25)",

    "&, & .icon-holder": {
      transition: "all 250ms ease-in-out",
    },

    "& .icon-holder": {
      background: "rgba(var(--primary),0.25) !important",
    },

    "&:hover": {
      border: "2px solid rgba(var(--primary),1)",
      "& .icon-holder": {
        background: "rgba(var(--primary),1) !important",
      },
    },
  },
}));

const Features11 = () => {
  const classes = useStyles();

  const featureList = [
    {
      icon: LocalAirport,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: VideoCall,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: EditLocation,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: Extension,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: Settings,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: CameraAlt,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: BarChart,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: Accessibility,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      icon: Alarm,
      title: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <section className="section" id="features11">
      <div className="container">
        <div className="max-w-400 mx-auto text-center mb-14">
          <h1 className="mt-0 font-normal text-44">Sample Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
        </div>
        <Grid container spacing={3}>
          {featureList.map((item, ind) => (
            <Grid key={ind} item md={4} sm={6} xs={12}>
              <div
                className={clsx(
                  "p-6px rounded flex items-center",
                  classes.feature
                )}
              >
                <IconButton className="icon-holder bg-light-primary p-2">
                  <item.icon className="text-white" fontSize="small" />
                </IconButton>
                <div className="ml-8">{item.title}</div>
              </div>
            </Grid>
          ))}
        </Grid>

        <div className="flex justify-center mt-16">
          <Button variant="contained" color="primary" className="px-7 rounded">
            See More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features11;
