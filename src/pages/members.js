import React from "react";
import Members from "./Members/Members";
import { graphql } from "gatsby"

export default ({data}) => {
  return (
    <Members data={data}/>
  );
}


export const pageQuery = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Member"}}}}) {
      edges {
        node {
          slug
          wordpress_id
          acf {
            bio
            image
            name
          }
          type
          categories {
            name
          }
        }
      }
    }
  }
`