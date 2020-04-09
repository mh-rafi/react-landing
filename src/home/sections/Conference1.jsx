import React from "react";
import { Grid, Icon, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  content: {
    background: "rgba(var(--primary),0.1)",
  },
  descriptionCard: {
    padding: "1rem 4rem",
    [theme.breakpoints.down("md")]: {
      padding: "1rem 2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  borderRounded: {
    borderRadius: 16,
  },
}));

const Conference1 = () => {
  const classes = useStyles();

  return (
    <section className="section">
      <div className="container">
        <div className={clsx(classes.content, classes.borderRounded)}>
          <Grid container spacing={0} alignItems="center">
            <Grid item md={6} sm={12}>
              <img
                src="/assets/images/microphone.jpg"
                alt="microphone  "
                className={clsx("w-full block", classes.borderRounded)}
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <div className={classes.descriptionCard}>
                <h1 className="mt-0 mb-14 text-48 font-medium">
                  Digital Conference
                </h1>
                <p className="max-w-400 mb-6">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                </p>
                <div className="mb-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-center">
                      <Icon className="mr-4" color="primary">
                        done
                      </Icon>
                      <p className="my-2">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="text" color="primary">
                  CLICK TO VIEW MORE
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Conference1;
