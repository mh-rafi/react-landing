import React from "react";
import { Grid, Card, Icon, IconButton, Button } from "@mui/material";
import BookIcon from "../common/icons/BookIocn";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
    position: "relative",
    borderRadius: 12,
    border: "1px solid rgba(0,0,0,0.17)",
    transition: "border 250ms ease-in-out",
    "&:hover": {
      // margin: "-1px !important",
      border: "1px solid rgba(var(--primary), 1)",
    },
  },
  nextButton: {
    position: "absolute",
    right: 0,
    top: 0,
    color: "white",
  },
}));

const CourseList1 = () => {
  const classes = useStyles();

  return (
    <section className="section" id="courseList1">
      <div className="container">
        <div className="mb-8 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44">Our Courses</h1>
          <p className="max-w-400 mx-auto mb-16">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>

          <div className="mb-16">
            <Grid container spacing={4}>
              {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, ind) => (
                <Grid key={ind} item md={4} sm={6} xs={12}>
                  <Card elevation={3} className={classes.card}>
                    <img
                      src={`/assets/images/study-${item}.jpg`}
                      alt="study"
                      className="h-352 min-w-full block"
                    />
                    <IconButton className={classes.nextButton}>
                      <Icon>navigate_next</Icon>
                    </IconButton>

                    <div className="text-left p-4">
                      <p className="mt-0 mb-4 font-semibold text-primary">
                        Advance Diagnostic Research
                      </p>
                      <div className="flex flex-wrap mb-4 justify-start mb-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Icon key={i} color="primary" className="mr-1">
                            star
                          </Icon>
                        ))}
                      </div>

                      <div className="flex flex-wrap justify-between items-center">
                        <div className="flex items-center">
                          <Icon className="text-16 text-muted">school</Icon>
                          <small className="text-muted ml-2 mr-4">
                            30 Students
                          </small>

                          <BookIcon className="text-16 text-muted" />
                          <small className="text-muted ml-2 mr-4">
                            3 Lessons
                          </small>
                        </div>
                        <p className="m-0 text-primary text-18">$220</p>
                      </div>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          <Button className="bg-primary rounded text-white px-7">
            SEE MORE COURSES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseList1;
