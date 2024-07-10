import React from "react";
import { Grid, Icon, Button, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Story1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className="section bg-light-primary">
      <div className="container">
        <Grid container spacing={isMobile ? 4 : 10} justify="space-between">
          <Grid item sm={6} xs={12}>
            <img
              src="/assets/images/graduate-1.jpg"
              alt="graduate"
              className="max-h-500 max-w-full border-radius-12"
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <h1 className="mt-0 text-48 font-normal mb-8 inline-block">
              Our Story
            </h1>
            <p className="my-8 max-w-400">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est.
            </p>
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
            <Button
              className="mt-16 px-7 bg-primary text-white rounded"
              variant="text"
              color="primary"
            >
              GET ADMITTED
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Story1;
