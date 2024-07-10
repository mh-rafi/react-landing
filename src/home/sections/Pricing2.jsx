import React from "react";
import { makeStyles } from '@mui/styles';

import {
  Grid,
  Card,
  IconButton,
  Divider,
  Icon,
  Button,
} from "@mui/material";

import EuroIcon from "../common/icons/EuroIcon";
import StarterIcon from "../common/icons/StarterIcon";
import TieIcon from "../common/icons/TieIcon";
import CompanyIcon from "../common/icons/CompanyIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardWrapper: {
    position: "relative",
    "&:after": {
      content: '" "',
      display: "block",
      position: "absolute",
      height: "60%",
      left: "-1000px",
      right: "-1000px",
      top: "20%",
      background: palette.primary.main,
      opacity: 0.1,
      zIndex: -1,
    },
  },
  card: {
    padding: "2rem",
    border: `1px solid ${palette.background.default}`,
    borderRadius: 8,
    zIndex: 1,
    transition: "all 400ms",
    "&:hover": {
      border: `1px solid ${palette.primary.main}`,
      boxShadow: theme.shadows[6],
      "& [class^='MuiButtonBase-']": {
        background: palette.primary.main + "!important",
        "& [class^='MuiSvgIcon-']": {
          fill: palette.primary.contrastText + "!important",
        },
      },
    },
  },
}));

const Pricing2 = () => {
  const classes = useStyles();
  const featureList = [
    "Full Access",
    "Source Files",
    "Code Upload",
    "Enhanced Security",
    "Free Installment",
  ];

  const planList = [
    {
      title: "Free",
      icon: EuroIcon,
      price: 0,
    },
    {
      title: "Starter",
      icon: StarterIcon,
      price: 19,
    },
    {
      title: "Business",
      icon: TieIcon,
      price: 39,
    },
    {
      title: "Ultimate",
      icon: CompanyIcon,
      price: 59,
    },
  ];

  return (
    <section className="section" id="pricing2">
      <div className="container">
        <div className="max-w-400 mb-16 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">Our Services</h1>
          <p className="mb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <div className={classes.cardWrapper}>
          <Grid container spacing={2}>
            {planList.map((plan, ind) => (
              <Grid key={ind} item lg={3} md={3} sm={6} xs={12}>
                <Card className={classes.card} elevation={2}>
                  <div className="flex items-center mb-6">
                    <IconButton className="mr-4 p-3 bg-light-primary rounded hover-bg-primary">
                      <plan.icon color="primary" fontSize="large" />
                    </IconButton>
                    <div>
                      <h3 className="text-primary m-0">{plan.title}</h3>
                      <p className="m-0">
                        ${" "}
                        <span className="text-32 font-medium text-primary">
                          {plan.price}
                        </span>
                        /mo
                      </p>
                    </div>
                  </div>

                  <Divider className="bg-primary"></Divider>

                  <div className="my-8">
                    {featureList.map((item, ind) => (
                      <div key={ind} className="flex items-center">
                        <Icon className="mr-4" color="primary">
                          done
                        </Icon>
                        <p className="my-2">{item}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="rounded px-6"
                    variant="contained"
                    color="primary"
                  >
                    Buy Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;
