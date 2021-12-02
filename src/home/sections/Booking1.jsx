import React from "react";
import { Box } from "@mui/system";
import { Card, TextField, Fab, Icon } from "@mui/material";

const Booking1 = () => {
  return (
    <Box
      id="booking1"
      className="section"
      sx={{ background: "rgba(var(--primary),0.05)" }}
    >
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
    </Box>
  );
};

export default Booking1;
