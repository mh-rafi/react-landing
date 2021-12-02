import React from "react";
import { Box } from "@mui/system";

const Clients1 = () => {
  return (
    <Box
      sx={{ background: "rgba(var(--primary),0.15)" }}
      className="section section-bg-light-primary"
      id="clients1"
    >
      <div className="container text-center">
        <h1 className="font-normal text-primary text-48 mb-4">
          Our Trusted Clients
        </h1>
        <p className="max-w-400 m-auto mb-8">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et
        </p>

        <div className="flex flex-wrap justify-center items-center">
          <img
            src="/assets/images/amazon-2.png"
            alt=""
            className="full mx-8 mt-8"
          />
          <img
            src="/assets/images/asus-6630.png"
            alt=""
            className="full mx-8 mt-8"
          />
          <img
            src="/assets/images/spotify-1.png"
            alt=""
            className="full mx-8 mt-8"
          />
          <img
            src="/assets/images/google-1-1.png"
            alt=""
            className="full mx-8 mt-8"
          />
          <img
            src="/assets/images/TESLA.png"
            alt=""
            className="full mx-8 mt-8"
          />
        </div>
      </div>
    </Box>
  );
};

export default Clients1;
