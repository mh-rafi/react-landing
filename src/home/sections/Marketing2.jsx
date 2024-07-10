import React from "react";
import {
  Grid,
  Icon,
  Button,
  Card,
  TextField,
  IconButton,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { School, PersonOutline } from "@mui/icons-material";
import BookIcon from "../common/icons/BookIocn";
import MessangerIcon from "../common/icons/MessengerIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    backgroundImage: `linear-gradient(rgba(var(--primary), 0.75 ), rgba(var(--primary), 0.75 )), 
       url('./assets/images/study-bg-1.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
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
      background: "rgba(var(--primary),0.45)",
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

const Marketing2 = () => {
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
    <section className={clsx("section", classes.section)} id="marketing2">
      <div className="container text-white">
        <Grid container spacing={3} justify="space-between" alignItems="center">
          <Grid item md={9} sm={7} xs={12}>
            <h1 className="font-normal text-48 mt-0">Admission Now</h1>
            <p className="mb-16 max-w-400 text-inherit">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et
            </p>
            <div className="mb-6 max-w-600">
              <Grid container spacing={6}>
                {achievementList.map((item, ind) => (
                  <Grid key={ind} item md={3} sm={6} xs={6}>
                    <div className="text-center">
                      <div className="relative mb-8">
                        <div className={classes.iconWrapper}>
                          <item.icon className="text-62 text-white" />
                        </div>
                        <IconButton
                          size="small"
                          className={clsx("bg-primary p-1", classes.doneIcon)}
                        >
                          <Icon className="text-white text-20">done</Icon>
                        </IconButton>
                      </div>
                      <h1 className="font-normal inline-block">{item.title}</h1>
                      <p className="text-center m-0 text-inherit">
                        {item.subtitle}
                      </p>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card elevation={3} className="p-6">
              <h4 className="mt-0 mb-8 font-medium">7 Days Free Trial</h4>
              <TextField
                className="mb-5"
                label="Your Name"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <Icon fontSize="small" className="text-muted mr-2">
                      person
                    </Icon>
                  ),
                }}
              />
              <TextField
                className="mb-5"
                label="Your Email"
                variant="outlined"
                size="small"
                fullWidth
                type="Email"
                InputProps={{
                  startAdornment: (
                    <Icon fontSize="small" className="text-muted mr-2">
                      mail
                    </Icon>
                  ),
                }}
              />
              <TextField
                className="mb-5"
                label="Your Password"
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                InputProps={{
                  startAdornment: (
                    <Icon fontSize="small" className="text-muted mr-2">
                      vpn_key
                    </Icon>
                  ),
                }}
              />
              <Button className="w-full text-white bg-primary">LOGIN</Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Marketing2;
