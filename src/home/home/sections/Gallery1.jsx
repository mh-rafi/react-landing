import React from "react";
import { Grid, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {  lighten } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
    "&:hover $cardOverlay": {
      opacity: 1,
    },
  },
  cardOverlay: {
    padding: "0px 1rem",
    transition: "all 250ms ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    borderRadius: 8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    color: palette.primary.contrastText,
    background: "rgba(0,0,0,0.67)",
    zIndex: 5,
  },
}));

const Gallery1 = () => {
  const classes = useStyles();

  const imageList = [
    {
      title: "Firepox",
      subtitle: "Branding",
      image: "/assets/images/random-6.png",
    },
    {
      title: "Brillian",
      subtitle: "Branding",
      image: "/assets/images/random-7.png",
    },
    {
      title: "Creative",
      subtitle: "Branding",
      image: "/assets/images/random-8.png",
    },
    {
      title: "Persistent",
      subtitle: "Branding",
      image: "/assets/images/random-9.png",
    },
    {
      title: "Firepox",
      subtitle: "Branding",
      image: "/assets/images/random-10.png",
    },
    {
      title: "Creative",
      subtitle: "Branding",
      image: "/assets/images/random-5.png",
    },
  ];

  return (
    <section className="section" id="gallery1">
      <div className="container">
        <div className="mb-8">
          <h1 className="font-normal text-44 mt-0">My Works And Portfolios</h1>
          <p className="max-w-400 mb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
        </div>
        <Grid container spacing={3}>
          {imageList.map((item, ind) => (
            <Grid key={ind} item lg={4} md={4} sm={4} xs={12}>
              <div className={classes.cardHolder}>
                <img className="w-full block" src={item.image} alt="random" />
                <div className={classes.cardOverlay}>
                  <h3 className="m-0">{item.title}</h3>
                  <p className="text-inherit">{item.subtitle}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>

        <Button
          className="rounded px-10 mt-16"
          variant="contained"
          color="primary"
        >
          VIEW MORE
        </Button>
      </div>
    </section>
  );
};

export default Gallery1;
