import React from "react";
import { Grid, Button } from "@mui/material";
import ExpertIcon from "../common/icons/ExpertIcon";
import EducationIcon1 from "../common/icons/EducationIcon1";
import EducationIcon2 from "../common/icons/EducationIcon2";
import Feature4IconCreator from "../common/icons/Feature4IconCreator";

const Services9 = () => {
  const serviceList = [
    {
      title: "Expert Teachers",
      icon: ExpertIcon,
    },
    {
      title: "Our Courses",
      icon: EducationIcon1,
    },
    {
      title: "Unlimited Access",
      icon: EducationIcon2,
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
                <p className="max-w-400 mb-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
                <Button variant="text" color="primary">
                  Read More
                </Button>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Services9;
