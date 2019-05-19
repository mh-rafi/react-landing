import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";

class CallToAction1 extends Component {
  state = {};
  render() {
    let { bg } = this.props;
    let classes = "section section-cta1 "+(bg ? bg : '');
    return (
      <div className={classes} id="cta1">
        <div className="container">
          <Grid
            container
            spacing={24}
            direction="row"
            alignItems="center"
            justify="flex-start"
          >
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <h2>Dont miss the best management tool of the world</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                nam, illum et quis officiis beatae.
              </p>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} className="text-center">
              <Button size="large" color="secondary" variant="contained">
                Start 14 days Trial
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CallToAction1;