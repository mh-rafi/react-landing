import React from "react";
import {
  Grid,
  Button,
  IconButton,
  Icon,
  lighten,
  LinearProgress,
  withStyles
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const RoundedLinearProgressbar = withStyles(({ palette }) => ({
  root: {
    borderRadius: 300,
    height: 6,
    background: "transparent"
  },
  bar: {
    borderRadius: 300
  }
}))(LinearProgress);

const useStyles = makeStyles(({ palette, ...theme }) => ({
  skillIcon: {
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: palette.primary.main,
    color: palette.primary.main,
    fontSize: 16,
    fontWeight: "bold",
    height: 29,
    width: 29,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const About1 = () => {
  const classes = useStyles();
  const skillList = [
    {
      title: "Adobe Photoshop",
      icon: "Ps",
      skill: 98
    },
    {
      title: "Adobe Illustrator",
      icon: "Ai",
      skill: 95
    },
    {
      title: "Adobe Premiere Pro",
      icon: "Pr",
      skill: 90
    },
    {
      title: "Adobe After Effects",
      icon: "Ae",
      skill: 85
    },
    {
      title: "Adobe Indesign",
      icon: "Id",
      skill: 90
    },
    {
      title: "Adobe XD",
      icon: "Xd",
      skill: 95
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={6} xs={12}>
            <div>
              <h1 className="font-medium text-48 mt-0">About Me</h1>
              <p className="max-w-400 my-6">
                I am a{" "}
                <span className="text-primary">
                  professional graphics designer ?
                </span>
              </p>
              <p className="max-w-400 mb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam
              </p>

              <Button
                className="rounded px-10"
                variant="contained"
                color="primary"
              >
                CONTACT ME
              </Button>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            {skillList.map((item, ind) => (
              <div
                key={ind}
                className={clsx({
                  "flex items-center flex-wrap": true,
                  "mb-4": ind !== skillList.length - 1
                })}
              >
                <IconButton className="bg-light-primary mr-4">
                  <div className={classes.skillIcon}>{item.icon}</div>
                </IconButton>
                <div className="flex-grow">
                  <p className="mt-0 mb-2">{item.title}</p>
                  <RoundedLinearProgressbar
                    value={item.skill}
                    variant="determinate"
                  />
                </div>
              </div>
            ))}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default About1;
