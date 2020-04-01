import React from "react";
import { Grid, Icon, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  imageWrapper: {
    position: "relative",
    zIndex: 3,
    "&:after": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 450,
      width: 450,
      background: "rgba(var(--primary),0.15)",
      borderRadius: "50%",
      zIndex: -1
    },
    "&:before": {
      content: '" "',
      position: "absolute",
      display: "block",
      height: 390,
      width: 390,
      background: "rgba(var(--primary),0.2)",
      borderRadius: "50%",
      zIndex: -2
    },
    [theme.breakpoints.down("xs")]: {
      "&:after": {
        height: 300,
        width: 300
      },
      "&:before": {
        height: 240,
        width: 240
      }
    },
    [theme.breakpoints.down("sm")]: {
      "&:after": {
        height: 350,
        width: 350
      },
      "&:before": {
        height: 290,
        width: 290
      }
    }
  }
}));

const Intro8 = () => {
  const classes = useStyles();

  return (
    <section className="section mt-12">
      <div className="container">
        <Grid container spacing={10} justify="space-between">
          <Grid item sm={6} xs={12}>
            <div
              className={clsx(
                "flex-column justify-center items-center h-full",
                classes.imageWrapper
              )}
            >
              <img
                src="/assets/images/Laptop-1.png"
                alt="Laptop"
                className={clsx("w-full block")}
              />
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
            <h1 className="mt-0 mb-4 font-normal text-48">Evelynn Laptop</h1>
            <h4 className="text-primary font-normal">
              Best performance in the lowest price
            </h4>
            <p className="my-8 max-w-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat
            </p>

            {[1, 2, 3].map(item => (
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
