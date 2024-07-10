import React from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import {IconButton} from "@mui/material";
import { Button, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({ palette, ...theme }) => ({}));

const Portfolio1 = () => {
  const classes = useStyles();

  const portfoioList = [
    {
      imageUrl: "./assets/images/sq-12.jpg",
      name: "Project One",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-10.jpg",
      name: "Project Two",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
    {
      imageUrl: "./assets/images/sq-9.jpg",
      name: "Project Three",
      description: `Adipisci quas repellat sed. Quasi quaerat aut nam
      possimus vitae dignissimos, sapiente est atque tenetur.`,
    },
  ];

  return (
    <section className="section" id="portfolio1">
      <div className="container">
        <div className="section__header">
          <h2>Works & Case studies</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            unde inventore molestias ab adipisci eius nisi placeat at.
          </p>
        </div>
        <Grid container spacing={3}>
          {portfoioList.map((portfolio, index) => (
            <Grid item md={4} sm={4} key={index}>
              <Card className="relative h-full card" key={index}>
                <img
                  className="w-full"
                  src={portfolio.imageUrl}
                  alt="portfolio"
                />
                <div className="flex-column justify-between">
                  <div className="px-4 pt-4">
                    <h5 className="m-0 text-16 font-bold">{portfolio.name}</h5>
                    <p className="mb-4">{portfolio.description}</p>
                    <Divider />
                  </div>
                  <div className="px-4 py-2">
                    <IconButton>
                      <Icon>link</Icon>
                    </IconButton>
                    <IconButton>
                      <Icon>share</Icon>
                    </IconButton>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="text-center pt-9">
          <Button variant="contained" size="large" color="secondary">
            load more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio1;
