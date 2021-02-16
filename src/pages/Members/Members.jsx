import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";

import Layout from "components/Layout.jsx";


const Members = ({ classes, data, myName, ...rest }) => {
  
  return <>
    <Layout metaTitle="Members - Corporate Directors Roundtable of Orange County">
      <div className="cdroc-row cdroc-col">
        <div>
          <h2>Our Members</h2>
          <h5>
            The Corporate Directors Roundtable of Orange County’s objective is to enhance the performance of its member Directors in their business, legal and ethical responsibilities.  This objective is addressed through interactive and candid discussions among its members, and with outside experts, on challenges, emerging trends and leading practices.  Eligibility for membership is by invitation only, and is based on skills, experience, and potential contributions of candidates.  
          </h5>
          <TeamSection members={data && data.allWordpressPost.edges}/>
        </div>
      </div>
    </Layout>
  </>
}

export default Members;
