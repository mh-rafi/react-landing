import React from "react";
import {
  Grid,
  Card,
  Button,
  Divider,
  Icon,
  IconButton,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    borderRadius: 20,
    border: `1px solid transparent`,
    "&:hover": {
      border: `1px solid ${palette.primary.main}`,
    },
    "&:hover $imageOverlay": {
      opacity: 1,
    },
  },
  imageOverlay: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    opacity: 0,
    background: "rgba(0,0,0,0.67)",
    transition: "all 250ms ease",
  },
  dateHolder: {
    borderRadius: 4,
    padding: "0.3rem 0.6rem",
    background: "rgba(var(--primary),0.4)",
    textAlign: "center",
    marginRight: "1rem",
  },
}));

const Blog1 = () => {
  const classes = useStyles();

  return (
    <section className="section section-bg-light-primary" id="blog1">
      <div className="container">
        <div className="max-w-400 mb-16 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">Latest News</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map((item, ind) => (
            <Grid key={ind} item md={3} sm={2} xs={12}>
              <Card elevation={3} className={clsx(classes.card, "card")}>
                <div className="relative">
                  <img
                    className="w-full block"
                    src={`/assets/images/sq-${item}.png`}
                    alt="sq-1"
                  />
                  <div className={classes.imageOverlay}>
                    <Button
                      className="text-white"
                      variant="text"
                      color="primary"
                    >
                      Click to read more
                    </Button>
                  </div>
                </div>
                <div className="px-4 pt-4">
                  <div className="flex items-center">
                    <div className={classes.dateHolder}>
                      <p className="m-0 text-white">12</p>
                      <small className="m-0 text-primary">Feb</small>
                    </div>
                    <h5 className="m-0">Lorem ipsum dolor sit elitdo</h5>
                  </div>
                  <p className="mt-6 mb-8">
                    Lorem ipsum dolor sit elitdo eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                  <Divider className="bg-light-primary" />
                  <div className="flex justify-between items-center my-1">
                    <div className="flex justify-between items-center">
                      <Icon fontSize="small" className="text-muted mr-1">
                        remove_red_eye
                      </Icon>
                      <span className="text-muted">(23)</span>
                      <Icon fontSize="small" className="text-muted ml-4 mr-1">
                        message
                      </Icon>
                      <span className="text-muted">(45)</span>
                    </div>
                    <IconButton>
                      <Icon fontSize="small" color="primary">
                        share
                      </Icon>
                    </IconButton>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Blog1;
