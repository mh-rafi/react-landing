import React from "react";
import { Grid, Icon, Button, Card, TextField } from "@material-ui/core";

const Marketing1 = () => {
  return (
    <section className="section" id="marketing1">
      <div className="container">
        <Grid container spacing={3} justify="space-between" alignItems="center">
          <Grid item md={9} sm={7} xs={12}>
            <h1 className="font-normal text-48 mt-0">For a Better Marketing</h1>
            <p className="mb-8 max-w-550">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem
            </p>

            <div className="mb-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center">
                  <Icon className="mr-4" color="primary">
                    done
                  </Icon>
                  <p className="my-2">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  </p>
                </div>
              ))}
            </div>
            <Button variant="text" color="primary">
              CLICK TO VIEW MORE <Icon>navigate_next</Icon>
            </Button>
          </Grid>
          <Grid item md={3} sm={5} xs={12}>
            <Card elevation={3} className="p-6 border-radius-8">
              <img
                src="/assets/images/illustrations/mobile-message.svg"
                alt="mobile-message"
                className="w-full mb-6"
              />
              <TextField
                className="mb-5"
                label="Your Name"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <Icon fontSize="small" className="text-muted mr-2">
                      person
                    </Icon>
                  ),
                }}
              />
              <TextField
                className="mb-5"
                label="Your Email"
                variant="outlined"
                size="small"
                fullWidth
                type="Email"
                InputProps={{
                  startAdornment: (
                    <Icon fontSize="small" className="text-muted mr-2">
                      mail
                    </Icon>
                  ),
                }}
              />
              <TextField
                className="mb-5"
                label="Your Password"
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                InputProps={{
                  startAdornment: (
                    <Icon fontSize="small" className="text-muted mr-2">
                      vpn_key
                    </Icon>
                  ),
                }}
              />
              <Button className="w-full text-white bg-primary">LOGIN</Button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Marketing1;
