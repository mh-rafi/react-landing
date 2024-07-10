import React from "react";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";
import { Card, TextField, Fab, Icon } from "@mui/material";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  section: {
    background: "rgba(var(--primary),0.05)",
  },
}));

const Booking1 = () => {
  const classes = useStyles();

  return (
    <section className={clsx("section", classes.section)} id="booking1">
      <div className="container">
        <Card elevation={0} className="p-12 border-radius-8">
          <h4 className="font-normal m-0 mb-8">Book Now !</h4>

          <div className="flex flex-wrap items-center ml--2">
            <TextField variant="outlined" label="Check" className="m-2" />
            <TextField variant="outlined" label="Check" className="m-2" />
            <TextField variant="outlined" label="Check out" className="m-2" />
            <TextField variant="outlined" label="Children" className="m-2" />
            <Fab variant="round" color="primary" size="medium" className="m-2">
              <Icon>navigate_next</Icon>
            </Fab>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Booking1;
