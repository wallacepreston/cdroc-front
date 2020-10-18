import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Navbar = () => (
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
    render={data => (
      <>
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={''} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
        {data.allWordpressPage.edges.map(edge => (
          <Link
            className="navbar-item"
            to={edge.node.slug}
            key={edge.node.slug}
          >
            {edge.node.title}
          </Link>
        ))}

      </>
    )}
  />
)

export default Navbar
