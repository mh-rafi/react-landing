import React from "react";
import {
  Grid,
  Card,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";

const inputProps = {
  style: {
    borderRadius: 8,
  },
};

const Contact4 = () => {
  return (
    <section className="section section-bg-light-primary" id="contact4">
      <div className="container text-center">
        <h1 className="font-normal text-primary text-48 mb-4">
          Submit a Ticket
        </h1>
        <p className="max-w-400 m-auto mb-16">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore
        </p>

        <Grid container spacing={3} alignItems="center">
          <Grid item md={6} sm={5} xs={12}>
            <img
              src="/assets/images/contact-1.png"
              alt="contact"
              className="w-full max-w-400 mx-auto block"
            />
          </Grid>
          <Grid item md={6} sm={7} xs={12}>
            <Card className="p-8 border-radius-8" elevation={3}>
              <form>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      className="mb-4"
                      label="First Name"
                      placeholder="First Name"
                      size="small"
                      variant="outlined"
                      InputProps={inputProps}
                      fullWidth
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      className="mb-4"
                      label="Last Name"
                      placeholder="Last Name"
                      size="small"
                      variant="outlined"
                      InputProps={inputProps}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="mb-4"
                      label="Categories\Reasons"
                      placeholder="Categories\Reasons"
                      size="small"
                      variant="outlined"
                      InputProps={inputProps}
                      fullWidth
                      select
                    >
                      <MenuItem>Category 1</MenuItem>
                      <MenuItem>Category 2</MenuItem>
                      <MenuItem>Category 3</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      className="mb-4"
                      label="Subject"
                      placeholder="Subject"
                      size="small"
                      variant="outlined"
                      InputProps={inputProps}
                      fullWidth
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField
                      className="mb-4"
                      label="URL"
                      placeholder="URL"
                      size="small"
                      variant="outlined"
                      InputProps={inputProps}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      className="mb-0"
                      label="Message"
                      placeholder="Message"
                      size="small"
                      variant="outlined"
                      multiline
                      rows={8}
                      InputProps={inputProps}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      className="mb-0 w-full ml--3"
                      control={<Checkbox />}
                      label={
                        <p>
                          I accept the
                          <Link className="text-primary" to="/landing12">
                            Terms and Conditions
                          </Link>
                        </p>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      className="w-full"
                      variant="contained"
                      color="primary"
                    >
                      SUBMIT
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Contact4;
