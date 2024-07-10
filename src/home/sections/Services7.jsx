import React from "react";
import { Grid, Button } from "@mui/material";

const Service7 = () => {
  return (
    <div className="section section-service7 bg-light-gray" id="service7">
      <div className="container">
        <Grid container alignItems="center" spacing={5}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className="max-w-372 text-left">
              <h2 className="mb-4">
                Every business matters. We give you tools to succeed.
              </h2>
              <p className="whitespace-pre-wrap">
                {`Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
              \nLorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.`}
              </p>

              <Button variant="contained" color="secondary" className="mt-4">
                Try it free
              </Button>
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img
              className="max-h-280"
              src="./assets/images/illustrations/1.svg"
              alt="analyze"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Service7;
