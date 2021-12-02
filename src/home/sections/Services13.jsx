import React from "react";
import { Grid, Icon, Button } from "@mui/material";

const Services13 = () => {
  return (
    <section className="section" id="services13">
      <div className="container">
        <Grid container spacing={10} justify="space-between">
          <Grid item sm={6} xs={12}>
            <div className="flex-column justify-center items-center h-full">
              <img
                src="/assets/images/dashboard-1.png"
                alt="dashboard"
                className="w-full block"
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <h1 className="text-primary font-normal text-48">CRM Support</h1>
            <p className="mb-8 max-w-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </p>

            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center">
                <Icon className="mr-4" color="primary">
                  done
                </Icon>
                <p className="my-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            ))}

            <div className="mt-8">
              <Button variant="text" color="primary">
                <span className="pl-5 pr-2">CLICK TO VIEW MORE</span>
                <Icon>navigate_next</Icon>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Services13;
