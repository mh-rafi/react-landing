import React from "react";
import { Grid, Icon, Button, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  imageWrapper: {
    position: "relative",
    zIndex: 3,
    "& .price": {
      position: "absolute",
      right: 24,
      top: -12,
      height: 100,
      width: 100,
      borderRadius: "50%",
      boxShadow: "0px 10px 6px rgba(0,0,0,0.17)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 450,
      width: 450,
      background: "rgba(var(--primary),0.15)",
      borderRadius: "50%",
      zIndex: -1,
    },
    "&:before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 390,
      width: 390,
      background: "rgba(var(--primary),0.2)",
      borderRadius: "50%",
      zIndex: -2,
    },
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        height: 350,
        width: 350,
      },
      "&:before": {
        height: 290,
        width: 290,
      },
      "& .price": {
        right: 0,
      },
    },
    [theme.breakpoints.down("xs")]: {
      "&:after": {
        height: 300,
        width: 300,
      },
      "&:before": {
        height: 240,
        width: 240,
      },
    },
  },
}));

const Intro8 = () => {
  const classes = useStyles();

  return (
    <section className="section mt-12" id="intro8">
      <div className="container">
        <Grid container spacing={10} justify="space-between">
          <Grid item sm={6} xs={12}>
            <div
              className={clsx(
                "flex-column justify-center items-center h-full",
                classes.imageWrapper
              )}
            >
              <div className="relative">
                <img
                  src="/assets/images/Laptop-1.png"
                  alt="Laptop"
                  className="w-full block mt-6"
                />
                <div className="price flex items-center justify-center bg-paper">
                  <h4 className="text-18 font-normal m-0">$ 499.99</h4>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <h1 className="mt-0 mb-4 font-normal text-48">Evelynn Laptop</h1>
            <h4 className="text-primary font-normal text-20 m-0">
              Best performance in the lowest price
            </h4>
            <p className="my-8 max-w-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
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

            <div className="mt-12">
              <div className="mb-4">
                <Button
                  variant="outlined"
                  color="primary"
                  className="rounded px-2px py-2px"
                >
                  <span className="pl-5 pr-2">WATCH A REVIEW</span>
                  <Avatar className="h-32 w-32 bg-primary">
                    <Icon>play_arrow</Icon>
                  </Avatar>
                </Button>
              </div>
              <div>
                <Button className="px-8 text-white bg-primary rounded">
                  <Icon fontSize="small">add_shopping_cart</Icon>
                  <span className="ml-2">ADD TO CART</span>
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Intro8;
