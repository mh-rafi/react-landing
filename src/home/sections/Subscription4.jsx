import React from "react";
import { TextField, Button } from "@mui/material";

const Subscription4 = () => {
  return (
    <section className="section" id="subscription1">
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
                  padding: "2px 3px",
                  paddingLeft: "0.75rem",
                  background: "rgba(255,255,255,0.87)",
                },
                endAdornment: (
                  <Button className="bg-primary rounded text-13 text-white px-8 py-11px">
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

export default Subscription4;
