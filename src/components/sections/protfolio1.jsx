import React, { Component } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/icons/Link";
import Share from "@material-ui/icons/Share";
import { Button } from "@material-ui/core";

class Portfolio1 extends Component {
  state = {};
  render() {
    return (
      <section className="section section-portfolio1" id="portfolio1">
        <div className="container">
          <div className="section__header">
            <h2>Our Works</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>
          <Grid container spacing={24}>
            {[1, 2, 5].map(portfolio => (
              <Grid item md={4} sm={6} key={portfolio}>
                <Card className="section-portfolio1__card card">
                  <img src="/assets/images/sq-12.jpg" />
                  <CardContent className="section-portfolio1__card_content">
                    <div>
                      <h5>Project One</h5>
                      <p>
                        Adipisci quas repellat sed. Quasi quaerat aut nam
                        possimus vitae dignissimos, sapiente est atque tenetur.
                        Adipisci quas repellat sed. Quasi quaerat aut nam
                        possimus vitae dignissimos, sapiente est atque tenetur.
                        Adipisci quas repellat sed. Quasi quaerat aut nam
                        possimus vitae dignissimos, sapiente est atque tenetur.
                        Adipisci quas repellat sed. Quasi quaerat aut nam
                        possimus vitae dignissimos, sapiente est atque tenetur.
                      </p>
                      <Divider />
                    </div>
                    <div className="pt-16">
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
            ))}
          </Grid>

          <div className="text-center pt-40">
            <Button variant="contained" size="large" color="secondary">
              load more
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio1;
