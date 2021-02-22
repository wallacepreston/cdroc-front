import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// React icons
import { FaChalkboardTeacher } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

const TeamSection = ({ classes, members }) =>  {
  // add lastName prop
  members = members && members.map(elem => {
    const {node: {acf: member}} = elem;
    const {name} = member;
    const fullName = name.split(' ');
    member.lastName = fullName[fullName.length - 1];
    return elem;
  })
  // sort members alphabetically by last name
  const sortedMembers = members ? members.sort((a, b) => {
    const {node: {acf: {lastName: lastNameA}}} = a;
    const {node: {acf: {lastName: lastNameB}}} = b;
    return lastNameA > lastNameB ? 1 : -1;
  }) : [];
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
            sortedMembers && sortedMembers.map(({node: {acf: member}}) => (
              <GridItem xs={12} sm={12} md={4} key={member.name}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={member.image} alt={`headshot of ${member.name}`} className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {member.name}
                    <br />
                  </h4>
                  <div dangerouslySetInnerHTML={{ __html: member.affiliations }} />
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
                </Card>
              </GridItem>
            ))
          }
        </GridContainer>
      </div>
    </div>
  );
}

export default withStyles(teamStyle)(TeamSection);
