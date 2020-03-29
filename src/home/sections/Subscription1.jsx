import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  input: {
    border: `1px solid ${palette.text.hint}`,
    outline: "none",
    paddingLeft: "1.25rem",
    paddingRight: 145
  },
  button: {
    position: "absolute",
    right: 3,
    zIndex: 2
  }
}));

const Subscription1 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="subscription1">
      <div className="container">
        <div className="max-w-550 mx-auto text-center">
          <h1 className="text-48 mt-0 font-normal">Get Notified Instantly</h1>
          <p className="mb-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
          <div className="flex items-center relative">
            <input
              variant="outlined"
              className={clsx("rounded h-40 flex-grow text-18", classes.input)}
            />
            <Button
              className={clsx(
                "bg-primary rounded text-white px-8 py-2",
                classes.button
              )}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription1;
