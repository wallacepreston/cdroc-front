/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link, StaticQuery, graphql } from 'gatsby'

function HeaderLinks({ ...props }) {
  return (
    <>
      <li>
        <Link
          className="cdroc-dropdown"
          to="/"
        >
          Home
        </Link>
      </li>
      <StaticQuery
        query={graphql`
          query {
            allWordpressPage(sort: { fields: wordpress_id }, limit: 7) {
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
          console.log('page', edges);
          return edges.sort((a, b) => a.node.menu_order > b.node.menu_order ? 1 : -1).map(edge => (
            <li 
              key={edge.node.slug}
            >
              <Link
                className="cdroc-dropdown"
                to={`/${edge.node.slug}`}
              >
                {edge.node.title}
              </Link>
            </li>
          )
        )}}
      />
    </>
  );
}

export default HeaderLinks;
