import React from "react";
import {
  Card,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(() => ({
  position: "relative",
  overflow: "visible",
  "&:before": {
    content: '" "',
    position: "absolute",
    height: 350,
    width: 350,
    left: -450,
    top: "75%",
    background: "rgba(var(--primary), 0.1)",
    transform: "translateY(-50%)",
    transform: "rotate(40deg)",
    transformOrigin: "top right",
    borderRadius: "15%",
    zIndex: -1,
  },
  "&:after": {
    content: '" "',
    position: "absolute",
    height: 350,
    width: 350,
    right: -450,
    top: "25%",
    background: "rgba(var(--primary), 0.1)",
    transform: "translateY(-50%)",
    transform: "rotate(-60deg)",
    transformOrigin: "top left",
    borderRadius: "15%",
    zIndex: -1,
  },
}));

const inputProps = {
  style: {
    borderRadius: 8,
  },
};

const Contact3 = () => {
  return (
    <section className="section" id="contact3">
      <div className="container text-center">
        <h1 className="mt-0 font-normal text-44 mx-auto">
          Preorder <span className="text-primary">Today</span>
        </h1>
        <p className="mb-16 max-w-400 mx-auto">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <StyledCard elevation={3} className="py-10 px-6 max-w-550 mx-auto">
          <form>
            <div className="flex">
              <TextField
                className="mb-6 mr-4"
                label="Your Name"
                placeholder="First Name"
                size="small"
                variant="outlined"
                fullWidth
                InputProps={inputProps}
              />
              <TextField
                className="mb-6"
                label="Your Email"
                placeholder="Your Email"
                size="small"
                variant="outlined"
                fullWidth
                InputProps={inputProps}
              />
            </div>
            <TextField
              className="mb-6 mr-4"
              label="Addresss"
              placeholder="Addresss"
              size="small"
              variant="outlined"
              fullWidth
              InputProps={inputProps}
            />
            <div className="flex">
              <TextField
                className="mb-6 mr-4"
                label="Quantity"
                placeholder="Quantity"
                size="small"
                variant="outlined"
                fullWidth
                InputProps={inputProps}
              />
              <TextField
                className="mb-6"
                label="Color"
                placeholder="Color"
                size="small"
                variant="outlined"
                fullWidth
                InputProps={inputProps}
              />
            </div>
            <TextField
              className="mb-6"
              label="Description"
              placeholder="Description"
              size="small"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              InputProps={inputProps}
            />
            <div className="text-left">
              <FormControlLabel
                className="mb-6"
                control={<Checkbox />}
                label={
                  <p className="m-0">
                    I Accept the
                    <span className="text-primary">Terms & Conditions</span>
                  </p>
                }
              />
            </div>
            <Button
              className="w-full border-radius-8"
              variant="contained"
              color="primary"
            >
              SUBMIT
            </Button>
          </form>
        </StyledCard>
      </div>
    </section>
  );
};

export default Contact3;
