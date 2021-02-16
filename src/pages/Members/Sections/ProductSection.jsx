import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import MultilineChart from "@material-ui/icons/MultilineChart";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Chat from "@material-ui/icons/Chat";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    return (
      <div>
            <h2>Our Members</h2>
            <h5>
              The Corporate Directors Roundtable of Orange County’s objective is to enhance the performance of its member Directors in their business, legal and ethical responsibilities.  This objective is addressed through interactive and candid discussions among its members, and with outside experts, on challenges, emerging trends and leading practices.  Eligibility for membership is by invitation only, and is based on skills, experience, and potential contributions of candidates.  
            </h5>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="A Focus on Accounting"
                description="The CDROC encourages young people to embark on a profession in accounting through it's partnership with the UCI Paul Merage School of Business."
                icon={MultilineChart}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Members"
                description="Eligibility for membership is by invitation only, and is based on skills, experience, and potential contributions of candidates."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Encouraging Discussion"
                description="Enhancement of members is achieved through interactive and candid discussions among its members, and with outside experts, on challenges, emerging trends and leading practices."
                icon={Chat}
                iconColor="primary"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
