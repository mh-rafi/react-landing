import React from "react";
import {
  Grid,
  Icon,
  IconButton,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { School, PersonOutline } from "@mui/icons-material";
import BookIcon from "../common/icons/BookIocn";
import MessangerIcon from "../common/icons/MessengerIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  iconWrapper: {
    position: "relative",
    display: "inline-block",
    "&::before": {
      content: '" "',
      position: "absolute",
      height: "78px",
      width: "42px",
      borderRadius: "300px",
      transform: "rotate(40deg)",
      top: "calc(50% - 42px)",
      left: 10,
      background: "rgba(var(--primary),0.12)",
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

const Services11 = () => {
  const classes = useStyles();
  const achievementList = [
    {
      icon: School,
      title: "97%",
      subtitle: "Happy Clients",
    },
    {
      icon: BookIcon,
      title: "15+",
      subtitle: "Awards",
    },
    {
      icon: PersonOutline,
      title: "2K",
      subtitle: "Job Placement",
    },
    {
      icon: MessangerIcon,
      title: "98%",
      subtitle: "Project Complete",
    },
  ];

  return (
    <section className="section section-bg-light-primary" id="services11">
      <div className="container text-center">
        <h1 className="font-normal text-48 mt-0 mb-4 text-primary">
          Achievement
        </h1>
        <p className="mb-16 max-w-400 mx-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et
        </p>
        <div className="max-w-770 mx-auto">
          <Grid container spacing={3}>
            {achievementList.map((item, ind) => (
              <Grid key={ind} item md={3} sm={6} xs={12}>
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className={classes.iconWrapper}>
                      <item.icon className="text-62" />
                    </div>
                    <IconButton
                      size="small"
                      className={clsx("bg-primary p-1", classes.doneIcon)}
                    >
                      <Icon className="text-white text-20">done</Icon>
                    </IconButton>
                  </div>
                  <h1 className="font-normal inline-block">{item.title}</h1>
                  <p className="text-center m-0">{item.subtitle}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Services11;
