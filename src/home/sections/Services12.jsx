import React from "react";
import { Grid } from "@mui/material";
import {
  QuestionAnswer,
  SupervisorAccount,
  Call,
  Drafts,
  ConfirmationNumber,
  HeadsetMic,
} from "@mui/icons-material";
import Feature4IconCreator from "../common/icons/Feature4IconCreator";

const Services12 = () => {
  const serviceList = [
    {
      icon: QuestionAnswer,
      title: "Live Chat",
    },
    {
      icon: Call,
      title: "Phone Supports",
    },
    {
      icon: Drafts,
      title: "FAQs",
    },
    {
      icon: ConfirmationNumber,
      title: "Tickets",
    },
    {
      icon: HeadsetMic,
      title: "Support Portal",
    },
    {
      icon: SupervisorAccount,
      title: "Social",
    },
  ];

  return (
    <section className="section" id="services12">
      <div className="container">
        <div className="mb-16 text-center">
          <h1 className="font-normal text-primary text-44 mt-0">
            Our Services
          </h1>
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
                  <Feature4IconCreator>
                    <item.icon className="text-62 text-primary" />
                  </Feature4IconCreator>
                </div>
                <h4 className="font-normal text-primary text-20 inline-block">
                  {item.title}
                </h4>
                <p className="text-center m-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt
                </p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services12;
