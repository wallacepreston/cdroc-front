import React from "react";
import MembersOnly from "./MembersOnly/MembersOnly";

export default ({data}) => (
  <MembersOnly data={data}/>
);

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "members-only" }) {
      title
      excerpt
      content
    }
    allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "Member"}}}}) {
      edges {
        node {
          slug
          wordpress_id
          acf {
            bio
            image
            name
            affiliations
            title
            email
            member_passcode
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