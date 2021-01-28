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
  
  return <Layout>
    <div className="cdroc-row">
      <div>
        <ProductSection />
        <TeamSection members={data && data.allWordpressPost.edges}/>
      </div>
    </div>
  </Layout>
}

export default Members;
