import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Grid } from "@material-ui/core";

class Demo extends Component {
  state = {};
  render() {
    return (
      <div className="landing">
        <section className="section">
          <div className="container">
            <div className="section-header mb-6">
              <h2>Choose a demo</h2>
              <p>
                Each section is a component, so it's super easy to customize{" "}
                <br /> & create new landing page version
              </p>
            </div>
            <Grid container spacing={3} className="demo-container">
              <Grid item md={4} xs={12}>
                <NavLink to="/landing1" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-1.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing2" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-2.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing3" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-3.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing4" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-4.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing5" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-5.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing6" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-6.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing7" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-7.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing8" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-8.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>

              <Grid item md={4} xs={12}>
                <NavLink to="/landing9" className="mx-1">
                  <Card className="card text-center">
                    <img
                      className="max-w-full"
                      src="./assets/images/screenshots/landing-8.png"
                      alt=""
                    />
                  </Card>
                </NavLink>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    );
  }
}

export default Demo;
