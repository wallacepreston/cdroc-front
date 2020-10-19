import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

class TeamSection extends React.Component {
  render() {
    const { classes, members } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            {
              members.map(({node: {acf: member}}) => (
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={member.image} alt={`headshot image of ${member.name}`} className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {member.name}
                      <br />
                      <a href={member.bio}>
                        <small className={classes.smallTitle}>
                          {member.bio}
                        </small>
                      </a>
                    </h4>
                    <CardBody>
                      <p className={classes.description}>
                        This is where the bio for {member.name} would go. We could provide a short bio or just some interesting information about {member.name}.
                      </p>
                    </CardBody>
                    <a href={member.bio}>
                      <small className={classes.smallTitle}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                        >
                          <FaLinkedin/>
                        </Button>
                      </small>
                    </a>
                  </Card>
                </GridItem>
              ))
            }
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
