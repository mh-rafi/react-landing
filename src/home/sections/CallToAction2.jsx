import React from "react";
import { TextField, Button, Icon } from "@mui/material";

const CallToAction2 = () => {
  return (
    <section className="section section-cta2 bg-light-gray" id="cta2">
      <div className="container text-center">
        <div className="max-w-770 mx-auto">
          <h2 className="mb-8">Subscribe & Request a demo</h2>
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
                  className="bg-primary rounded text-13 text-white px-7 py-11px"
                  sx={{ position: "absolute", right: 3, zIndex: 2 }}
                >
                  <Icon fontSize="small">flight_takeoff</Icon>
                  <span className="ml-2">SUBSCRIBE</span>
                </Button>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
