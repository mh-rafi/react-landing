import React from "react";
import { Grid, Card, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  zIndex: 1,
  borderRadius: 8,
  textAlign: "center",
  transition: "all 400ms ease-in-out",
  border: `1px solid ${theme.palette.background.default}`,
  "& .title-holder": {
    position: "relative",
    padding: "5rem 1.5rem",
    transition: "opacity 400ms ease-in-out",
    zIndex: 1,
    "&:after": {
      content: '" "',
      display: "block",
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      background: theme.palette.primary.main,
      clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 70%)",
      WebkitClipPath: "polygon(0 0, 100% 30%, 100% 100%, 0 70%)",
      opacity: 0.23,
      zIndex: -1,
    },
  },
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[6],
    "& .title-holder": {
      color: theme.palette.primary.contrastText,
      "& .price": {
        color: `${theme.palette.primary.contrastText} !important`,
      },
      "&:after": {
        opacity: 1,
      },
    },
    "& .ticket-button": {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    "& [class^='MuiButtonBase-']": {
      background: theme.palette.primary.main + "!important",
      "& [class^='MuiSvgIcon-']": {
        fill: theme.palette.primary.contrastText + "!important",
      },
    },
  },
}));

const Pricing3 = () => {
  const planList = [
    {
      title: "1 day ticket",
      price: 10,
    },
    {
      title: "full day ticket",
      price: 20,
    },
    {
      title: "1 program ticket",
      price: 5,
    },
    {
      title: "couple ticket",
      price: 15,
    },
  ];

  return (
    <section className="section" id="pricing3">
      <div className="container">
        <div className="max-w-400 mb-14 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <div>
          <Grid container spacing={3}>
            {planList.map((plan, ind) => (
              <Grid key={ind} item lg={3} md={3} sm={6} xs={12}>
                <StyledCard elevation={2}>
                  <div className="title-holder my-4">
                    <h4 className="font-normal capitalize m-0">{plan.title}</h4>
                    <p className="m-0 text-inherit text-18">
                      $
                      <span className="price mx-1 text-44 font-normal text-primary">
                        {plan.price}
                      </span>
                      /day
                    </p>
                  </div>

                  <div className="px-6 pb-8">
                    <div className="mb-8">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor
                    </div>

                    <Button
                      className="ticket-button rounded px-6"
                      variant="outlined"
                      color="primary"
                    >
                      Buy Now
                    </Button>
                  </div>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default Pricing3;
