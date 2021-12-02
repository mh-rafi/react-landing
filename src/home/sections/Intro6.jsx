import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ContainerHolder = styled("div")(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%,${theme.palette.primary.light} 100%)`,
  "& .container": {
    paddingTop: "6rem !important",
    paddingBottom: "6rem !important",
  },
}));

const Intro6 = () => {
  return (
    <section className="section" id="intro6">
      <ContainerHolder>
        <div className="container flex-column justify-center items-center text-white">
          <h1 className="font-normal text-center text-48 mb-4 mt-0">
            Evelynn Enterprise
          </h1>
          <h2 className="font-normal">Start in style</h2>
          <p className="max-w-550 text-center text-inherit my-12">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem
          </p>
          <Button variant="contained" color="primary" className="rounded px-6">
            LEARN MORE
          </Button>
        </div>
      </ContainerHolder>
    </section>
  );
};

export default Intro6;
