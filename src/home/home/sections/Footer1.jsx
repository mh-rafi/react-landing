import React from "react";
import { Grid, Button, Icon } from "@mui/material";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  footerSection: {
    "& h4:after": {
      content: '" "',
      position: "absolute",
      bottom: -8,
      left: 0,
      height: 2,
      width: 64,
      background: palette.secondary.main,
    },
  },
}));

const Footer1 = () => {
  const classes = useStyles();

  return (
    <div className={clsx("bg-light-dark", classes.footerSection)} id="footer1">
      <div className="container">
        <Grid container>
          <Grid item lg={6} md={6} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">About Us</h4>
              <p className="text-inherit">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis perferendis rem, aut aliquam neque nam? dolor sit amet,
                consectetur adipisicing elit consectetur adipisicing elit.
                Officiis perferendis rem, aut aliquam.
              </p>
              <Button variant="contained" color="secondary">
                Contact Us
              </Button>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Contact</h4>
              <div className="px-4 my-8 flex items-center mx--4">
                <Icon className="text-secondary">mail</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Email</h5>
                  <p className="m-0 p-0 text-inherit">email@abc.com</p>
                </div>
              </div>
              <div className="px-4 mt-8 flex items-center mx--4">
                <Icon className="text-secondary">location_on</Icon>
                <div className="pl-4">
                  <h5 className="m-0 p-0 text-16">Adress</h5>
                  <p className="m-0 p-0 text-inherit">
                    Topoban, Akhalia Sylhet 3114, BD
                  </p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="p-8 h-full elevation-z3">
              <h4 className="text-20 mb-6 relative">Disclaimer</h4>
              <p className="text-inherit">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis perferendis rem, aut aliquam neque nam?
              </p>

              <div className="mt-8">
                <a href="#linkedin" className="px-2">
                  <img
                    className="h-24 w-24"
                    src="./assets/images/social-linkedin.png"
                    alt=""
                  />
                </a>
                <a href="#twitter" className="px-2">
                  <img
                    className="h-24 w-24"
                    src="./assets/images/social-twitter.png"
                    alt=""
                  />
                </a>
                <a href="#facebook" className="px-2">
                  <img
                    className="h-24 w-24"
                    src="./assets/images/social-facebook.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer1;
