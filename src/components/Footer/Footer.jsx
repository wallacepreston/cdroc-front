/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import { Link, StaticQuery, graphql } from 'gatsby';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return <StaticQuery
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
    render={data => (<footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem 
              className={classes.inlineBlock}
            >
              <Link
                className={classes.block}
                to={`/`}
              >
                Home
              </Link>
            </ListItem>
            {
              data.allWordpressPage.edges.map(edge => (
                <ListItem 
                  className={classes.inlineBlock}
                  key={edge.node.slug}
                >
                  <Link
                    className={classes.block}
                    to={`/${edge.node.slug}`}
                  >
                    {edge.node.title}
                  </Link>
                </ListItem>
              ))
            }
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} CDROC, made by{" "}
          <a
            href="https://prestonwallace.com"
            className={aClasses}
            target="_blank"
          >
            Preston
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>)}
  />
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
