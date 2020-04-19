import React from "react";
import { Button, Icon, IconButton } from "@material-ui/core";

const Subscription2 = () => {
  return (
    <section className="section bg-light-primary" id="Subscription2">
      <div className="container">
        <div className="text-center mx-auto">
          <h1 className="mt-0 font-normal text-44 text-primary">Get Started</h1>
          <p className="max-w-400 mx-auto mb-14">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </p>
          <div className="text-center">
            <Button
              variant="outlined"
              color="primary"
              className="mr-4 border-radius-8 px-6"
            >
              WATCH VIDEO
              <IconButton size="small" className="bg-primary ml-2">
                <Icon fontSize="sm" className="text-white text-13">
                  play_arrow
                </Icon>
              </IconButton>
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="border-radius-8 px-6"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription2;
