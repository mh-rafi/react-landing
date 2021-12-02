import React from "react";
import { Grid, Icon, Button } from "@mui/material";

const Marketing3 = () => {
  return (
    <section className="section" id="marketing3">
      <div className="container">
        <Grid
          container
          spacing={10}
          justify="space-between"
          alignItems="center"
        >
          <Grid item sm={6} xs={12}>
            <h1 className="mt-0 mb-4 font-normal text-48">
              For a Better Marketing
            </h1>
            <p className="my-8 max-w-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita
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
              <Button
                variant="outlined"
                color="primary"
                className="rounded px-7 hover-bg-primary"
              >
                CLICK TO VIEW MORE
              </Button>
            </div>
          </Grid>

          <Grid item sm={6} xs={12}>
            <img
              src="/assets/images/laptop-4.png"
              alt="Laptop"
              className="w-full block"
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Marketing3;
