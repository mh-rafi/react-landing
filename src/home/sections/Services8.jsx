import React from "react";
import { Grid } from "@mui/material";
import StrategyIcon from "../common/icons/StrategyIcon";
import PenIcon from "../common/icons/PenIcon";
import ManagementIcon from "../common/icons/ManagementIcon";
import Feature4IconCreator from "../common/icons/Feature4IconCreator";

const Services8 = () => {
  const serviceList = [
    {
      title: "Strategy & Research",
      icon: StrategyIcon,
    },
    {
      title: "Design & Development",
      icon: PenIcon,
    },
    {
      title: "Management & Marketing",
      icon: ManagementIcon,
    },
  ];

  return (
    <section className="section" id="services8">
      <div className="container">
        <Grid container spacing={6} justify="space-between">
          {serviceList.map((item, ind) => (
            <Grid key={ind} item sm={4} xs={12}>
              <div className="text-center max-w-252 mx-auto">
                <Feature4IconCreator>
                  <item.icon color="primary" className="text-72" />
                </Feature4IconCreator>
                <h5 className="mt-8 font-medium">{item.title}</h5>
                <p className="max-w-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services8;
