import React, { Component } from "react";
import {
  Switch,
  FormControlLabel,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider
} from "@material-ui/core";

class Pricing1 extends Component {
  pricingList = [
    {
      title: "Developer",
      subtitle: "For New Developer",
      price: "Free",
      allowedOfferIndexList: [0, 1, 2]
    },
    {
      title: "Starter",
      subtitle: "For Professional Developer",
      price: 30,
      allowedOfferIndexList: [0, 1, 2, 3]
    },
    {
      title: "Business",
      subtitle: "For Small Businesses",
      price: 60,
      allowedOfferIndexList: [0, 1, 2, 3, 4]
    },
    {
      title: "Enterprise",
      subtitle: "For Large companies",
      price: 160,
      allowedOfferIndexList: [0, 1, 2, 3, 4, 5]
    }
  ];

  offerList = [
    "10GB of Bandwidth",
    "Max 50 connection",
    "512MB RAM",
    "Unlimited access",
    "Unlimited User",
    "Data analytics"
  ];

  state = {
    switchToggled: false,
    plan: "Mo",
    off: 10
  };

  getPriceList() {
    let { switchToggled, off } = this.state;

    if (switchToggled) {
      return [...this.pricingList].map(item => {
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

    return this.pricingList;
  }

  handleSwitchChange = () => {
    let { switchToggled, plan } = this.state;
    switchToggled = !switchToggled;
    switchToggled ? (plan = "Yr") : (plan = "Mo");
    this.setState({ switchToggled, plan });
  };

  render() {
    return (
      <div className="section section-pricing1" id="pricing1">
        <div className="container">
          <div className="section__header">
            <h2>Choose a Plan</h2>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={this.state.switchState}
                  onChange={this.handleSwitchChange}
                />
              }
              label="Get up to 10% discount annually"
            />
          </div>

          <Grid container spacing={2}>
            {this.getPriceList().map(plan => {
              let { title, subtitle, price, allowedOfferIndexList } = plan;

              return (
                <Grid item lg={3} md={3} sm={6} xs={12} key={title}>
                  <Card className="text-center card">
                    <CardHeader
                      className={
                        title === "Starter"
                          ? "pricing1__card-header pricing1__highlighted"
                          : "pricing1__card-header"
                      }
                      title={title}
                      subheader={subtitle}
                    />
                    <Divider />
                    <CardContent className="pricing1__card-content">
                      <h1>
                        {typeof price == "number"
                          ? `$ ${price} /${this.state.plan}`
                          : "Free"}
                      </h1>

                      {this.offerList.map((offer, index) => (
                        <div
                          key={index}
                          className={
                            allowedOfferIndexList.includes(index)
                              ? ""
                              : "text-muted"
                          }
                        >
                          {offer}
                        </div>
                      ))}

                      <div className="text-center">
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
  }
}

export default Pricing1;
