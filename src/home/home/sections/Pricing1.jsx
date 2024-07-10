import React, { Component, useState } from "react";
import {
  Switch,
  FormControlLabel,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    "& .card-header": {
      background: "rgba(0, 0, 0, 0.024)",
    },
    "& .card-header-highlighted": {
      background: "rgba(var(--primary),1)",
      "& span": {
        color: "#fff",
      },
    },
  },
}));

const Pricing1 = () => {
  const [state, setState] = useState({
    switchToggled: false,
    plan: "Mo",
    off: 10,
  });

  const classes = useStyles();

  const pricingList = [
    {
      title: "Developer",
      subtitle: "For New Developer",
      price: "Free",
      allowedOfferIndexList: [0, 1, 2],
    },
    {
      title: "Starter",
      subtitle: "For Professional Developer",
      price: 30,
      allowedOfferIndexList: [0, 1, 2, 3],
    },
    {
      title: "Business",
      subtitle: "For Small Businesses",
      price: 60,
      allowedOfferIndexList: [0, 1, 2, 3, 4],
    },
    {
      title: "Enterprise",
      subtitle: "For Large companies",
      price: 160,
      allowedOfferIndexList: [0, 1, 2, 3, 4, 5],
    },
  ];

  const offerList = [
    "10GB of Bandwidth",
    "Max 50 connection",
    "512MB RAM",
    "Unlimited access",
    "Unlimited User",
    "Data analytics",
  ];

  const getPriceList = () => {
    let { switchToggled, off } = state;

    if (switchToggled) {
      return [...pricingList].map((item) => {
        let plan = { ...item };
        let { price } = plan;

        if (price !== "Free") {
          price = price * 12;
          price = Math.round(price - (price * off) / 100);
        }
        plan.price = price;
        return plan;
      });
    }
    return pricingList;
  };

  const handleSwitchChange = () => {
    let { switchToggled, plan } = state;
    switchToggled = !switchToggled;
    switchToggled ? (plan = "Yr") : (plan = "Mo");
    setState({ ...state, switchToggled, plan });
  };

  return (
    <div className="section section-pricing1" id="pricing1">
      <div className="container">
        <div className="mb-6">
          <h2>Choose a Plan</h2>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={state.switchState}
                onChange={handleSwitchChange}
              />
            }
            label="Get up to 10% discount annually"
          />
        </div>

        <Grid container spacing={2}>
          {getPriceList().map((plan) => {
            let { title, subtitle, price, allowedOfferIndexList } = plan;

            return (
              <Grid item lg={3} md={3} sm={6} xs={12} key={title}>
                <Card className={clsx("text-center card", classes.card)}>
                  <div
                    className={clsx({
                      "card-header flex-column items-center p-3": true,
                      "card-header-highlighted": title === "Starter",
                    })}
                  >
                    <span className="text-16">{title}</span>
                    <span className="text-small">{subtitle}</span>
                  </div>
                  <Divider className="mb-2" />
                  <CardContent className="pricing1__card-content">
                    <h1 className="mt-0 mb-4 text-32">
                      {typeof price == "number"
                        ? `$ ${price} /${state.plan}`
                        : "Free"}
                    </h1>

                    {offerList.map((offer, index) => (
                      <div
                        key={index}
                        className={clsx({
                          "px-3 py-2": true,
                          "text-muted": !allowedOfferIndexList.includes(index),
                        })}
                      >
                        {offer}
                      </div>
                    ))}

                    <div className="text-center mt-4">
                      <Button color="secondary" variant="contained">
                        Choose
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Pricing1;
