import React from "react";
import { makeStyles } from '@mui/styles';
import {
  Icon,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { darken } from "@mui/material";
import FacebookIcon from "../common/icons/FacebookIcon";
import TwitterIcon from "../common/icons/TwitterIcon";
import InstagramIcon from "../common/icons/InstagramIcon";
import LinkedinIcon from "../common/icons/LinkedinIcon";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "#011C3A",
    color: palette.primary.contrastText,
  },
  iconWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 4,
    marginRight: 12,
    border: `1px solid ${palette.primary.contrastText}`,
    cursor: "pointer",
  },
  link: {
    borderRadius: 4,
    "&:hover": {
      background: darken("#011C3A", 0.2),
    },
  },
}));

const companyOption = ["About Us", "Services", "Team", "Pricing", "Project"];

const userfulLink = [
  "Terms of Services",
  "Privacy Policy",
  "Documentation",
  "Changelog",
  "Components",
];

const Footer2 = () => {
  const classes = useStyles();

  return (
    <section className={`section ${classes.section}`} id="contact4">
      <div className="container">
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">About Us</h4>
              <p className="my-6 max-w-200 text-inherit">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis perferendis rem, aut aliquam neque nam? dolor sit amet,
                consectetur adipisicing elit consectetur adipisicing.
              </p>
              <div className="flex flex-wrap">
                <div className={classes.iconWrapper}>
                  <FacebookIcon className="text-13" fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <TwitterIcon className="text-13" fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <InstagramIcon className="text-13" fontSize="small" />
                </div>
                <div className={classes.iconWrapper}>
                  <LinkedinIcon className="text-13" fontSize="small" />
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Company</h4>
              <div className="mt-4 mb-6 ml--4">
                {companyOption.map((item, ind) => (
                  <div
                    key={ind}
                    className={clsx(
                      "flex items-center py-2 cursor-pointer px-4 w-full",
                      classes.link
                    )}
                  >
                    <Icon>navigate_next</Icon>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Useful Links</h4>
              <div className="mt-4 mb-6 ml--4">
                {userfulLink.map((item, ind) => (
                  <div
                    key={ind}
                    className={clsx(
                      "flex items-center py-2 cursor-pointer px-4 w-full",
                      classes.link
                    )}
                  >
                    <Icon>navigate_next</Icon>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <div className="footer1__about">
              <h4 className="text-24 font-normal m-0">Newsletter</h4>
              <p className="my-6 text-inherit">Sign Up for the latest news</p>
              <TextField
                className="mb-4"
                size="small"
                placeholder="Your Email"
                variant="outlined"
                fullWidth
                inputProps={{
                  style: {
                    paddingLeft: 8,
                    color: "#fff",
                  },
                }}
                InputProps={{
                  style: {
                    paddingLeft: 4,
                  },
                  startAdornment: (
                    <InputAdornment position="end">
                      <Icon fontSize="small" className="text-white">
                        email
                      </Icon>
                    </InputAdornment>
                  ),
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
