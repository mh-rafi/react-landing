import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const Container = styled("div")(() => ({
  backgroundImage: 'url("/assets/images/doted-bg-1.png")',
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
}));

const Intro11 = () => {
  return (
    <section className="section mt-16" id="intro11">
      <Container className="container">
        <div className="max-w-550 mx-auto text-center">
          <img
            src="/assets/images/laptop-4.png"
            alt="laptop"
            className="full"
          />
          <h1 className="font-normal m-0 text-48">Social Media Marketing</h1>
          <h1 className="font-normal m-0 text-48 text-primary">
            Is the best ever
          </h1>

          <p className="text-center mt-10 mb-14 max-w-400 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>

          <div className="flex justify-center">
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 hover-bg-primary"
            >
              GET STARTED
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="border-radius-8"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro11;
