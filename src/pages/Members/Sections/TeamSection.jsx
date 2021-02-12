import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// React icons
import { FaLinkedin, FaChalkboardTeacher } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

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
              members && members.map(({node: {acf: member}}) => (
                <GridItem xs={12} sm={12} md={4} key={member.image}>
                  <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={member.image} alt={`headshot of ${member.name}`} className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {member.name}
                      <br />
                      <a href={member.bio}>
                        <small className={classes.smallTitle}>
                          <Button
                            justIcon
                            color="transparent"
                            className={classes.marginSides}
                          >
                            <FaChalkboardTeacher/>
                          </Button>
                          Member Bio
                        </small>
                      </a>
                    </h4>
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
