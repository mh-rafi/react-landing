import React, { Component } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/icons/Link";
import Share from "@material-ui/icons/Share";
import { Button } from "@material-ui/core";

class Protfolio1 extends Component {
  state = {};
  render() {
    return (
      <div className="protfolio-container">
        <div className="protfolio-header">
          <h2>Our Works</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            unde inventore molestias ab adipisci eius nisi placeat at.
          </p>
        </div>
        <Grid container spacing={24}>
          <Grid item md={4} sm={6}>
            <Card className="card">
              <img src="/assets/images/sq-12.jpg" />
              <CardContent>
                <h5>Project One</h5>
                <p>
                  Adipisci quas repellat sed. Quasi quaerat aut nam possimus
                  vitae dignissimos, sapiente est atque tenetur.
                </p>
                <Divider />
                <div className="card-actions">
                  <IconButton>
                    <Link />
                  </IconButton>
                  <IconButton>
                    <Share />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={6}>
            <Card className="card">
              <img src="/assets/images/sq-9.jpg" />
              <CardContent>
                <h5>Project Two</h5>
                <p>
                  Adipisci quas repellat sed. Quasi quaerat aut nam possimus
                  vitae dignissimos, sapiente est atque tenetur.
                </p>
                <Divider />
                <div className="card-actions">
                  <IconButton>
                    <Link />
                  </IconButton>
                  <IconButton>
                    <Share />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4} sm={6}>
            <Card className="card">
              <img src="/assets/images/sq-10.jpg" />
              <CardContent>
                <h5>Project Three</h5>
                <p>
                  Adipisci quas repellat sed. Quasi quaerat aut nam possimus
                  vitae dignissimos, sapiente est atque tenetur.
                </p>
                <Divider />
                <div className="card-actions">
                  <IconButton>
                    <Link />
                  </IconButton>
                  <IconButton>
                    <Share />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className="load-more">
          <Button variant="contained" size="large" color="secondary">
            load more
          </Button>
        </div>
      </div>
    );
  }
}

export default Protfolio1;
