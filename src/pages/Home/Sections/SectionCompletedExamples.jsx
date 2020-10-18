import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import completedStyle from "assets/jss/material-kit-react/views/componentsSections/completedStyle.jsx";

class SectionCompletedExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>The Sky is the Limit</h2>
              <h4>
                The CDROC encourages young people to embark on a profession in accounting through it's partnership with the UCI Paul Merage School of Business. The Corporate Directors Roundtable of Orange County Scholarship is awarded annually to a graduate student enrolled in the UCI Paul Merage School of Business Master of Professional (MPAc) program.  Additionally, the CDROC offers a one-to-one mentoring program for for students enrolled in the same program.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(completedStyle)(SectionCompletedExamples);
