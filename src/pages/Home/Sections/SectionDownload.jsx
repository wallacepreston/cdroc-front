/*eslint-disable*/
import React from "react";
import { Link } from 'gatsby'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// React icons
import { FaTwitter, FaFacebookSquare, FaGooglePlusG, FaGithub } from 'react-icons/fa';
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";

class SectionDownload extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2>Want to learn more?</h2>
              <h4>
                Learn about the CDROC, about our history, mission, and what wee stand for.
              </h4>
            </GridItem>
            <GridItem xs={12} sm={8} md={6}>
              <Link
                to={'/about'}
              >
                <Button
                  color="rose"
                  size="lg"
                >
                    Learn More
                </Button>
              </Link>
              
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionDownload);
