import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  input: {
    border: `1px solid ${palette.text.hint}`,
    outline: "none",
    paddingLeft: "1.25rem",
    paddingRight: 145,
  },
  button: {
    position: "absolute",
    right: 3,
    zIndex: 2,
  },
}));

const Subscription3 = () => {
  const classes = useStyles();

  return (
    <section className="section bg-light-primary" id="subscription1">
      <div className="container">
        <div className="max-w-770 mx-auto text-center">
          <h1 className="text-44 mt-0 font-normal mb-6">
            Sign up for our newsletter
          </h1>
          <p className="mb-16 max-w-400 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua
          </p>
          <div className="flex items-center relative">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your Email:"
              fullWidth
              InputProps={{
                style: {
                  borderRadius: 300,
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: "0.75rem",
                  background: "rgba(255,255,255,0.87)",
                },
                endAdornment: (
                  <Button
                    className={clsx(
                      "bg-primary rounded text-13 text-white px-8 py-11px",
                      classes.button
                    )}
                  >
                    SUBSCRIBE
                  </Button>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription3;
