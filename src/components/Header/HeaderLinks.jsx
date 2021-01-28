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
          return edges.map(edge => (
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
