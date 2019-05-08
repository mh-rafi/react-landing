import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

class CallToAction1 extends Component {
  state = {};
  render() {
    return (
      <div className="section section-cta1">
        <div className="container">
          <Grid
            container
            spacing={24}
            direction="row"
            alignItems="center"
            justify="flex-start"
          >
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <h2>Egret Is A Complete UI Framework For Angular</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                nam, illum et quis officiis beatae.
              </p>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
              <Button size="large" color="secondary" variant="contained">
                BUY EGRET NOW
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CallToAction1;
