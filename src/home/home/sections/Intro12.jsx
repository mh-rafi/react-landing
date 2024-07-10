import React from "react";
import { makeStyles } from '@mui/styles';
import { TextField, IconButton, Icon } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0rem",
    backgroundImage: 'url("/assets/images/abstract-bg-1.png")',
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));

const Intro12 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="intro12">
      <div className={classes.introWrapper}>
        <div className="container">
          <div className="max-w-550 mx-auto text-center">
            <div className="flex justify-center items-center mb-14">
              <img src="./assets/images/react-logo.svg" alt="logo" />
              <h4 className="m-0 font-normal ml-4">Evelynn Customer Support</h4>
            </div>

            <h1 className="font-normal m-0 text-48 text-primary">
              How can we help you ?
            </h1>

            <p className="text-center mb-16 max-w-400 mx-auto">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore e
            </p>

            <div className="flex justify-center">
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search the help center"
                InputProps={{
                  style: {
                    borderRadius: "300px",
                    padding: "0.25rem",
                  },
                  endAdornment: (
                    <IconButton className="bg-primary p-2 ml-1px" size="small">
                      <Icon className="text-white">search</Icon>
                    </IconButton>
                  ),
                }}
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro12;
