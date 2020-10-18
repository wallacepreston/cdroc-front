import React from "react";
import { Link } from 'gatsby'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// React icons
import { FaTwitter, FaFacebook, FaGooglePlusG } from 'react-icons/fa';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

class SectionLogin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem>
              <Card>
                <form className={classes.form}>
                  
                  <p className={classes.divider}>Mission</p>
                  <CardBody>
                  Located in Southern California by and for Board Directors, the Corporate Directors Roundtable of Orange County’s objective is to enhance the performance of its member Directors in their business, legal and ethical responsibilities.  This objective is addressed through interactive and candid discussions among its members, and with outside experts, on challenges, emerging trends and leading practices.  Eligibility for membership is by invitation only, and is based on skills, experience, and potential contributions of candidates.  


                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Link
                      to={'/about'}
                    >
                      <Button simple color="primary" size="lg">
                        Learn More                      
                      </Button>
                    </Link>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLogin);
