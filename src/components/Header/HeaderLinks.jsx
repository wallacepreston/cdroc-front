/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, StaticQuery, graphql } from 'gatsby'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={({allWordpressPage: {edges}}) => {
        return (
          <List className={classes.list}>
            {
              edges.map(edge => (
                <ListItem 
                  className={classes.listItem}
                  key={edge.node.slug}
                >
                  <Link
                    className={classes.navLink}
                    to={`/${edge.node.slug}`}
                  >
                    {edge.node.title}
                  </Link>
                </ListItem>
              ))
            }
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-twitter"
                title="Follow us on twitter"
                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  className={classes.navLink}
                >
                  <FaTwitter/>
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-facebook"
                title="Follow us on facebook"
                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  className={classes.navLink}
                >
                  <FaFacebook/>
                </Button>
              </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Tooltip
                id="instagram-tooltip"
                title="Follow us on instagram"
                placement={typeof window !== 'undefined' && window.innerWidth > 959 ? "top" : "left"}
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="transparent"
                  className={classes.navLink}
                >
                  <FaInstagram/>
                </Button>
              </Tooltip>
            </ListItem>
          </List>
      )}}
    />
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
