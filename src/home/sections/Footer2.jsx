import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Icon,
  Grid,
  Button,
  TextField,
  InputAdornment,
  darken
} from "@material-ui/core";
import FacebookIcon from "../common/icons/FacebookIcon";
import TwitterIcon from "../common/icons/TwitterIcon";
import InstagramIcon from "../common/icons/InstagramIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "#011C3A",
    color: palette.primary.contrastText
  },
  iconWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
    marginRight: 12,
    border: `1px solid ${palette.primary.contrastText}`,
    cursor: "pointer"
  },
  link: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#011C3A", 0.2)
    }
  }
}));

const companyOption = [
  "About Us",
  "Services",
  "Team",
  "Pricing",
  "Project",
  "Career",
  "Blog",
  "Login"
];

const userfulLink = [
  "Terms of Services",
  "Privacy Policy",
  "Documentation",
  "Changelog",
  "Components"
];

const Footer2 = () => {
  const classes = useStyles();

  return (
    <section className={`section ${classes.section}`}>
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">About Us</h4>
              <p className="my-6 max-w-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis perferendis rem, aut aliquam neque nam? dolor sit amet,
                consectetur adipisicing elit consectetur adipisicing elit.
                Officiis perferendis rem, aut aliquam. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Officiis perferendis rem,
                aut aliquam neque nam? dolor sit amet, consectetur adipisicing
                elit consectetur adipisicing elit. Officiis perferendis rem, aut
                aliquam.
              </p>
              <div className="flex flex-wrap">
                <div className={classes.iconWrapper}>
                  <FacebookIcon fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <TwitterIcon fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <InstagramIcon fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <LinkedinIcon fontSize="small" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Company</h4>
              <div className="mt-4 mb-6">
                {companyOption.map((item, ind) => (
                  <div
                    key={ind}
                    className={
                      "flex items-center py-2 cursor-pointer " + classes.link
                    }
                  >
                    <Icon>navigate_next</Icon>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Useful Links</h4>
              <div className="mt-4 mb-6">
                {userfulLink.map((item, ind) => (
                  <div
                    key={ind}
                    className={
                      "flex items-center py-2 cursor-pointer " + classes.link
                    }
                  >
                    <Icon>navigate_next</Icon>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Newsletter</h4>
              <p className="my-6">Sign Up for the latest news</p>
              <TextField
                className="mb-4"
                size="small"
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    paddingLeft: 12
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Icon fontSize="small">email</Icon>
                    </InputAdornment>
                  )
                }}
              />
              <Button className="w-full" variant="contained" color="primary">
                SUBSCRIBE
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Footer2;