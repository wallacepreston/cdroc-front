import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout.jsx";

const Page = ({data}) => {
  return <>
    <Layout metaTitle={`${data.wordpressPage.title} - Corporate Directors Roundtable of Orange County`}>
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