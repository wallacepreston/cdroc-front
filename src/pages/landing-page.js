import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import { graphql } from "gatsby"

export default ({data}) => {
  return (
    <LandingPage data={data}/>
  );
}


export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
        }
      }
    }
  }
`