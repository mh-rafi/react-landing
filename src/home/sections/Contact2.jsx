import React from "react";
import { Grid, Card, TextField, Button } from "@mui/material";
import ContactMap1 from "./ContactMap1";

const Contact2 = () => {
  return (
    <section className="section" id="contact2">
      <div className="container text-center">
        <h1 className="mt-0 mb-16 font-normal text-44 mx-auto">
          Get in touch with us
        </h1>
        <Grid container spacing={3}>
          <Grid item md={8} sm={7} xs={12}>
            <ContactMap1
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div className="h-full" />}
              containerElement={<div className="h-full" />}
              mapElement={<div className="h-full" />}
            />
          </Grid>
          <Grid item md={4} sm={5} xs={12}>
            <Card className="py-10 px-6" elevation={3}>
              <form>
                <TextField
                  className="mb-4"
                  label="Your Name"
                  placeholder="First Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="mb-4"
                  label="Your Email"
                  placeholder="Your Email"
                  size="small"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  className="mb-4"
                  label="Message"
                  placeholder="Message"
                  size="small"
                  multiline
                  rows={8}
                  variant="outlined"
                  fullWidth
                />
                <Button className="w-full" variant="contained" color="primary">
                  SEND MESSAGE
                </Button>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact2;
