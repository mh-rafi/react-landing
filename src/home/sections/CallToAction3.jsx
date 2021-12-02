import React from "react";
import { styled } from "@mui/system";
import { Fab, Icon } from "@mui/material";
import AppleIcon from "../common/icons/TwitterIcon";

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  "&::after": {
    content: '" "',
    display: "block",
    position: "absolute",
    height: "100%",
    width: "100vw",
    top: 0,
    left: "calc(-100vw + 50% - 300px)",
    background: theme.palette.primary.main,
    opacity: 0.1,
    borderTopRightRadius: 300,
    borderBottomRightRadius: 300,
    zIndex: -1,
  },
  "&::before": {
    content: '" "',
    display: "block",
    position: "absolute",
    height: "100%",
    width: "100vw",
    top: 0,
    right: "calc(-100vw + 50% - 300px)",
    background: theme.palette.primary.main,
    opacity: 0.1,
    borderTopLeftRadius: 300,
    borderBottomLeftRadius: 300,
    zIndex: -1,
  },
}));

const CallToAction3 = () => {
  return (
    <section className="section">
      <div className="container">
        <Wrapper className="text-center mx-auto">
          <h1 className="mt-0 mb-7 font-normal text-44">Download Now !</h1>
          <p className="max-w-400 mx-auto mb-8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
          <div className="flex justify-center flex-wrap">
            <Fab className="mr-6 px-6" variant="extended" color="primary">
              <Icon fontSize="small" className="mr-3">
                android
              </Icon>
              Play Store
            </Fab>
            <Fab className="px-6" variant="extended" color="primary">
              <AppleIcon fontSize="small" className="mr-3" />
              App Store
            </Fab>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default CallToAction3;
