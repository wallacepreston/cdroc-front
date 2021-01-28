import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout.jsx";

{/* data.wordpressPage.title */}
{/* <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} /> */}
const Page = ({data}) => {
  return <>
    <Layout>
      <div className="cdroc-row">
        <div>
          <h1>{data.wordpressPage.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
        </div>
      </div>
    </Layout>
  </>
}

export default Page;

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`