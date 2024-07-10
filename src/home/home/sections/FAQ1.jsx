import React, { useState } from "react";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { makeStyles } from '@mui/styles';
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  bgLightGray: {
    background: "rgba(0,0,0,0.05)",
  },
}));

const FAQ1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const classes = useStyles();

  const categoryList = [
    "About Our Product",
    "License",
    "Terms of Use",
    "Author Fee",
    "Support",
    "Privacy",
    "Our Advisor",
    "NDA Terms",
    "Support Policy",
  ];

  return (
    <section className="section" id="faq1">
      <div className="container">
        <div className="mb-16 text-center mx-auto">
          <h1 className="mt-0 font-normal text-44 text-primary">FAQs</h1>
          <p className="max-w-400 mx-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <Grid container spacing={3}>
          <Grid item md={3} sm={4} xs={12}>
            <div>
              {categoryList.map((item, ind) => (
                <div
                  key={ind}
                  className={clsx({
                    "px-4 py-2 mb-3 text-center border-radius-8 hover-bg-primary cursor-pointer": true,
                    "bg-primary text-white": tabIndex === ind,
                    [classes.bgLightGray]: true,
                  })}
                  onClick={() => setTabIndex(ind)}
                >
                  {item}
                </div>
              ))}
            </div>
          </Grid>
          <Grid item md={9} sm={8} xs={12}>
            {tabIndex === 0 && (
              <div>
                {[1, 2, 3, 4, 5].map((item, ind) => (
                  <ExpansionPanel
                    key={ind}
                    className={clsx({
                      "border-radius-4 mb-6": true,
                      "elevation-z3": expandedIndex === ind,
                      "box-shadow-none": expandedIndex !== ind,
                    })}
                    onChange={(e, expanded) =>
                      expanded ? setExpandedIndex(ind) : setExpandedIndex(null)
                    }
                    expanded={expandedIndex === ind}
                  >
                    <ExpansionPanelSummary
                      className={clsx({
                        "hover-bg-primary": true,
                        [classes.bgLightGray]: true,
                        "bg-primary text-white": expandedIndex === ind,
                      })}
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod ?
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren
                        <br />
                        sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd
                      </p>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default FAQ1;
