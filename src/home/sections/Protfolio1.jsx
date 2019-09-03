import React, { Component } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { Button, Icon } from "@material-ui/core";

class Portfolio1 extends Component {
  state = {};

  portfoioList = [
    {
      imageUrl: "./assets/images/sq-12.jpg",
      name: "Project One",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`
    },
    {
      imageUrl: "./assets/images/sq-10.jpg",
      name: "Project Two",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`
    },
    {
      imageUrl: "./assets/images/sq-9.jpg",
      name: "Project Three",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`
    }
  ];
  render() {
    return (
      <section className="section section-portfolio1" id="portfolio1">
        <div className="container">
          <div className="section__header">
            <h2>Works & Case studies</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
          </div>
          <Grid container spacing={3}>
            {this.portfoioList.map((portfolio, index) => (
              <Grid item md={4} sm={4} key={index}>
                <Card className="portfolio1__card card">
                  <img src={portfolio.imageUrl} alt="portfolio" />
                  <CardContent className="portfolio1__card__content">
                    <div>
                      <h5>{portfolio.name}</h5>
                      <p>{portfolio.description}</p>
                      <Divider />
                    </div>
                    <div className="pt-16">
                      <IconButton>
                        <Icon>link</Icon>
                      </IconButton>
                      <IconButton>
                        <Icon>share</Icon>
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
